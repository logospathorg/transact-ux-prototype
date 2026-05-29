import type { ReactNode } from 'react';
import type { Role, UserProfile, ViewId } from '../../types/transact';
import { Sidebar } from './Sidebar';
import { TopBar } from './TopBar';

interface AppShellProps {
  role: Role;
  user: UserProfile;
  activeView: ViewId;
  title: string;
  subtitle?: string;
  onNavigate: (view: ViewId) => void;
  onRoleChange: (role: Role) => void;
  children: ReactNode;
}

/**
 * Full-screen enterprise layout: fixed sidebar, sticky top bar, and a scrollable
 * main content area. Desktop-first; the content area owns its own scroll so the
 * shell chrome stays put.
 */
export function AppShell({
  role,
  user,
  activeView,
  title,
  subtitle,
  onNavigate,
  onRoleChange,
  children,
}: AppShellProps) {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-slate-50">
      <Sidebar role={role} activeView={activeView} onNavigate={onNavigate} />
      <div className="flex min-w-0 flex-1 flex-col">
        <TopBar
          title={title}
          subtitle={subtitle}
          user={user}
          role={role}
          onRoleChange={onRoleChange}
        />
        <main className="flex-1 overflow-y-auto px-6 py-6">
          <div className="mx-auto max-w-7xl">{children}</div>
        </main>
      </div>
    </div>
  );
}
