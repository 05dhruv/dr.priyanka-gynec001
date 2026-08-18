export const siteInfo = {
  name: "Dr. Priyanka Gynec",
  tagline: "Her Health First",
  address: "A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh, 244001",
  email: "contact@Dr. Priyankagynec.com",

  phones: [
    {
      label: "+91 90 7976 5578",
      href: "tel:919079765578",
    },
  ],

  whatsapp: {
    label: "+91 96 8032 1761",
    href: "https://wa.me/919680321761",
  },

  socials: [
    {
      label: "Facebook",
      href: "https://www.facebook.com/people/Dr. Priyanka-Gynec/61586318647453/",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/Dr. Priyanka_gynec/",
    },
    {
      label: "YouTube",
      href: "https://www.youtube.com/@Dr. Priyanka_gynec",
    },
    {
      label: "WhatsApp",
      href: "https://wa.me/919680321761",
    },
  ],
};


/* =========================================================
   NAVIGATION
========================================================= */

export const navLinks = [
  {
    label: "About Us",
    href: "/about-us",
  },

  {
    label: "Specialities",
    href: "/services",

    children: [
      {
        category: "Women's Care",
        items: [
          {
            label: "Fertility & IVF",
            href: "/services/fertility-ivf",
          },
          {
            label: "Laparoscopy & Gynecology",
            href: "/services/laparoscopy-gynecology",
          },
          {
            label: "Laparoscopic Cystectomy",
            href: "/services/laparoscopic-cystectomy",
          },
          {
            label: "Laparoscopic Myomectomy",
            href: "/services/laparoscopic-myomectomy",
          },
          {
            label: "Laparoscopic Hysterectomy",
            href: "/services/laparoscopic-hysterectomy",
          },
          {
            label: "Sacrocolpopexy",
            href: "/services/sacrocolpopexy",
          },
          {
            label: "Sterilization",
            href: "/services/sterilization",
          },
        ],
      },

      {
        category: "Hysteroscopy",
        items: [
          {
            label: "Diagnostic Hysteroscopy",
            href: "/services/diagnostic-hysteroscopy",
          },
          {
            label: "Polypectomy",
            href: "/services/polypectomy",
          },
        ],
      },

      {
        category: "Pregnancy & Maternity",
        items: [
          {
            label: "Antenatal Services",
            href: "/services/antenatal-services",
          },
          {
            label: "Normal Delivery",
            href: "/services/normal-delivery",
          },
        ],
      },

      {
        category: "Endometriosis",
        items: [
          {
            label: "Endometriosis Surgery",
            href: "/services/endometriosis-surgery",
          },
        ],
      },
    ],
  },

  {
    label: "Blogs",
    href: "/blogs",
  },

  {
    label: "Contact Us",
    href: "/contact",
  },
];

/* =========================================================
   SERVICES
========================================================= */

