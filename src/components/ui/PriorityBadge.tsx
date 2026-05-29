import type { Priority } from '../../types/transact';
import { cn } from '../../utils/cn';

/** Priority badge with an icon-free dot scale so urgency reads at a glance. */
const PRIORITY_STYLES: Record<Priority, { wrap: string; bar: string }> = {
  Low: { wrap: 'text-slate-600', bar: 'bg-slate-300' },
  Normal: { wrap: 'text-slate-700', bar: 'bg-sky-400' },
  High: { wrap: 'text-amber-700', bar: 'bg-amber-500' },
  Urgent: { wrap: 'text-red-700', bar: 'bg-red-500' },
};

const PRIORITY_BARS: Record<Priority, number> = {
  Low: 1,
  Normal: 2,
  High: 3,
  Urgent: 4,
};

interface PriorityBadgeProps {
  priority: Priority;
  className?: string;
}

export function PriorityBadge({ priority, className }: PriorityBadgeProps) {
  const style = PRIORITY_STYLES[priority];
  const filled = PRIORITY_BARS[priority];
  return (
    <span className={cn('inline-flex items-center gap-1.5 text-xs font-medium', style.wrap, className)}>
      <span className="flex items-end gap-0.5" aria-hidden="true">
        {[1, 2, 3, 4].map((level) => (
          <span
            key={level}
            className={cn(
              'w-1 rounded-sm',
              level <= filled ? style.bar : 'bg-slate-200',
            )}
            style={{ height: `${4 + level * 2}px` }}
          />
        ))}
      </span>
      {priority}
    </span>
  );
}
