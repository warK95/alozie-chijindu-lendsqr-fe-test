import { describe, it, expect, beforeAll } from 'vitest';
import {
  fetchUsers,
  fetchUserById,
  getUserStats,
  getOrganizations,
} from '../services/userService';
import type { FetchUsersParams } from '../services/userService';

// ─── getOrganizations ─────────────────────────────────────────────────────────

describe('getOrganizations', () => {
  // Positive scenarios testing
  it('returns a non-empty array', () => {
    expect(getOrganizations().length).toBeGreaterThan(0);
  });

  it('returns only string values', () => {
    getOrganizations().forEach((org) => expect(typeof org).toBe('string'));
  });

  it('contains well-known organisations used for data generation', () => {
    const orgs = getOrganizations();
    expect(orgs).toContain('Lendsqr');
    expect(orgs).toContain('Kuda');
  });

  // Negative scenarios testing
  it('does not return null or undefined entries', () => {
    getOrganizations().forEach((org) => {
      expect(org).not.toBeNull();
      expect(org).not.toBeUndefined();
    });
  });

  it('does not contain empty strings', () => {
    getOrganizations().forEach((org) => expect(org.trim().length).toBeGreaterThan(0));
  });
});

// ─── getUserStats ─────────────────────────────────────────────────────────────

describe('getUserStats', () => {
  let stats: ReturnType<typeof getUserStats>;

  beforeAll(() => {
    stats = getUserStats();
  });

  // Positive scenarios testing
  it('returns exactly 500 total users', () => {
    expect(stats.total).toBe(500);
  });

  it('active count is a positive integer less than or equal to total', () => {
    expect(stats.active).toBeGreaterThan(0);
    expect(stats.active).toBeLessThanOrEqual(stats.total);
  });

  it('withLoans is 80 % of total (400)', () => {
    expect(stats.withLoans).toBe(400);
  });

  it('withSavings is 60 % of total (300)', () => {
    expect(stats.withSavings).toBe(300);
  });

  it('returns all required keys', () => {
    expect(stats).toHaveProperty('total');
    expect(stats).toHaveProperty('active');
    expect(stats).toHaveProperty('withLoans');
    expect(stats).toHaveProperty('withSavings');
  });

  // Negative scenarios testing
  it('active count is never negative', () => {
    expect(stats.active).toBeGreaterThanOrEqual(0);
  });

  it('withLoans does not exceed total', () => {
    expect(stats.withLoans).toBeLessThanOrEqual(stats.total);
  });

  it('withSavings does not exceed total', () => {
    expect(stats.withSavings).toBeLessThanOrEqual(stats.total);
  });
});

// ─── fetchUserById ────────────────────────────────────────────────────────────

describe('fetchUserById', () => {
  // Positive scenarios testing
  it('resolves with a user for a valid ID', async () => {
    const user = await fetchUserById('LSQ00000001');
    expect(user).not.toBeNull();
    expect(user?.id).toBe('LSQ00000001');
  });

  it('returned user has all required fields', async () => {
    const user = await fetchUserById('LSQ00000001');
    expect(user).toMatchObject({
      id: expect.any(String),
      organization: expect.any(String),
      username: expect.any(String),
      email: expect.any(String),
      phoneNumber: expect.any(String),
      status: expect.stringMatching(/^(Active|Inactive|Pending|Blacklisted)$/),
      tier: expect.any(Number),
      accountBalance: expect.any(Number),
    });
  });

  it('resolves a user from the middle of the dataset', async () => {
    const user = await fetchUserById('LSQ00000250');
    expect(user).not.toBeNull();
    expect(user?.id).toBe('LSQ00000250');
  });

  it('resolves the last generated user', async () => {
    const user = await fetchUserById('LSQ00000500');
    expect(user).not.toBeNull();
  });

  it('user tier is 1, 2, or 3', async () => {
    const user = await fetchUserById('LSQ00000001');
    expect([1, 2, 3]).toContain(user?.tier);
  });

  it('user guarantors array has exactly 2 entries', async () => {
    const user = await fetchUserById('LSQ00000001');
    expect(user?.guarantors).toHaveLength(2);
  });

  // Negative scenarios testing
  it('returns null for a completely unknown ID', async () => {
    const user = await fetchUserById('DOES_NOT_EXIST');
    expect(user).toBeNull();
  });

  it('returns null for an empty string ID', async () => {
    const user = await fetchUserById('');
    expect(user).toBeNull();
  });

  it('returns null for an ID just outside the generated range', async () => {
    const user = await fetchUserById('LSQ00000501');
    expect(user).toBeNull();
  });

  it('returns null for a valid-looking but lowercase ID', async () => {
    const user = await fetchUserById('lsq00000001');
    expect(user).toBeNull();
  });
});

