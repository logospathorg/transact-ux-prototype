import { Hammer } from 'lucide-react';
import type { ViewId } from '../types/transact';

interface ComingSoonProps {
  title: string;
  description: string;
  /** Stages/screens this view will eventually contain, shown as a checklist. */
  planned: string[];
  onBack: (view: ViewId) => void;
}

/**
 * Placeholder for screens not built in this pass. Keeps navigation coherent and
 * communicates intent for the demo rather than dead-ending on a blank page.
 */
export function ComingSoon({ title, description, planned, onBack }: ComingSoonProps) {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="max-w-md rounded-xl border border-dashed border-slate-300 bg-white p-8 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-indigo-50 text-indigo-500">
          <Hammer className="h-6 w-6" />
        </div>
        <h2 className="mt-4 text-lg font-semibold text-slate-900">{title}</h2>
        <p className="mt-1 text-sm text-slate-500">{description}</p>
        <div className="mt-5 rounded-lg bg-slate-50 p-4 text-left">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Planned for this screen
          </p>
          <ul className="mt-2 space-y-1.5">
            {planned.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <button
          type="button"
          onClick={() => onBack('dashboard')}
          className="mt-6 inline-flex items-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-700"
        >
          Back to Dashboard
        </button>
      </div>
    </div>
  );
}
