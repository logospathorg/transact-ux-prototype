import { ScanLine } from 'lucide-react';
import type { Role, ViewId } from '../../types/transact';
import { navSectionsForRole } from '../../data/navigation';
import { cn } from '../../utils/cn';
import { NAV_ICONS } from './navIcons';

interface SidebarProps {
  role: Role;
  activeView: ViewId;
  onNavigate: (view: ViewId) => void;
}

/**
 * Fixed left navigation. Items are filtered by the active role and grouped into
 * labeled sections. The active item gets an indigo accent rail so the current
 * location is always obvious.
 */
export function Sidebar({ role, activeView, onNavigate }: SidebarProps) {
  const sections = navSectionsForRole(role);

  return (
    <aside className="flex h-full w-64 shrink-0 flex-col border-r border-slate-200 bg-slate-900 text-slate-300">
      <div className="flex h-16 items-center gap-2.5 border-b border-white/10 px-5">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-sm">
          <ScanLine className="h-5 w-5" />
        </div>
        <div className="leading-tight">
          <div className="text-sm font-semibold text-white">Transact</div>
          <div className="text-[11px] text-slate-400">Document Automation</div>
        </div>
      </div>

      <nav className="flex-1 space-y-6 overflow-y-auto px-3 py-5">
        {sections.map((section) => (
          <div key={section.title}>
            <div className="px-3 pb-2 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
              {section.title}
            </div>
            <ul className="space-y-0.5">
              {section.items.map((item) => {
                const Icon = NAV_ICONS[item.icon];
                const active = item.id === activeView;
                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => onNavigate(item.id)}
                      aria-current={active ? 'page' : undefined}
                      className={cn(
                        'group flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                        active
                          ? 'bg-indigo-500/15 text-white'
                          : 'text-slate-300 hover:bg-white/5 hover:text-white',
                      )}
                    >
                      <Icon
                        className={cn(
                          'h-[18px] w-[18px] shrink-0',
                          active ? 'text-indigo-300' : 'text-slate-400 group-hover:text-slate-200',
                        )}
                      />
                      <span className="flex-1 text-left">{item.label}</span>
                      {item.badge ? (
                        <span
                          className={cn(
                            'inline-flex h-5 min-w-5 items-center justify-center rounded-full px-1.5 text-[11px] font-semibold',
                            active ? 'bg-indigo-400 text-white' : 'bg-slate-700 text-slate-200',
                          )}
                        >
                          {item.badge}
                        </span>
                      ) : null}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>

      <div className="border-t border-white/10 px-5 py-4 text-[11px] text-slate-500">
        <div className="flex items-center justify-between">
          <span>Environment</span>
          <span className="inline-flex items-center gap-1.5 font-medium text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Production
          </span>
        </div>
        <div className="mt-1 text-slate-600">v2026.5 · Cloud</div>
      </div>
    </aside>
  );
}
