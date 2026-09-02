import { notFound } from "next/navigation";
import { AlertTriangle, BookOpenCheck, CalendarClock, CheckCircle2, ClipboardCheck, HeartPulse, ShieldCheck, UserRound } from "lucide-react";
import { DashboardShell } from "@/components/dashboard-shell";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const dynamicParams = false;
const people: Record<string, any> = {
  "1038": { name:"مهدی کریمی", unit:"تولید", position:"اپراتور ارشد خط", rank:"کارشناس", score:38, state:"فوری", avatar:"م", hire:"۱۳۹۸/۰۴/۱۲", education:"کارشناسی مهندسی صنایع", contract:"رسمی", attendance:"۷۴٪", performance:"۵۱", training:"۶۲٪", health:"معتبر تا آذر ۱۴۰۵", indicators:[["عملکرد",51],["انضباط و حضور",42],["همکاری تیمی",61],["یادگیری",62],["ایمنی رفتاری",55]], reasons:["۳ تأخیر بیش از ۳۰ دقیقه در این دوره","کاهش ۱۲ امتیازی ارزیابی عملکرد","عدم تکمیل دوره بازخورد اثربخش"], actions:["جلسه بازخورد با سرپرست","برنامه بهبود عملکرد ۳۰ روزه","ثبت‌نام در دوره مدیریت زمان"] },
  "1241": { name:"رضا احمدی", unit:"نگهداری و تعمیرات", position:"تکنسین مکانیک", rank:"تکنسین", score:44, state:"پیگیری", avatar:"ر", hire:"۱۴۰۰/۰۸/۰۵", education:"کاردانی مکانیک", contract:"قراردادی", attendance:"۸۳٪", performance:"۶۴", training:"۴۸٪", health:"معتبر تا دی ۱۴۰۵", indicators:[["عملکرد",64],["انضباط و حضور",58],["همکاری تیمی",72],["یادگیری",48],["ایمنی رفتاری",39]], reasons:["آموزش ایمنی کار در ارتفاع تکمیل نشده","دو غیبت ثبت‌شده در شیفت شب"], actions:["تکمیل فوری آموزش ایمنی","بازنگری برنامه شیفت","ارزیابی مجدد پس از ۱۴ روز"] },
  "1176": { name:"سارا محمدی", unit:"بازرگانی", position:"کارشناس تأمین", rank:"کارشناس", score:51, state:"توسعه", avatar:"س", hire:"۱۳۹۹/۱۰/۲۱", education:"کارشناسی مدیریت بازرگانی", contract:"رسمی", attendance:"۹۲٪", performance:"۶۸", training:"۷۶٪", health:"معتبر تا اسفند ۱۴۰۵", indicators:[["عملکرد",68],["انضباط و حضور",86],["همکاری تیمی",49],["یادگیری",76],["کیفیت کار",71]], reasons:["افت همکاری تیمی در دو ارزیابی متوالی","کاهش مشارکت در جلسات بین‌واحدی"], actions:["کارگاه ارتباط مؤثر","جلسه کوچینگ با مدیر مستقیم","سنجش مجدد همکاری تیمی"] },
};
export function generateStaticParams() { return Object.keys(people).map((id) => ({ id })); }

function Placeholder({ title, description }: { title: string; description: string }) { return <div className="empty-tab"><strong>{title}</strong><p>{description}</p></div>; }

