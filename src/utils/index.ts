/**
 * @description This function formats a numerical value as Nigerian Naira currency. 
 * It takes a number as input and returns a string formatted with the Naira symbol (₦) followed by the amount with commas as thousand separators and two decimal places. 
 * The function uses the toLocaleString method to ensure proper formatting according to Nigerian currency standards.
 * @param amount The numerical value to be formatted.
 * @returns The formatted form of the numeral.
 */
export function formatCurrency(amount: number): string {
  return `₦${amount.toLocaleString('en-NG', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

/**
 * @description This function takes a status string as input and returns a corresponding CSS class name that represents the status visually. 
 * It uses a switch statement to match the input status (case-insensitive) to predefined cases ('active', 'inactive', 'pending', 'blacklisted') and returns a specific CSS class for each case. 
 * If the input status does not match any of the predefined cases, it defaults to returning the CSS class for 'inactive'.
 * @param status The status column from an object.
 * @returns Returns the corresponding full css status representation.
 */
export function getStatusClass(status: string): string {
  switch (status.toLowerCase()) {
    case 'active': return 'status--active';
    case 'inactive': return 'status--inactive';
    case 'pending': return 'status--pending';
    case 'blacklisted': return 'status--blacklisted';
    default: return 'status--inactive';
  }
}

/**
 * @description Generates an array of page numbers for pagination controls.
 * It takes the current page number and the total number of pages as parameters and returns an array that includes page numbers and ellipses ('...') where appropriate to indicate skipped pages. 
 * The function ensures that the first and last pages are always included, and it provides a range of pages around the current page for easy navigation.
 * @param current The page number currently being displayed.
 * @param total A complete count of items that should be displayed.
 * @returns An array of objects that would be displayed as is.
 */
export function generatePageNumbers(current: number, total: number): (number | '...')[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  if (current <= 4) return [1, 2, 3, 4, 5, '...', total];
  if (current >= total - 3) return [1, '...', total - 4, total - 3, total - 2, total - 1, total];
  return [1, '...', current - 1, current, current + 1, '...', total];
}
