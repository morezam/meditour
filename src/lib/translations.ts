import {
  Plane,
  MessageCircle,
  Stethoscope,
  Building2,
  FileCheck,
  FileText,
  CalendarCheck,
  HeartPulse,
} from "lucide-react";

export const translations = {
  en: {
    header: {
      services: "Services",
      doctors: "Doctors",
      testimonials: "Testimonials",
      contact: "Contact Us",
    },
    hero: {
      title: "World-Class Medical Care in Iran",
      subtitle:
        "Discover our premium medical services at competitive prices with top doctors and modern facilities",
      whatsappButton: "Contact via WhatsApp",
      contactButton: "Contact Us",
    },
    services: {
      title: "Our Medical Services",
      description:
        "We offer a wide range of high-quality medical services at competitive prices",
      items: [
        {
          id: "1",
          title: "Rhinoplasty",
          description:
            "Advanced rhinoplasty procedures with the latest techniques and specialized surgeons",
          imageUrl:
            "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=2000",
        },
        {
          id: "2",
          title: "Dental Implants",
          description:
            "Advanced dental implant services with quality guarantee and perfect results",
          imageUrl:
            "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=2000",
        },
        {
          id: "3",
          title: "Heart Surgery",
          description:
            "Open heart surgery and catheterization by the most skilled specialized doctors",
          imageUrl:
            "https://images.unsplash.com/photo-1628595351029-c2bf17511435?auto=format&fit=crop&q=80&w=2000",
        },
      ],
      learnMore: "Learn More",
    },
    priceComparison: {
      title: "Global Price Comparison",
      subtitle:
        "Discover how Iran offers high-quality medical care at reasonable costs",
      tableTitle: "Medical Procedures Price Comparison",
      procedure: "Medical Procedure",
      iran: "Iran",
      usa: "USA",
      uk: "UK",
      uae: "UAE",
      learnMore: "Learn More",
    },
    testimonials: {
      title: "Patient Testimonials",
      subtitle: "Read about our patients' successful treatment journeys",
    },
    contact: {
      title: "Contact Us",
      subtitle: "We're here to answer all your inquiries",
      form: {
        title: "Send us a message",
        fullName: "Full Name",
        email: "Email",
        message: "Your Message",
        send: "Send Message",
        success:
          "Your message has been sent successfully. We'll contact you soon.",
      },
      directContact: {
        title: "Direct Contact",
        subtitle: "Choose your preferred way to contact us",
        whatsapp: "Contact via WhatsApp",
        telegram: "Contact via Telegram",
        available: "Available 24/7 to answer your inquiries",
      },
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle:
        "Answers to questions about medical and surgical services in Iran",
      items: [
        {
          id: "procedures",
          question: "What medical procedures are available in Iran?",
          answer:
            "Iran offers a wide range of medical procedures including cosmetic surgery, dental treatments, cardiac procedures, orthopedic surgeries, and fertility treatments. All procedures are performed by highly qualified specialists in state-of-the-art facilities.",
        },
        {
          id: "visa",
          question: "How can I obtain a medical visa for Iran?",
          answer:
            "Medical visas for Iran can be obtained through our assistance. We help coordinate with the relevant authorities and provide all necessary documentation. The process typically takes 7-10 working days, and we guide you through each step.",
        },
        {
          id: "accommodation",
          question:
            "What accommodation options are available for medical tourists?",
          answer:
            "We offer various accommodation options ranging from luxury hotels to serviced apartments near medical facilities. All accommodations are carefully selected to ensure comfort and convenience during your recovery period.",
        },
        {
          id: "cost",
          question: "How much do medical procedures cost in Iran?",
          answer:
            "Medical procedures in Iran are typically 40-80% less expensive than in Western countries while maintaining high quality standards. The exact cost depends on the procedure. We provide detailed cost breakdowns during consultation.",
        },
        {
          id: "recovery",
          question: "What support is provided during the recovery period?",
          answer:
            "We provide comprehensive post-procedure care including regular check-ups, 24/7 medical support, transportation services, and assistance with any special needs during your recovery period.",
        },
        {
          id: "language",
          question: "Is language support available for international patients?",
          answer:
            "Yes, we provide professional medical interpreters fluent in Arabic, English, and other languages to ensure clear communication between you and your healthcare providers throughout your stay.",
        },
      ],
    },
    packages: {
      title: "Customized Treatment Packages",
      subtitle:
        "Experience world-class medical care combined with Iran's rich cultural heritage",
      popular: "Most Popular",
      customize: "Customize Package",
      features: {
        dental: {
          title: "Dental Excellence",
          description:
            "State-of-the-art dental treatments including implants, veneers, and whitening",
        },
        aesthetic: {
          title: "Aesthetic Procedures",
          description:
            "Advanced cosmetic surgeries and non-invasive beauty treatments",
        },
        accommodation: {
          title: "Luxury Stays",
          description:
            "Premium hotel accommodations with dedicated medical support",
        },
        tours: {
          title: "Cultural Tours",
          description:
            "Guided tours to Iran's most beautiful historical sites and attractions",
        },
        cuisine: {
          title: "Persian Cuisine",
          description:
            "Experience authentic Iranian dishes and traditional delicacies",
        },
        souvenirs: {
          title: "Cultural Gifts",
          description:
            "Handpicked Persian souvenirs and traditional handicrafts",
        },
      },
      essential: {
        title: "Essential Care",
        description: "Perfect for focused medical treatments",
        features: {
          consultation: "Medical consultation and treatment plan",
          treatment: "Selected medical or dental procedure",
          accommodation: "3-star hotel accommodation",
          transfer: "Airport and hospital transfers",
        },
      },
      premium: {
        title: "Premium Experience",
        description: "Combine medical care with cultural experiences",
        features: {
          allEssential: "All Essential Care features",
          luxury: "4-star luxury hotel stay",
          tours: "Two cultural city tours",
          concierge: "24/7 personal concierge",
          cuisine: "Traditional Persian dinner experience",
          souvenirs: "Curated Persian souvenirs package",
        },
      },
      luxury: {
        title: "Luxury Journey",
        description: "The ultimate medical tourism experience",
        features: {
          allPremium: "All Premium Experience features",
          vip: "5-star luxury hotel suite",
          exclusive: "Private cultural tours with guide",
          family: "Family accommodation included",
          extended: "Extended stay and recovery support",
          gifts: "Premium Persian gift collection",
        },
      },
    },
    patientJourney: {
      title: "Process Steps",
      subtitle: "A step-by-step guide for patients from start to follow-up",
      items: [
        {
          icon: MessageCircle,
          title: "Initial Consultation",
          description:
            "Free online consultation to discuss your medical needs and preferences",
        },
        {
          icon: FileCheck,
          title: "Treatment Plan",
          description:
            "Receive a detailed treatment plan including costs and timeline",
        },
        {
          icon: FileText,
          title: "Visa & Documentation",
          description:
            "We assist with medical visa application and required documentation",
        },
        {
          icon: Plane,
          title: "Travel Arrangements",
          description: "Flight booking assistance and airport pickup service",
        },
        {
          icon: Building2,
          title: "Accommodation",
          description: "Comfortable accommodation near your medical facility",
        },
        {
          icon: Stethoscope,
          title: "Medical Procedure",
          description:
            "Your treatment by our experienced medical professionals",
        },
        {
          icon: HeartPulse,
          title: "Recovery & Care",
          description: "Post-procedure care and recovery monitoring",
        },
        {
          icon: CalendarCheck,
          title: "Follow-up",
          description:
            "Continued support and follow-up care after returning home",
        },
      ],
    },
    footer: {
      companyName: "Medical Tourism",
      contact: "contact",
      address: "123 Health Street, Tehran, Iran",
      subtitle:
        "We are committed to providing high-quality medical services to international patients",
      items: [
        {
          header: "Quick Links",
          links: [
            {
              title: "About",
              link: "#",
            },
            {
              title: "Services",
              link: "#",
            },
            {
              title: "Doctors",
              link: "#",
            },
            {
              title: "Testimonials",
              link: "#",
            },
          ],
        },
        {
          header: "Services",
          links: [
            {
              title: "Cosmetic",
              link: "#",
            },
            {
              title: "Dental",
              link: "#",
            },
            {
              title: "Orthopedic",
              link: "#",
            },
            {
              title: "Overall Health",
              link: "#",
            },
          ],
        },
      ],
    },
  },
  ar: {
    header: {
      services: "الخدمات",
      doctors: "الأطباء",
      testimonials: "آراء المرضى",
      contact: "اتصل بنا",
    },
    hero: {
      title: "رعاية طبية عالمية المستوى في إيران",
      subtitle:
        "اكتشف خدماتنا الطبية المتميزة بأسعار تنافسية مع أفضل الأطباء والمرافق الحديثة",
      whatsappButton: "تواصل عبر واتساب",
      contactButton: "اتصل بنا",
    },
    services: {
      title: "خدماتنا الطبية",
      description:
        "نقدم مجموعة واسعة من الخدمات الطبية عالية الجودة بأسعار تنافسية",
      items: [
        {
          id: "1",
          title: "جراحة تجميل الأنف",
          description:
            "عمليات تجميل الأنف بأحدث التقنيات وأفضل الجراحين المتخصصين",
          imageUrl:
            "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=2000",
        },
        {
          id: "2",
          title: "زراعة الأسنان",
          description:
            "خدمات زراعة الأسنان المتطورة مع ضمان الجودة والنتائج المثالية",
          imageUrl:
            "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=2000",
        },
        {
          id: "3",
          title: "جراحة القلب",
          description:
            "عمليات القلب المفتوح والقسطرة بأيدي أمهر الأطباء المتخصصين",
          imageUrl:
            "https://images.unsplash.com/photo-1628595351029-c2bf17511435?auto=format&fit=crop&q=80&w=2000",
        },
      ],
      learnMore: "اكتشف المزيد",
    },
    priceComparison: {
      title: "مقارنة الأسعار العالمية",
      subtitle: "اكتشف كيف تقدم إيران رعاية طبية عالية الجودة بتكلفة معقولة",
      tableTitle: "مقارنة أسعار الإجراءات الطبية",
      procedure: "الإجراء الطبي",
      iran: "إيران",
      usa: "الولايات المتحدة",
      uk: "المملكة المتحدة",
      uae: "الإمارات",
      learnMore: "اكتشف المزيد",
    },
    testimonials: {
      title: "تجارب مرضانا",
      subtitle: "اقرأ عن تجارب مرضانا الناجحة في رحلتهم العلاجية",
    },
    contact: {
      title: "تواصل معنا",
      subtitle: "نحن هنا للإجابة على جميع استفساراتك",
      form: {
        title: "أرسل لنا رسالة",
        fullName: "الاسم الكامل",
        email: "البريد الإلكتروني",
        message: "رسالتك",
        send: "إرسال الرسالة",
        success: "تم إرسال رسالتك بنجاح. سنتواصل معك قريباً.",
      },
      directContact: {
        title: "تواصل مباشرة",
        subtitle: "اختر الطريقة المناسبة للتواصل معنا",
        whatsapp: "تواصل عبر واتساب",
        telegram: "تواصل عبر تيليجرام",
        available: "متوفرون للرد على استفساراتكم على مدار الساعة",
      },
    },
    faq: {
      title: "الأسئلة الشائعة",
      subtitle:
        "إجابات على الأسئلة المتعلقة بالخدمات الطبية والجراحية في إيران",
      items: [
        {
          id: "procedures",
          question: "ما هي الإجراءات الطبية المتوفرة في إيران؟",
          answer:
            "تقدم إيران مجموعة واسعة من الإجراءات الطبية بما في ذلك الجراحات التجميلية، علاجات الأسنان، العمليات القلبية، جراحات العظام، وعلاجات الخصوبة. جميع الإجراءات يتم تنفيذها بواسطة متخصصين مؤهلين في مرافق حديثة.",
        },
        {
          id: "visa",
          question: "كيف يمكنني الحصول على تأشيرة طبية لإيران؟",
          answer:
            "يمكن الحصول على التأشيرة الطبية لإيران بمساعدتنا. نحن ننسق مع السلطات المعنية ونوفر جميع الوثائق اللازمة. عادة ما تستغرق العملية 7-10 أيام عمل، وسنرشدك خلال كل خطوة.",
        },
        {
          id: "accommodation",
          question: "ما خيارات الإقامة المتوفرة للسياح الطبيين؟",
          answer:
            "نقدم خيارات إقامة متنوعة تتراوح بين الفنادق الفاخرة والشقق المخدّمة بالقرب من المرافق الطبية. جميع الإقامات مختارة بعناية لضمان الراحة والتسهيل خلال فترة التعافي.",
        },
        {
          id: "cost",
          question: "كم تكلفة الإجراءات الطبية في إيران؟",
          answer:
            "تعد الإجراءات الطبية في إيران أقل تكلفة بنسبة 40-80% مقارنة بالدول الغربية مع الحفاظ على معايير جودة عالية. تعتمد التكلفة الدقيقة على الإجراء، وسنوفر تفاصيل التكاليف خلال الاستشارة.",
        },
        {
          id: "recovery",
          question: "ما الدعم الذي يتم توفيره خلال فترة التعافي؟",
          answer:
            "نوفر رعاية شاملة بعد الإجراء تتضمن فحوصات منتظمة، دعمًا طبيًا متاحًا على مدار الساعة، خدمات نقل، ومساعدة مع أي احتياجات خاصة خلال فترة التعافي.",
        },
        {
          id: "language",
          question: "هل يتوفر دعم لغوي للمرضى الدوليين؟",
          answer:
            "نعم، نوفر مترجمين طبيين محترفين يجيدون اللغة العربية، الإنجليزية، ولغات أخرى لضمان التواصل الواضح بينك وبين مقدمي الرعاية الصحية طوال فترة إقامتك.",
        },
      ],
    },
    packages: {
      title: "باقات العلاج المخصصة",
      subtitle:
        "تجربة رعاية طبية عالمية المستوى مع التراث الثقافي الإيراني الغني",
      popular: "الأكثر طلباً",
      customize: "تخصيص الباقة",
      features: {
        dental: {
          title: "التميز في طب الأسنان",
          description:
            "علاجات أسنان متطورة تشمل زراعة الأسنان والتلبيسات والتبييض",
        },
        aesthetic: {
          title: "الإجراءات التجميلية",
          description: "عمليات تجميل متقدمة وعلاجات تجميلية غير جراحية",
        },
        accommodation: {
          title: "إقامة فاخرة",
          description: "إقامة في فنادق فاخرة مع دعم طبي مخصص",
        },
        tours: {
          title: "جولات ثقافية",
          description: "جولات مع مرشد سياحي لأجمل المواقع التاريخية في إيران",
        },
        cuisine: {
          title: "المطبخ الفارسي",
          description: "تجربة الأطباق الإيرانية الأصيلة والمأكولات التقليدية",
        },
        souvenirs: {
          title: "هدايا ثقافية",
          description: "تذكارات فارسية منتقاة وحرف يدوية تقليدية",
        },
      },
      essential: {
        title: "الرعاية الأساسية",
        description: "مثالية للعلاجات الطبية المركزة",
        features: {
          consultation: "استشارة طبية وخطة علاج",
          treatment: "إجراء طبي أو علاج أسنان محدد",
          accommodation: "إقامة في فندق 3 نجوم",
          transfer: "خدمة النقل من وإلى المطار والمستشفى",
        },
      },
      premium: {
        title: "التجربة المميزة",
        description: "دمج الرعاية الطبية مع التجارب الثقافية",
        features: {
          allEssential: "جميع مميزات الرعاية الأساسية",
          luxury: "إقامة في فندق 4 نجوم فاخر",
          tours: "جولتان ثقافيتان في المدينة",
          concierge: "خدمة كونسيرج شخصية على مدار الساعة",
          cuisine: "تجربة عشاء فارسي تقليدي",
          souvenirs: "باقة تذكارات فارسية منتقاة",
        },
      },
      luxury: {
        title: "الرحلة الفاخرة",
        description: "تجربة السياحة الطبية المتكاملة",
        features: {
          allPremium: "جميع مميزات التجربة المميزة",
          vip: "جناح فاخر في فندق 5 نجوم",
          exclusive: "جولات ثقافية خاصة مع مرشد",
          family: "إقامة عائلية مشمولة",
          extended: "دعم إقامة وتعافي ممتد",
          gifts: "مجموعة هدايا فارسية فاخرة",
        },
      },
    },
    patientJourney: {
      title: "خطوات العملية",
      subtitle: "دليل تفصيلي للمرضى من البداية إلى المتابعة",
      items: [
        {
          icon: MessageCircle,
          title: "الاستشارة الأولية",
          description:
            "استشارة مجانية عبر الإنترنت لمناقشة احتياجاتك الطبية وتفضيلاتك",
        },
        {
          icon: FileCheck,
          title: "خطة العلاج",
          description: "استلم خطة علاج مفصلة تتضمن التكاليف والجدول الزمني",
        },
        {
          icon: FileText,
          title: "التأشيرة والوثائق",
          description: "نساعدك في طلب التأشيرة الطبية وإعداد الوثائق المطلوبة",
        },
        {
          icon: Plane,
          title: "ترتيبات السفر",
          description: "مساعدة في حجز الرحلات وخدمة استقبال من المطار",
        },
        {
          icon: Building2,
          title: "الإقامة",
          description: "إقامة مريحة بالقرب من المرافق الطبية الخاصة بك",
        },
        {
          icon: Stethoscope,
          title: "الإجراء الطبي",
          description: "علاجك بواسطة محترفين طبيين ذوي خبرة",
        },
        {
          icon: HeartPulse,
          title: "التعافي والرعاية",
          description: "رعاية بعد العملية ومتابعة التعافي",
        },
        {
          icon: CalendarCheck,
          title: "المتابعة",
          description: "دعم مستمر ورعاية متابعة بعد عودتك إلى بلدك",
        },
      ],
    },
    footer: {
      companyName: "السياحة الطبية",
      contact: "اتصل بنا",
      address: "شارع الصحة 123، طهران، إيران",
      subtitle: "نحن ملتزمون بتقديم خدمات طبية عالية الجودة للمرضى الدوليين",
      items: [
        {
          header: "روابط سريعة",
          links: [
            {
              title: "من نحن",
              link: "#",
            },
            {
              title: "الخدمات",
              link: "#",
            },
            {
              title: "الأطباء",
              link: "#",
            },
            {
              title: "آراء العملاء",
              link: "#",
            },
          ],
        },
        {
          header: "الخدمات",
          links: [
            {
              title: "الجراحة التجميلية",
              link: "#",
            },
            {
              title: "علاج الأسنان",
              link: "#",
            },
            {
              title: "جراحة العظام",
              link: "#",
            },
            {
              title: "الصحة العامة",
              link: "#",
            },
          ],
        },
      ],
    },
  },
  fa: {
    header: {
      services: "خدمات",
      doctors: "پزشکان",
      testimonials: "نظرات بیماران",
      contact: "تماس با ما",
    },
    hero: {
      title: "خدمات درمانی در سطح جهانی در ایران",
      subtitle:
        "خدمات پزشکی با کیفیت برتر با قیمت‌های رقابتی و پزشکان متخصص و امکانات مدرن",
      whatsappButton: "تماس از طریق واتساپ",
      contactButton: "تماس با ما",
    },
    services: {
      title: "خدمات پزشکی ما",
      description:
        "ما طیف گسترده‌ای از خدمات پزشکی با کیفیت بالا را با قیمت‌های رقابتی ارائه می‌دهیم",
      items: [
        {
          id: "1",
          title: "جراحی بینی",
          description:
            "عمل‌های جراحی بینی پیشرفته با جدیدترین تکنیک‌ها و جراحان متخصص",
          imageUrl:
            "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=2000",
        },
        {
          id: "2",
          title: "ایمپلنت دندان",
          description:
            "خدمات ایمپلنت دندان پیشرفته با تضمین کیفیت و نتایج عالی",
          imageUrl:
            "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=2000",
        },
        {
          id: "3",
          title: "جراحی قلب",
          description:
            "جراحی قلب باز و کاتتریزاسیون توسط ماهرترین پزشکان متخصص",
          imageUrl:
            "https://images.unsplash.com/photo-1628595351029-c2bf17511435?auto=format&fit=crop&q=80&w=2000",
        },
      ],
      learnMore: "اطلاعات بیشتر",
    },
    priceComparison: {
      title: "مقایسه قیمت‌های جهانی",
      subtitle:
        "ببینید چگونه ایران خدمات درمانی با کیفیت بالا را با هزینه‌های معقول ارائه می‌دهد",
      tableTitle: "مقایسه قیمت خدمات پزشکی",
      procedure: "خدمات پزشکی",
      iran: "ایران",
      usa: "آمریکا",
      uk: "انگلستان",
      uae: "امارات",
      learnMore: "اطلاعات بیشتر",
    },
    testimonials: {
      title: "نظرات بیماران",
      subtitle: "درباره تجربیات موفق درمانی بیماران ما بخوانید",
    },
    contact: {
      title: "تماس با ما",
      subtitle: "ما اینجا هستیم تا به تمام سوالات شما پاسخ دهیم",
      form: {
        title: "برای ما پیام بفرستید",
        fullName: "نام کامل",
        email: "ایمیل",
        message: "پیام شما",
        send: "ارسال پیام",
        success:
          "پیام شما با موفقیت ارسال شد. به زودی با شما تماس خواهیم گرفت.",
      },
      directContact: {
        title: "تماس مستقیم",
        subtitle: "روش ترجیحی خود را برای تماس با ما انتخاب کنید",
        whatsapp: "تماس از طریق واتساپ",
        telegram: "تماس از طریق تلگرام",
        available: "۲۴ ساعته در دسترس برای پاسخگویی به سوالات شما",
      },
    },
    faq: {
      title: "سؤالات متداول",
      subtitle: "پاسخ به سوالات مربوط به خدمات پزشکی و جراحی در ایران",
      items: [
        {
          id: "procedures",
          question: "چه خدمات پزشکی در ایران ارائه می‌شود؟",
          answer:
            "ایران طیف گسترده‌ای از خدمات پزشکی شامل جراحی‌های زیبایی، درمان‌های دندانپزشکی، عمل‌های قلبی، جراحی‌های ارتوپدی و درمان‌های باروری را ارائه می‌دهد. تمام خدمات توسط متخصصان واجد شرایط در مراکز مدرن انجام می‌شود.",
        },
        {
          id: "visa",
          question: "چگونه می‌توانم ویزای پزشکی ایران را دریافت کنم؟",
          answer:
            "ویزاهای پزشکی ایران با کمک ما قابل دریافت هستند. ما هماهنگی‌های لازم با مقامات مربوطه را انجام داده و مدارک مورد نیاز را فراهم می‌کنیم. این فرآیند معمولاً ۷-۱۰ روز کاری طول می‌کشد و ما شما را در هر مرحله راهنمایی می‌کنیم.",
        },
        {
          id: "accommodation",
          question: "چه گزینه‌های اقامتی برای گردشگران پزشکی موجود است؟",
          answer:
            "ما گزینه‌های اقامتی متنوعی از هتل‌های لوکس تا آپارتمان‌های خدماتی نزدیک به مراکز پزشکی ارائه می‌دهیم. تمام اقامتگاه‌ها با دقت برای اطمینان از راحتی و آسایش شما در دوره بهبودی انتخاب می‌شوند.",
        },
        {
          id: "cost",
          question: "هزینه خدمات پزشکی در ایران چقدر است؟",
          answer:
            "خدمات پزشکی در ایران معمولاً ۴۰-۸۰٪ ارزان‌تر از کشورهای غربی است، در حالی که استانداردهای کیفیت بالا حفظ می‌شود. هزینه دقیق به نوع خدمات بستگی دارد و ما جزئیات هزینه‌ها را در مشاوره ارائه می‌دهیم.",
        },
        {
          id: "recovery",
          question: "چه حمایتی در دوره بهبودی ارائه می‌شود؟",
          answer:
            "ما مراقبت‌های کامل پس از عمل شامل چکاپ‌های منظم، پشتیبانی پزشکی ۲۴/۷، خدمات حمل و نقل و کمک به نیازهای ویژه در دوره بهبودی ارائه می‌دهیم.",
        },
        {
          id: "language",
          question: "آیا پشتیبانی زبانی برای بیماران بین‌المللی وجود دارد؟",
          answer:
            "بله، ما مترجمان حرفه‌ای پزشکی مسلط به زبان عربی، انگلیسی و زبان‌های دیگر را برای اطمینان از ارتباط واضح بین شما و ارائه‌دهندگان خدمات پزشکی ارائه می‌دهیم.",
        },
      ],
    },
    patientJourney: {
      title: "مراحل انجام کار",
      subtitle: "راهنمای دقیق بیماران از شروع تا پیگیری",
      items: [
        {
          icon: MessageCircle,
          title: "مشاوره اولیه",
          description:
            "مشاوره رایگان آنلاین برای بحث در مورد نیازها و ترجیحات پزشکی شما",
        },
        {
          icon: FileCheck,
          title: "طرح درمان",
          description:
            "دریافت یک برنامه درمانی دقیق شامل هزینه‌ها و جدول زمانی",
        },
        {
          icon: FileText,
          title: "ویزای پزشکی و مدارک",
          description:
            "ما در درخواست ویزای پزشکی و تهیه مدارک لازم کمک می‌کنیم",
        },
        {
          icon: Plane,
          title: "ترتیبات سفر",
          description: "کمک در رزرو پرواز و خدمات استقبال در فرودگاه",
        },
        {
          icon: Building2,
          title: "اقامت",
          description: "اقامت راحت نزدیک به مرکز درمانی شما",
        },
        {
          icon: Stethoscope,
          title: "روند درمانی",
          description: "درمان شما توسط متخصصان پزشکی مجرب",
        },
        {
          icon: HeartPulse,
          title: "بهبودی و مراقبت",
          description: "مراقبت‌های پس از عمل و نظارت بر بهبودی",
        },
        {
          icon: CalendarCheck,
          title: "پیگیری",
          description:
            "پشتیبانی مداوم و مراقبت‌های پیگیری پس از بازگشت به خانه",
        },
      ],
    },
    footer: {
      companyName: "گردشگری پزشکی",
      contact: "تماس",
      address: "خیابان سلامت ۱۲۳، تهران، ایران",
      subtitle:
        "ما به ارائه خدمات پزشکی با کیفیت بالا به بیماران بین‌المللی متعهدیم",
      items: [
        {
          header: "لینک‌های سریع",
          links: [
            {
              title: "درباره ما",
              link: "#",
            },
            {
              title: "خدمات",
              link: "#",
            },
            {
              title: "پزشکان",
              link: "#",
            },
            {
              title: "نظرات مشتریان",
              link: "#",
            },
          ],
        },
        {
          header: "خدمات",
          links: [
            {
              title: "جراحی زیبایی",
              link: "#",
            },
            {
              title: "درمان دندانپزشکی",
              link: "#",
            },
            {
              title: "ارتوپدی",
              link: "#",
            },
            {
              title: "سلامت عمومی",
              link: "#",
            },
          ],
        },
      ],
    },
    packages: {
      title: "بسته‌های درمانی سفارشی",
      subtitle:
        "تجربه خدمات درمانی در سطح جهانی همراه با میراث فرهنگی غنی ایران",
      popular: "پرطرفدار",
      customize: "سفارشی‌سازی بسته",
      features: {
        dental: {
          title: "خدمات دندانپزشکی برتر",
          description:
            "درمان‌های پیشرفته دندانپزشکی شامل ایمپلنت، لمینت و سفیدکردن",
        },
        aesthetic: {
          title: "خدمات زیبایی",
          description: "جراحی‌های زیبایی پیشرفته و درمان‌های زیبایی غیرتهاجمی",
        },
        accommodation: {
          title: "اقامت لوکس",
          description: "اقامت در هتل‌های مجلل با پشتیبانی پزشکی اختصاصی",
        },
        tours: {
          title: "تورهای فرهنگی",
          description: "گشت‌های راهنمادار به زیباترین مکان‌های تاریخی ایران",
        },
        cuisine: {
          title: "آشپزی ایرانی",
          description: "تجربه غذاهای اصیل ایرانی و خوراکی‌های سنتی",
        },
        souvenirs: {
          title: "هدایای فرهنگی",
          description: "سوغات‌های منتخب ایرانی و صنایع دستی سنتی",
        },
      },
      essential: {
        title: "مراقبت اساسی",
        description: "مناسب برای درمان‌های پزشکی متمرکز",
        features: {
          consultation: "مشاوره پزشکی و برنامه درمانی",
          treatment: "خدمات پزشکی یا دندانپزشکی انتخابی",
          accommodation: "اقامت در هتل ۳ ستاره",
          transfer: "خدمات ترانسفر فرودگاهی و بیمارستانی",
        },
      },
      premium: {
        title: "تجربه ممتاز",
        description: "ترکیب مراقبت‌های پزشکی با تجربیات فرهنگی",
        features: {
          allEssential: "تمام امکانات بسته مراقبت اساسی",
          luxury: "اقامت در هتل ۴ ستاره لوکس",
          tours: "دو تور فرهنگی شهری",
          concierge: "خدمات کانسیرژ ۲۴ ساعته",
          cuisine: "تجربه شام سنتی ایرانی",
          souvenirs: "بسته سوغات منتخب ایرانی",
        },
      },
      luxury: {
        title: "سفر لوکس",
        description: "تجربه کامل گردشگری پزشکی",
        features: {
          allPremium: "تمام امکانات بسته تجربه ممتاز",
          vip: "سوئیت لوکس در هتل ۵ ستاره",
          exclusive: "تورهای فرهنگی خصوصی با راهنما",
          family: "اقامت خانوادگی شامل شده",
          extended: "پشتیبانی اقامت و بهبودی طولانی مدت",
          gifts: "مجموعه هدایای ویژه ایرانی",
        },
      },
    },
  },
};
