# فهرست داده‌های موردنیاز سامانه سرمایه انسانی

تمام داده‌های نسخه شماره ۱ فرضی هستند. اکنون فقط آمار تجمیعی ۳۰۰ نفر و ۸ پرونده فردی نمونه در رابط وجود دارد. برای ساخت گزارش واقعی، داده‌های زیر باید از سامانه‌های سازمان تحویل شوند.

## آمار فرضی فعلی

| واحد | تعداد فرضی |
|---|---:|
| تولید | ۱۳۵ |
| نگهداری و تعمیرات | ۳۵ |
| فروش | ۳۲ |
| انبار | ۳۰ |
| بازرگانی | ۲۶ |
| مالی | ۲۴ |
| سرمایه‌های انسانی | ۱۸ |
| جمع | ۳۰۰ |

## فایل‌های پیشنهادی

| فایل | منبع | کاربرد |
|---|---|---|
| employees.xlsx | راهکاران | مشخصات و وضعیت کارکنان |
| organization_units.xlsx | راهکاران | ساختار واحدها و مدیران |
| attendance_daily.xlsx | دنیای پردازش | ورود، خروج، تأخیر، غیبت و اضافه‌کاری |
| performance_reviews.xlsx | Excel ارزیابی | عملکرد و شایستگی‌های دوره‌ای |
| employee_training.xlsx | راهکاران یا Excel | آموزش‌های الزامی و توسعه‌ای |
| contracts_movements.xlsx | راهکاران | قرارداد، استخدام، انتقال و خروج |
| medical_status.xlsx | طب کار یا Excel | فقط اعتبار معاینات دوره‌ای |
| behavior_competencies.xlsx | Excel ارزیابی | شاخص‌های رفتار سازمانی |
| engagement_enps.xlsx | نظرسنجی یا Excel | مشارکت و eNPS |
| talent_succession.xlsx | ارزیابی مدیران | پتانسیل و جانشین‌پروری |
| skills_matrix.xlsx | منابع انسانی | مهارت موجود و نیاز شغلی |

## ۱. اطلاعات پایه کارکنان

هر پرسنل یک ردیف:

- employee_id: کد یکتای پرسنلی
- first_name و last_name
- gender
- birth_date
- hire_date
- employment_status: شاغل، مرخصی بلندمدت، در حال خروج، خارج‌شده
- unit_id
- job_id و job_title
- job_rank: تکنسین، کارشناس، سرپرست، مدیر
- supervisor_id
- education_level و education_field
- contract_type
- contract_start_date و contract_end_date
- work_location
- shift_code

این اطلاعات تعداد پرسنل، جنسیت، سن، تحصیلات، سابقه، قرارداد، محل خدمت و پروفایل فردی را می‌سازد.

## ۲. ساختار سازمانی

- unit_id
- unit_name
- parent_unit_id
- manager_employee_id
- approved_headcount
- active_flag
- location

## ۳. حضور و غیاب روزانه

هر ردیف یک فرد در یک روز:

- employee_id
- work_date
- shift_code
- scheduled_start و scheduled_end
- first_entry و last_exit
- worked_minutes
- late_minutes
- early_leave_minutes
- overtime_minutes
- absence_minutes
- absence_type: موجه، غیرموجه، استعلاجی، مرخصی
- leave_type
- attendance_status

منبع پیشنهادی: خروجی دنیای پردازش برای حداقل ۱۲ ماه.

## ۴. ارزیابی عملکرد دوره‌ای

- review_id
- employee_id
- period_id
- period_start و period_end
- evaluator_id
- goal_score
- competency_score
- quality_score
- productivity_score
- total_score از ۱۰۰
- review_status
- feedback_date
- comments

## ۵. شاخص‌های رفتار سازمانی

- employee_id و period_id
- teamwork_score
- discipline_score
- learning_score
- quality_result_score
- safety_behavior_score
- communication_score
- evaluator_id
- evaluation_status

وزن‌های فعلی دمو: عملکرد ۳۰٪، حضور ۲۵٪، رفتار ۲۵٪، آموزش ۱۵٪ و کیفیت داده ۵٪. این وزن‌ها باید قبل از استفاده واقعی تأیید شوند.

