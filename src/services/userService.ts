import type { User } from '../types';

const ORGANIZATIONS = ['Lendsqr', 'Lendstar', 'Irorun', 'Fairmoney', 'Kuda', 'Carbon'];
const FIRST_NAMES = ['Grace', 'Tosin', 'Debby', 'Adedeji', 'Chidi', 'Emeka', 'Fatima', 'Amara', 'Ngozi', 'Kemi', 'Yemi', 'Bola', 'Sola', 'Tunde', 'Wale', 'Seun', 'Taiwo', 'Kehinde', 'Funke', 'Shade'];
const LAST_NAMES = ['Effiom', 'Ogana', 'Adesanya', 'Okonkwo', 'Adeyemi', 'Babatunde', 'Okafor', 'Adeleke', 'Nwosu', 'Eze', 'Ibrahim', 'Musa', 'Aliyu', 'Johnson', 'Williams'];
const STATUSES: User['status'][] = ['Active', 'Inactive', 'Pending', 'Blacklisted'];
const BANKS = ['Providus Bank', 'Access Bank', 'GTBank', 'First Bank', 'Zenith Bank', 'UBA', 'Stanbic IBTC'];
const SECTORS = ['FinTech', 'Banking', 'Education', 'Healthcare', 'Technology', 'Agriculture', 'Manufacturing'];
const RESIDENCES = ["Parent's Apartment", 'Own Apartment', 'Company Provided', 'Shared Apartment'];
const EDUCATION = ['B.Sc', 'M.Sc', 'OND', 'HND', 'Ph.D', 'SSCE'];
const EMPLOYMENT_STATUSES = ['Employed', 'Self-Employed', 'Unemployed', 'Student'];
const RELATIONSHIPS = ['Sister', 'Brother', 'Parent', 'Spouse', 'Friend', 'Colleague'];

function seededRandom(seed: number): () => number {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) & 0xffffffff;
    return (s >>> 0) / 0xffffffff;
  };
}

function pickRandom<T>(arr: T[], rand: () => number): T {
  return arr[Math.floor(rand() * arr.length)];
}

