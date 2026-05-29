import type { SlaInfo } from '../../types/transact';
import { cn } from '../../utils/cn';

/** Inline SLA health indicator: colored dot + remaining/overdue label. */
const SLA_STYLES: Record<SlaInfo['state'], { text: string; dot: string }> = {
  'On Track': { text: 'text-emerald-700', dot: 'bg-emerald-500' },
  'At Risk': { text: 'text-amber-700', dot: 'bg-amber-500' },
  Breached: { text: 'text-red-700', dot: 'bg-red-500' },
};

interface SlaIndicatorProps {
  sla: SlaInfo;
  className?: string;
}

export function SlaIndicator({ sla, className }: SlaIndicatorProps) {
  const style = SLA_STYLES[sla.state];
  return (
    <span className={cn('inline-flex items-center gap-1.5 text-xs font-medium', style.text, className)}>
      <span className={cn('h-1.5 w-1.5 rounded-full', style.dot)} aria-hidden="true" />
      <span>{sla.label}</span>
    </span>
  );
}
