"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Activity, Bell, BookOpenCheck, BriefcaseBusiness, Building2, CalendarClock, ChevronDown, ClipboardCheck, Database, FileChartColumn, HeartPulse, Gauge, LayoutDashboard, LogOut, Search, Users } from "lucide-react";
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarInset, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

const executiveItems = [
  { label: "نمای کلی سازمان", icon: LayoutDashboard, href: "/executive" },
  { label: "وضعیت جاری سازمان", icon: Gauge, href: "/current-status" },
  { label: "سرمایه انسانی", icon: Users, href: "/executive" },
  { label: "عملکرد واحدها", icon: Building2, href: "/departments/production" },
  { label: "رفتار سازمانی", icon: Activity, href: "/organizational-behavior" },
  { label: "گزارش مدیریتی", icon: FileChartColumn, href: "/executive" },
];
const hrItems = [
  { label: "داشبورد منابع انسانی", icon: LayoutDashboard, href: "/hr" },
  { label: "وضعیت جاری سازمان", icon: Gauge, href: "/hr/current-status" },
  { label: "کارکنان", icon: Users, href: "/employees" },
  { label: "حضور و غیاب", icon: CalendarClock, href: "/employees/1038" },
  { label: "ارزیابی عملکرد", icon: ClipboardCheck, href: "/employees/1038" },
  { label: "رفتار سازمانی", icon: Activity, href: "/organizational-behavior" },
  { label: "آموزش و توسعه", icon: BookOpenCheck, href: "/employees/1038" },
  { label: "استخدام و خروج", icon: BriefcaseBusiness, href: "/hr" },
  { label: "سلامت و معاینات", icon: HeartPulse, href: "/employees/1038" },
  { label: "واحدهای سازمانی", icon: Building2, href: "/departments/production" },
  { label: "حاکمیت داده", icon: Database, href: "/hr" },
];

function BrandMark() { return <div className="brand-mark small" aria-hidden="true"><span /><span /><span /></div>; }

export function DashboardShell({ role, children }: { role: "executive" | "hr"; children: React.ReactNode }) {
  const pathname = usePathname();
  const items = role === "executive" ? executiveItems : hrItems;
  const roleLabel = role === "executive" ? "مدیرعامل" : "مدیر منابع انسانی";
  return (
    <div dir="rtl" className="dashboard-root">
      <SidebarProvider>
        <Sidebar side="right" collapsible="icon" className="industrial-sidebar">
          <SidebarHeader className="border-b border-white/10 p-4">
            <div className="flex items-center gap-3 overflow-hidden"><BrandMark /><div className="min-w-0 group-data-[collapsible=icon]:hidden"><strong className="block truncate text-sm text-white">سامانه هوشمند سرمایه انسانی</strong><span className="block truncate text-xs text-slate-400">حاکمیت داده سرمایه‌های انسانی</span></div></div>
          </SidebarHeader>
          <SidebarContent className="px-2 py-3">
            <SidebarGroup><SidebarGroupLabel className="text-slate-500">فضای کاری {roleLabel}</SidebarGroupLabel><SidebarGroupContent><SidebarMenu>
              {items.map((item) => {
                const active = pathname === item.href || (item.href !== "/executive" && item.href !== "/hr" && pathname.startsWith(item.href));
                return <SidebarMenuItem key={item.label}><SidebarMenuButton asChild tooltip={item.label} isActive={active} className="nav-item"><Link href={item.href}><item.icon /><span>{item.label}</span></Link></SidebarMenuButton></SidebarMenuItem>;
              })}
            </SidebarMenu></SidebarGroupContent></SidebarGroup>
          </SidebarContent>
          <SidebarFooter className="border-t border-white/10 p-3"><SidebarMenu><SidebarMenuItem><SidebarMenuButton asChild tooltip="خروج از نسخه نمایشی" className="nav-item"><Link href="/"><LogOut /><span>خروج از نسخه نمایشی</span></Link></SidebarMenuButton></SidebarMenuItem></SidebarMenu></SidebarFooter>
        </Sidebar>
        <SidebarInset className="dashboard-surface">
          <header className="topbar">
            <div className="flex items-center gap-3"><SidebarTrigger className="md:hidden" /><div><p className="topbar-date">چهارشنبه، ۱۱ شهریور ۱۴۰۵</p><h1>{role === "executive" ? "داشبورد مدیرعامل" : "داشبورد منابع انسانی"}</h1></div></div>
            <div className="topbar-actions"><div className="global-search"><Search /><span>جستجو در گزارش‌ها</span></div><Button variant="outline" size="icon" aria-label="اعلان‌ها" className="relative"><Bell /><i className="notification-dot" /></Button><button className="profile-chip"><span className="avatar">{role === "executive" ? "م‌ع" : "م‌ا"}</span><span><strong>{roleLabel}</strong><small>شرکت صنعتی نمونه</small></span><ChevronDown /></button></div>
          </header>
          <main className="dashboard-content" key={pathname}>{children}</main>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
