import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        // Navbar
        home: "Home",
        about: "About",
        services: "Services",
        projects: "Projects",
        testimonial: "Testimonial",
        contact: "Contact",
        // Hero
        hero_hi: "Hi, I'm Rowida",
        hero_job: "Social Worker",
        hero_desc: "High-level experience in social services and community support, providing impactful and meaningful help to individuals and families.",
        download_cv: "Download CV",
        // Projects Section
        projects_main_title: "Projects & Case Studies",
        p1_title: "Early Intervention: Eyad",
        p1_desc: "Eyad initially struggled with memory and focus, impacting his reading and writing.",
        p2_title: "Speech Therapy: Hams",
        p2_desc: "Hams struggled with speech and stuttering, affecting her academics.",
        p3_title: "Language Development: Dalida",
        p3_desc: "Dalida started saying her first words and is showing steady progress.",
        p4_title: "Autism Therapy: Basant",
        p4_desc: "Basant showed early signs of autism, but with therapy, she is making great progress.",
        p5_title: "Cognitive Therapy: Abdel Rahman",
        p5_desc: "Abdel Rahman struggled with cognition and memory. Therapy helped him improve.",
        p6_title: "Speech & Behavior: Ahmed",
        p6_desc: "Therapy helped correct Ahmed's speech and improve negative behaviors.",
        p7_title: "Learning Support: Almi",
        p7_desc: "Therapy helped Almi improve core skills and academic performance.",
        p8_title: "Speech Therapy: Ahmed",
        p8_desc: "Therapy helped him form clear and understandable sentences.",
        // Services
        services_title: "My Services & Specialties",
        s1: "Pediatric Speech Therapy",
        s2: "Accent Modification",
        s3: "Language Disorders",
        s4: "Stuttering Therapy",
        s5: "Speech Safety & Privacy",
        s6: "Cognitive Speech Training",
        s7: "Educational Workshops",
        s8: "Personalized Care Plans",
        // Testimonials
        testimonials_title: "Testimonials",
        // Contact
        contact_info_title: "Contact Information",
        email_addr: "Email Address",
        phone_label: "Phone",
        office_loc: "Office Location",
        location_val: "Zagazig, Cairo",
        full_name: "Full Name",
        email_placeholder: "Email",
        mobile_num: "Mobile Number",
        subject: "Subject",
        message_placeholder: "Your message here",
        send_btn: "Send Message",
        msg_success: "Message sent successfully!",
        msg_error: "Failed to send message."
      },
    },
    ar: {
      translation: {
        // Navbar
        home: "الرئيسية",
        about: "عني",
        services: "خدماتي",
        projects: "أعمالي",
        testimonial: "آراء العملاء",
        contact: "تواصل معي",
        // Hero
        hero_hi: "أهلاً، أنا رويدا",
        hero_job: "أخصائية اجتماعية",
        hero_desc: "خبرة واسعة في الخدمات الاجتماعية والدعم المجتمعي، وتقديم مساعدة مؤثرة وذات مغزى للأفراد والأسر.",
        download_cv: "تحميل السيرة الذاتية",
        // Projects Section (تم تعديل الترتيب ليكون الاسم أولاً)
        projects_main_title: "المشاريع ودراسات الحالة",
        p1_title: "حالة إياد: التدخل المبكر",
        p1_desc: "كان إياد يعاني في البداية من مشاكل في الذاكرة والتركيز، مما أثر على قراءته وكتابته.",
        p2_title: "حالة همس: علاج النطق",
        p2_desc: "عانت همس من صعوبات في النطق واللدغة والتأتأة، مما أثر على مستواها الدراسي.",
        p3_title: "حالة داليدا: تطور اللغة",
        p3_desc: "بدأت داليدا في نطق كلماتها الأولى وتظهر تقدماً مستمراً وملحوظاً.",
        p4_title: "حالة بسنت: علاج التوحد",
        p4_desc: "ظهرت على بسنت علامات مبكرة للتوحد، ولكن مع جلسات العلاج تلاشت هذه العلامات بشكل كبير.",
        p5_title: "حالة عبد الرحمن: العلاج المعرفي",
        p5_desc: "عاني عبد الرحمن من مشاكل في الإدراك والذاكرة، وساعده العلاج في تحسين مهاراته الذهنية.",
        p6_title: "حالة أحمد: النطق والسلوك",
        p6_desc: "ساعد العلاج في تصحيح نطق حرف (الراء) وتعديل بعض السلوكيات السلبية.",
        p7_title: "حالة ألمي: دعم التعلم",
        p7_desc: "ساعدها العلاج في تحسين المهارات الأساسية ورفع كفاءة الأداء الأكاديمي.",
        p8_title: "حالة أحمد: جلسات التخاطب",
        p8_desc: "ساعده العلاج في تحسين مخارج الحروف وتكوين جمل واضحة ومفهومة.",
        // Services
        services_title: "خدماتي وتخصصاتي",
        s1: "علاج النطق للأطفال",
        s2: "تعديل اللهجة",
        s3: "اضطرابات اللغة",
        s4: "علاج التأتأة",
        s5: "سلامة وخصوصية النطق",
        s6: "التدريب الإدراكي للنطق",
        s7: "ورش عمل تعليمية",
        s8: "خطط رعاية مخصصة",
        // Testimonials
        testimonials_title: "آراء العملاء",
        // Contact
        contact_info_title: "معلومات التواصل",
        email_addr: "البريد الإلكتروني",
        phone_label: "رقم الهاتف",
        office_loc: "مقر المكتب",
        location_val: "الزقازيق، القاهرة",
        full_name: "الاسم بالكامل",
        email_placeholder: "البريد الإلكتروني",
        mobile_num: "رقم الموبايل",
        subject: "الموضوع",
        message_placeholder: "اكتب رسالتك هنا",
        send_btn: "إرسال الرسالة",
        msg_success: "تم إرسال الرسالة بنجاح!",
        msg_error: "فشل الإرسال، حاول مرة أخرى."
      },
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;