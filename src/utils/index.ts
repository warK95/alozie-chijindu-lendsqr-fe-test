export function formatCurrency(amount: number): string {
  return `₦${amount.toLocaleString('en-NG', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

export function getStatusClass(status: string): string {
  switch (status.toLowerCase()) {
    case 'active': return 'status--active';
    case 'inactive': return 'status--inactive';
    case 'pending': return 'status--pending';
    case 'blacklisted': return 'status--blacklisted';
    default: return 'status--inactive';
  }
}

export function generatePageNumbers(current: number, total: number): (number | '...')[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  if (current <= 4) return [1, 2, 3, 4, 5, '...', total];
  if (current >= total - 3) return [1, '...', total - 4, total - 3, total - 2, total - 1, total];
  return [1, '...', current - 1, current, current + 1, '...', total];
}