// ─── fetchUsers ───────────────────────────────────────────────────────────────

describe('fetchUsers', () => {
  // Positive scenarios testing — pagination
  it('returns 10 users on the first page with default page size', async () => {
    const { users, total } = await fetchUsers({ page: 1, pageSize: 10 });
    expect(users).toHaveLength(10);
    expect(total).toBe(500);
  });

  it('returns the correct slice for page 2', async () => {
    const page1 = await fetchUsers({ page: 1, pageSize: 10 });
    const page2 = await fetchUsers({ page: 2, pageSize: 10 });
    expect(page1.users[0].id).not.toBe(page2.users[0].id);
  });

  it('returns fewer records on the last page when total is not divisible by pageSize', async () => {
    // 500 users, pageSize 30 → last page (17) has 500 - 16*30 = 20 users
    const { users } = await fetchUsers({ page: 17, pageSize: 30 });
    expect(users.length).toBeLessThanOrEqual(30);
    expect(users.length).toBeGreaterThan(0);
  });

  it('total is always 500 when no filters are applied', async () => {
    const { total } = await fetchUsers({ page: 1, pageSize: 50 });
    expect(total).toBe(500);
  });

  // Positive scenarios testing — filtering
  it('filters by status "Active" and returns only active users', async () => {
    const { users } = await fetchUsers({
      page: 1,
      pageSize: 50,
      filters: { status: 'Active' },
    });
    users.forEach((u) => expect(u.status).toBe('Active'));
  });

  it('filters by status "Blacklisted" and returns only blacklisted users', async () => {
    const { users } = await fetchUsers({
      page: 1,
      pageSize: 50,
      filters: { status: 'Blacklisted' },
    });
    users.forEach((u) => expect(u.status).toBe('Blacklisted'));
  });

  it('filters by organisation name (case-insensitive)', async () => {
    const { users } = await fetchUsers({
      page: 1,
      pageSize: 50,
      filters: { organization: 'lendsqr' },
    });
    users.forEach((u) =>
      expect(u.organization.toLowerCase()).toContain('lendsqr')
    );
  });

  it('filters by partial username match', async () => {
    const { users } = await fetchUsers({
      page: 1,
      pageSize: 100,
      filters: { username: 'Grace' },
    });
    users.forEach((u) =>
      expect(u.username.toLowerCase()).toContain('grace')
    );
  });

  it('filters by partial email match', async () => {
    const { users } = await fetchUsers({
      page: 1,
      pageSize: 50,
      filters: { email: 'kuda' },
    });
    users.forEach((u) => expect(u.email.toLowerCase()).toContain('kuda'));
  });

  it('filters by partial phone number match', async () => {
    const { users, total } = await fetchUsers({
      page: 1,
      pageSize: 500,
      filters: { phoneNumber: '080' },
    });
    expect(total).toBeGreaterThan(0);
    users.forEach((u) => expect(u.phoneNumber).toContain('080'));
  });

  it('returns correct total count that reflects active filter', async () => {
    const allActive = await fetchUsers({
      page: 1,
      pageSize: 500,
      filters: { status: 'Active' },
    });
    const stats = getUserStats();
    expect(allActive.total).toBe(stats.active);
  });

  // Negative scenarios testing
  it('returns empty array and total 0 for a status that matches no users', async () => {
    const { users, total } = await fetchUsers({
      page: 1,
      pageSize: 10,
      filters: { status: 'Suspended' },
    });
    expect(users).toHaveLength(0);
    expect(total).toBe(0);
  });

  it('returns empty array for a page beyond the last page', async () => {
    const { users } = await fetchUsers({ page: 9999, pageSize: 10 });
    expect(users).toHaveLength(0);
  });

  it('returns empty array for an email that matches nobody', async () => {
    const { users, total } = await fetchUsers({
      page: 1,
      pageSize: 10,
      filters: { email: 'zzznobodymatchesthis@fake.io' },
    });
    expect(users).toHaveLength(0);
    expect(total).toBe(0);
  });

  it('returns empty array for a username that matches nobody', async () => {
    const { users, total } = await fetchUsers({
      page: 1,
      pageSize: 10,
      filters: { username: 'XYZNOEXIST9999' },
    });
    expect(users).toHaveLength(0);
    expect(total).toBe(0);
  });

  it('applies no filter when filters object is omitted entirely', async () => {
    const params: FetchUsersParams = { page: 1, pageSize: 10 };
    const { total } = await fetchUsers(params);
    expect(total).toBe(500);
  });

  it('each user in the result has a unique id on a given page', async () => {
    const { users } = await fetchUsers({ page: 1, pageSize: 50 });
    const ids = users.map((u) => u.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });
});