import { Activity, AlertTriangle, Award, Clock3, GraduationCap, ShieldCheck, Users } from "lucide-react";
import { DashboardShell } from "@/components/dashboard-shell";
import { DepartmentTable, SectionHeading, StatCard, TrendChart } from "@/components/dashboard-widgets";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ExecutiveDashboard() {
  return <DashboardShell role="executive">
    <section className="page-intro"><div><p>تصویر کلان سازمان</p><h2>صبح بخیر؛ وضعیت سرمایه انسانی در یک نگاه</h2></div><div className="period-filter"><span>دوره گزارش:</span><strong>شش‌ماهه اول ۱۴۰۵</strong></div></section>
    <section className="stats-grid executive-stats">
      <StatCard label="نیروی فعال" value="۳۰۰" unit="نفر" trend={2.4} trendLabel="نسبت به دوره قبل" tone="navy" icon={Users} />
      <StatCard label="سلامت سازمانی" value="۷۹" unit="از ۱۰۰" trend={4.1} trendLabel="بهبود" tone="teal" icon={Activity} />
      <StatCard label="میانگین عملکرد" value="۷۶٫۸" unit="امتیاز" trend={1.8} trendLabel="رشد" tone="blue" icon={Award} />
      <StatCard label="حضور مؤثر" value="۹۲٫۴" unit="درصد" trend={0.7} trendLabel="بهبود" tone="cyan" icon={Clock3} />
      <StatCard label="موارد پرریسک" value="۳۶" unit="مورد" trend={-8.2} trendLabel="کاهش مطلوب" tone="amber" icon={AlertTriangle} />
      <StatCard label="تکمیل آموزش" value="۸۱" unit="درصد" trend={5.6} trendLabel="افزایش" tone="purple" icon={GraduationCap} />
    </section>
    <section className="dashboard-grid two-one">
      <Card className="chart-card"><CardHeader><CardTitle>روند شاخص سلامت سازمانی</CardTitle><span className="chart-legend"><i /> امتیاز کل سازمان</span></CardHeader><CardContent><TrendChart /></CardContent></Card>
      <Card className="attention-card"><CardHeader><CardTitle>نیازمند تصمیم مدیریتی</CardTitle><span className="attention-count">۳ موضوع</span></CardHeader><CardContent className="decision-list">
        <article><span className="decision-icon critical"><AlertTriangle /></span><div><strong>افت عملکرد شیفت دوم تولید</strong><p>۵٪ کاهش نسبت به دوره گذشته</p></div><em>فوری</em></article>
        <article><span className="decision-icon warning"><Clock3 /></span><div><strong>افزایش تأخیر واحد تعمیرات</strong><p>۸ مورد پرریسک در این دوره</p></div><em>این هفته</em></article>
        <article><span className="decision-icon normal"><ShieldCheck /></span><div><strong>آموزش ایمنی انبار</strong><p>۷۱٪ تکمیل؛ کمتر از هدف ۹۰٪</p></div><em>پیگیری</em></article>
      </CardContent></Card>
    </section>
    <section><SectionHeading title="وضعیت واحدهای سازمانی" description="مقایسه امتیاز، روند و تعداد موارد پرریسک بدون نمایش اطلاعات فردی" action="مشاهده گزارش کامل" /><Card className="table-card"><CardContent className="p-0"><DepartmentTable /></CardContent></Card></section>
  </DashboardShell>;
}
