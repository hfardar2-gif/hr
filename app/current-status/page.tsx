import { DashboardShell } from "@/components/dashboard-shell";
import { CurrentStatusDashboard } from "@/components/current-status-dashboard";

export default function CurrentStatusPage() {
  return <DashboardShell role="executive"><CurrentStatusDashboard role="executive" /></DashboardShell>;
}
