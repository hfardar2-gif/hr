import { DashboardShell } from "@/components/dashboard-shell";
import { OrganizationalBehaviorDashboard } from "@/components/organizational-behavior-dashboard";

export default function OrganizationalBehaviorPage() {
  return <DashboardShell role="executive"><OrganizationalBehaviorDashboard role="executive" /></DashboardShell>;
}
