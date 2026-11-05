/**
 * Validation utilities for contact information (phone, email).
 * Specially optimized for the French market and French expatriates.
 */

/**
 * Validates a phone number:
 * - French Metropolitan numbers (06, 07, 01, 02, 03, 04, 05, 09)
 * - French international numbers (+33 or 0033)
 * - Expatriate international numbers starting with '+' (E.164 format: 8-15 digits)
 * - Rejects dummy repetitions (e.g. 0000000000, 1111111111, 66666666)
 */
export function isValidFrenchPhone(rawPhone: string): boolean {
  if (!rawPhone) return false;
  const cleaned = rawPhone.replace(/[\s.\-_/()]/g, "");

  // Reject repeating single-digit sequences (e.g. 0000000000, 1111111111)
  if (/^(\d)\1+$/.test(cleaned.replace(/^\+/, ""))) return false;

  // Local 10-digit French number starting with 01-09
  if (/^0[1-9]\d{8}$/.test(cleaned)) return true;

  // International French format (+33 or 0033 followed by 9 digits)
  if (/^(?:\+33|0033)[1-9]\d{8}$/.test(cleaned)) return true;

  // Valid international E.164 format for expatriates (+ country code + 7-14 digits)
  if (/^\+[1-9]\d{7,14}$/.test(cleaned)) return true;

  return false;
}

/**
 * Normalizes a phone number to international E.164 format (+33... or +...).
 * Essential for Meta Advanced Matching, Conversions API, and CRM dialing.
 */
export function normalizePhoneE164(rawPhone: string): string {
  const cleaned = rawPhone.replace(/[\s.\-_/()]/g, "");

  if (/^0[1-9]\d{8}$/.test(cleaned)) {
    return `+33${cleaned.slice(1)}`;
  }
  if (/^0033[1-9]\d{8}$/.test(cleaned)) {
    return `+33${cleaned.slice(4)}`;
  }
  if (/^\+[1-9]\d{7,14}$/.test(cleaned)) {
    return cleaned;
  }
  return rawPhone.trim();
}

/**
 * Validates a standard email address format.
 */
export function isValidEmail(email: string): boolean {
  if (!email) return false;
  const trimmed = email.trim().toLowerCase();
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(trimmed);
}
