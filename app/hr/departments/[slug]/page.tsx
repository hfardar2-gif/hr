import { DashboardShell } from "@/components/dashboard-shell";
import { DepartmentDashboard } from "@/components/department-dashboard";
import { departments } from "@/components/dashboard-widgets";
export const dynamicParams=false;
export function generateStaticParams(){return departments.map(department=>({slug:department.slug}));}
export default async function HrDepartmentPage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;return <DashboardShell role="hr"><DepartmentDashboard slug={slug} role="hr"/></DashboardShell>;}
