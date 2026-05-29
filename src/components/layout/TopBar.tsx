import { Bell, ChevronDown, Search } from 'lucide-react';
import type { Role, UserProfile } from '../../types/transact';
import { ROLES } from '../../types/transact';

interface TopBarProps {
  title: string;
  subtitle?: string;
  user: UserProfile;
  role: Role;
  onRoleChange: (role: Role) => void;
}

/**
 * Top context bar: current page title + breadcrumb on the left, global search,
 * notifications, a role switcher (to demo role-aware behavior), and the signed-in
 * user on the right.
 */
export function TopBar({ title, subtitle, user, role, onRoleChange }: TopBarProps) {
  return (
    <header className="flex h-16 shrink-0 items-center justify-between gap-4 border-b border-slate-200 bg-white px-6">
      <div className="min-w-0">
        <div className="text-[11px] font-medium uppercase tracking-wider text-slate-400">
          Transact / {title}
        </div>
        <h1 className="truncate text-lg font-semibold text-slate-900">
          {subtitle ?? title}
        </h1>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative hidden md:block">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            type="search"
            placeholder="Search batches, documents…"
            aria-label="Search"
            className="h-9 w-64 rounded-lg border border-slate-200 bg-slate-50 pl-9 pr-3 text-sm text-slate-700 outline-none transition-colors placeholder:text-slate-400 focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-100"
          />
        </div>

        <button
          type="button"
          aria-label="Notifications"
          className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition-colors hover:bg-slate-50 hover:text-slate-700"
        >
          <Bell className="h-[18px] w-[18px]" />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
        </button>

        {/* Role switcher — demos how the experience adapts per role. */}
        <label className="relative hidden items-center sm:flex">
          <span className="sr-only">Active role</span>
          <select
            value={role}
            onChange={(event) => onRoleChange(event.target.value as Role)}
            className="h-9 appearance-none rounded-lg border border-slate-200 bg-white pl-3 pr-8 text-sm font-medium text-slate-700 outline-none transition-colors hover:bg-slate-50 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
          >
            {ROLES.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        </label>

        <div className="flex items-center gap-2.5 border-l border-slate-200 pl-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100 text-sm font-semibold text-indigo-700">
            {user.initials}
          </div>
          <div className="hidden leading-tight lg:block">
            <div className="text-sm font-medium text-slate-900">{user.name}</div>
            <div className="text-[11px] text-slate-500">{user.role}</div>
          </div>
        </div>
      </div>
    </header>
  );
}
