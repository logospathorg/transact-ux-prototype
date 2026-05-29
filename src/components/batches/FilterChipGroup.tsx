import { cn } from '../../utils/cn';

interface FilterChipGroupProps<T extends string> {
  label: string;
  options: readonly T[];
  selected: T | 'All';
  onChange: (value: T | 'All') => void;
}

/**
 * A labeled row of single-select filter chips with an "All" option. Generic over
 * the option type so it works for status, priority, and batch class filters.
 */
export function FilterChipGroup<T extends string>({
  label,
  options,
  selected,
  onChange,
}: FilterChipGroupProps<T>) {
  const allOptions: (T | 'All')[] = ['All', ...options];
  return (
    <div className="flex flex-wrap items-center gap-1.5">
      <span className="mr-1 text-xs font-medium text-slate-500">{label}:</span>
      {allOptions.map((option) => {
        const active = option === selected;
        return (
          <button
            key={option}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(option)}
            className={cn(
              'rounded-full border px-2.5 py-1 text-xs font-medium transition-colors',
              active
                ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50',
            )}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}
