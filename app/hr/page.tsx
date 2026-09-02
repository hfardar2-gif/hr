import { AlertTriangle, BookOpenCheck, CheckCircle2, ClipboardCheck, HeartPulse, ListChecks, UserRoundSearch, Users } from "lucide-react";
import { DashboardShell } from "@/components/dashboard-shell";
import { DataQualityRing, DepartmentTable, SectionHeading, StatCard } from "@/components/dashboard-widgets";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const risks = [
  { name: "مهدی کریمی", code: "پرسنلی ۱۰۳۸", dept: "تولید", reason: "کاهش عملکرد و تأخیر مکرر", score: 38, state: "فوری" },
  { name: "رضا احمدی", code: "پرسنلی ۱۲۴۱", dept: "تعمیرات", reason: "آموزش ایمنی تکمیل نشده", score: 44, state: "پیگیری" },
  { name: "سارا محمدی", code: "پرسنلی ۱۱۷۶", dept: "بازرگانی", reason: "افت همکاری تیمی", score: 51, state: "توسعه" },
];

export default function HrDashboard() {
  return <DashboardShell role="hr">
    <section className="page-intro"><div><p>مرکز کنترل سرمایه انسانی</p><h2>صبح بخیر؛ ۱۲ اقدام نیازمند پیگیری شماست</h2></div><div className="period-filter"><span>دوره گزارش:</span><strong>شهریور ۱۴۰۵</strong></div></section>
    <section className="stats-grid hr-stats">
      <StatCard label="کل کارکنان" value="۳۰۰" unit="نفر" trend={2.4} trendLabel="نسبت به دوره قبل" tone="navy" icon={Users} />
      <StatCard label="موارد پرریسک" value="۳۶" unit="نفر" trend={-8.2} trendLabel="کاهش مطلوب" tone="amber" icon={AlertTriangle} />
      <StatCard label="ارزیابی‌های ناقص" value="۱۷" unit="مورد" trend={-12} trendLabel="کاهش" tone="blue" icon={ClipboardCheck} />
      <StatCard label="آموزش عقب‌افتاده" value="۲۴" unit="مورد" trend={3.1} trendLabel="افزایش" tone="purple" icon={BookOpenCheck} />
      <StatCard label="معاینات منقضی" value="۹" unit="مورد" trend={-4} trendLabel="کاهش" tone="cyan" icon={HeartPulse} />
    </section>
    <section className="dashboard-grid one-one-one">
      <Card className="quality-card"><CardHeader><CardTitle>کیفیت و حاکمیت داده</CardTitle><Badge variant="outline">به‌روزرسانی امروز</Badge></CardHeader><CardContent className="quality-content"><DataQualityRing /><div className="quality-list"><div><span><CheckCircle2 /> راهکاران</span><strong>۹۸٪</strong></div><div><span><CheckCircle2 /> دنیای پردازش</span><strong>۹۶٪</strong></div><div><span><AlertTriangle /> ارزیابی Excel</span><strong>۸۱٪</strong></div></div></CardContent></Card>
      <Card className="workflow-card"><CardHeader><CardTitle>اقدامات جاری</CardTitle><Badge className="soft-teal">۲۸ اقدام باز</Badge></CardHeader><CardContent className="workflow-list">
        <div><span className="workflow-icon"><ListChecks /></span><div><strong>برنامه بهبود عملکرد</strong><p>۸ اقدام · ۳ سررسید امروز</p></div><Progress value={62} /></div>
        <div><span className="workflow-icon"><BookOpenCheck /></span><div><strong>برنامه‌های آموزشی</strong><p>۱۳ اقدام · ۷ تکمیل‌شده</p></div><Progress value={54} /></div>
        <div><span className="workflow-icon"><UserRoundSearch /></span><div><strong>جلسات بازخورد</strong><p>۷ اقدام · ۲ در انتظار</p></div><Progress value={71} /></div>
      </CardContent></Card>
      <Card className="risk-list-card"><CardHeader><CardTitle>اولویت‌های امروز</CardTitle><button>مشاهده همه</button></CardHeader><CardContent className="mini-risk-list">{risks.map((r) => <article key={r.code}><span className="person-avatar">{r.name.slice(0,1)}</span><div><strong>{r.name}</strong><p>{r.dept} · امتیاز {r.score}</p></div><Badge className={r.state === "فوری" ? "urgent" : "soft-amber"}>{r.state}</Badge></article>)}</CardContent></Card>
    </section>
    <section><SectionHeading title="تحلیل واحدهای سازمانی" description="از وضعیت کل سازمان به واحد و سپس پرونده فردی وارد شوید" action="گزارش رفتار سازمانی" /><Card className="table-card"><CardContent className="p-0"><DepartmentTable hr /></CardContent></Card></section>
    <section className="risk-section"><SectionHeading title="افراد نیازمند توجه" description="موارد اولویت‌دار بر اساس عملکرد، حضور، آموزش و رفتار سازمانی" action="مشاهده ۳۶ مورد" /><div className="risk-cards">{risks.map((r) => <Card key={r.code} className="person-risk-card"><CardContent><div className="person-head"><span className="person-avatar large">{r.name.slice(0,1)}</span><div><strong>{r.name}</strong><p>{r.code} · واحد {r.dept}</p></div><span className="risk-score">{r.score}</span></div><p className="risk-reason">{r.reason}</p><div className="person-actions"><Badge className={r.state === "فوری" ? "urgent" : "soft-amber"}>{r.state}</Badge><button>بررسی پرونده</button></div></CardContent></Card>)}</div></section>
  </DashboardShell>;
}
