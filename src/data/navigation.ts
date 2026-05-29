import type { NavSection, Role } from '../types/transact';

/**
 * Sidebar navigation, grouped into operational, configuration, and system
 * sections. Items declare which roles may see them so the shell can render a
 * role-aware menu. Operators focus on the work queues; administrators also see
 * configuration; super administrators additionally see system health.
 */
export const navSections: NavSection[] = [
  {
    title: 'Operations',
    items: [
      {
        id: 'dashboard',
        label: 'Dashboard',
        icon: 'gauge',
        roles: ['Super Administrator', 'Administrator', 'Operator'],
      },
      {
        id: 'batch-queue',
        label: 'Batch Queue',
        icon: 'list-checks',
        roles: ['Super Administrator', 'Administrator', 'Operator'],
        badge: 6,
      },
      {
        id: 'review',
        label: 'Review',
        icon: 'file-search',
        roles: ['Super Administrator', 'Administrator', 'Operator'],
        badge: 3,
      },
      {
        id: 'validation',
        label: 'Validation',
        icon: 'clipboard-check',
        roles: ['Super Administrator', 'Administrator', 'Operator'],
        badge: 2,
      },
    ],
  },
  {
    title: 'Configuration',
    items: [
      {
        id: 'batch-classes',
        label: 'Batch Classes',
        icon: 'boxes',
        roles: ['Super Administrator', 'Administrator'],
      },
      {
        id: 'extraction-rules',
        label: 'Extraction Rules',
        icon: 'regex',
        roles: ['Super Administrator', 'Administrator'],
      },
      {
        id: 'exports',
        label: 'Exports',
        icon: 'upload-cloud',
        roles: ['Super Administrator', 'Administrator', 'Operator'],
        badge: 1,
      },
    ],
  },
  {
    title: 'Insights',
    items: [
      {
        id: 'reports',
        label: 'Reports',
        icon: 'bar-chart',
        roles: ['Super Administrator', 'Administrator', 'Operator'],
      },
      {
        id: 'system-health',
        label: 'System Health',
        icon: 'activity',
        roles: ['Super Administrator'],
      },
    ],
  },
];

/** Filter the nav to the sections/items a role is allowed to see. */
export function navSectionsForRole(role: Role): NavSection[] {
  return navSections
    .map((section) => ({
      ...section,
      items: section.items.filter((item) => item.roles.includes(role)),
    }))
    .filter((section) => section.items.length > 0);
}
