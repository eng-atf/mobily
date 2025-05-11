import {
  Wifi,
  Rocket,
  Infinity,
  Phone,
  MapPin,
  Users,
  DollarSign,
  Clock,
  Shield,
  Zap,
  Award,
  CheckCircle,
} from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-right" dir="rtl">
      {/* Header */}
      <header className="bg-white text-gray-800 py-4 px-6 md:px-10 shadow-sm">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold text-blue-900">مندوب موبايلي</h1>
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="border-2 border-blue-900 text-blue-900 px-4 py-2 rounded-lg font-bold hover:bg-blue-50 transition"
            >
              اتصل بنا
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-50 text-gray-800 py-16 px-6 md:px-10">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 relative overflow-hidden">
              {/* Decorative corner elements */}
              <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-blue-900 rounded-tr-2xl"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-blue-900 rounded-bl-2xl"></div>

              <div className="space-y-6 text-center relative z-10">
                <div className="flex justify-center items-center gap-2 text-blue-900">
                  <Zap className="h-8 w-8" />
                  <h2 className="text-4xl md:text-5xl font-bold">العرض القوي 💪🏻💪🏻</h2>
                </div>
                <h3 className="text-3xl font-bold text-blue-900">
                  من موبايلي{" "}
                  <span className="inline-flex items-center">
                    5G <Wifi className="h-6 w-6 ml-1" />
                  </span>
                </h3>
                <p className="text-xl md:text-2xl flex items-center justify-center gap-2">
                  <Award className="h-6 w-6 text-blue-900" />
                  عرض لفترة محدودة 🤏🏻😁
                </p>
                <p className="text-xl md:text-2xl flex items-center justify-center">
                  <Rocket className="h-6 w-6 text-blue-900 mx-2" />
                  سرعة كفك 🚀 وبسعر يرضيك ☺
                </p>
                <p className="text-xl flex items-center justify-center">
                  موبايلي اير فايبر الجيل الخامس
                  <span className="inline-flex items-center mx-2">
                    <Zap className="h-5 w-5 text-blue-900" />
                    5G
                  </span>
                </p>
                <a
                  href="#packages"
                  className="inline-block border-2 border-blue-900 bg-blue-900 text-white px-6 py-3 rounded-lg font-bold text-lg hover:bg-blue-950 hover:border-blue-950 transition"
                >
                  اطلع على الباقات
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-16 px-6 md:px-10 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">الباقات 😎🚀🔥♾ والأسعار 💰</h2>
            <div className="w-20 h-1 bg-blue-900 mx-auto mt-4 mb-6"></div>
            <p className="text-xl text-gray-600">اختر الباقة المناسبة لاحتياجاتك</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Package 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition border border-gray-200">
              <div className="border-b-2 border-blue-900 p-4 text-center">
                <h3 className="text-2xl font-bold text-blue-900">الباقة الأولى</h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Rocket className="h-6 w-6 text-blue-900" />
                  <p className="text-lg">سرعة 100 ميجا 🚀</p>
                </div>
                <div className="flex items-center gap-3">
                  <Infinity className="h-6 w-6 text-blue-900" />
                  <p className="text-lg">انترنت لا محدود ♾</p>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-6 w-6 text-blue-900" />
                  <p className="text-lg">اشتراك شهري</p>
                </div>
                <div className="flex items-center gap-3">
                  <DollarSign className="h-6 w-6 text-blue-900" />
                  <p className="text-lg font-bold">230 ريال شامل الضريبة</p>
                </div>
                <p className="text-gray-600">مدى الحياة</p>
                <a
                  href="#contact"
                  className="block w-full border-2 border-blue-900 bg-white text-blue-900 text-center py-3 rounded-lg font-bold hover:bg-blue-50 transition"
                >
                  اطلب الآن
                </a>
              </div>
            </div>

            {/* Package 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition border border-blue-300">
              <div className="border-b-2 border-blue-900 p-4 text-center relative">
                <span className="absolute top-0 right-0 bg-yellow-400 text-blue-900 text-xs font-bold px-2 py-1 rounded-bl-lg">
                  الأكثر طلباً
                </span>
                <h3 className="text-2xl font-bold text-blue-900">الباقة الثانية</h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Rocket className="h-6 w-6 text-blue-900" />
                  <p className="text-lg">سرعة 200 ميجا 🚀</p>
                </div>
                <div className="flex items-center gap-3">
                  <Infinity className="h-6 w-6 text-blue-900" />
                  <p className="text-lg">انترنت لا محدود ♾</p>
                </div>
                <div className="flex items-center gap-3">
                  <Wifi className="h-6 w-6 text-blue-900" />
                  <p className="text-lg">جهاز راوتر مجاني</p>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-6 w-6 text-blue-900" />
                  <p className="text-lg">يغطي لـ 36 شخص</p>
                </div>
                <div className="flex items-center gap-3">
                  <DollarSign className="h-6 w-6 text-blue-900" />
                  <p className="text-lg font-bold">230 ريال شامل الضريبة</p>
                </div>
                <p className="text-gray-600">للسنة الأولى فقط، ثم 287 ريال</p>
                <a
                  href="#contact"
                  className="block w-full border-2 border-blue-900 bg-blue-900 text-white text-center py-3 rounded-lg font-bold hover:bg-blue-950 hover:border-blue-950 transition"
                >
                  اطلب الآن
                </a>
              </div>
            </div>

            {/* Package 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition border border-gray-200">
              <div className="border-b-2 border-blue-900 p-4 text-center">
                <h3 className="text-2xl font-bold text-blue-900">الباقة الثالثة</h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Rocket className="h-6 w-6 text-blue-900" />
                  <p className="text-lg">سرعة تصل إلى 500 ميجا 🚀</p>
                </div>
                <div className="flex items-center gap-3">
                  <Infinity className="h-6 w-6 text-blue-900" />
                  <p className="text-lg">استخدام لا محدود ♾</p>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="h-6 w-6 text-blue-900" />
                  <p className="text-lg">بدون سياسة استخدام عادل 😎</p>
                </div>
                <div className="flex items-center gap-3">
                  <DollarSign className="h-6 w-6 text-blue-900" />
                  <p className="text-lg font-bold">402 ريال شامل الضريبة</p>
                </div>
                <p className="text-gray-600">شامل الميزات والمزايا</p>
                <a
                  href="#contact"
                  className="block w-full border-2 border-blue-900 bg-white text-blue-900 text-center py-3 rounded-lg font-bold hover:bg-blue-50 transition"
                >
                  اطلب الآن
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 md:px-10 bg-gray-50 border-t border-b border-gray-200">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">الميزات والمزايا 👀 🥰</h2>
            <div className="w-20 h-1 bg-blue-900 mx-auto mt-4 mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow border border-gray-200 hover:shadow-md transition">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full border-2 border-blue-900">
                  <Wifi className="h-6 w-6 text-blue-900" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">تغطية انترنت ممتازة</h3>
                  <p className="text-gray-600">
                    على شبكة الجيل الخامس (بما يصل إلى 10 أضعاف مقارنة بشبكة الجيل الرابع)
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow border border-gray-200 hover:shadow-md transition">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full border-2 border-blue-900">
                  <Rocket className="h-6 w-6 text-blue-900" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">سرعة انترنت متطورة</h3>
                  <p className="text-gray-600">على شبكة الجيل الخامس 5G وبيانات لا محدودة الاستخدام</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow border border-gray-200 hover:shadow-md transition">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full border-2 border-blue-900">
                  <Shield className="h-6 w-6 text-blue-900" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">سياسة استخدام عادل</h3>
                  <p className="text-gray-600">مع دعم الاتصال بشبكة الجيل الرابع 4G/LTE</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow border border-gray-200 hover:shadow-md transition">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full border-2 border-blue-900">
                  <Wifi className="h-6 w-6 text-blue-900" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">جهاز راوتر الجيل الخامس مجاناً 🆓</h3>
                  <p className="text-gray-600">والذي يسمح باتصال 64 مستخدم بالشبكة في نفس الوقت</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Section */}
      <section className="py-16 px-6 md:px-10 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">الشروط والأحكام</h2>
            <div className="w-20 h-1 bg-blue-900 mx-auto mt-4 mb-6"></div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow border border-gray-200">
            <ul className="space-y-4">
              <li className="text-lg flex items-start gap-2">
                <CheckCircle className="h-6 w-6 text-blue-900 mt-0.5 flex-shrink-0" />
                <span>هوية أو إقامة (سارية المفعول)</span>
              </li>
              <li className="text-lg flex items-start gap-2">
                <CheckCircle className="h-6 w-6 text-blue-900 mt-0.5 flex-shrink-0" />
                <span>عدم وجود مديونية بشركة موبايلي</span>
              </li>
              <li className="text-lg flex items-start gap-2">
                <CheckCircle className="h-6 w-6 text-blue-900 mt-0.5 flex-shrink-0" />
                <span>دفع رسوم الاشتراك مقدماً 250 ريال عند تفعيل الخدمة</span>
              </li>
              <li className="text-lg flex items-start gap-2">
                <CheckCircle className="h-6 w-6 text-blue-900 mt-0.5 flex-shrink-0" />
                <span>عقد لمدة 18 شهر</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 md:px-10 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">اتصل بنا</h2>
            <div className="w-20 h-1 bg-blue-900 mx-auto mt-4 mb-6"></div>
            <p className="text-xl text-gray-600">بحاجة للخدمة؟ أرسل اللوكيشن لنرسل لك المندوب 🚐🚐</p>
          </div>

          <div className="max-w-md mx-auto bg-white text-gray-800 p-8 rounded-xl shadow-lg border border-gray-200">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full border-2 border-blue-900">
                  <Phone className="h-6 w-6 text-blue-900" />
                </div>
                <div>
                  <p className="text-gray-600">اتصل بنا</p>
                  <a href="tel:0568327724" className="text-2xl font-bold text-blue-900 hover:text-blue-950 transition">
                    0568327724
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full border-2 border-blue-900">
                  <MapPin className="h-6 w-6 text-blue-900" />
                </div>
                <div>
                  <p className="text-gray-600">نصل إليك</p>
                  <p className="text-xl font-bold">عند باب بيتك عند الطلب</p>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <p className="text-center text-gray-600">فريق المبيعات الخاص بك</p>
                <p className="text-center text-lg">باللون الأبيض والأزرق</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-gray-800 py-8 px-6 md:px-10 border-t border-gray-200">
        <div className="container mx-auto text-center">
          <p>© {new Date().getFullYear()} مندوب موبايلي - جميع الحقوق محفوظة</p>
        </div>
      </footer>
    </div>
  )
}
