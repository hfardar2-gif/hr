"use client";

import { createContext, useContext, useState } from "react";
import { CalendarRange, Database, MapPin, RotateCcw, SlidersHorizontal, UsersRound } from "lucide-react";

export type DashboardFilters = {
  period: string;
  unit: string;
  contract: string;
  location: string;
  from: string;
  to: string;
};

const defaults: DashboardFilters = { period: "month", unit: "all", contract: "all", location: "all", from: "", to: "" };

const FilterContext = createContext<{
  filters: DashboardFilters;
  setFilter: (key: keyof DashboardFilters, value: string) => void;
  reset: () => void;
}>({ filters: defaults, setFilter: () => undefined, reset: () => undefined });

export function DashboardFilterProvider({ children }: { children: React.ReactNode }) {
  const [filters, setFilters] = useState<DashboardFilters>(defaults);
  const setFilter = (key: keyof DashboardFilters, value: string) => setFilters((current) => ({ ...current, [key]: value }));
  return <FilterContext.Provider value={{ filters, setFilter, reset: () => setFilters(defaults) }}>{children}</FilterContext.Provider>;
}

export function useDashboardFilters() { return useContext(FilterContext); }

const units = ["سرمایه‌های انسانی", "مالی", "فروش", "بازرگانی", "تولید", "نگهداری و تعمیرات", "انبار"];

export function GlobalDashboardFilters() {
  const { filters, setFilter, reset } = useDashboardFilters();
  return <section className="global-filter-panel" aria-label="فیلترهای گزارش">
    <div className="filter-panel-title"><span><SlidersHorizontal /></span><div><strong>فیلترهای هوشمند</strong><small>تمام شاخص‌های این صفحه بر اساس انتخاب شما محاسبه می‌شوند</small></div></div>
    <div className="filter-controls">
      <label><span><CalendarRange />بازه زمانی</span><select value={filters.period} onChange={(event) => setFilter("period", event.target.value)}><option value="today">امروز</option><option value="week">هفته جاری</option><option value="month">ماه جاری</option><option value="year">سال جاری</option><option value="custom">بازه دلخواه</option></select></label>
      <label><span><UsersRound />واحد سازمانی</span><select value={filters.unit} onChange={(event) => setFilter("unit", event.target.value)}><option value="all">همه واحدها</option>{units.map((unit) => <option key={unit} value={unit}>{unit}</option>)}</select></label>
      <label><span><Database />نوع قرارداد</span><select value={filters.contract} onChange={(event) => setFilter("contract", event.target.value)}><option value="all">همه قراردادها</option><option value="رسمی">رسمی</option><option value="پیمانی">پیمانی</option><option value="پروژه‌ای">پروژه‌ای</option><option value="امانی">امانی</option></select></label>
      <label><span><MapPin />موقعیت مکانی</span><select value={filters.location} onChange={(event) => setFilter("location", event.target.value)}><option value="all">همه مناطق</option><option value="تهران">تهران</option><option value="شیراز">شیراز</option><option value="مشهد">مشهد</option></select></label>
      <button className="filter-reset" onClick={reset} aria-label="پاک‌کردن فیلترها"><RotateCcw />پاک‌سازی</button>
    </div>
    {filters.period === "custom" && <div className="custom-date-row"><label>از تاریخ<input type="date" value={filters.from} onChange={(event) => setFilter("from", event.target.value)} /></label><label>تا تاریخ<input type="date" value={filters.to} onChange={(event) => setFilter("to", event.target.value)} /></label></div>}
  </section>;
}