export const services = [
  {
    slug: "laparoscopy-gynecology",
    title: "Laparoscopy & Gynaecology",
    short: "Gynecology & Laparoscopy",

    blurb:
      "Where surgical precision meets compassionate care. Minimally invasive expertise that prioritizes your comfort, safety, and faster return to life.",

    homeBlurb:
      "Expert care for women's reproductive health needs.",

    points: [
      "Laparoscopic care for fibroids, cysts & endometriosis",
      "Hysteroscopy & minimally invasive surgery",
      "Pelvic floor, prolapse & keyhole hysterectomy",
    ],

    icon: "scan",
  },

  {
    slug: "fertility-ivf",
    title: "Fertility & IVF Treatment",
    short: "Fertility & IVF",

    blurb:
      "Hope meets science here. Personalized fertility care and advanced IVF technology—designed around your unique path to parenthood.",

    homeBlurb:
      "Personalized fertility treatments to help you conceive.",

    points: [
      "Fertility evaluation & diagnostics",
      "IVF, IUI, ICSI treatments",
      "AI-based embryo selection",
      "Egg & sperm freezing / preservation",
    ],

    icon: "flask",
  },

  {
    slug: "pregnancy-birthing",
    title: "Pregnancy & Birthing",
    short: "Pregnancy & Birthing Care",

    blurb:
      "Every birth a celebration, every woman its heart. Custom care plans that honor your choices while ensuring expert support throughout.",

    homeBlurb:
      "Supportive and customized birthing experiences await.",

    points: [
      "Antenatal care & pregnancy monitoring",
      "3D/4D ultrasound imaging",
      "Personalised birth plans",
      "High-risk pregnancy management",
    ],

    icon: "heart",
  },

  {
    slug: "paediatrics",
    title: "Comprehensive Pediatrics",
    short: "Paediatric Care",

    blurb:
      "At Dr. Priyanka Gynec, we prioritize your little one's wellbeing. Custom care plans and support systems ensure every stage of childhood is tailored to your family.",

    homeBlurb:
      "Comprehensive paediatric services for your little ones.",

    points: [
      "Newborn & child check-ups",
      "Vaccinations & preventive care",
      "Child growth & development monitoring",
      "Care for common illnesses & allergies",
    ],

    icon: "baby",
  },

  {
    slug: "cystectomy",
    title: "Cystectomy",
    short: "Laparoscopic Cystectomy",

    blurb:
      "Minimally invasive surgical treatment for ovarian and other gynaecological cysts.",

    homeBlurb:
      "Expert laparoscopic management of ovarian cysts.",

    points: [
      "Laparoscopic cystectomy",
      "Ovarian cyst management",
      "Minimally invasive approach",
    ],

    icon: "scan",
  },

  {
    slug: "myomectomy",
    title: "Myomectomy",
    short: "Laparoscopic Myomectomy",

    blurb:
      "Specialized surgical management of uterine fibroids with a focus on preserving reproductive health.",

    homeBlurb:
      "Advanced treatment for uterine fibroids.",

    points: [
      "Laparoscopic myomectomy",
      "Fibroid evaluation",
      "Uterus-preserving treatment",
    ],

    icon: "scan",
  },

  {
    slug: "hysterectomy",
    title: "Hysterectomy",
    short: "Laparoscopic Hysterectomy",

    blurb:
      "Minimally invasive hysterectomy performed with advanced laparoscopic surgical techniques.",

    homeBlurb:
      "Advanced minimally invasive hysterectomy care.",

    points: [
      "Laparoscopic hysterectomy",
      "Individualized surgical planning",
      "Post-operative care",
    ],

    icon: "scan",
  },

  {
    slug: "sacrocolpopexy",
    title: "Sacrocolpopexy",
    short: "Sacrocolpopexy",

    blurb:
      "Advanced laparoscopic treatment for pelvic organ prolapse and uterine support.",

    homeBlurb:
      "Specialized pelvic floor and prolapse surgery.",

    points: [
      "Laparoscopic sacrocolpopexy",
      "Pelvic organ prolapse management",
      "Uterus-supporting procedures",
    ],

    icon: "scan",
  },

  {
    slug: "sterilization",
    title: "Sterilization",
    short: "Laparoscopic Sterilization",

    blurb:
      "Safe and minimally invasive permanent contraception options for women.",

    homeBlurb:
      "Safe laparoscopic sterilization services.",

    points: [
      "Laparoscopic sterilization",
      "Contraceptive counselling",
      "Personalized procedure planning",
    ],

    icon: "scan",
  },

  {
    slug: "diagnostic-hysteroscopy",
    title: "Diagnostic Hysteroscopy",
    short: "Diagnostic Hysteroscopy",

    blurb:
      "A minimally invasive procedure used to examine the inside of the uterus and diagnose uterine conditions.",

    homeBlurb:
      "Advanced diagnostic hysteroscopy services.",

    points: [
      "Diagnostic hysteroscopy",
      "Evaluation of uterine cavity",
      "Polyp detection and treatment",
    ],

    icon: "scan",
  },

  {
    slug: "polypectomy",
    title: "Polypectomy",
    short: "Hysteroscopic Polypectomy",

    blurb:
      "Minimally invasive removal of uterine polyps using hysteroscopic techniques.",

    homeBlurb:
      "Expert hysteroscopic treatment for uterine polyps.",

    points: [
      "Hysteroscopic polypectomy",
      "Uterine polyp evaluation",
      "Minimally invasive treatment",
    ],

    icon: "scan",
  },

  {
    slug: "normal-delivery",
    title: "Normal Delivery",
    short: "Normal Delivery",

    blurb:
      "Personalized antenatal and childbirth care focused on a safe and positive normal delivery experience.",

    homeBlurb:
      "Supportive antenatal care for normal delivery.",

    points: [
      "Antenatal monitoring",
      "Normal delivery planning",
      "Labour and childbirth support",
    ],

    icon: "heart",
  },

  {
    slug: "endometriosis-surgery",
    title: "Endometriosis Surgery",
    short: "Endometriosis Surgery",

    blurb:
      "Advanced laparoscopic treatment for endometriosis with a focus on symptom relief and reproductive health.",

    homeBlurb:
      "Specialized laparoscopic endometriosis surgery.",

    points: [
      "Laparoscopic endometriosis surgery",
      "Endometriosis evaluation",
      "Pain and fertility management",
    ],

    icon: "scan",
  },
];


/* =========================================================
   TESTIMONIALS
========================================================= */

