import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  BarChart3,
  Building2,
  CheckCircle2,
  Clock3,
  Database,
  FileSpreadsheet,
  GraduationCap,
  Layers3,
  ScanSearch,
  ShieldCheck,
  Users,
} from "lucide-react";
import styles from "./intro.module.css";

const sources = [
  { icon: Users, label: "اطلاعات پرسنلی", tone: "navy" },
  { icon: Clock3, label: "حضور و غیاب", tone: "blue" },
  { icon: BarChart3, label: "ارزیابی عملکرد", tone: "amber" },
  { icon: GraduationCap, label: "آموزش و توسعه", tone: "violet" },
  { icon: FileSpreadsheet, label: "فایل‌های سازمانی", tone: "green" },
];

const beforeAfter = [
  ["دریافت چند خروجی و فایل", "مشاهده اطلاعات در یک صفحه"],
  ["تطبیق دستی اطلاعات", "نمای مدیریتی یکپارچه"],
  ["بررسی گزارش‌های ناسازگار", "مقایسه مستقیم واحدها"],
  ["آماده‌سازی طولانی جلسه", "دسترسی سریع‌تر به وضعیت سازمان"],
];

export default function ProductIntroPage() {
  return (
    <main className={styles.page} dir="rtl">
      <header className={styles.header}>
        <Link className={styles.brand} href="/">
          <span className={styles.brandMark} aria-hidden="true"><i /><i /><i /></span>
          <span><strong>سامانه هوشمند سرمایه انسانی</strong><small>نمای یکپارچه اطلاعات سازمان</small></span>
        </Link>
        <Link className={styles.headerLink} href="/">ورود به نسخه نمایشی <ArrowLeft /></Link>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <span className={styles.kicker}><ScanSearch /> یک سؤال از مدیر منابع انسانی</span>
          <h1>برای تهیه گزارش مدیریت، هنوز اطلاعات چند فایل و نرم‌افزار را کنار هم می‌گذارید؟</h1>
          <p>اطلاعات منابع انسانی از منابع مختلف، در یک نمای یکپارچه؛ برای گزارش‌گیری سریع‌تر، مشاهده وضعیت واحدها و تصمیم‌گیری مطمئن‌تر.</p>
          <div className={styles.actions} id="demo-roles">
            <Link className={styles.primaryAction} href="/hr">مشاهده دموی منابع انسانی <ArrowLeft /></Link>
            <Link className={styles.secondaryAction} href="/executive">مشاهده نمای مدیرعامل</Link>
          </div>
          <span className={styles.demoNotice}><ShieldCheck /> این دمو با اطلاعات نمونه نمایش داده می‌شود.</span>
        </div>
        <div className={styles.heroVisual}>
          <Image src="/intro/hr-manager.png" alt="مدیر منابع انسانی در حال بررسی گزارش‌های سازمان" fill priority sizes="(max-width: 900px) 100vw, 48vw" />
          <div className={styles.visualCard}>
            <span>وضعیت واحدهای سازمان</span>
            <strong>همه واحدها، در یک صفحه</strong>
            <div><i className={styles.good} /><i className={styles.good} /><i className={styles.warn} /><i className={styles.risk} /></div>
          </div>
        </div>
      </section>

      <section className={styles.integration}>
        <div className={styles.sectionHeading}>
          <span>مزیت اصلی سامانه</span>
          <h2>اطلاعات در چند جا؛ گزارش مدیریتی در یک جا</h2>
          <p>اطلاعات موردنیاز از نرم‌افزارها و فایل‌های سازمان دریافت می‌شود و برای ساختن یک تصویر منسجم از سرمایه انسانی کنار هم قرار می‌گیرد.</p>
        </div>
        <div className={styles.flow}>
          <div className={styles.sourceGrid}>
            {sources.map(({ icon: Icon, label, tone }) => (
              <article className={`${styles.sourceCard} ${styles[tone]}`} key={label}><Icon /><span>{label}</span></article>
            ))}
          </div>
          <div className={styles.connector} aria-hidden="true"><span /><span /><span /></div>
          <article className={styles.unifiedCard}>
            <div><Database /></div>
            <small>خروجی یکپارچه</small>
            <strong>داشبورد سرمایه انسانی</strong>
            <p>یک تصویر قابل اتکا از سازمان، واحد و فرد</p>
            <span><CheckCircle2 /> آماده برای گزارش مدیریتی</span>
          </article>
        </div>
        <p className={styles.technicalNote}>روش اتصال، دوره به‌روزرسانی و سطح اطلاعات پس از بررسی فنی سیستم‌های سازمان تعیین می‌شود.</p>
      </section>

      <section className={styles.comparison}>
        <div className={styles.sectionHeading}>
          <span>تغییر در تجربه کاری</span>
          <h2>زمان کمتر برای جمع‌کردن گزارش؛ تمرکز بیشتر روی تصمیم</h2>
        </div>
        <div className={styles.compareGrid}>
          <div className={`${styles.compareColumn} ${styles.before}`}><h3>قبل از سامانه</h3>{beforeAfter.map(([before]) => <p key={before}><span>×</span>{before}</p>)}</div>
          <div className={`${styles.compareColumn} ${styles.after}`}><h3>با نمای یکپارچه</h3>{beforeAfter.map(([, after]) => <p key={after}><CheckCircle2 />{after}</p>)}</div>
        </div>
      </section>

      <section className={styles.preview}>
        <div className={styles.previewCopy}>
          <span className={styles.kicker}><Layers3 /> از کل سازمان تا هر واحد</span>
          <h2>کدام واحد امروز به توجه شما نیاز دارد؟</h2>
          <p>وضعیت واحدها را کنار هم ببینید، موارد نیازمند پیگیری را پیدا کنید و برای جلسه مدیریت با تصویر روشن‌تری آماده شوید.</p>
          <ul>
            <li><CheckCircle2 /> مقایسه مستقیم عملکرد واحدها</li>
            <li><CheckCircle2 /> نمایش موضوعات نیازمند اقدام</li>
            <li><CheckCircle2 /> دسترسی به جزئیات متناسب با نقش مدیر</li>
          </ul>
        </div>
        <div className={styles.dashboardMock}>
          <div className={styles.mockTop}><span>وضعیت واحدهای سازمانی</span><small>شش‌ماهه اول ۱۴۰۵</small></div>
          {[["مالی",89,"مطلوب"],["منابع انسانی",83,"مطلوب"],["فروش",76,"در حال پایش"],["تولید",61,"نیازمند توجه"]].map(([name, score, state]) => (
            <div className={styles.departmentRow} key={String(name)}><strong>{name}</strong><span><i style={{ width: `${score}%` }} /></span><b>{score}</b><em>{state}</em></div>
          ))}
        </div>
      </section>

      <section className={styles.roleChoice}>
        <div className={styles.sectionHeading}><span>نسخه نمایشی</span><h2>سامانه را از زاویه نقش خود ببینید</h2><p>هر نقش فقط اطلاعات و ابزارهای متناسب با سطح تصمیم‌گیری خود را مشاهده می‌کند.</p></div>
        <div className={styles.roleCards}>
          <article><div><Users /></div><h3>مدیر منابع انسانی</h3><p>تحلیل سازمان، واحد، کارکنان و اقدامات اصلاحی</p><Link href="/hr">ورود به دمو <ArrowLeft /></Link></article>
          <article><div><Building2 /></div><h3>مدیرعامل</h3><p>تصویر کلان سازمان، روندها و موضوعات نیازمند تصمیم</p><Link href="/executive">مشاهده نمای مدیرعامل <ArrowLeft /></Link></article>
        </div>
      </section>

      <section className={styles.cta} id="request-demo">
        <div><span>قدم بعدی</span><h2>این تصویر را برای سازمان خودتان ببینید.</h2><p>در جلسه دمو، یکی از گزارش‌های دستی فعلی سازمان را مرور می‌کنیم تا مسیر یکپارچه‌سازی اطلاعات مشخص شود.</p></div>
        <a href="#demo-roles">انتخاب دموی مناسب <ArrowLeft /></a>
      </section>

      <footer className={styles.footer}><strong>سامانه هوشمند سرمایه انسانی</strong><p>نسخه نمایشی با اطلاعات نمونه؛ اتصال و استقرار پس از بررسی زیرساخت سازمان انجام می‌شود.</p></footer>
    </main>
  );
}
