import {
  AlertCircle,
  CheckCircle2,
  FileSearch,
  ClipboardCheck,
  DownloadCloud,
  UploadCloud,
  UserPlus,
  type LucideIcon,
} from 'lucide-react';
import type { ActivityEvent, ActivityKind } from '../../types/transact';
import { Card, CardHeader } from '../ui/Card';
import { recentActivity } from '../../data/mockDashboard';
import { cn } from '../../utils/cn';

const ACTIVITY_STYLES: Record<ActivityKind, { icon: LucideIcon; tone: string }> = {
  completed: { icon: CheckCircle2, tone: 'bg-emerald-50 text-emerald-600' },
  exported: { icon: DownloadCloud, tone: 'bg-emerald-50 text-emerald-600' },
  failed: { icon: AlertCircle, tone: 'bg-red-50 text-red-600' },
  review: { icon: FileSearch, tone: 'bg-amber-50 text-amber-600' },
  validation: { icon: ClipboardCheck, tone: 'bg-violet-50 text-violet-600' },
  imported: { icon: UploadCloud, tone: 'bg-blue-50 text-blue-600' },
  assigned: { icon: UserPlus, tone: 'bg-slate-100 text-slate-600' },
};

export function RecentActivity() {
  return (
    <Card className="flex h-full flex-col">
      <CardHeader
        title="Recent Activity"
        description="Latest workflow events across all batches"
      />
      <ul className="divide-y divide-slate-100">
        {recentActivity.map((event: ActivityEvent) => {
          const { icon: Icon, tone } = ACTIVITY_STYLES[event.kind];
          return (
            <li key={event.id} className="flex items-start gap-3 px-5 py-3">
              <span className={cn('mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg', tone)}>
                <Icon className="h-4 w-4" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm text-slate-700">{event.message}</p>
                <div className="mt-0.5 flex items-center gap-2 text-xs text-slate-400">
                  <span className="font-medium text-slate-500">{event.batchId}</span>
                  <span aria-hidden="true">·</span>
                  <span>{event.actor}</span>
                  <span aria-hidden="true">·</span>
                  <span>{event.time}</span>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </Card>
  );
}
