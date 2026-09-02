import { DashboardShell } from "@/components/dashboard-shell";
import { CurrentStatusDashboard } from "@/components/current-status-dashboard";

export default function HrCurrentStatusPage() {
  return <DashboardShell role="hr"><CurrentStatusDashboard role="hr" /></DashboardShell>;
}
