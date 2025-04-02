import moment from 'moment';

export function getNameInitials(name: string): string {
  let value = name
    .split(' ')
    .map((x) => x.charAt(0))
    .join('')
    .substr(0, 2)
    .toUpperCase();

  return value.charAt(0) + '.' + value.charAt(1);
}

export function getCurrentUser(): Record<string, any> | null {
  try {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  } catch (error) {
    console.error('Error parsing user from localStorage:', error);
    return null;
  }
}

export function getUserRoles(): string[] {
  try {
    const user = localStorage.getItem('user');
    if (!user) return [];

    const parsed = JSON.parse(user);
    return Array.isArray(parsed.roles) ? parsed.roles : [];
  } catch (error) {
    console.error('Error retrieving user roles:', error);
    return [];
  }
}

export function formatRoleName(role: string): string {
  return role
    .split('_')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export function formatDOB(dob: string): string {
  return moment(dob).isValid() ? moment(dob).format('ll') : '-';
}
