import Link from "next/link";
import { ArrowDown, ArrowLeft, ArrowUp, Minus, MoreHorizontal } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function SectionHeading({ title, description, action, href }: { title: string; description?: string; action?: string; href?: string }) {
  return <div className="section-heading"><div><h2>{title}</h2>{description && <p>{description}</p>}</div>{action && (href ? <Link className="page-link" href={href}><button>{action}<ArrowLeft /></button></Link> : <button>{action}<ArrowLeft /></button>)}</div>;
}

export function StatCard({ label, value, unit, trend, trendLabel, tone = "navy", icon: Icon }: any) {
  const up = trend > 0;
  const meter = Math.max(28, Math.min(92, 52 + Number(trend || 0) * 2));
  return <Card className={`stat-card tone-${tone}`}><CardContent className="p-0"><span className="stat-watermark"><Icon /></span><div className="stat-top"><span className="stat-icon"><Icon /></span><MoreHorizontal /></div><p>{label}</p><div className="stat-value"><strong>{value}</strong>{unit && <span>{unit}</span>}</div><div className={`stat-trend ${up ? "positive" : trend < 0 ? "negative" : "neutral"}`}>{up ? <ArrowUp /> : trend < 0 ? <ArrowDown /> : <Minus />}<span>{Math.abs(trend)}٪ {trendLabel}</span></div><div className="stat-meter" style={{ "--meter": `${meter}%` } as React.CSSProperties}><b /></div></CardContent></Card>;
}

const values = [58, 62, 65, 64, 68, 70, 69, 73, 75, 74, 77, 79];
export function TrendChart() {
  const points = values.map((v, i) => `${i * 56 + 20},${180 - (v - 50) * 4}`).join(" ");
  return <div className="trend-chart"><div className="chart-y"><span>۹۰</span><span>۷۵</span><span>۶۰</span><span>۴۵</span></div><svg viewBox="0 0 660 210" role="img" aria-label="روند شاخص سلامت سازمانی در دوازده ماه"><defs><linearGradient id="trendFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#14b8a6" stopOpacity=".25"/><stop offset="1" stopColor="#14b8a6" stopOpacity="0"/></linearGradient></defs><line x1="20" y1="40" x2="636" y2="40" /><line x1="20" y1="100" x2="636" y2="100" /><line x1="20" y1="160" x2="636" y2="160" /><polygon points={`20,190 ${points} 636,190`} fill="url(#trendFill)" stroke="none" /><polyline points={points} fill="none" stroke="#0f9f92" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />{values.map((v, i) => <circle key={i} cx={i * 56 + 20} cy={180 - (v - 50) * 4} r={i === 11 ? 6 : 3} fill={i === 11 ? "#0f766e" : "#fff"} stroke="#0f9f92" strokeWidth="3" />)}</svg><div className="chart-x"><span>مهر</span><span>آذر</span><span>بهمن</span><span>فروردین</span><span>خرداد</span><span>شهریور</span></div></div>;
}

export const departments = [
  { slug: "financial", name: "مالی", people: 24, score: 89, risk: 1, trend: 6, state: "ممتاز", tone: "excellent" },
  { slug: "human-resources", name: "سرمایه‌های انسانی", people: 18, score: 83, risk: 1, trend: 4, state: "مطلوب", tone: "good" },
  { slug: "sales", name: "فروش", people: 32, score: 76, risk: 3, trend: 2, state: "مطلوب", tone: "good" },
  { slug: "commerce", name: "بازرگانی", people: 26, score: 68, risk: 4, trend: -2, state: "نیازمند توسعه", tone: "develop" },
  { slug: "warehouse", name: "انبار", people: 30, score: 65, risk: 5, trend: -1, state: "نیازمند توسعه", tone: "develop" },
  { slug: "maintenance", name: "نگهداری و تعمیرات", people: 35, score: 59, risk: 8, trend: -5, state: "نیازمند توجه", tone: "attention" },
  { slug: "production", name: "تولید", people: 135, score: 61, risk: 14, trend: -5, state: "نیازمند توجه", tone: "attention" },
];

export function DepartmentTable({ hr = false }: { hr?: boolean }) {
  return <div className="table-wrap"><table className="department-table"><thead><tr><th>واحد سازمانی</th><th>تعداد نیرو</th><th>امتیاز</th><th>موارد پرریسک</th><th>روند</th><th>وضعیت</th><th>اقدام</th></tr></thead><tbody>{departments.map((d) => <tr key={d.name}><td><span className="dept-avatar">{d.name.slice(0, 1)}</span><strong>{d.name}</strong></td><td>{d.people} نفر</td><td><div className="score-cell"><span>{d.score}</span><i><b style={{ width: `${d.score}%` }} /></i></div></td><td><strong className={d.risk > 5 ? "risk-number" : ""}>{d.risk}</strong></td><td><span className={d.trend > 0 ? "trend-up" : "trend-down"}>{d.trend > 0 ? <ArrowUp /> : <ArrowDown />}{Math.abs(d.trend)}٪</span></td><td><Badge className={`status-badge ${d.tone}`}>{d.state}</Badge></td><td><Link className="row-action" href={`${hr ? "/hr" : ""}/departments/${d.slug}`}>{hr ? "بررسی" : "گزارش"} <ArrowLeft /></Link></td></tr>)}</tbody></table></div>;
}

export function DataQualityRing({ value = 91 }: { value?: number }) {
  return <div className="quality-ring" style={{ background: `conic-gradient(#0f9f92 ${value * 3.6}deg, #e7edf0 0deg)` }}><div><strong>{value}٪</strong><span>قابلیت اتکا</span></div></div>;
}
