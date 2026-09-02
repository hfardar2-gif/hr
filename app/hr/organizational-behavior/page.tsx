import { DashboardShell } from "@/components/dashboard-shell";
import { OrganizationalBehaviorDashboard } from "@/components/organizational-behavior-dashboard";

export default function HrOrganizationalBehaviorPage() {
  return <DashboardShell role="hr"><OrganizationalBehaviorDashboard role="hr" /></DashboardShell>;
}
