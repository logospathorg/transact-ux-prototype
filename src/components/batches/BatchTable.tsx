import { AlertTriangle, FileStack, Files } from 'lucide-react';
import type { BatchInstance } from '../../types/transact';
import { StatusChip } from '../ui/StatusChip';
import { PriorityBadge } from '../ui/PriorityBadge';
import { SlaIndicator } from '../ui/SlaIndicator';
import { cn } from '../../utils/cn';

interface BatchTableProps {
  batches: BatchInstance[];
}

const HEAD_CLASS =
  'px-4 py-2.5 text-left text-[11px] font-semibold uppercase tracking-wider text-slate-500';

/** Dense, scannable batch instance grid. */
export function BatchTable({ batches }: BatchTableProps) {
  if (batches.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-2 px-4 py-16 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-400">
          <FileStack className="h-6 w-6" />
        </div>
        <p className="text-sm font-medium text-slate-700">No batches match these filters</p>
        <p className="text-xs text-slate-500">Try clearing a filter to widen your results.</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-slate-200 bg-slate-50">
            <th className={HEAD_CLASS}>Batch ID</th>
            <th className={HEAD_CLASS}>Batch Class</th>
            <th className={HEAD_CLASS}>Status</th>
            <th className={HEAD_CLASS}>Current Module</th>
            <th className={HEAD_CLASS}>Priority</th>
            <th className={HEAD_CLASS}>Created</th>
            <th className={HEAD_CLASS}>SLA</th>
            <th className={cn(HEAD_CLASS, 'text-right')}>Pages</th>
            <th className={cn(HEAD_CLASS, 'text-right')}>Docs</th>
            <th className={cn(HEAD_CLASS, 'text-right')}>Errors</th>
            <th className={HEAD_CLASS}>Assigned</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {batches.map((batch) => (
            <tr key={batch.id} className="group transition-colors hover:bg-slate-50">
              <td className="whitespace-nowrap px-4 py-3">
                <button
                  type="button"
                  className="font-medium text-indigo-600 hover:text-indigo-700 hover:underline"
                >
                  {batch.id}
                </button>
              </td>
              <td className="whitespace-nowrap px-4 py-3 text-slate-700">{batch.batchClass}</td>
              <td className="whitespace-nowrap px-4 py-3">
                <StatusChip status={batch.status} />
              </td>
              <td className="whitespace-nowrap px-4 py-3 text-slate-600">{batch.currentModule}</td>
              <td className="whitespace-nowrap px-4 py-3">
                <PriorityBadge priority={batch.priority} />
              </td>
              <td className="whitespace-nowrap px-4 py-3 text-xs text-slate-500">
                {batch.createdTime}
              </td>
              <td className="whitespace-nowrap px-4 py-3">
                <SlaIndicator sla={batch.sla} />
              </td>
              <td className="whitespace-nowrap px-4 py-3 text-right tabular-nums text-slate-600">
                {batch.pages}
              </td>
              <td className="whitespace-nowrap px-4 py-3 text-right tabular-nums text-slate-600">
                <span className="inline-flex items-center justify-end gap-1">
                  <Files className="h-3.5 w-3.5 text-slate-300" />
                  {batch.documents}
                </span>
              </td>
              <td className="whitespace-nowrap px-4 py-3 text-right tabular-nums">
                {batch.errors > 0 ? (
                  <span className="inline-flex items-center justify-end gap-1 font-medium text-red-600">
                    <AlertTriangle className="h-3.5 w-3.5" />
                    {batch.errors}
                  </span>
                ) : (
                  <span className="text-slate-300">—</span>
                )}
              </td>
              <td className="whitespace-nowrap px-4 py-3">
                {batch.assignedUser ? (
                  <span className="text-slate-700">{batch.assignedUser}</span>
                ) : (
                  <span className="text-xs italic text-slate-400">Unassigned</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
