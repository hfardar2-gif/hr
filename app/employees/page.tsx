import { DashboardShell } from "@/components/dashboard-shell";
import { EmployeeStatusView } from "@/components/employee-status-view";

export default function EmployeesPage(){
  return <DashboardShell role="hr"><EmployeeStatusView /></DashboardShell>;
}
