import Link from "next/link";
import { Activity, AlertTriangle, BrainCircuit, CheckCircle2, ShieldCheck, Sparkles, Target, Users } from "lucide-react";
import { departments } from "@/components/dashboard-widgets";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const indicators = [{label:"همکاری تیمی",value:74},{label:"انضباط و حضور",value:68},{label:"یادگیری و توسعه",value:71},{label:"کیفیت و نتیجه‌گرایی",value:77},{label:"ایمنی رفتاری",value:66}];
const weights = [["عملکرد","۳۰٪"],["حضور","۲۵٪"],["رفتار","۲۵٪"],["آموزش","۱۵٪"],["کیفیت داده","۵٪"]];

export function OrganizationalBehaviorDashboard({ role }: { role: "executive" | "hr" }) {
  return <div className="dashboard-page-stack">
    <Card className="detail-hero"><CardContent className="hero-content"><div><p className="eyebrow">حاکمیت داده بر رفتار سازمانی</p><h2>نبض رفتاری سازمان</h2><p>ترکیب کنترل‌شده داده‌های عملکرد، حضور، آموزش و شایستگی‌های رفتاری برای تشخیص ریسک و پیشنهاد اقدام؛ بدون استفاده از جزئیات پزشکی.</p></div><div className="hero-score" style={{"--score":"259deg"} as React.CSSProperties}><div><strong>۷۲</strong><span>شاخص کل سازمان</span></div></div></CardContent></Card>
    <section className="behavior-summary">
      <div className="behavior-card"><span>شاخص رفتار سازمانی</span><strong>۷۲ از ۱۰۰</strong><small>۴٪ بهتر از دوره قبل</small></div>
      <div className="behavior-card"><span>موارد پرریسک</span><strong>۳۶ نفر</strong><small>۱۲٪ از کل نیروی انسانی</small></div>
      <div className="behavior-card"><span>پیشرفت اقدامات</span><strong>۶۴٪</strong><small>۲۸ اقدام باز</small></div>
      <div className="behavior-card"><span>استعدادهای با ظرفیت رشد</span><strong>۴۱ نفر</strong><small>مناسب مسیر جانشین‌پروری</small></div>
    </section>
    <section className="analysis-grid">
      <Card className="panel-card"><CardHeader><CardTitle>شاخص‌های رفتاری کل سازمان</CardTitle><Activity /></CardHeader><CardContent className="indicator-list">{indicators.map((item)=><div className={`indicator-row ${item.value<70?"low":""}`} key={item.label}><span>{item.label}</span><div className="indicator-track"><b style={{width:`${item.value}%`}} /></div><strong>{item.value}</strong></div>)}</CardContent></Card>
      <Card className="panel-card"><CardHeader><CardTitle>بینش مدیریتی این دوره</CardTitle><BrainCircuit /></CardHeader><CardContent className="action-list">
        <div className="action-item"><span><AlertTriangle /></span><div><strong>ریسک متمرکز در عملیات</strong><p>۶۱٪ موارد پرریسک در تولید و نگهداری متمرکز شده‌اند.</p></div></div>
        <div className="action-item"><span><Target /></span><div><strong>اولویت اقدام</strong><p>اصلاح شیفت، آموزش ایمنی و بازخورد سرپرستان بیشترین اثر را دارند.</p></div></div>
        <div className="action-item"><span><Sparkles /></span><div><strong>فرصت توسعه</strong><p>واحد مالی می‌تواند الگوی انضباط و کیفیت برای دیگر واحدها باشد.</p></div></div>
      </CardContent></Card>
    </section>
    <Card className="panel-card"><CardHeader><CardTitle>نقشه وضعیت واحدهای سازمانی</CardTitle><Badge variant="outline">دوره شهریور ۱۴۰۵</Badge></CardHeader><CardContent className="unit-heatmap">{departments.map((department)=>{ const content=<><div className="heat-head"><strong>{department.name}</strong><span className="heat-score">{department.score}</span></div><div className="heat-bar"><b style={{width:`${department.score}%`}} /></div><small>{department.people} نفر · {department.risk} مورد پرریسک</small></>; const className=`page-link heat-card ${department.score<63?"risk":department.score<72?"warn":""}`; return role==="executive"?<Link href={`/departments/${department.slug}`} className={className} key={department.slug}>{content}</Link>:<div className={className} key={department.slug}>{content}</div>; })}</CardContent></Card>
    <section className="analysis-grid">
      <Card className="panel-card"><CardHeader><CardTitle>مدل امتیازدهی نسخه دمو</CardTitle><ShieldCheck /></CardHeader><CardContent><div className="model-weights">{weights.map(([label,value])=><div className="weight-item" key={label}><strong>{value}</strong><span>{label}</span></div>)}</div><p className="risk-reason">وزن‌ها برای نسخه نمایشی طراحی شده‌اند و پیش از استفاده واقعی باید با مدیران، متخصص منابع انسانی و کنترل سوگیری اعتبارسنجی شوند.</p></CardContent></Card>
      <Card className="panel-card"><CardHeader><CardTitle>قواعد حاکمیت داده</CardTitle><CheckCircle2 /></CardHeader><CardContent className="action-list">
        <div className="action-item"><span>۱</span><div><strong>حداقل‌گرایی دسترسی</strong><p>مدیرعامل فقط اطلاعات تجمیعی واحدها را می‌بیند.</p></div></div>
        <div className="action-item"><span>۲</span><div><strong>قابلیت توضیح</strong><p>هر امتیاز باید به شاخص و منبع داده قابل ردیابی باشد.</p></div></div>
        <div className="action-item"><span>۳</span><div><strong>عدم استفاده از پزشکی</strong><p>اطلاعات معاینات در امتیاز رفتاری و تصمیم استخدامی وارد نمی‌شود.</p></div></div>
      </CardContent></Card>
    </section>
  </div>;
}
