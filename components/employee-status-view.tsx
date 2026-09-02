"use client";

import { useMemo, useState } from "react";
import { Activity, AlertTriangle, BookOpenCheck, CalendarClock, CheckCircle2, ClipboardCheck, HeartPulse, Search, ShieldCheck, UserRound, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type EmployeeRecord = {
  id:string; name:string; unit:string; position:string; rank:string; score:number; state:string; avatar:string;
  hire:string; education:string; contract:string; location:string; attendance:number; performance:number; training:number;
  health:string; supervisor:string; indicators:[string,number][]; reasons:string[]; actions:string[];
};

const employees:EmployeeRecord[]=[
  {id:"1038",name:"مهدی کریمی",unit:"تولید",position:"اپراتور ارشد خط",rank:"کارشناس",score:38,state:"فوری",avatar:"م",hire:"۱۳۹۸/۰۴/۱۲",education:"کارشناسی مهندسی صنایع",contract:"رسمی",location:"تهران",attendance:74,performance:51,training:62,health:"معتبر تا آذر ۱۴۰۵",supervisor:"مجتبی کاظمی",indicators:[["عملکرد",51],["انضباط و حضور",42],["همکاری تیمی",61],["یادگیری",62],["ایمنی رفتاری",55]],reasons:["۳ تأخیر بیش از ۳۰ دقیقه در این دوره","کاهش ۱۲ امتیازی ارزیابی عملکرد","عدم تکمیل دوره بازخورد اثربخش"],actions:["جلسه بازخورد با سرپرست","برنامه بهبود عملکرد ۳۰ روزه","ثبت‌نام در دوره مدیریت زمان"]},
  {id:"1241",name:"رضا احمدی",unit:"نگهداری و تعمیرات",position:"تکنسین مکانیک",rank:"تکنسین",score:44,state:"پیگیری",avatar:"ر",hire:"۱۴۰۰/۰۸/۰۵",education:"کاردانی مکانیک",contract:"پیمانی",location:"شیراز",attendance:83,performance:64,training:48,health:"معتبر تا دی ۱۴۰۵",supervisor:"رضا حیدری",indicators:[["عملکرد",64],["انضباط و حضور",58],["همکاری تیمی",72],["یادگیری",48],["ایمنی رفتاری",39]],reasons:["آموزش ایمنی کار در ارتفاع تکمیل نشده","دو غیبت ثبت‌شده در شیفت شب"],actions:["تکمیل فوری آموزش ایمنی","بازنگری برنامه شیفت","ارزیابی مجدد پس از ۱۴ روز"]},
  {id:"1176",name:"سارا محمدی",unit:"بازرگانی",position:"کارشناس تأمین",rank:"کارشناس",score:51,state:"توسعه",avatar:"س",hire:"۱۳۹۹/۱۰/۲۱",education:"کارشناسی مدیریت بازرگانی",contract:"رسمی",location:"تهران",attendance:92,performance:68,training:76,health:"معتبر تا اسفند ۱۴۰۵",supervisor:"لیلا توکلی",indicators:[["عملکرد",68],["انضباط و حضور",86],["همکاری تیمی",49],["یادگیری",76],["کیفیت کار",71]],reasons:["افت همکاری تیمی در دو ارزیابی متوالی","کاهش مشارکت در جلسات بین‌واحدی"],actions:["کارگاه ارتباط مؤثر","جلسه کوچینگ با مدیر مستقیم","سنجش مجدد همکاری تیمی"]},
  {id:"1124",name:"علی اکبری",unit:"تولید",position:"سرپرست شیفت",rank:"سرپرست",score:72,state:"پایدار",avatar:"ع",hire:"۱۳۹۷/۰۲/۱۸",education:"کارشناسی مهندسی مکانیک",contract:"پیمانی",location:"تهران",attendance:91,performance:78,training:84,health:"معتبر تا بهمن ۱۴۰۵",supervisor:"مجتبی کاظمی",indicators:[["عملکرد",78],["انضباط و حضور",82],["همکاری تیمی",74],["یادگیری",84],["ایمنی رفتاری",76]],reasons:["قرارداد در ۳۰ روز آینده نیازمند تصمیم است"],actions:["بررسی تمدید قرارداد","ورود به مسیر جانشین‌پروری"]},
  {id:"1288",name:"مریم جعفری",unit:"فروش",position:"کارشناس فروش",rank:"کارشناس",score:81,state:"مطلوب",avatar:"م",hire:"۱۴۰۲/۰۶/۰۱",education:"کارشناسی مدیریت",contract:"پروژه‌ای",location:"مشهد",attendance:95,performance:86,training:88,health:"معتبر تا فروردین ۱۴۰۶",supervisor:"حمید رضایی",indicators:[["عملکرد",86],["انضباط و حضور",91],["همکاری تیمی",82],["یادگیری",88],["نتیجه‌گرایی",89]],reasons:["مورد پرریسک فعالی ثبت نشده است"],actions:["بررسی مسیر ارتقای شغلی","مشارکت در منتورینگ کارشناسان جدید"]},
  {id:"1301",name:"الهام حسینی",unit:"بازرگانی",position:"کارشناس خرید",rank:"کارشناس",score:67,state:"پیگیری",avatar:"ا",hire:"۱۴۰۳/۰۱/۲۵",education:"کارشناسی ارشد مدیریت",contract:"پروژه‌ای",location:"تهران",attendance:79,performance:73,training:71,health:"نیازمند تمدید در مهر ۱۴۰۵",supervisor:"لیلا توکلی",indicators:[["عملکرد",73],["انضباط و حضور",67],["همکاری تیمی",75],["یادگیری",71],["کیفیت کار",78]],reasons:["مرخصی بلندمدت در پرونده فعال است"],actions:["تعیین برنامه بازگشت به کار","به‌روزرسانی معاینات دوره‌ای"]},
  {id:"1266",name:"محمد نادری",unit:"انبار",position:"انباردار",rank:"تکنسین",score:58,state:"توسعه",avatar:"م",hire:"۱۴۰۱/۱۱/۱۲",education:"کاردانی لجستیک",contract:"امانی",location:"شیراز",attendance:86,performance:66,training:59,health:"معتبر تا آبان ۱۴۰۵",supervisor:"علی مرادی",indicators:[["عملکرد",66],["انضباط و حضور",69],["همکاری تیمی",64],["یادگیری",59],["ایمنی رفتاری",52]],reasons:["دوره ایمنی انبار تکمیل نشده است","دو تأخیر در ماه جاری"],actions:["تکمیل آموزش ایمنی انبار","جلسه تنظیم برنامه حضور"]},
  {id:"1092",name:"نرگس صادقی",unit:"مالی",position:"سرپرست حسابداری",rank:"سرپرست",score:89,state:"ممتاز",avatar:"ن",hire:"۱۳۹۶/۰۹/۰۳",education:"کارشناسی ارشد حسابداری",contract:"رسمی",location:"تهران",attendance:97,performance:92,training:94,health:"معتبر تا اردیبهشت ۱۴۰۶",supervisor:"مدیر مالی",indicators:[["عملکرد",92],["انضباط و حضور",96],["همکاری تیمی",88],["یادگیری",94],["کیفیت کار",95]],reasons:["هیچ هشدار فعالی ثبت نشده است"],actions:["نامزد جانشینی نقش مدیر مالی","انتقال تجربه به کارشناسان واحد"]},
];

const fa=(value:number)=>value.toLocaleString("fa-IR");
const badgeTone=(state:string)=>state==="فوری"?"urgent":state==="ممتاز"||state==="مطلوب"||state==="پایدار"?"soft-teal":"soft-amber";

function ScoreRow({label,value}:{label:string;value:number}){return <div className={`indicator-row ${value<60?"low":""}`}><span>{label}</span><div className="indicator-track"><b style={{width:`${value}%`}}/></div><strong>{fa(value)}</strong></div>;}

export function EmployeeStatusView({initialId="1038"}:{initialId?:string}){
  const [selectedId,setSelectedId]=useState(employees.some(item=>item.id===initialId)?initialId:"1038");
  const [query,setQuery]=useState("");
  const [activeTab,setActiveTab]=useState("overview");
  const person=employees.find(item=>item.id===selectedId)??employees[0];
  const visible=useMemo(()=>employees.filter(item=>item.name.includes(query)||item.id.includes(query)||item.unit.includes(query)||item.position.includes(query)),[query]);
  const attendanceMonths=[Math.max(55,person.attendance-7),Math.max(55,person.attendance-3),person.attendance,Math.min(100,person.attendance+2)];
  const performanceHistory=[Math.max(35,person.performance-9),Math.max(35,person.performance-4),person.performance];

  return <div className="employee-status-layout">
    <aside className="employee-picker">
      <header><div><span><Users/></span><div><h2>انتخاب کارکنان</h2><p>{fa(employees.length)} پرونده در نسخه شماره ۱</p></div></div></header>
      <div className="employee-picker-search"><Search/><input value={query} onChange={event=>setQuery(event.target.value)} placeholder="نام، کد، واحد یا سمت..." aria-label="جستجوی کارکنان"/></div>
      <label className="employee-mobile-select"><span>انتخاب پرسنل</span><select value={selectedId} onChange={event=>{setSelectedId(event.target.value);setActiveTab("overview");}}>{employees.map(item=><option value={item.id} key={item.id}>{item.name} · {item.id}</option>)}</select></label>
      <div className="employee-picker-list">{visible.map(item=><button key={item.id} className={item.id===selectedId?"active":""} type="button" onClick={()=>{setSelectedId(item.id);setActiveTab("overview");}}><span className="picker-avatar">{item.avatar}</span><span><strong>{item.name}</strong><small>{item.id} · {item.unit}</small></span><Badge className={badgeTone(item.state)}>{item.state}</Badge></button>)}{visible.length===0&&<p className="picker-empty">پرسنلی پیدا نشد.</p>}</div>
    </aside>

    <section className="employee-status-content">
      <section className="employee-hero"><span className="employee-avatar">{person.avatar}</span><div><Badge className={badgeTone(person.state)}>{person.state}</Badge><h2>{person.name}</h2><p>شماره پرسنلی {person.id} · {person.position} · واحد {person.unit}</p></div><div className="employee-score"><strong>{fa(person.score)}</strong><span>امتیاز وضعیت فردی</span></div></section>
      <section className="employee-metric-strip">
        <div><span><CalendarClock/>حضور مؤثر</span><strong>{fa(person.attendance)}٪</strong><small>داده دنیای پردازش</small></div>
        <div><span><ClipboardCheck/>عملکرد</span><strong>{fa(person.performance)}</strong><small>آخرین ارزیابی دوره‌ای</small></div>
        <div><span><BookOpenCheck/>پوشش آموزش</span><strong>{fa(person.training)}٪</strong><small>دوره‌های الزامی و توسعه‌ای</small></div>
        <div><span><HeartPulse/>معاینات</span><strong>{person.health.includes("نیازمند")?"پیگیری":"معتبر"}</strong><small>{person.health}</small></div>
      </section>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="profile-tabs" activationMode="manual">
        <TabsList><TabsTrigger value="overview"><UserRound/>نمای ۳۶۰</TabsTrigger><TabsTrigger value="attendance"><CalendarClock/>حضور</TabsTrigger><TabsTrigger value="performance"><ClipboardCheck/>عملکرد</TabsTrigger><TabsTrigger value="training"><BookOpenCheck/>آموزش</TabsTrigger><TabsTrigger value="health"><HeartPulse/>سلامت</TabsTrigger></TabsList>
        <TabsContent value="overview" forceMount hidden={activeTab!=="overview"} className="tab-panel-grid">
          <Card className="panel-card"><CardHeader><CardTitle>اطلاعات شغلی و پرسنلی</CardTitle><Badge variant="outline">راهکاران</Badge></CardHeader><CardContent className="fact-grid">
            <div className="fact"><span>رتبه شغلی</span><strong>{person.rank}</strong></div><div className="fact"><span>تاریخ استخدام</span><strong>{person.hire}</strong></div><div className="fact"><span>تحصیلات</span><strong>{person.education}</strong></div><div className="fact"><span>نوع قرارداد</span><strong>{person.contract}</strong></div><div className="fact"><span>محل خدمت</span><strong>{person.location}</strong></div><div className="fact"><span>مدیر مستقیم</span><strong>{person.supervisor}</strong></div>
          </CardContent></Card>
          <Card className="panel-card"><CardHeader><CardTitle>شاخص‌های وضعیت فردی</CardTitle><ShieldCheck/></CardHeader><CardContent className="score-breakdown">{person.indicators.map(([label,value])=><ScoreRow label={label} value={value} key={label}/>)}</CardContent></Card>
          <Card className="panel-card"><CardHeader><CardTitle>موارد نیازمند توجه</CardTitle><AlertTriangle/></CardHeader><CardContent className="action-list">{person.reasons.map((reason,index)=><div className="action-item" key={reason}><span>{index+1}</span><div><strong>{reason}</strong><p>منبع: حضور، عملکرد، آموزش یا پرونده پرسنلی</p></div></div>)}</CardContent></Card>
          <Card className="panel-card"><CardHeader><CardTitle>اقدامات توسعه‌ای پیشنهادی</CardTitle><CheckCircle2/></CardHeader><CardContent className="action-list">{person.actions.map((action,index)=><div className="action-item" key={action}><span>{index+1}</span><div><strong>{action}</strong><p>نیازمند تأیید مدیر منابع انسانی و مدیر مستقیم</p></div></div>)}</CardContent></Card>
        </TabsContent>
        <TabsContent value="attendance" forceMount hidden={activeTab!=="attendance"} className="employee-tab-detail">
          <Card className="panel-card"><CardHeader><CardTitle>روند حضور چهار ماه اخیر</CardTitle><Badge variant="outline">دنیای پردازش</Badge></CardHeader><CardContent className="attendance-timeline">{attendanceMonths.map((value,index)=><div key={index}><span>{["خرداد","تیر","مرداد","شهریور"][index]}</span><div><b style={{height:`${value}%`}}/></div><strong>{fa(value)}٪</strong></div>)}</CardContent></Card>
          <Card className="panel-card"><CardHeader><CardTitle>خلاصه وضعیت حضور</CardTitle><CalendarClock/></CardHeader><CardContent className="fact-grid"><div className="fact"><span>ورود به‌موقع</span><strong>{fa(Math.max(60,person.attendance-3))}٪</strong></div><div className="fact"><span>تأخیر این ماه</span><strong>{person.attendance<85?"۳ مورد":"۱ مورد"}</strong></div><div className="fact"><span>غیبت</span><strong>{person.attendance<80?"۲ روز":"۰ روز"}</strong></div><div className="fact"><span>اضافه‌کاری</span><strong>{person.unit==="تولید"?"۱۸ ساعت":"۶ ساعت"}</strong></div></CardContent></Card>
        </TabsContent>
        <TabsContent value="performance" forceMount hidden={activeTab!=="performance"} className="employee-tab-detail">
          <Card className="panel-card"><CardHeader><CardTitle>تاریخچه ارزیابی عملکرد</CardTitle><Activity/></CardHeader><CardContent className="performance-history">{performanceHistory.map((value,index)=><div key={index}><span>{["دوره اول","دوره دوم","دوره جاری"][index]}</span><strong>{fa(value)}</strong><div className="indicator-track"><b style={{width:`${value}%`}}/></div></div>)}</CardContent></Card>
          <Card className="panel-card"><CardHeader><CardTitle>جمع‌بندی عملکرد</CardTitle><ClipboardCheck/></CardHeader><CardContent className="action-list"><div className="action-item"><span>۱</span><div><strong>تحقق اهداف شغلی</strong><p>{fa(person.performance)} درصد اهداف دوره محقق شده است.</p></div></div><div className="action-item"><span>۲</span><div><strong>وضعیت نسبت به دوره قبل</strong><p>{person.performance>=70?"روند پایدار یا رو به بهبود است.":"نیازمند برنامه بهبود و بازخورد ساختاریافته است."}</p></div></div></CardContent></Card>
        </TabsContent>
        <TabsContent value="training" forceMount hidden={activeTab!=="training"} className="employee-tab-detail">
          <Card className="panel-card"><CardHeader><CardTitle>وضعیت آموزش و توسعه</CardTitle><BookOpenCheck/></CardHeader><CardContent className="training-status"><div className="training-ring" style={{background:`conic-gradient(#0f9f92 ${person.training*3.6}deg,#e7edf0 0)`}}><span><strong>{fa(person.training)}٪</strong><small>تکمیل</small></span></div><div className="action-list"><div className="action-item"><span>✓</span><div><strong>آشنایی با الزامات سازمان</strong><p>تکمیل‌شده · ۸ ساعت</p></div></div><div className="action-item"><span>۲</span><div><strong>{person.actions[0]}</strong><p>{person.training<70?"عقب‌افتاده و نیازمند پیگیری":"پیشنهاد توسعه‌ای دوره بعد"}</p></div></div></div></CardContent></Card>
        </TabsContent>
        <TabsContent value="health" forceMount hidden={activeTab!=="health"} className="employee-tab-detail">
          <Card className="panel-card health-status-card"><CardContent><span><HeartPulse/></span><div><h3>وضعیت معاینات دوره‌ای</h3><strong>{person.health}</strong><p>جزئیات پزشکی در امتیاز رفتار سازمانی یا تصمیم‌های استخدامی استفاده نمی‌شود و فقط وضعیت اعتبار معاینات نمایش داده شده است.</p></div></CardContent></Card>
        </TabsContent>
      </Tabs>
    </section>
  </div>;
}
