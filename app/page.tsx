import Link from "next/link";
import { ArrowLeft, BarChart3, Building2, CheckCircle2, ShieldCheck, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

function BrandMark() {
  return <div className="brand-mark" aria-hidden="true"><span /><span /><span /></div>;
}

export default function LoginPage() {
  return (
    <main className="login-shell" dir="rtl">
      <section className="login-brand-panel">
        <div className="login-brand-content">
          <div className="brand-lockup"><BrandMark /><div><strong>سامانه هوشمند سرمایه انسانی</strong><span>حاکمیت داده سرمایه‌های انسانی</span></div></div>
          <div className="login-message">
            <p className="eyebrow">نمای یکپارچه سرمایه انسانی</p>
            <h1>از داده‌های پراکنده،<br />تا تصمیم‌های قابل اتکا</h1>
            <p>تصویری روشن از وضعیت سازمان، واحدها و اقدامات توسعه‌ای؛ با اتصال داده‌های راهکاران، دنیای پردازش و ارزیابی‌های دوره‌ای.</p>
          </div>
          <div className="source-strip"><span><CheckCircle2 /> راهکاران</span><span><CheckCircle2 /> دنیای پردازش</span><span><CheckCircle2 /> ارزیابی عملکرد</span></div>
        </div>
        <div className="industrial-grid" aria-hidden="true" />
      </section>

      <section className="login-access-panel">
        <div className="access-wrap">
          <div className="mobile-brand"><BrandMark /><strong>سامانه هوشمند سرمایه انسانی</strong></div>
          <p className="eyebrow">ورود به نسخه نمایشی</p>
          <h2>نقش خود را انتخاب کنید</h2>
          <p className="muted-copy">سطح اطلاعات و ابزارهای تصمیم‌گیری متناسب با نقش شما نمایش داده می‌شود.</p>
          <div className="role-grid">
            <article className="role-card executive-role">
              <div className="role-icon"><Building2 /></div>
              <div><h3>مدیرعامل</h3><p>نمای کلان سازمان، رتبه واحدها و تعداد موارد پرریسک</p></div>
              <ul><li><BarChart3 /> شاخص‌های کلان و روندها</li><li><ShieldCheck /> بدون نمایش اطلاعات فردی</li></ul>
              <Button asChild className="w-full justify-between"><Link href="/executive">ورود به داشبورد مدیرعامل <ArrowLeft /></Link></Button>
            </article>
            <article className="role-card hr-role">
              <div className="role-icon"><Users /></div>
              <div><h3>مدیر منابع انسانی</h3><p>تحلیل کامل سازمان، واحد، فرد و اقدامات اصلاحی</p></div>
              <ul><li><BarChart3 /> تحلیل جزئی و پرونده ۳۶۰ درجه</li><li><ShieldCheck /> کنترل کیفیت و حاکمیت داده</li></ul>
              <Button asChild className="w-full justify-between bg-teal-600 hover:bg-teal-700"><Link href="/hr">ورود به داشبورد منابع انسانی <ArrowLeft /></Link></Button>
            </article>
          </div>
          <p className="demo-note">نسخه نمایشی · داده‌ها ساختگی هستند</p>
        </div>
      </section>
    </main>
  );
}
