"use client";

import { notFound, useRouter } from "next/navigation";
import { AlertTriangle, ArrowLeft, BookOpenCheck, CalendarCheck2, Clock3, ShieldCheck, TrendingUp, Users } from "lucide-react";
import { departments, SectionHeading, TrendChart } from "@/components/dashboard-widgets";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const details: Record<string, { attendance: string; training: string; overtime: string; manager: string; indicators: { label: string; value: number }[]; actions: string[] }> = {
  financial: { attendance: "۹۶٪", training: "۸۸٪", overtime: "۴.۲٪", manager: "نرگس صادقی", indicators: [{label:"دقت و کیفیت",value:94},{label:"همکاری بین‌واحدی",value:86},{label:"انضباط کاری",value:91},{label:"یادگیری و توسعه",value:78}], actions:["تداوم مسیر جانشین‌پروری","اشتراک تجربه کنترل هزینه با واحدها"] },
  "human-resources": { attendance: "۹۵٪", training: "۹۲٪", overtime: "۳.۱٪", manager: "مریم اکبری", indicators: [{label:"خدمت‌رسانی داخلی",value:88},{label:"همکاری تیمی",value:91},{label:"انضباط کاری",value:86},{label:"یادگیری و توسعه",value:83}], actions:["تکمیل مدل شایستگی مشاغل","استانداردسازی چرخه بازخورد"] },
  sales: { attendance: "۹۲٪", training: "۸۱٪", overtime: "۶.۸٪", manager: "حمید رضایی", indicators: [{label:"نتیجه‌گرایی",value:87},{label:"همکاری تیمی",value:74},{label:"انضباط کاری",value:72},{label:"یادگیری و توسعه",value:70}], actions:["کارگاه مذاکره پیشرفته","بازطراحی جلسات بازخورد هفتگی"] },
  commerce: { attendance: "۸۹٪", training: "۷۲٪", overtime: "۸.۴٪", manager: "لیلا توکلی", indicators: [{label:"دقت و کیفیت",value:79},{label:"همکاری بین‌واحدی",value:65},{label:"انضباط کاری",value:68},{label:"یادگیری و توسعه",value:61}], actions:["دوره مدیریت تأمین‌کننده","بازبینی بارکاری کارشناسان"] },
  warehouse: { attendance: "۸۷٪", training: "۶۸٪", overtime: "۱۰.۲٪", manager: "علی مرادی", indicators: [{label:"دقت عملیات",value:76},{label:"همکاری تیمی",value:69},{label:"انضباط کاری",value:62},{label:"ایمنی رفتاری",value:58}], actions:["تکمیل آموزش ایمنی انبار","اصلاح الگوی شیفت و اضافه‌کاری"] },
  maintenance: { attendance: "۸۴٪", training: "۶۱٪", overtime: "۱۳.۶٪", manager: "رضا حیدری", indicators: [{label:"قابلیت اتکا",value:72},{label:"همکاری تیمی",value:63},{label:"انضباط کاری",value:54},{label:"ایمنی رفتاری",value:49}], actions:["اجرای آموزش فوری ایمنی","تحلیل کمبود نیرو در شیفت شب"] },
  production: { attendance: "۸۲٪", training: "۶۴٪", overtime: "۱۵.۸٪", manager: "مجتبی کاظمی", indicators: [{label:"کیفیت خروجی",value:68},{label:"همکاری تیمی",value:62},{label:"انضباط کاری",value:57},{label:"ایمنی رفتاری",value:55}], actions:["بازطراحی الگوی شیفت تولید","برنامه بهبود برای ۱۴ مورد پرریسک","کارگاه سرپرستی و بازخورد"] },
};

