import {
  Activity,
  BarChart3,
  Boxes,
  ClipboardCheck,
  FileSearch,
  Gauge,
  ListChecks,
  Regex,
  UploadCloud,
  type LucideIcon,
} from 'lucide-react';
import type { NavIconName } from '../../types/transact';

/** Maps the lightweight icon names stored in nav data to lucide components. */
export const NAV_ICONS: Record<NavIconName, LucideIcon> = {
  gauge: Gauge,
  'list-checks': ListChecks,
  'file-search': FileSearch,
  'clipboard-check': ClipboardCheck,
  boxes: Boxes,
  regex: Regex,
  'upload-cloud': UploadCloud,
  'bar-chart': BarChart3,
  activity: Activity,
};