function generateUser(index: number): User {
  const rand = seededRandom(index * 31337 + 42);
  const firstName = pickRandom(FIRST_NAMES, rand);
  const lastName = pickRandom(LAST_NAMES, rand);
  const org = pickRandom(ORGANIZATIONS, rand);
  const orgSlug = org.toLowerCase().replace(/\s/g, '');
  const status = pickRandom(STATUSES, rand);
  const bank = pickRandom(BANKS, rand);
  const year = 2019 + Math.floor(rand() * 4);
  const month = String(Math.floor(rand() * 12) + 1).padStart(2, '0');
  const day = String(Math.floor(rand() * 28) + 1).padStart(2, '0');
  const hour = String(Math.floor(rand() * 12) + 1).padStart(2, '0');
  const minute = String(Math.floor(rand() * 60)).padStart(2, '0');
  const ampm = rand() > 0.5 ? 'AM' : 'PM';
  const phoneBase = String(Math.floor(rand() * 9000000000) + 1000000000);
  const tier = (Math.floor(rand() * 3) + 1) as 1 | 2 | 3;
  const balance = Math.floor(rand() * 500000) + 5000;
  const acctNum = String(Math.floor(rand() * 9000000000) + 1000000000);
  const bvn = String(Math.floor(rand() * 90000000000) + 10000000000);
  const income1 = (Math.floor(rand() * 10) + 1) * 50000;
  const income2 = income1 + 200000;

  return {
    id: `LSQ${String(index).padStart(8, '0')}`,
    organization: org,
    username: `${firstName} ${lastName}`,
    email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${orgSlug}.com`,
    phoneNumber: `0${phoneBase}`,
    dateJoined: `${['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][parseInt(month)-1]} ${parseInt(day)}, ${year} ${hour}:${minute} ${ampm}`,
    status,
    tier,
    accountBalance: balance,
    bankName: bank,
    accountNumber: acctNum,
    bvn,
    gender: rand() > 0.5 ? 'Female' : 'Male',
    maritalStatus: pickRandom(['Single', 'Married', 'Divorced'], rand),
    children: pickRandom(['None', '1', '2', '3', '4+'], rand),
    typeOfResidence: pickRandom(RESIDENCES, rand),
    levelOfEducation: pickRandom(EDUCATION, rand),
    employmentStatus: pickRandom(EMPLOYMENT_STATUSES, rand),
    sectorOfEmployment: pickRandom(SECTORS, rand),
    durationOfEmployment: `${Math.floor(rand() * 10) + 1} years`,
    officeEmail: `${firstName.toLowerCase()}@${orgSlug}.com`,
    monthlyIncome: `₦${income1.toLocaleString()}.00 - ₦${income2.toLocaleString()}.00`,
    loanRepayment: Math.floor(rand() * 50000) + 10000,
    twitter: `@${firstName.toLowerCase()}_${lastName.toLowerCase()}`,
    facebook: `${firstName} ${lastName}`,
    instagram: `@${firstName.toLowerCase()}_${lastName.toLowerCase()}`,
    guarantors: [
      {
        fullName: `${pickRandom(FIRST_NAMES, rand)} ${pickRandom(LAST_NAMES, rand)}`,
        phoneNumber: `0${String(Math.floor(rand() * 9000000000) + 1000000000)}`,
        email: `guarantor${index}a@gmail.com`,
        relationship: pickRandom(RELATIONSHIPS, rand),
      },
      {
        fullName: `${pickRandom(FIRST_NAMES, rand)} ${pickRandom(LAST_NAMES, rand)}`,
        phoneNumber: `0${String(Math.floor(rand() * 9000000000) + 1000000000)}`,
        email: `guarantor${index}b@gmail.com`,
        relationship: pickRandom(RELATIONSHIPS, rand),
      },
    ],
  };
}

const ALL_USERS: User[] = Array.from({ length: 500 }, (_, i) => generateUser(i + 1));

export interface FetchUsersParams {
  page: number;
  pageSize: number;
  filters?: {
    organization?: string;
    username?: string;
    email?: string;
    date?: string;
    phoneNumber?: string;
    status?: string;
  };
}

export interface FetchUsersResult {
  users: User[];
  total: number;
}

export async function fetchUsers(params: FetchUsersParams): Promise<FetchUsersResult> {
  // Timeout to simulate real network delay for API call.
  await new Promise((r) => setTimeout(r, 300));
  let filtered = ALL_USERS;
  const { filters } = params;
  if (filters) {
    if (filters.organization) {
      filtered = filtered.filter((u) =>
        u.organization.toLowerCase().includes(filters.organization!.toLowerCase())
      );
    }
    if (filters.username) {
      filtered = filtered.filter((u) =>
        u.username.toLowerCase().includes(filters.username!.toLowerCase())
      );
    }
    if (filters.email) {
      filtered = filtered.filter((u) =>
        u.email.toLowerCase().includes(filters.email!.toLowerCase())
      );
    }
    if (filters.phoneNumber) {
      filtered = filtered.filter((u) =>
        u.phoneNumber.includes(filters.phoneNumber!)
      );
    }
    if (filters.status) {
      filtered = filtered.filter((u) =>
        u.status.toLowerCase() === filters.status!.toLowerCase()
      );
    }
  }
  // The total number of users after filtering
  const total = filtered.length;
  const start = (params.page - 1) * params.pageSize;
  const end = start + params.pageSize;
  return { users: filtered.slice(start, end), total };
}

export async function fetchUserById(id: string): Promise<User | null> {
  // Added delay to simulate real network delay when API is called.
  await new Promise((r) => setTimeout(r, 200));
  return ALL_USERS.find((u) => u.id === id) ?? null;
}

export function getOrganizations(): string[] {
  return ORGANIZATIONS;
}

export function getUserStats() {
  // Get all active users
  const active = ALL_USERS.filter((u) => u.status === 'Active').length;
  // Generated a number of our users with loans using 80% of the entire users
  const withLoans = Math.floor(ALL_USERS.length * 0.8);
  // Generated a number of our users with savings using 60% of the entire users
  const withSavings = Math.floor(ALL_USERS.length * 0.6);
  return {
    total: ALL_USERS.length,
    active,
    withLoans,
    withSavings,
  };
}
