import { DashboardShell } from "@/components/dashboard-shell";
import { EmployeeStatusView } from "@/components/employee-status-view";

export const dynamicParams=false;
export function generateStaticParams(){return ["1038","1241","1176","1124","1288","1301","1266","1092"].map(id=>({id}));}

export default async function EmployeePage({params}:{params:Promise<{id:string}>}){
  const {id}=await params;
  return <DashboardShell role="hr"><EmployeeStatusView initialId={id}/></DashboardShell>;
}