export default async function EmployeePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const person = people[id];
  if (!person) notFound();
  return <DashboardShell role="hr"><div className="dashboard-page-stack">
    <section className="employee-hero"><span className="employee-avatar">{person.avatar}</span><div><Badge className={person.state === "فوری" ? "urgent" : "soft-amber"}>{person.state}</Badge><h2>{person.name}</h2><p>شماره پرسنلی {id} · {person.position} · واحد {person.unit}</p></div><div className="employee-score"><strong>{person.score}</strong><span>امتیاز ریسک فردی</span></div></section>
    <Tabs defaultValue="overview" className="profile-tabs">
      <TabsList><TabsTrigger value="overview"><UserRound />نمای ۳۶۰</TabsTrigger><TabsTrigger value="attendance"><CalendarClock />حضور</TabsTrigger><TabsTrigger value="performance"><ClipboardCheck />عملکرد</TabsTrigger><TabsTrigger value="training"><BookOpenCheck />آموزش</TabsTrigger><TabsTrigger value="health"><HeartPulse />سلامت</TabsTrigger></TabsList>
      <TabsContent value="overview" className="tab-panel-grid">
        <Card className="panel-card"><CardHeader><CardTitle>اطلاعات شغلی</CardTitle><Badge variant="outline">داده راهکاران</Badge></CardHeader><CardContent className="fact-grid">
          <div className="fact"><span>رتبه شغلی</span><strong>{person.rank}</strong></div><div className="fact"><span>تاریخ استخدام</span><strong>{person.hire}</strong></div><div className="fact"><span>تحصیلات</span><strong>{person.education}</strong></div><div className="fact"><span>نوع قرارداد</span><strong>{person.contract}</strong></div><div className="fact"><span>نرخ حضور</span><strong>{person.attendance}</strong></div><div className="fact"><span>آخرین عملکرد</span><strong>{person.performance} از ۱۰۰</strong></div>
        </CardContent></Card>
        <Card className="panel-card"><CardHeader><CardTitle>چرایی امتیاز</CardTitle><ShieldCheck /></CardHeader><CardContent className="score-breakdown">{person.indicators.map(([label,value]:[string,number]) => <div className={`indicator-row ${value < 60 ? "low" : ""}`} key={label}><span>{label}</span><div className="indicator-track"><b style={{width:`${value}%`}} /></div><strong>{value}</strong></div>)}</CardContent></Card>
        <Card className="panel-card"><CardHeader><CardTitle>سیگنال‌های نیازمند توجه</CardTitle><AlertTriangle /></CardHeader><CardContent className="action-list">{person.reasons.map((reason:string,index:number) => <div className="action-item" key={reason}><span>{index+1}</span><div><strong>{reason}</strong><p>منبع: حضور، عملکرد یا آموزش</p></div></div>)}</CardContent></Card>
        <Card className="panel-card"><CardHeader><CardTitle>اقدامات توسعه‌ای پیشنهادی</CardTitle><CheckCircle2 /></CardHeader><CardContent className="action-list">{person.actions.map((action:string,index:number) => <div className="action-item" key={action}><span>{index+1}</span><div><strong>{action}</strong><p>نیازمند تأیید مدیر منابع انسانی</p></div></div>)}</CardContent></Card>
      </TabsContent>
      <TabsContent value="attendance"><Placeholder title={`نرخ حضور مؤثر: ${person.attendance}`} description="تقویم ورود و خروج، تأخیر، غیبت و اضافه‌کاری در توسعه بعدی به این بخش افزوده می‌شود." /></TabsContent>
      <TabsContent value="performance"><Placeholder title={`امتیاز عملکرد: ${person.performance}`} description="تاریخچه ارزیابی‌ها، اهداف و بازخورد مدیر مستقیم در این بخش تجمیع می‌شود." /></TabsContent>
      <TabsContent value="training"><Placeholder title={`پوشش آموزش: ${person.training}`} description="دوره‌های گذرانده، الزامی، عقب‌افتاده و پیشنهادهای آموزشی اینجا نمایش داده می‌شوند." /></TabsContent>
      <TabsContent value="health"><Placeholder title={person.health} description="فقط وضعیت اعتبار معاینات برای مدیر منابع انسانی نمایش داده می‌شود؛ داده پزشکی در امتیاز رفتار سازمانی استفاده نشده است." /></TabsContent>
    </Tabs>
  </div></DashboardShell>;
}
