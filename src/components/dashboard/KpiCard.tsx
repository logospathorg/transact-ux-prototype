import {
  AlertTriangle,
  CheckSquare,
  Clock,
  Eye,
  Layers,
  TrendingDown,
  TrendingUp,
  Zap,
  type LucideIcon,
} from 'lucide-react';
import type { KpiIconName, KpiMetric } from '../../types/transact';
import { Card } from '../ui/Card';
import { cn } from '../../utils/cn';

const KPI_ICONS: Record<KpiIconName, LucideIcon> = {
  layers: Layers,
  eye: Eye,
  'check-square': CheckSquare,
  'alert-triangle': AlertTriangle,
  zap: Zap,
  clock: Clock,
};

const TONE_STYLES: Record<NonNullable<KpiMetric['tone']>, string> = {
  neutral: 'bg-slate-100 text-slate-600',
  info: 'bg-blue-50 text-blue-600',
  success: 'bg-emerald-50 text-emerald-600',
  warning: 'bg-amber-50 text-amber-600',
  danger: 'bg-red-50 text-red-600',
};

interface KpiCardProps {
  metric: KpiMetric;
}

export function KpiCard({ metric }: KpiCardProps) {
  const Icon = KPI_ICONS[metric.icon];
  const tone = metric.tone ?? 'neutral';

  // A "good" delta is green; a "bad" one is red — independent of arrow direction.
  const isGood =
    metric.trend === 'flat'
      ? null
      : (metric.trend === 'up') === (metric.positiveIsGood ?? true);
  const TrendIcon = metric.trend === 'down' ? TrendingDown : TrendingUp;

  return (
    <Card className="p-4">
      <div className="flex items-start justify-between">
        <span className="text-xs font-medium text-slate-500">{metric.label}</span>
        <span className={cn('flex h-8 w-8 items-center justify-center rounded-lg', TONE_STYLES[tone])}>
          <Icon className="h-4 w-4" />
        </span>
      </div>
      <div className="mt-3 flex items-baseline gap-2">
        <span className="text-2xl font-semibold tracking-tight text-slate-900">{metric.value}</span>
        {metric.delta && (
          <span
            className={cn(
              'inline-flex items-center gap-0.5 text-xs font-medium',
              isGood === null && 'text-slate-500',
              isGood === true && 'text-emerald-600',
              isGood === false && 'text-red-600',
            )}
          >
            {metric.trend !== 'flat' && <TrendIcon className="h-3 w-3" />}
            {metric.delta}
          </span>
        )}
      </div>
      {metric.caption && <p className="mt-1 text-xs text-slate-400">{metric.caption}</p>}
    </Card>
  );
}
