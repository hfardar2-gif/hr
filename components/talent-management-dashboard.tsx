import { BriefcaseBusiness, CheckCircle2, ShieldCheck, Target } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const talent=[
  {name:"سارا محمدی",x:78,y:82},{name:"نرگس صادقی",x:88,y:91},{name:"امیر رضایی",x:64,y:86},
  {name:"مریم جعفری",x:83,y:66},{name:"علی اکبری",x:45,y:72},{name:"رضا احمدی",x:57,y:48},
  {name:"لیلا توکلی",x:72,y:58},{name:"حسن مرادی",x:35,y:43},{name:"پویا محمدی",x:89,y:76},
];
const skills=[
  {name:"نگهداری پیش‌بینانه",available:18,needed:31,gap:13},
  {name:"تحلیل داده صنعتی",available:9,needed:22,gap:13},
  {name:"سرپرستی و بازخورد",available:24,needed:35,gap:11},
  {name:"ایمنی رفتاری",available:74,needed:92,gap:18},
  {name:"مذاکره تجاری",available:16,needed:23,gap:7},
];
const fa=(value:number)=>value.toLocaleString("fa-IR");

export function TalentManagementDashboard({role}:{role:"executive"|"hr"}){
  return <div className="dashboard-page-stack">
    <section className="talent-intro"><div><span><BriefcaseBusiness/></span><div><h2>مدیریت استعدادها و جانشین‌پروری</h2><p>تحلیل عملکرد، پتانسیل، آمادگی جانشینی و شکاف مهارت‌های کلیدی سازمان</p></div></div><Badge variant="outline">لایه پیشرفته</Badge></section>
    <section className="behavior-summary">
      <div className="behavior-card"><span>استعدادهای شناسایی‌شده</span><strong>۴۱ نفر</strong><small>۱۳.۷٪ از کارکنان</small></div>
      <div className="behavior-card"><span>آماده جانشینی</span><strong>۱۶ نفر</strong><small>برای نقش‌های کلیدی</small></div>
      <div className="behavior-card"><span>نقش‌های بدون جانشین</span><strong>۷ نقش</strong><small>نیازمند اقدام توسعه‌ای</small></div>
      <div className="behavior-card"><span>میانگین شکاف مهارتی</span><strong>۱۲ نفر</strong><small>در مهارت‌های کلیدی</small></div>
    </section>
    <div className="talent-layout">
      <article className="nine-box-card"><header><div><h3>ماتریس عملکرد ـ پتانسیل</h3><p>محور افقی: پتانسیل · محور عمودی: عملکرد</p></div><span className="axis-help">۹-Box Grid</span></header><div className="nine-box"><span className="axis-y">عملکرد بالا ←</span>{["ستاره آینده","عملکرد قوی","متخصص کلیدی","ظرفیت رشد","مهره قابل اتکا","حمایت توسعه‌ای","استعداد پنهان","نیازمند هدایت","بازنگری نقش"].map((label,index)=><div className={`nine-cell cell-${index}`} key={label}><small>{label}</small></div>)}{talent.map((person,index)=><span className="talent-dot" title={role==="hr"?person.name:`کارمند ${index+1}`} key={person.name} style={{right:`${person.x}%`,bottom:`${person.y}%`}}>{role==="hr"?person.name.split(" ")[0]:index+1}</span>)}<span className="axis-x">پتانسیل بالا ←</span></div></article>
      <article className="funnel-card"><header><h3>خط لوله جانشینی</h3><p>آمادگی نیروها برای نقش‌های کلیدی</p></header><div className="succession-funnel"><div style={{width:"100%"}}><span>شناسایی شده</span><strong>۴۱</strong></div><div style={{width:"80%"}}><span>در حال آموزش</span><strong>۲۹</strong></div><div style={{width:"58%"}}><span>آماده جانشینی</span><strong>۱۶</strong></div><div style={{width:"36%"}}><span>جانشین شده</span><strong>۷</strong></div></div><div className="funnel-note"><CheckCircle2/><span>نرخ تبدیل شناسایی تا آمادگی: ۳۹٪</span></div></article>
    </div>
    <section className="analysis-grid">
      <article className="live-table-card skill-gap"><header><div><h3>شکاف مهارت‌های کلیدی</h3><p>فاصله ظرفیت موجود تا نیاز هدف سازمان</p></div><span className="axis-help">۵ مهارت اولویت‌دار</span></header><div className="live-table-scroll"><table><thead><tr><th>عنوان مهارت</th><th>نیروی موجود</th><th>نیروی مورد نیاز</th><th>میزان شکاف</th><th>شدت نیاز</th></tr></thead><tbody>{skills.map(skill=><tr key={skill.name}><td><strong>{skill.name}</strong></td><td>{fa(skill.available)} نفر</td><td>{fa(skill.needed)} نفر</td><td><div className="gap-bar"><b style={{width:`${Math.min(100,skill.gap*5)}%`}}/></div><strong>{fa(skill.gap)} نفر</strong></td><td><Badge className={skill.gap>12?"urgent":skill.gap>8?"soft-amber":"soft-teal"}>{skill.gap>12?"زیاد":skill.gap>8?"متوسط":"کنترل‌شده"}</Badge></td></tr>)}</tbody></table></div></article>
      <article className="funnel-card talent-actions"><header><div><h3>اقدامات توسعه‌ای اولویت‌دار</h3><p>پیشنهاد این دوره برای مدیریت استعدادها</p></div><Target/></header><div className="action-list">
        <div className="action-item"><span>۱</span><div><strong>طراحی مسیر جانشینی تولید</strong><p>سه نقش سرپرستی بدون جانشین آماده هستند.</p></div></div>
        <div className="action-item"><span>۲</span><div><strong>آموزش نگهداری پیش‌بینانه</strong><p>۱۳ نفر شکاف ظرفیت برای برنامه سال جاری.</p></div></div>
        <div className="action-item"><span>۳</span><div><strong>کوچینگ استعدادهای با پتانسیل بالا</strong><p>۹ نفر در ناحیه رشد و ستاره آینده قرار دارند.</p></div></div>
      </div></article>
    </section>
    <section className="governance-note"><ShieldCheck/><div><strong>نحوه استفاده از نتایج</strong><p>ماتریس استعداد و پیشنهادهای جانشینی ابزار پشتیبان تصمیم هستند و جایگزین بررسی انسانی، جلسه کمیته استعداد و گفت‌وگو با مدیر مستقیم نمی‌شوند. {role==="executive"?"مدیرعامل فقط اطلاعات تجمیعی را مشاهده می‌کند.":"نام افراد فقط در دسترس مدیر منابع انسانی نمایش داده می‌شود."}</p></div><span>نسخه شماره ۱</span></section>
  </div>;
}
