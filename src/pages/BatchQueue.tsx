import { useMemo, useState } from 'react';
import { RotateCw, SlidersHorizontal } from 'lucide-react';
import {
  BATCH_CLASSES,
  BATCH_STATUSES,
  PRIORITIES,
  type BatchClass,
  type BatchStatus,
  type Priority,
} from '../types/transact';
import { mockBatches } from '../data/mockBatches';
import { Card } from '../components/ui/Card';
import { FilterChipGroup } from '../components/batches/FilterChipGroup';
import { BatchTable } from '../components/batches/BatchTable';

export function BatchQueue() {
  const [status, setStatus] = useState<BatchStatus | 'All'>('All');
  const [priority, setPriority] = useState<Priority | 'All'>('All');
  const [batchClass, setBatchClass] = useState<BatchClass | 'All'>('All');

  const filtered = useMemo(
    () =>
      mockBatches.filter(
        (batch) =>
          (status === 'All' || batch.status === status) &&
          (priority === 'All' || batch.priority === priority) &&
          (batchClass === 'All' || batch.batchClass === batchClass),
      ),
    [status, priority, batchClass],
  );

  const hasActiveFilter = status !== 'All' || priority !== 'All' || batchClass !== 'All';

  const clearAll = () => {
    setStatus('All');
    setPriority('All');
    setBatchClass('All');
  };

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">Batch Queue</h2>
          <p className="mt-1 text-sm text-slate-500">
            Monitor and manage every batch instance moving through the pipeline.
          </p>
        </div>
        <button
          type="button"
          className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50"
        >
          <RotateCw className="h-4 w-4" />
          Refresh
        </button>
      </div>

      <Card>
        <div className="flex flex-col gap-3 border-b border-slate-100 px-5 py-4">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
            <SlidersHorizontal className="h-3.5 w-3.5" />
            Filters
          </div>
          <FilterChipGroup
            label="Status"
            options={BATCH_STATUSES}
            selected={status}
            onChange={setStatus}
          />
          <FilterChipGroup
            label="Priority"
            options={PRIORITIES}
            selected={priority}
            onChange={setPriority}
          />
          <FilterChipGroup
            label="Batch Class"
            options={BATCH_CLASSES}
            selected={batchClass}
            onChange={setBatchClass}
          />
        </div>

        <div className="flex items-center justify-between px-5 py-2.5 text-xs text-slate-500">
          <span>
            Showing <span className="font-semibold text-slate-700">{filtered.length}</span> of{' '}
            {mockBatches.length} batches
          </span>
          {hasActiveFilter && (
            <button
              type="button"
              onClick={clearAll}
              className="font-medium text-indigo-600 hover:text-indigo-700"
            >
              Clear filters
            </button>
          )}
        </div>

        <BatchTable batches={filtered} />
      </Card>
    </div>
  );
}