## ۶. آموزش

- employee_id
- course_id و course_title
- course_type: الزامی، شغلی، توسعه‌ای، ایمنی
- required_flag
- enroll_date، start_date و end_date
- completion_status
- hours
- exam_score
- certificate_expiry
- provider

## ۷. وضعیت معاینات

سامانه به جزئیات بیماری نیاز ندارد:

- employee_id
- exam_type
- exam_date
- valid_until
- fitness_status: معتبر، نیازمند تمدید، نیازمند پیگیری
- restriction_flag بدون شرح پزشکی
- next_action

اطلاعات پزشکی وارد امتیاز رفتار، عملکرد یا استخدام نمی‌شود.

## ۸. قرارداد و جابه‌جایی نیروی انسانی

- employee_id
- event_type: استخدام، تمدید، انتقال، ارتقا، خروج
- event_date
- contract_type و contract_end_date
- renewal_status
- exit_date
- exit_reason_category
- voluntary_exit

## ۹. نظرسنجی eNPS

- survey_id و period_id
- employee_id یا anonymous_id
- unit_id
- enps_score از ۰ تا ۱۰
- engagement_score
- response_date

فرمول: درصد ترویج‌دهندگان با امتیاز ۹ و ۱۰، منهای درصد مخالفان با امتیاز ۰ تا ۶.

## ۱۰. استعداد و جانشین‌پروری

- employee_id و period_id
- performance_level
- potential_level و potential_score
- critical_role_id
- succession_stage: شناسایی، در حال آموزش، آماده جانشینی، جانشین‌شده
- readiness_date
- development_plan
- reviewer_id

## ۱۱. مهارت‌ها

فایل مهارت فرد:

- employee_id، skill_id، skill_title، current_level، assessment_date

فایل نیاز شغل:

- job_id، skill_id، required_level، required_headcount، priority

## فرمول شاخص‌های اصلی

| شاخص | فرمول |
|---|---|
| کل پرسنل | کارکنان فعال در انتهای دوره |
| نرخ ترک خدمت | خروجی‌ها ÷ میانگین کارکنان × ۱۰۰ |
| میانگین غیبت | مجموع روز غیبت ÷ تعداد کارکنان |
| پوشش آموزش | آموزش الزامی تکمیل‌شده ÷ کل آموزش الزامی × ۱۰۰ |
| حضور مؤثر | زمان کارکرد معتبر ÷ زمان برنامه‌ریزی‌شده × ۱۰۰ |
| قرارداد فوری | کمتر از ۳۰ روز تا پایان |
| کیفیت داده | رکورد کامل و معتبر ÷ کل رکوردها × ۱۰۰ |

## حداقل داده برای شروع اتصال

1. فایل پرسنلی کامل راهکاران
2. فایل واحدها و ساختار سازمانی
3. خروجی تردد دنیای پردازش برای ۱۲ ماه
4. ارزیابی عملکرد و رفتار برای حداقل دو دوره
5. آموزش، قراردادها و اعتبار معاینات

eNPS، جانشین‌پروری و مهارت‌ها می‌توانند در مرحله بعد اضافه شوند.

## کنترل کیفیت تحویل

- کد پرسنلی در همه فایل‌ها یکسان باشد.
- واحدها شناسه ثابت داشته باشند.
- تاریخ‌ها یک قالب واحد داشته باشند.
- امتیازها در دامنه ۰ تا ۱۰۰ باشند.
- مقادیر ناموجود خالی باشند، نه متن نامشخص.
- کارکنان خارج‌شده حذف نشوند؛ وضعیت و تاریخ خروج ثبت شود.
- اطلاعات حساس پزشکی و کد ملی فقط در صورت نیاز قطعی منتقل شوند.
- معنی همه ستون‌ها در یک فایل راهنما نوشته شود.

## بروزرسانی پیشنهادی

- پرسنلی، قرارداد و آموزش: هر شب
- تردد: روزانه یا هر چند ساعت
- عملکرد و رفتار: بعد از هر دوره
- معاینات: روزانه برای کنترل انقضا
- eNPS و استعداد: بعد از هر دوره ارزیابی