export const testimonials = [
  {
    quote:
      "We came to know about Dr. Priyanka Gynec through Instagram and decided to consult her. From our first visit, we felt comfortable and understood. The doctor explained everything clearly and guided us at every step. We are truly grateful for the care and support we received and highly recommend Dr. Priyanka Gynec.",
    name: "Rudri J",
  },

  {
    quote:
      "I have been following Dr. Priyanka Gynec on Instagram for a long time. Her positive approach and the way she explains things gave me a lot of confidence. The doctor and her entire team were extremely supportive, caring, and friendly throughout. Thank you for making our journey so much easier.",
    name: "Sneha Singh",
  },

  {
    quote:
      "Dr. Priyanka Gynec is a wonderful place for women's healthcare. The doctor is knowledgeable, caring, and very supportive. She listens patiently and explains every treatment and procedure clearly. The entire team is professional and compassionate. Highly recommended for anyone looking for trusted and personalized women's care.",
    name: "Helna Mary Nelson",
  },

  {
    quote:
      "Dr. Priyanka Gynec provided us with excellent care and made us feel comfortable from the very beginning. The doctor's expertise, patience, and genuine concern for patients made a huge difference. The staff was also very kind, cooperative, and always ready to help. We are truly thankful for the wonderful experience.",
    name: "Shaista Maniyar",
  },

  {
    quote:
      "We are very thankful to Dr. Priyanka for her guidance and support. We had visited different places before, but after consulting her, we finally felt confident and hopeful. She patiently understood our concerns and guided us with the right treatment. We are extremely grateful for the care we received.",
    name: "Mohan K C",
  },

  {
    quote:
      "Dr. Priyanka is extremely caring, approachable, and dedicated towards her patients. She made me feel comfortable and confident throughout my pregnancy journey. The staff is also very kind and helpful. I am truly grateful for the care and attention I received and would highly recommend Dr. Priyanka Gynec.",
    name: "Poojitha N",
  },
];


/* =========================================================
   DOCTORS
========================================================= */

export const doctors = [
  {
    name: "Dr. Priyanka Pachauri",
    role: "Consultant Obstetrician, Gynaecologist & Infertility Specialist",

    bio:
      "A highly distinguished and experienced specialist with over 14 years of clinical expertise, Dr. Priyanka Pachauri co-leads Shree Advanced Urogynae Clinic and serves as a Consultant at Ujala Cygnus BrightStar Hospital. She is deeply committed to combining advanced, minimally invasive surgical precision with compassionate maternal care. Known for her technical skill in handling complex clinical challenges, she provides a supportive environment that inspires confidence in patients navigating high-risk pregnancies and reproductive health journeys.",

    education: [
      "MBBS, Gajra Raja Medical College (GRMC), Gwalior (2012)",
      "MS in Obstetrics & Gynaecology, Sardar Patel Medical College (SPMC), Bikaner (2016)",
      "Fellowship in Minimal Access Surgery (FMAS)",
      "Fellowship in Laparoscopic Surgery",
      "Advanced Fellowship in Infertility",
    ],

    awards: [
      "Extensive specialized training and certifications in advanced reproductive medicine and laparoscopy",
    ],

    experience: [
      "Co-Founder & Consultant, Shree Advanced Urogynae Clinic, Moradabad",
      "Consultant Gynecologist, Ujala Cygnus BrightStar Hospital, New Moradabad",
    ],
  },
];


/* =========================================================
   BLOGS
========================================================= */

export const blogPosts = [
  {
    slug: "pcos-infertility-treatment",
    title: "PCOS and Infertility: Your Fertility Treatment Options",
    excerpt:
      "PCOS is one of the most common—and most treatable—causes of difficulty in getting pregnant. Here's the step-by-step path most women follow, and where IVF really fits in.",
    category: "Fertility & IVF",
    date: "2026",
  },

  {
    slug: "understanding-endometriosis",
    title: "Understanding Endometriosis: Symptoms You Shouldn't Ignore",
    excerpt:
      "Painful periods aren't something to simply live with. Learn the warning signs of endometriosis and how minimally invasive laparoscopy can help.",
    category: "Laparoscopy & Gynecology",
    date: "2026",
  },

  {
    slug: "your-trimester-by-trimester-guide",
    title: "Your Trimester-by-Trimester Pregnancy Guide",
    excerpt:
      "From the first scan to the final countdown—what to expect, when to worry, and how personalised antenatal care keeps you and baby safe.",
    category: "Pregnancy & Birthing",
    date: "2026",
  },

  {
    slug: "newborn-vaccination-schedule",
    title: "The Complete Newborn Vaccination Schedule, Explained",
    excerpt:
      "A simple, parent-friendly guide to the vaccines your child needs in the first two years, and why timing matters.",
    category: "Paediatrics",
    date: "2026",
  },
];