export function DepartmentDashboard({ slug, role }: { slug: string; role: "executive" | "hr" }) {
  const router = useRouter();
  const department = departments.find((item) => item.slug === slug);
  const detail = details[slug];
  if (!department || !detail) notFound();
  const departmentBase = role === "hr" ? "/hr/departments" : "/departments";
  return <div className="dashboard-page-stack">
    <section className="department-selector-bar">
      <div><span>عملکرد واحدها</span><strong>واحد موردنظر را انتخاب کنید</strong></div>
      <label><span>واحد سازمانی</span><select value={slug} onChange={(event)=>router.push(`${departmentBase}/${event.target.value}`)} aria-label="انتخاب واحد سازمانی">{departments.map((item)=><option value={item.slug} key={item.slug}>{item.name}</option>)}</select></label>
    </section>
    <Card className="detail-hero"><CardContent className="hero-content"><div><p className="eyebrow">تحلیل عمیق واحد سازمانی</p><h2>واحد {department.name}</h2><p>نمای تجمیعی عملکرد، حضور، آموزش و رفتار سازمانی. این صفحه فاقد اطلاعات هویتی کارکنان است و برای مدیرعامل نیز قابل مشاهده است.</p></div><div className="hero-score" style={{ "--score": `${department.score * 3.6}deg` } as React.CSSProperties}><div><strong>{department.score}</strong><span>امتیاز واحد</span></div></div></CardContent></Card>
    <section className="metric-strip">
      <div className="metric-tile"><span><Users />تعداد نیرو</span><strong>{department.people} نفر</strong><small>مدیر واحد: {detail.manager}</small></div>
      <div className="metric-tile"><span><AlertTriangle />موارد پرریسک</span><strong>{department.risk} مورد</strong><small>نیازمند اقدام منابع انسانی</small></div>
      <div className="metric-tile"><span><CalendarCheck2 />نرخ حضور مؤثر</span><strong>{detail.attendance}</strong><small>با لحاظ تأخیر و غیبت</small></div>
      <div className="metric-tile"><span><BookOpenCheck />پوشش آموزش</span><strong>{detail.training}</strong><small>تکمیل آموزش‌های الزامی</small></div>
    </section>
    <section className="analysis-grid">
      <Card className="panel-card"><CardHeader><CardTitle>روند سلامت سازمانی واحد</CardTitle><Badge className={`status-badge ${department.tone}`}>{department.state}</Badge></CardHeader><CardContent><TrendChart /></CardContent></Card>
      <Card className="panel-card"><CardHeader><CardTitle>سیگنال‌های عملیاتی</CardTitle><Clock3 /></CardHeader><CardContent className="action-list">
        <div className="action-item"><span>۱</span><div><strong>اضافه‌کاری</strong><p>{detail.overtime} از ساعات کار این دوره؛ روند باید با ظرفیت نیرو مقایسه شود.</p></div></div>
        <div className="action-item"><span>۲</span><div><strong>روند امتیاز</strong><p>{department.trend > 0 ? "بهبود" : "کاهش"} {Math.abs(department.trend)} درصدی نسبت به دوره قبل.</p></div></div>
        <div className="action-item"><span>۳</span><div><strong>کیفیت داده</strong><p>۹۲٪ رکوردهای این واحد کامل و قابل اتکا هستند.</p></div></div>
      </CardContent></Card>
    </section>
    <section className="analysis-grid">
      <Card className="panel-card"><CardHeader><CardTitle>شاخص‌های رفتاری واحد</CardTitle><ShieldCheck /></CardHeader><CardContent className="indicator-list">{detail.indicators.map((item) => <div className={`indicator-row ${item.value < 65 ? "low" : ""}`} key={item.label}><span>{item.label}</span><div className="indicator-track"><b style={{ width: `${item.value}%` }} /></div><strong>{item.value}</strong></div>)}</CardContent></Card>
      <Card className="panel-card"><CardHeader><CardTitle>اقدامات پیشنهادی</CardTitle><TrendingUp /></CardHeader><CardContent className="action-list">{detail.actions.map((action,index) => <div className="action-item" key={action}><span>{index + 1}</span><div><strong>{action}</strong><p>مالک اقدام: مدیر واحد و سرمایه‌های انسانی</p></div></div>)}</CardContent></Card>
    </section>
    <SectionHeading title="مقایسه با سایر واحدها" description="برای مشاهده جزئیات هر واحد از جدول داشبورد اصلی استفاده کنید" action="بازگشت به داشبورد" href={role === "hr" ? "/hr" : "/executive"} />
  </div>;
}
