# لوحة تحكم كافيه اللمسة — Restaurant Dashboard

لوحة تحكم سحابية حديثة لمطاعم وكافيهات، مبنية بـ **Next.js 14** (App Router) مع دعم كامل للغة العربية واتجاه RTL.

![Next.js](https://img.shields.io/badge/Next.js-14-black) ![React](https://img.shields.io/badge/React-18-blue) ![License](https://img.shields.io/badge/license-MIT-green)

## المزايا

- 📊 بطاقات إحصائيات سريعة (KPI): مبيعات اليوم، عدد الطلبات، قيد التحضير، متوسط وقت التحضير
- 📋 جدول الطلبات النشطة مع فلترة حسب الحالة (قيد التحضير / بانتظار التوصيل / مكتمل)
- 🔍 بحث فوري في الطلبات والعملاء والمنتجات
- ➕ إضافة طلب جديد تُحدّث الأرقام مباشرةً
- 📈 مخطط مبيعات الأسبوع + قائمة الأكثر مبيعاً
- 🌐 واجهة عربية RTL بالكامل

## التشغيل محلياً

```bash
npm install
npm run dev
```

ثم افتح `http://localhost:3000`

## النشر على Vercel (مجاناً)

1. ارفع المشروع إلى مستودع GitHub (خاص أو عام).
2. سجّل في [vercel.com](https://vercel.com) عبر حساب GitHub.
3. اضغط **Add New → Project** واختر المستودع — سيتم النشر تلقائياً خلال ثوانٍ.
4. كل مرة تدفع فيها (`push`) تغييرات، يُعاد النشر تلقائياً.

## التخصيص للعميل

كل ما يخص هوية المطعم في مكان واحد:

| ماذا تغيّر | أين |
|---|---|
| اسم المطعم والشعار | `components/Sidebar.js` |
| بيانات الطلبات والمنتجات | `components/data.js` |
| الألوان والخطوط | `app/globals.css` (قسم `:root`) |
| قيم المخطط | `components/data.js` → `weekSales` |

## بنية المشروع

```
restaurant-dashboard/
├── app/
│   ├── layout.js        # الهيكل العام + RTL
│   ├── page.js          # الصفحة الرئيسية (المنطق التفاعلي)
│   └── globals.css      # التنسيقات
├── components/
│   ├── Sidebar.js       # الشريط الجانبي
│   ├── Header.js        # الهيدر + البحث + إضافة طلب
│   ├── KpiCard.js       # بطاقة إحصائية
│   ├── OrdersTable.js   # جدول الطلبات
│   ├── TopSelling.js    # الأكثر مبيعاً
│   ├── WeekChart.js     # مخطط الأسبوع (SVG)
│   └── data.js          # البيانات التجريبية
└── package.json
```

## الترخيص

MIT — حر الاستخدام للعملاء والمشاريع التجارية.
