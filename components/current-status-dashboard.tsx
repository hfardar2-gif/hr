"use client";

import { useMemo, useState } from "react";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { ArrowDownLeft, ArrowUpLeft, BriefcaseBusiness, CalendarClock, CheckCircle2, CircleAlert, Download, FileSpreadsheet, Search, ShieldCheck, TrendingDown, TrendingUp, UserPlus, Users } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const fa = (value: number) => value.toLocaleString("fa-IR");
const units = [
  { name:"تولید", count:135, attrition:12.6, absence:3.8 },
  { name:"نگهداری و تعمیرات", count:35, attrition:21.8, absence:3.4 },
  { name:"فروش", count:32, attrition:9.7, absence:1.9 },
  { name:"انبار", count:30, attrition:8.4, absence:2.7 },
  { name:"بازرگانی", count:26, attrition:7.2, absence:1.6 },
  { name:"مالی", count:24, attrition:4.1, absence:1.1 },
  { name:"سرمایه‌های انسانی", count:18, attrition:5.6, absence:1.3 },
];
const gender = [{name:"آقا",value:224,color:"#17375e"},{name:"خانم",value:76,color:"#19a89a"}];
const ages = [{name:"۲۰–۳۰",value:62},{name:"۳۱–۴۰",value:118},{name:"۴۱–۵۰",value:83},{name:"۵۱+",value:37}];
const tenure = [{name:"کمتر از ۱",value:28},{name:"۱–۳ سال",value:74},{name:"۳–۵ سال",value:62},{name:"۵–۱۰ سال",value:91},{name:"بیش از ۱۰",value:45}];
const education = [{name:"دیپلم",value:78},{name:"کاردانی",value:46},{name:"کارشناسی",value:126},{name:"کارشناسی ارشد",value:44},{name:"دکترا",value:6}];
const headcountTrend = ["مهر","آبان","آذر","دی","بهمن","اسفند","فروردین","اردیبهشت","خرداد","تیر","مرداد","شهریور"].map((month,index)=>({month,value:[278,281,283,282,286,289,291,294,296,297,299,300][index]}));
const movement = ["مهر","آبان","آذر","دی","بهمن","اسفند","فروردین","اردیبهشت","خرداد","تیر","مرداد","شهریور"].map((month,index)=>({month,hire:[5,4,6,2,7,5,4,6,3,5,4,7][index],exit:[2,1,4,3,3,2,2,3,1,4,2,3][index]}));
const contracts = [
  {id:"1124",name:"علی اکبری",unit:"تولید",end:"۱۴۰۵/۰۶/۲۴",days:13,status:"در حال بررسی"},
  {id:"1288",name:"مریم جعفری",unit:"فروش",end:"۱۴۰۵/۰۶/۳۰",days:19,status:"قابل تمدید"},
  {id:"1195",name:"امیرحسین شفیعی",unit:"نگهداری و تعمیرات",end:"۱۴۰۵/۰۷/۰۸",days:28,status:"در حال بررسی"},
  {id:"1301",name:"الهام حسینی",unit:"بازرگانی",end:"۱۴۰۵/۰۷/۲۲",days:42,status:"قابل تمدید"},
  {id:"1266",name:"محمد نادری",unit:"انبار",end:"۱۴۰۵/۰۸/۰۵",days:56,status:"قابل تمدید"},
];
const staff = [
  {id:"1038",name:"مهدی کریمی",unit:"تولید",role:"اپراتور ارشد خط",gender:"مرد",hire:"۱۳۹۸/۰۴/۱۲",contract:"رسمی",location:"تهران",status:"شاغل"},
  {id:"1176",name:"سارا محمدی",unit:"بازرگانی",role:"کارشناس تأمین",gender:"زن",hire:"۱۳۹۹/۱۰/۲۱",contract:"رسمی",location:"تهران",status:"شاغل"},
  {id:"1241",name:"رضا احمدی",unit:"نگهداری و تعمیرات",role:"تکنسین مکانیک",gender:"مرد",hire:"۱۴۰۰/۰۸/۰۵",contract:"پیمانی",location:"شیراز",status:"شاغل"},
  {id:"1124",name:"علی اکبری",unit:"تولید",role:"سرپرست شیفت",gender:"مرد",hire:"۱۳۹۷/۰۲/۱۸",contract:"پیمانی",location:"تهران",status:"در حال خروج"},
  {id:"1288",name:"مریم جعفری",unit:"فروش",role:"کارشناس فروش",gender:"زن",hire:"۱۴۰۲/۰۶/۰۱",contract:"پروژه‌ای",location:"مشهد",status:"شاغل"},
  {id:"1301",name:"الهام حسینی",unit:"بازرگانی",role:"کارشناس خرید",gender:"زن",hire:"۱۴۰۳/۰۱/۲۵",contract:"پروژه‌ای",location:"تهران",status:"مرخصی بلندمدت"},
  {id:"1266",name:"محمد نادری",unit:"انبار",role:"انباردار",gender:"مرد",hire:"۱۴۰۱/۱۱/۱۲",contract:"امانی",location:"شیراز",status:"شاغل"},
  {id:"1092",name:"نرگس صادقی",unit:"مالی",role:"سرپرست حسابداری",gender:"زن",hire:"۱۳۹۶/۰۹/۰۳",contract:"رسمی",location:"تهران",status:"شاغل"},
];
const talent = [
  {name:"سارا محمدی",x:78,y:82},{name:"نرگس صادقی",x:88,y:91},{name:"امیر رضایی",x:64,y:86},{name:"مریم جعفری",x:83,y:66},{name:"علی اکبری",x:45,y:72},{name:"رضا احمدی",x:57,y:48},{name:"لیلا توکلی",x:72,y:58},{name:"حسن مرادی",x:35,y:43},{name:"پویا محمدی",x:89,y:76},
];
const skills = [{name:"نگهداری پیش‌بینانه",available:18,needed:31,gap:13},{name:"تحلیل داده صنعتی",available:9,needed:22,gap:13},{name:"سرپرستی و بازخورد",available:24,needed:35,gap:11},{name:"ایمنی رفتاری",available:74,needed:92,gap:18},{name:"مذاکره تجاری",available:16,needed:23,gap:7}];

