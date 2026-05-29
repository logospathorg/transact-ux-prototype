import type { Role, UserProfile } from '../types/transact';

/**
 * Demo identities for the role switcher in the top bar. Switching roles in the
 * prototype reshapes the navigation and dashboard emphasis so stakeholders can
 * see how the experience differs per role.
 */
export const demoUsers: Record<Role, UserProfile> = {
  'Super Administrator': {
    name: 'Dana Whitfield',
    role: 'Super Administrator',
    initials: 'DW',
  },
  Administrator: {
    name: 'Marcus Lin',
    role: 'Administrator',
    initials: 'ML',
  },
  Operator: {
    name: 'Priya Anand',
    role: 'Operator',
    initials: 'PA',
  },
};
