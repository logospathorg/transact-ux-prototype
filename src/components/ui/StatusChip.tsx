import type { BatchStatus } from '../../types/transact';
import { cn } from '../../utils/cn';

/**
 * Color-coded status chip. Each status pairs a dot + label so meaning is never
 * conveyed by color alone (accessibility), with semantic tones for processing,
 * review, validation, failure, and completion.
 */
const STATUS_STYLES: Record<BatchStatus, { wrap: string; dot: string }> = {
  Processing: {
    wrap: 'bg-blue-50 text-blue-700 ring-blue-600/20',
    dot: 'bg-blue-500 animate-pulse',
  },
  'Ready for Review': {
    wrap: 'bg-amber-50 text-amber-700 ring-amber-600/20',
    dot: 'bg-amber-500',
  },
  'Ready for Validation': {
    wrap: 'bg-violet-50 text-violet-700 ring-violet-600/20',
    dot: 'bg-violet-500',
  },
  'Export Failed': {
    wrap: 'bg-red-50 text-red-700 ring-red-600/20',
    dot: 'bg-red-500',
  },
  Complete: {
    wrap: 'bg-emerald-50 text-emerald-700 ring-emerald-600/20',
    dot: 'bg-emerald-500',
  },
};

interface StatusChipProps {
  status: BatchStatus;
  className?: string;
}

export function StatusChip({ status, className }: StatusChipProps) {
  const style = STATUS_STYLES[status];
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset whitespace-nowrap',
        style.wrap,
        className,
      )}
    >
      <span className={cn('h-1.5 w-1.5 rounded-full', style.dot)} aria-hidden="true" />
      {status}
    </span>
  );
}