function Sparkline({values,color}:{values:number[];color:string}) {
  const min=Math.min(...values),max=Math.max(...values),range=max-min||1;
  const points=values.map((value,index)=>`${index*(100/(values.length-1))},${32-((value-min)/range)*26}`).join(" ");
  return <svg className="kpi-sparkline" viewBox="0 0 100 36" preserveAspectRatio="none" aria-hidden="true"><polyline points={points} fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
function ChartBox({title,subtitle,children,wide=false}:{title:string;subtitle?:string;children:React.ReactNode;wide?:boolean}) {
  return <article className={`live-chart-card ${wide?"wide":""}`}><header><div><h3>{title}</h3>{subtitle&&<p>{subtitle}</p>}</div><span className="chart-live-dot">داده جاری</span></header><div className="chart-body">{children}</div></article>;
}
const tooltipStyle={border:"1px solid #dfe7ec",borderRadius:12,boxShadow:"0 10px 25px rgba(15,23,42,.12)",fontFamily:"Vazirmatn",fontSize:12,direction:"rtl" as const};

export function CurrentStatusDashboard({role}:{role:"executive"|"hr"}) {
  const filters={period:"month",unit:"all",contract:"all",location:"all"};
  const [search,setSearch]=useState("");
  const unitBase=filters.unit==="all"?300:(units.find((item)=>item.name===filters.unit)?.count||300);
  const contractFactor:Record<string,number>={all:1,"رسمی":.51,"پیمانی":.29,"پروژه‌ای":.14,"امانی":.06};
  const locationFactor:Record<string,number>={all:1,"تهران":.62,"شیراز":.23,"مشهد":.15};
  const periodFactor:Record<string,number>={today:1,week:.99,month:1,year:.96,custom:.98};
  const segmentFactor=(contractFactor[filters.contract]||1)*(locationFactor[filters.location]||1);
  const scale=(unitBase/300)*segmentFactor*(periodFactor[filters.period]||1);
  const currentHeadcount=Math.max(1,Math.round(300*scale));
  const selectedUnit=units.find((item)=>item.name===filters.unit);
  const attrition=selectedUnit?.attrition??7.4;
  const absence=selectedUnit?.absence??2.3;
  const enps=filters.unit==="نگهداری و تعمیرات"?18:filters.unit==="مالی"?52:36;
  const chartScale=(data:{name:string;value:number}[])=>data.map((item)=>({...item,value:Math.max(1,Math.round(item.value*scale))}));
  const visibleUnits=(filters.unit==="all"?units:units.filter((item)=>item.name===filters.unit)).map((item)=>({...item,count:Math.max(1,Math.round(item.count*segmentFactor))}));
  const filteredStaff=useMemo(()=>staff.filter((person)=>
    (filters.unit==="all"||person.unit===filters.unit)&&
    (filters.contract==="all"||person.contract===filters.contract)&&
    (filters.location==="all"||person.location===filters.location)&&
    (person.name.includes(search)||person.id.includes(search)||person.role.includes(search))
  ),[filters.unit,filters.contract,filters.location,search]);

  const exportExcel=()=>{
    const header=["کد پرسنلی","نام و نام خانوادگی","واحد","سمت","جنسیت","تاریخ استخدام","نوع قرارداد","موقعیت","وضعیت"];
    const rows=filteredStaff.map((person)=>[person.id,person.name,person.unit,person.role,person.gender,person.hire,person.contract,person.location,person.status]);
    const csv="\uFEFF"+[header,...rows].map((row)=>row.map((cell)=>`"${cell}"`).join(",")).join("\n");
    const url=URL.createObjectURL(new Blob([csv],{type:"text/csv;charset=utf-8"}));
    const anchor=document.createElement("a");anchor.href=url;anchor.download="گزارش-پرسنلی.csv";anchor.click();URL.revokeObjectURL(url);
  };

  return <div className="live-dashboard">
    <section className="live-dashboard-head"><div><p><span className="pulse-dot" />وضعیت جاری سازمان</p><h2>تصویر یکپارچه سرمایه انسانی</h2><span>آخرین همگام‌سازی: امروز، ساعت ۰۶:۰۰ · بروزرسانی روزانه</span></div><div className="data-source-stack"><Badge variant="outline">راهکاران</Badge><Badge variant="outline">دنیای پردازش</Badge><Badge variant="outline">Excel ارزیابی</Badge></div></section>
    <Tabs defaultValue="status" className="live-tabs">
      <TabsList><TabsTrigger value="status"><TrendingUp />وضعیت سازمان</TabsTrigger><TabsTrigger value="talent"><BriefcaseBusiness />مدیریت استعدادها</TabsTrigger></TabsList>
      <TabsContent value="status" className="live-tab-content">
        <section className="live-kpi-grid">
          <article className="live-kpi navy"><div className="kpi-title"><span><Users /></span><p>کل پرسنل</p></div><div className="kpi-number"><strong>{fa(currentHeadcount)}</strong><small>نفر فعال</small></div><div className="kpi-change good"><ArrowUpLeft />۲.۴٪ نسبت به ماه قبل <b>+{fa(Math.max(1,Math.round(7*scale)))} ورودی</b></div><Sparkline values={[278,283,286,291,294,297,300].map(v=>v*scale)} color="#32c7b8" /></article>
          <article className={`live-kpi ${attrition>15?"red":"teal"}`}><div className="kpi-title"><span><TrendingDown /></span><p>نرخ ترک خدمت</p></div><div className="kpi-number"><strong>{attrition.toLocaleString("fa-IR")}٪</strong><small>در بازه انتخابی</small></div><div className="kpi-change good"><ArrowDownLeft />۰.۸٪ کاهش مطلوب</div><Sparkline values={[9.4,8.8,8.5,8.1,7.8,7.6,attrition]} color={attrition>15?"#ef4444":"#18a99a"} /></article>
          <article className="live-kpi violet"><div className="kpi-title"><span><UserPlus /></span><p>نمره مشارکت eNPS</p></div><div className="kpi-number"><strong>+{fa(enps)}</strong><small>از ۱۰۰- تا ۱۰۰+</small></div><div className="kpi-change good"><ArrowUpLeft />۶ امتیاز بهبود</div><Sparkline values={[18,22,24,29,31,34,enps]} color="#8b6ac8" /></article>
          <article className={`live-kpi ${absence>3?"amber":"blue"}`}><div className="kpi-title"><span><CalendarClock /></span><p>میانگین روزهای غیبت</p></div><div className="kpi-number"><strong>{absence.toLocaleString("fa-IR")}</strong><small>روز به‌ازای هر نفر</small></div><div className={`kpi-change ${absence>3?"bad":"good"}`}>{absence>3?<CircleAlert />:<ArrowDownLeft />}{absence>3?"بالاتر از آستانه هشدار":"۰.۳ روز کاهش"}</div><Sparkline values={[3.1,2.9,2.8,2.6,2.5,2.4,absence]} color={absence>3?"#e69123":"#2e78c7"} /></article>
        </section>

        <section className="live-section"><div className="live-section-title"><div><span>۱</span><h2>ساختار جمعیتی سازمان</h2></div><p>تصویر ایستای ترکیب نیروی انسانی در بازه انتخاب‌شده</p></div>
          <div className="live-chart-grid">
            <ChartBox title="تفکیک جنسیتی" subtitle="تعداد و درصد کل سازمان"><ResponsiveContainer width="100%" height={250}><PieChart><Pie data={gender.map(item=>({...item,value:Math.max(1,Math.round(item.value*scale))}))} dataKey="value" innerRadius={62} outerRadius={92} paddingAngle={3}>{gender.map((entry)=><Cell key={entry.name} fill={entry.color}/>)}</Pie><Tooltip contentStyle={tooltipStyle}/><Legend /></PieChart></ResponsiveContainer><div className="donut-center"><strong>{fa(currentHeadcount)}</strong><span>کل نیرو</span></div></ChartBox>
            <ChartBox title="ترکیب سنی نیروها" subtitle="تعداد کارکنان در گروه‌های سنی"><ResponsiveContainer width="100%" height={250}><BarChart data={chartScale(ages)}><CartesianGrid strokeDasharray="3 3" vertical={false}/><XAxis dataKey="name"/><YAxis/><Tooltip contentStyle={tooltipStyle}/><Bar dataKey="value" name="تعداد" fill="#1aa99a" radius={[8,8,0,0]}/></BarChart></ResponsiveContainer></ChartBox>
            <ChartBox title="توزیع پرسنل در واحدها" subtitle="مقایسه ظرفیت نیروی انسانی" wide><ResponsiveContainer width="100%" height={310}><BarChart data={visibleUnits} layout="vertical" margin={{left:25}}><CartesianGrid strokeDasharray="3 3" horizontal={false}/><XAxis type="number"/><YAxis type="category" dataKey="name" width={115}/><Tooltip contentStyle={tooltipStyle}/><Bar dataKey="count" name="نفر" fill="#17375e" radius={[0,8,8,0]}/></BarChart></ResponsiveContainer></ChartBox>
            <ChartBox title="سابقه خدمت" subtitle="ترکیب ماندگاری کارکنان"><ResponsiveContainer width="100%" height={250}><BarChart data={chartScale(tenure)}><CartesianGrid strokeDasharray="3 3" vertical={false}/><XAxis dataKey="name" interval={0}/><YAxis/><Tooltip contentStyle={tooltipStyle}/><Bar dataKey="value" name="تعداد" fill="#d39736" radius={[8,8,0,0]}/></BarChart></ResponsiveContainer></ChartBox>
            <ChartBox title="وضعیت تحصیلات" subtitle="توزیع آخرین مدرک ثبت‌شده"><ResponsiveContainer width="100%" height={250}><BarChart data={chartScale(education)}><CartesianGrid strokeDasharray="3 3" vertical={false}/><XAxis dataKey="name" interval={0}/><YAxis/><Tooltip contentStyle={tooltipStyle}/><Bar dataKey="value" name="تعداد" fill="#5f76a8" radius={[8,8,0,0]}/></BarChart></ResponsiveContainer></ChartBox>
          </div>
        </section>

        <section className="live-section"><div className="live-section-title"><div><span>۲</span><h2>روندها و هشدارهای مدیریتی</h2></div><p>تحلیل تغییرات ۱۲ ماه اخیر و نقاط نیازمند اقدام</p></div>
          <div className="live-chart-grid">
            <ChartBox title="روند تغییرات پرسنل" subtitle="تعداد نیروی فعال در ابتدای هر ماه" wide><ResponsiveContainer width="100%" height={280}><AreaChart data={headcountTrend.map(item=>({...item,value:Math.round(item.value*scale)}))}><defs><linearGradient id="headFill" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#159b8e" stopOpacity={.3}/><stop offset="95%" stopColor="#159b8e" stopOpacity={0}/></linearGradient></defs><CartesianGrid strokeDasharray="3 3" vertical={false}/><XAxis dataKey="month"/><YAxis domain={["dataMin - 5","dataMax + 5"]}/><Tooltip contentStyle={tooltipStyle}/><Area type="monotone" dataKey="value" name="کل پرسنل" stroke="#0f8f84" strokeWidth={3} fill="url(#headFill)"/></AreaChart></ResponsiveContainer></ChartBox>
            <ChartBox title="ورود و خروج ماهانه" subtitle="استخدام جدید در برابر خروج"><ResponsiveContainer width="100%" height={280}><BarChart data={movement.map(item=>({...item,hire:Math.max(0,Math.round(item.hire*scale)),exit:Math.max(0,Math.round(item.exit*scale))}))}><CartesianGrid strokeDasharray="3 3" vertical={false}/><XAxis dataKey="month"/><YAxis/><Tooltip contentStyle={tooltipStyle}/><Legend/><Bar dataKey="hire" name="ورودی" fill="#18aa9b" radius={[6,6,0,0]}/><Bar dataKey="exit" name="خروجی" fill="#e08b37" radius={[6,6,0,0]}/></BarChart></ResponsiveContainer></ChartBox>
            <ChartBox title="نرخ ترک خدمت واحدها" subtitle="بالاتر از ۲۰٪ با رنگ قرمز"><ResponsiveContainer width="100%" height={300}><BarChart data={visibleUnits} layout="vertical"><CartesianGrid strokeDasharray="3 3" horizontal={false}/><XAxis type="number" unit="%"/><YAxis type="category" dataKey="name" width={110}/><Tooltip contentStyle={tooltipStyle}/><Bar dataKey="attrition" name="نرخ ترک خدمت" radius={[0,7,7,0]}>{visibleUnits.map(item=><Cell key={item.name} fill={item.attrition>20?"#dc4c55":item.attrition>12?"#e99a31":"#2b9f93"}/>)}</Bar></BarChart></ResponsiveContainer></ChartBox>
            <ChartBox title="نرخ غیبت به تفکیک واحد" subtitle="مرتب‌شده بر اساس میانگین روز غیبت"><ResponsiveContainer width="100%" height={300}><BarChart data={[...visibleUnits].sort((a,b)=>b.absence-a.absence)} layout="vertical"><CartesianGrid strokeDasharray="3 3" horizontal={false}/><XAxis type="number"/><YAxis type="category" dataKey="name" width={110}/><Tooltip contentStyle={tooltipStyle}/><Bar dataKey="absence" name="روز غیبت" fill="#586f9f" radius={[0,7,7,0]}/></BarChart></ResponsiveContainer></ChartBox>
          </div>
          <article className="live-table-card contract-card"><header><div><h3>قراردادهای در حال اتمام</h3><p>قراردادهای کمتر از ۳۰ روز با اولویت قرمز نمایش داده می‌شوند</p></div><Badge className="soft-amber">{contracts.filter(item=>item.days<30).length.toLocaleString("fa-IR")} مورد فوری</Badge></header>
            {role==="hr"?<div className="live-table-scroll"><table><thead><tr><th>نام و نام خانوادگی</th><th>واحد</th><th>تاریخ پایان</th><th>روز باقی‌مانده</th><th>وضعیت</th></tr></thead><tbody>{contracts.map(item=><tr key={item.id} className={item.days<30?"urgent-row":""}><td><strong>{item.name}</strong><small>کد {item.id}</small></td><td>{item.unit}</td><td>{item.end}</td><td>{fa(item.days)} روز</td><td><Badge className={item.days<30?"urgent":"soft-teal"}>{item.status}</Badge></td></tr>)}</tbody></table></div>:<div className="privacy-summary"><ShieldCheck/><div><strong>{fa(contracts.length)} قرارداد در ۶۰ روز آینده منقضی می‌شود</strong><p>{fa(contracts.filter(item=>item.days<30).length)} مورد کمتر از ۳۰ روز زمان دارد. جزئیات هویتی فقط برای مدیر منابع انسانی قابل مشاهده است.</p></div></div>}
          </article>
        </section>

        {role==="hr"&&<section className="live-section"><div className="live-section-title"><div><span>۳</span><h2>جزئیات پرسنلی</h2></div><p>داده خام قابل جستجو و دریافت برای تحلیل تکمیلی</p></div>
          <article className="live-table-card"><header><div className="table-search"><Search/><input value={search} onChange={event=>setSearch(event.target.value)} placeholder="جستجو با نام، کد یا سمت..." aria-label="جستجوی پرسنل"/></div><button className="excel-button" onClick={exportExcel}><FileSpreadsheet/>خروجی اکسل</button></header><div className="live-table-scroll"><table><thead><tr><th>کد پرسنلی</th><th>نام و نام خانوادگی</th><th>واحد</th><th>سمت</th><th>جنسیت</th><th>تاریخ استخدام</th><th>قرارداد</th><th>وضعیت</th></tr></thead><tbody>{filteredStaff.map(person=><tr key={person.id}><td>{person.id}</td><td><strong>{person.name}</strong></td><td>{person.unit}</td><td>{person.role}</td><td>{person.gender}</td><td>{person.hire}</td><td>{person.contract}</td><td><Badge className={person.status==="شاغل"?"soft-teal":person.status==="در حال خروج"?"urgent":"soft-amber"}>{person.status}</Badge></td></tr>)}</tbody></table>{filteredStaff.length===0&&<div className="table-empty">نتیجه‌ای مطابق فیلترهای انتخاب‌شده پیدا نشد.</div>}</div><footer><span>{fa(filteredStaff.length)} ردیف در نسخه نمایشی</span><small>خروجی با فرمت CSV سازگار با Excel دریافت می‌شود</small></footer></article>
        </section>}
      </TabsContent>

      <TabsContent value="talent" className="live-tab-content">
        <section className="talent-intro"><div><span><BriefcaseBusiness/></span><div><h2>مدیریت استعدادها و جانشین‌پروری</h2><p>تصمیم‌گیری توسعه‌ای بر اساس عملکرد، پتانسیل و شکاف مهارت؛ نتایج برای تصمیم نهایی نیازمند بررسی انسانی هستند.</p></div></div><Badge variant="outline">لایه پیشرفته</Badge></section>
        <div className="talent-layout">
          <article className="nine-box-card"><header><div><h3>ماتریس عملکرد ـ پتانسیل</h3><p>محور افقی: پتانسیل · محور عمودی: عملکرد</p></div><span className="axis-help">۹-Box Grid</span></header><div className="nine-box"><span className="axis-y">عملکرد بالا ←</span>{["ستاره آینده","عملکرد قوی","متخصص کلیدی","ظرفیت رشد","مهره قابل اتکا","حمایت توسعه‌ای","استعداد پنهان","نیازمند هدایت","بازنگری نقش"].map((label,index)=><div className={`nine-cell cell-${index}`} key={label}><small>{label}</small></div>)}{talent.map((person,index)=><span className="talent-dot" title={role==="hr"?person.name:`کارمند ${index+1}`} key={person.name} style={{right:`${person.x}%`,bottom:`${person.y}%`}}>{role==="hr"?person.name.split(" ")[0]:index+1}</span>)}<span className="axis-x">پتانسیل بالا ←</span></div></article>
          <article className="funnel-card"><header><h3>خط لوله جانشینی</h3><p>آمادگی نیروها برای نقش‌های کلیدی</p></header><div className="succession-funnel"><div style={{width:"100%"}}><span>شناسایی شده</span><strong>۴۱</strong></div><div style={{width:"80%"}}><span>در حال آموزش</span><strong>۲۹</strong></div><div style={{width:"58%"}}><span>آماده جانشینی</span><strong>۱۶</strong></div><div style={{width:"36%"}}><span>جانشین شده</span><strong>۷</strong></div></div><div className="funnel-note"><CheckCircle2/><span>نرخ تبدیل شناسایی تا آمادگی: ۳۹٪</span></div></article>
        </div>
        <article className="live-table-card skill-gap"><header><div><h3>شکاف مهارت‌های کلیدی</h3><p>فاصله ظرفیت موجود تا نیاز هدف سازمان</p></div><button className="excel-button ghost"><Download/>دریافت گزارش</button></header><div className="live-table-scroll"><table><thead><tr><th>عنوان مهارت</th><th>نیروی موجود</th><th>نیروی مورد نیاز</th><th>میزان شکاف</th><th>شدت نیاز</th></tr></thead><tbody>{skills.map(skill=><tr key={skill.name}><td><strong>{skill.name}</strong></td><td>{fa(skill.available)} نفر</td><td>{fa(skill.needed)} نفر</td><td><div className="gap-bar"><b style={{width:`${Math.min(100,skill.gap*5)}%`}}/></div><strong>{fa(skill.gap)} نفر</strong></td><td><Badge className={skill.gap>12?"urgent":skill.gap>8?"soft-amber":"soft-teal"}>{skill.gap>12?"زیاد":skill.gap>8?"متوسط":"کنترل‌شده"}</Badge></td></tr>)}</tbody></table></div></article>
      </TabsContent>
    </Tabs>
    <section className="governance-note"><ShieldCheck/><div><strong>چارچوب بروزرسانی و دسترسی</strong><p>اطلاعات جمعیتی هر شب از راهکاران، حضور و غیاب از دنیای پردازش و ارزیابی‌ها از فایل‌های کنترل‌شده Excel دریافت می‌شوند. مدیرعامل فقط اطلاعات تجمیعی را می‌بیند؛ اطلاعات فردی و خروجی داده فقط در دسترس مدیر منابع انسانی است.</p></div><span>Daily Batch</span></section>
  </div>;
}
