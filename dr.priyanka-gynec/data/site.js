export const siteInfo = {
  name: "Dr. Priyanka Gynec",
  tagline: "Her Health First",
  address: "A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh, 244001",
  email: "contact@Dr. Priyankagynec.com",

  phones: [
    {
      label: "+91 90797 65578",
      href: "tel:919079765578",
    },
  ],

  whatsapp: {
    label: "+91 96803 21761",
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
        category: "Laparoscopy & Surgery",
        items: [
          {
            label: "Laparoscopy & Gynecology",
            href: "/services/laparoscopy-gynecology",
          },
          {
            label: "Fertility & IVF",
            href: "/services/fertility-ivf",
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
        category: "Hysteroscopy & Endometriosis",
        items: [
          {
            label: "Diagnostic Hysteroscopy",
            href: "/services/diagnostic-hysteroscopy",
          },
          {
            label: "Polypectomy",
            href: "/services/polypectomy",
          },
          {
            label: "Endometriosis Surgery",
            href: "/services/endometriosis-surgery",
          },
        ],
      },

      {
        category: "Pregnancy & Maternity",
        items: [
          {
            label: "Pregnancy & Birthing",
            href: "/services/pregnancy-birthing",
          },
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
        category: "Pediatric & Child Care",
        items: [
          {
            label: "Comprehensive Paediatrics",
            href: "/services/paediatrics",
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
    category: "Women's Care",
    blurb:
      "Where surgical precision meets compassionate care. High-definition 3D laparoscopic expertise that prioritizes your comfort, safety, minimal scarring, and rapid recovery.",
    homeBlurb:
      "Expert 3D laparoscopic care for women's reproductive health needs.",
    overview:
      "Advanced Gynaecological Laparoscopy—often termed keyhole or minimally invasive surgery—uses specialized high-definition 3D camera systems inserted through tiny incisions (5-10mm). Led by Dr. Priyanka Pachauri (FMAS), our center offers world-class diagnostic and operative laparoscopy that avoids large abdominal incisions. This approach dramatically minimizes post-operative discomfort, reduces hospital stay to day-care or 24-48 hours, and preserves natural pelvic anatomy and fertility potential.",
    keyBenefits: [
      "Micro-Incisional Precision: 5-10mm keyhole incisions resulting in minimal or virtually invisible scarring.",
      "Reduced Post-Op Discomfort: Minimal pain and reliance on heavy painkillers after surgery.",
      "Faster Recovery: Most patients return to normal routine within 5 to 7 days.",
      "Superior 3D Clarity: High-definition 3D optics ensuring maximal precision around delicate nerve structures.",
      "Adhesion Prevention: Significantly lower risk of post-surgical adhesions or infection.",
    ],
    points: [
      "High-Definition 3D Laparoscopic evaluation & surgery",
      "Minimally invasive management of fibroids, ovarian cysts & endometriosis",
      "Pelvic floor repair, prolapse corrective procedures & keyhole hysterectomy",
      "Fertility-enhancing laparoscopic interventions for tubal blockages & adhesions",
    ],
    treatmentsIncluded: [
      "Diagnostic Laparoscopy & Chromopertubation (Tubal Testing)",
      "Laparoscopic Excision of Endometriosis & Ovarian Endometriomas",
      "Laparoscopic Myomectomy (Uterine Fibroid Removal)",
      "Laparoscopic Ovarian Cystectomy & Adhesiolysis",
      "Total Laparoscopic Hysterectomy (TLH)",
      "Laparoscopic Sacrocolpopexy for Pelvic Organ Prolapse",
    ],
    whenToConsult: [
      "Persistent pelvic pain or severe dysmenorrhea (painful periods)",
      "Heavy, prolonged, or irregular menstrual bleeding",
      "Unexplained pelvic mass, ovarian cyst, or uterine fibroid enlargement",
      "Difficulty conceiving due to suspected tubal blockages or pelvic adhesions",
      "Pain during intimacy (dyspareunia)",
    ],
    faqs: [
      {
        question: "How long is the hospital stay for laparoscopic gynaecological surgery?",
        answer:
          "Most laparoscopic procedures are performed on a day-care basis or require a single overnight stay (24 hours), allowing you to return home safely the following morning.",
      },
      {
        question: "Is 3D laparoscopy safe for preserving fertility?",
        answer:
          "Yes, 3D laparoscopy offers enhanced depth perception and magnification, enabling Dr. Priyanka to work with pinpoint precision while sparing normal ovarian tissue and delicate pelvic structures.",
      },
      {
        question: "When can I resume normal daily activities after surgery?",
        answer:
          "Light walking and daily self-care can begin within 24 hours. Most women return to work within 5 to 7 days depending on the procedure performed.",
      },
      {
        question: "Will I have visible scars after laparoscopic surgery?",
        answer:
          "Because incisions are tiny (5mm to 10mm) and placed in natural skin creases or the umbilicus, surgical marks fade rapidly and leave minimal to virtually invisible scars.",
      },
      {
        question: "What makes 3D laparoscopy superior to open surgery?",
        answer:
          "3D laparoscopy provides true depth perception, high-definition 3D optics, and 10x magnification, allowing unmatched precision, lower blood loss, less post-op pain, and drastically faster healing.",
      },
      {
        question: "What precautions should I take after returning home?",
        answer:
          "We recommend avoiding heavy lifting (>5 kg) and intense physical exertion for 2-3 weeks, keeping keyhole dressing sites clean and dry, and taking prescribed medications as advised.",
      },
    ],
    icon: "scan",
    image: "https://res.cloudinary.com/dv9tivfvq/image/upload/v1786608482/IMG_1_wx7atm.jpg",
  },

  {
    slug: "fertility-ivf",
    title: "Fertility & IVF Treatment",
    short: "Fertility & IVF",
    category: "Women's Care",
    blurb:
      "Hope meets cutting-edge science. Personalized fertility treatment plans, advanced embryology, GERI time-lapse incubation, and AI-powered semen analysis designed around your path to parenthood.",
    homeBlurb:
      "Personalized fertility & IVF treatments to help you achieve your dream of parenthood.",
    overview:
      "Struggling to conceive can feel overwhelming, but you are not alone. At Dr. Priyanka Gynec, fertility care begins with listening, thorough diagnostic clarity, and individual tailor-made protocols. Supported by state-of-the-art GERI time-lapse embryo incubators, advanced IVF laboratories, and AI-assisted semen analysis, Dr. Priyanka Pachauri provides comprehensive reproductive care ranging from ovulation induction to advanced ICSI and donor programs with warmth and transparency.",
    keyBenefits: [
      "Personalized Protocols: Tailored stimulation plans based on ovarian reserve (AMH) and maternal age.",
      "GERI Time-Lapse Incubators: Undisturbed 24/7 embryo development monitoring for optimal embryo selection.",
      "AI-Assisted Diagnostics: AI-driven sperm analysis and DNA fragmentation evaluation for maximum accuracy.",
      "Complete Couple Care: Comprehensive evaluation of both female and male reproductive health.",
      "Compassionate Counseling: Emotional support provided alongside clinical treatment.",
    ],
    points: [
      "Comprehensive fertility evaluation & hormonal diagnostics",
      "Ovulation Induction & Intrauterine Insemination (IUI)",
      "In Vitro Fertilization (IVF) & Intracytoplasmic Sperm Injection (ICSI)",
      "Blastocyst culture, Embryo freezing & time-lapse embryo monitoring",
    ],
    treatmentsIncluded: [
      "Ovarian Reserve Testing (AMH, AFC Scan, Hormonal Profile)",
      "Ovulation Induction & Follicular Monitoring",
      "IUI (Intrauterine Insemination) - Homologous / Donor",
      "IVF (In Vitro Fertilization) & ICSI",
      "Blastocyst Transfer & Embryo Cryopreservation",
      "Surgical Sperm Retrieval (TESA/PESA) & Male Infertility Management",
    ],
    whenToConsult: [
      "Unable to conceive after 12 months of regular unprotected intercourse (or 6 months if age > 35)",
      "Irregular, absent, or painful menstrual cycles (possible PCOS or Endometriosis)",
      "History of recurrent miscarriages or failed fertility attempts elsewhere",
      "Known low sperm count, low motility, or male factor infertility concerns",
      "Desire to freeze eggs or embryos for fertility preservation",
    ],
    faqs: [
      {
        question: "What is the success rate of IVF at Dr. Priyanka Gynec?",
        answer:
          "Success rates depend on maternal age and individual clinical factors, but with our state-of-the-art GERI time-lapse technology and personalized blastocyst transfers, we achieve industry-leading success rates.",
      },
      {
        question: "Is IVF treatment or egg retrieval painful?",
        answer:
          "Most aspects of IVF involve simple subcutaneous injections and ultrasounds. Egg retrieval is conducted under short, gentle intravenous anesthesia, ensuring a completely painless experience.",
      },
      {
        question: "What is the difference between IUI and IVF?",
        answer:
          "IUI deposits processed, highly motile sperm directly into the uterus around ovulation, whereas IVF combines eggs and sperm in our specialized laboratory to form embryos before placement.",
      },
      {
        question: "How does GERI time-lapse technology improve embryo selection?",
        answer:
          "GERI time-lapse incubators monitor embryo cell division 24/7 without removing embryos from their optimal climate, ensuring undisturbed development and selecting the healthiest embryo for transfer.",
      },
      {
        question: "How long does a complete IVF cycle take from start to finish?",
        answer:
          "A typical IVF cycle takes about 3 to 4 weeks from the start of ovarian stimulation to egg retrieval and embryo transfer or freezing.",
      },
      {
        question: "Can male factor infertility also be treated with IVF/ICSI?",
        answer:
          "Yes! Intracytoplasmic Sperm Injection (ICSI) allows us to insert a single healthy sperm directly into an egg, overcoming low sperm count, low motility, or abnormal sperm morphology.",
      },
    ],
    icon: "flask",
    image: "https://res.cloudinary.com/dv9tivfvq/image/upload/v1786608482/IMG_1_wx7atm.jpg",
  },

  {
    slug: "pregnancy-birthing",
    title: "Pregnancy & Birthing",
    short: "Pregnancy & Birthing Care",
    category: "Pregnancy & Maternity",
    blurb:
      "Every birth a celebration, every woman its heart. Comprehensive antenatal management, high-risk obstetric monitoring, and supportive birthing choices.",
    homeBlurb:
      "Supportive and customized birthing experiences for a safe journey to motherhood.",
    overview:
      "Embracing motherhood is a transformative journey that deserves dedicated medical expertise and gentle, empathetic care. Dr. Priyanka Pachauri offers comprehensive pregnancy care from early conception scans through delivery and postpartum recovery. Utilizing advanced 3D/4D ultrasound technology (Voluson E22) and evidence-based obstetric protocols, we safeguard mother and child through routine as well as complex high-risk pregnancies.",
    keyBenefits: [
      "3D/4D Fetal Tracking: Complete antenatal checkups with Voluson E22 3D/4D ultrasound monitoring.",
      "High-Risk Obstetric Care: Specialized management for hypertension, diabetes, thyroid disorders, and twins.",
      "Personalized Birth Plans: Custom birthing options respecting maternal choices and natural birth preferences.",
      "24/7 Fetal Safety: Continuous fetal heart monitoring (CTG) and emergency obstetric readiness.",
      "Postnatal & Lactation Support: Comprehensive postnatal wellness care, lactation guidance, and baby care.",
    ],
    points: [
      "Antenatal care, growth scans & 3D/4D fetal wellbeing monitoring",
      "Personalized birth planning & pain relief options",
      "Management of High-Risk Pregnancy (Preeclampsia, Gestational Diabetes, FGR)",
      "Postpartum recovery, breastfeeding support & maternal mental care",
    ],
    treatmentsIncluded: [
      "Early Pregnancy Assessment & Nuchal Translucency (NT) Scan",
      "Anomaly Scan & Fetal Doppler Echocardiography",
      "Routine Antenatal Consultations & Nutrition Counselling",
      "High-Risk Obstetric Care & In-patient Management",
      "Painless Delivery Options (Epidural Analgesia)",
      "Normal Vaginal Delivery & Emergency/Elective Cesarean Section",
    ],
    whenToConsult: [
      "Positive home pregnancy test or missed period",
      "Early pregnancy spotting, abdominal cramping, or severe morning sickness",
      "Pregnancy with pre-existing conditions like hypertension, diabetes, or thyroid disease",
      "History of previous cesarean section, premature delivery, or recurrent pregnancy loss",
      "Decreased fetal movements in late pregnancy",
    ],
    faqs: [
      {
        question: "Can I aim for a normal delivery after a previous Cesarean section (VBAC)?",
        answer:
          "Yes, VBAC (Vaginal Birth After Cesarean) is evaluated individually based on scar thickness, baby size, and clinical conditions under continuous monitoring by Dr. Priyanka.",
      },
      {
        question: "When should I start my routine antenatal visits?",
        answer:
          "We recommend scheduling your first visit as soon as you confirm a positive pregnancy test, ideally between 6 to 8 weeks of gestation.",
      },
      {
        question: "What scans are essential during pregnancy?",
        answer:
          "Essential scans include Early Viability scan (6-8 weeks), NT/Double Marker scan (11-13 weeks), Anomaly scan (18-22 weeks), and Growth/Doppler scans in the third trimester.",
      },
      {
        question: "What options are available for painless labor during delivery?",
        answer:
          "We offer epidural analgesia (walking epidural), which blocks labor pain while keeping you conscious, comfortable, and able to actively push during birth.",
      },
      {
        question: "How are high-risk pregnancies managed at Dr. Priyanka Gynec?",
        answer:
          "High-risk conditions (gestational diabetes, preeclampsia, twin gestation, thyroid disorders) receive specialized frequent monitoring, Doppler scans, CTG tracking, and multidisciplinary care.",
      },
      {
        question: "What support is available for breastfeeding and newborn recovery?",
        answer:
          "Our lactation specialists and nursing team guide mothers through golden-hour skin-to-skin contact, latching techniques, post-partum recovery, and newborn care before discharge.",
      },
    ],
    icon: "heart",
    image: "https://res.cloudinary.com/dv9tivfvq/image/upload/v1786608482/IMG_1_wx7atm.jpg",
  },

  {
    slug: "antenatal-services",
    title: "Antenatal Services & Care",
    short: "Antenatal Services",
    category: "Pregnancy & Maternity",
    blurb:
      "Structured, compassionate prenatal check-ups, screening, and diagnostic monitoring for a vibrant, safe pregnancy.",
    homeBlurb:
      "Structured prenatal care and screenings throughout pregnancy.",
    overview:
      "Antenatal care forms the bedrock of a healthy pregnancy and a happy birth outcome. Our antenatal package combines detailed clinical examinations, biochemical screening, blood investigations, nutritional guidance, and high-resolution ultrasound scans. Dr. Priyanka ensures every trimester is met with clarity, reassurance, and proactive care for mother and baby.",
    keyBenefits: [
      "Trimester-Wise Care: Structured health check-ups and personalized dietary charts for every milestone.",
      "Early Risk Screening: Timely identification of gestational diabetes, pre-eclampsia, and anemia.",
      "Advanced 3D/4D Scans: High-resolution anatomical ultrasound imaging throughout pregnancy.",
      "Childbirth Education: Parental guidance classes on labor stages, breathing, and newborn preparation.",
      "Emergency Support: Direct access to emergency obstetric advice whenever needed.",
    ],
    points: [
      "Regular trimester check-ups & maternal vitals monitoring",
      "Blood tests, double/quadruple screening & NIPT genetic testing",
      "Ultrasound scanning (NT, Anomaly, Growth & Fetal Doppler)",
      "Dietary, exercise & childbirth education classes",
    ],
    treatmentsIncluded: [
      "First Trimester Screening (Viability Scan, NT Scan, Biochemical Markers)",
      "Second Trimester Screening (Level-2 Anomaly Scan, Tetanus Vaccination)",
      "Third Trimester Screening (Growth Doppler, Fetal Wellbeing CTG Monitor)",
      "High-Risk Prenatal Monitoring & Consultation",
    ],
    whenToConsult: [
      "Confirmation of pregnancy",
      "Unexplained abdominal pain, cramping, or vaginal discharge",
      "Headaches, blurred vision, or sudden facial swelling (signs of high blood pressure)",
      "Any concerns regarding baby movements or maternal weight changes",
    ],
    faqs: [
      {
        question: "How frequent are antenatal visits?",
        answer:
          "Typically visits occur monthly up to 28 weeks, bi-weekly from 28 to 36 weeks, and weekly from 36 weeks until birth.",
      },
      {
        question: "Are pregnancy ultrasounds (3D/4D scans) safe for my baby?",
        answer:
          "Yes, diagnostic ultrasound uses high-frequency sound waves—not radiation—and is completely safe for both mother and developing baby.",
      },
      {
        question: "What genetic and chromosomal screening tests are recommended?",
        answer:
          "We offer First Trimester Dual Marker screening with NT scan, Quadruple marker testing, and Non-Invasive Prenatal Testing (NIPT) to screen for chromosomal conditions like Down syndrome.",
      },
      {
        question: "How do you help manage gestational diabetes or pregnancy hypertension?",
        answer:
          "We conduct routine glucose tolerance testing (OGTT) and BP monitoring. If elevated, customized dietary management, blood sugar logging, and safe pregnancy medications are prescribed.",
      },
      {
        question: "What dietary guidance and supplements should I take during antenatal care?",
        answer:
          "Dr. Priyanka provides trimester-wise nutrient plans, recommending folic acid, iron, calcium, protein supplements, and proper hydration tailored to your blood test parameters.",
      },
      {
        question: "When should I call emergency services or visit the clinic immediately?",
        answer:
          "Contact us immediately if you experience vaginal bleeding, fluid leaking, severe abdominal pain, high fever, persistent vomiting, severe headache, or sudden decrease in baby movements.",
      },
    ],
    icon: "heart",
    image: "https://res.cloudinary.com/dv9tivfvq/image/upload/v1786608482/IMG_1_wx7atm.jpg",
  },

  {
    slug: "normal-delivery",
    title: "Normal Delivery & Childbirth",
    short: "Normal Delivery",
    category: "Pregnancy & Maternity",
    blurb:
      "Dedicated labor support, painless delivery techniques, and patient-centered maternity care aimed at achieving a smooth normal delivery.",
    homeBlurb:
      "Expert and gentle care prioritizing natural and normal vaginal delivery.",
    overview:
      "At Dr. Priyanka Gynec, we strongly advocate for natural birthing whenever safe and clinically feasible. Our delivery suite is designed to offer a peaceful, soothing environment equipped with continuous fetal heart monitoring, painless epidural labor analgesia, and skilled labor management to help mothers experience a joyful normal childbirth.",
    keyBenefits: [
      "Empathetic Labor Care: One-on-one nursing and expert medical supervision during active labor.",
      "Painless Labor Options: Advanced pain relief including walking epidural assistance.",
      "Active Birthing Freedom: Support for movement and natural positioning during labor.",
      "Golden Hour Bonding: Immediate skin-to-skin contact and early breastfeeding support.",
      "24/7 Surgical Readiness: Full operating theater standby for immediate emergency intervention if needed.",
    ],
    points: [
      "Natural birthing preparation & pelvimetry evaluation",
      "Continuous electronic fetal monitoring during labor",
      "Painless epidural labor assistance",
      "Post-delivery pelvic floor & maternal care",
    ],
    treatmentsIncluded: [
      "Spontaneous Labor Management & Fetal Monitoring",
      "Painless Epidural Delivery",
      "Instrumental Delivery (Vacuum / Forceps) if required for baby safety",
      "Episiotomy care & immediate perineal repair",
    ],
    whenToConsult: [
      "Regular painful uterine contractions occurring every 5 to 10 minutes",
      "Water bag breaking (rupture of membranes)",
      "Vaginal bleeding or show in late pregnancy",
      "Reaching 40 weeks of gestation without labor onset",
    ],
    faqs: [
      {
        question: "What is painless delivery and how does epidural analgesia work?",
        answer:
          "Painless delivery uses a thin epidural catheter in the lower back to block pain signals from the uterus, keeping you comfortable while retaining normal pushing sensation.",
      },
      {
        question: "What steps and exercises increase the chance of a normal delivery?",
        answer:
          "Staying physically active, practicing pelvic floor (Kegel) exercises, maintaining healthy weight gain, squatting exercises, and attending labor preparation classes encourage natural birth.",
      },
      {
        question: "How do you know when true labor has started?",
        answer:
          "True labor contractions are regular, grow progressively stronger and closer together, do not ease with rest or walking, and may be accompanied by a pink show or water breaking.",
      },
      {
        question: "Is episiotomy routine during normal delivery?",
        answer:
          "No, routine episiotomies are avoided. A minor incision is performed only if necessary to prevent severe perineal tearing or to expedite birth for baby safety.",
      },
      {
        question: "What happens if complications arise during labor?",
        answer:
          "Dr. Priyanka and the obstetric team maintain 24/7 emergency surgical readiness, allowing immediate seamless transition to a safe Cesarean birth if required.",
      },
      {
        question: "How soon after normal delivery can I hold and breastfeed my baby?",
        answer:
          "Immediate skin-to-skin contact and golden-hour breastfeeding are initiated right in the delivery room as soon as baby is born and dry.",
      },
    ],
    icon: "baby",
    image: "https://res.cloudinary.com/dv9tivfvq/image/upload/v1786608482/IMG_1_wx7atm.jpg",
  },

  {
    slug: "laparoscopic-cystectomy",
    title: "Laparoscopic Cystectomy",
    short: "Laparoscopic Cystectomy",
    category: "Women's Care",
    blurb:
      "Minimally invasive removal of ovarian cysts (dermoid, endometrioma, simple cyst) while preserving healthy ovarian tissue and reproductive capacity.",
    homeBlurb:
      "Precision 3D keyhole surgery to remove ovarian cysts while preserving fertility.",
    overview:
      "Ovarian cysts are fluid-filled sacs that develop on or inside the ovaries. While many resolve on their own, persistent, large, or painful cysts (such as dermoid cysts, chocolate cysts/endometriomas, or cystadenomas) require surgical excision. Dr. Priyanka specializes in 3D Laparoscopic Cystectomy—carefully stripping the cyst wall while preserving maximum healthy ovarian cortex to safeguard your egg reserve.",
    keyBenefits: [
      "Fertility Preservation: Meticulous micro-dissection around normal ovarian tissue to protect egg reserve.",
      "Minimal Cosmetic Impact: Micro-keyhole incisions under 1 cm with fading marks.",
      "Quick Discharge: Same-day or 24-hour hospital stay with minimal post-op pain.",
      "Complication Prevention: Eliminates risks of cyst rupture, chronic pain, or ovarian torsion.",
      "Pathology Verification: Comprehensive histopathological examination of all excised tissue.",
    ],
    points: [
      "3D Laparoscopic excision of ovarian cysts & endometriomas",
      "Ovarian tissue & egg-reserve preservation",
      "Keyhole technique with quick recovery",
      "Management of ovarian torsion & complex cysts",
    ],
    treatmentsIncluded: [
      "Laparoscopic Dermoid Cystectomy",
      "Laparoscopic Ovarian Endometrioma Excision",
      "Laparoscopic Serous/Mucinous Cystadenoma Enucleation",
      "Ovarian Reconstruction & Hemostasis",
    ],
    whenToConsult: [
      "Dull ache or sharp pain in the lower abdomen or pelvic region",
      "Sudden severe abdominal pain with nausea (possible cyst rupture or torsion)",
      "Irregular periods, painful intercourse, or feeling of pelvic heaviness",
      "Ultrasound report indicating persistent ovarian cyst > 5 cm",
    ],
    faqs: [
      {
        question: "Will removing an ovarian cyst affect my ovarian reserve and fertility?",
        answer:
          "Dr. Priyanka uses delicate micro-dissection specifically to preserve healthy ovarian cortex and egg follicles, helping safeguard your future fertility.",
      },
      {
        question: "Is laparoscopic cystectomy performed under general anesthesia?",
        answer:
          "Yes, it is performed under short, safe general anesthesia ensuring you remain completely asleep and pain-free during the surgery.",
      },
      {
        question: "What types of ovarian cysts require laparoscopic removal?",
        answer:
          "Persistent cysts > 5 cm, dermoid cysts containing hair/tissue, chocolate cysts (endometriomas), cystadenomas, or cysts causing pain/torsion are recommended for excision.",
      },
      {
        question: "How long does recovery take after ovarian cystectomy?",
        answer:
          "Patients walk comfortably within hours of surgery, are discharged in 24 hours, and resume routine work in 5 to 7 days.",
      },
      {
        question: "Can ovarian cysts recur after being removed?",
        answer:
          "Excised cysts do not return in the same spot, though new cysts can form over time. Post-operative hormonal monitoring helps minimize recurrence risks.",
      },
      {
        question: "Will I need to stay overnight in the hospital after cystectomy?",
        answer:
          "Most patients require only a single overnight stay (24 hours) or day-care observation before returning home safely.",
      },
    ],
    icon: "scan",
    image: "https://res.cloudinary.com/dv9tivfvq/image/upload/v1786608482/IMG_1_wx7atm.jpg",
  },

  {
    slug: "laparoscopic-myomectomy",
    title: "Laparoscopic Myomectomy",
    short: "Laparoscopic Myomectomy",
    category: "Women's Care",
    blurb:
      "Advanced laparoscopic removal of uterine fibroids while preserving the uterus for future pregnancy and reproductive health.",
    homeBlurb:
      "Uterus-preserving 3D laparoscopic surgery for uterine fibroids.",
    overview:
      "Uterine fibroids (myomas) are non-cancerous growths in the uterine wall that can cause heavy menstrual bleeding, severe cramps, pelvic pressure, or infertility. For women who wish to keep their uterus or plan future pregnancies, Laparoscopic Myomectomy is the procedure of choice. Dr. Priyanka Pachauri performs precision keyhole fibroid excision followed by multi-layer uterine suturing to restore normal uterine architecture.",
    keyBenefits: [
      "Uterus Preservation: Complete retention of the uterus for future pregnancy and reproductive health.",
      "Symptom Relief: Relief from heavy menstrual bleeding, painful periods, and pelvic pressure.",
      "Minimal Blood Loss: Precise fibroid removal utilizing advanced vessel-sealing instruments.",
      "Multi-Layer Suturing: Anatomical uterine wall reconstruction for safe future pregnancy.",
      "Quick Recovery: Short hospital stay (24-48 hours) and fast return to normal daily work.",
    ],
    points: [
      "Laparoscopic removal of intramural, subserosal & submucosal fibroids",
      "Multi-layer uterine wall suturing for optimal healing",
      "Fertility & uterus-sparing approach",
      "Reduced scar formation & fast recovery",
    ],
    treatmentsIncluded: [
      "Laparoscopic Intramural Myomectomy",
      "Laparoscopic Subserosal Fibroid Removal",
      "Hysteroscopic Submucosal Myomectomy",
      "Uterine Wall Reconstruction",
    ],
    whenToConsult: [
      "Unusually heavy menstrual bleeding with blood clots",
      "Severe pelvic cramps, lower back ache, or pelvic fullness",
      "Frequent urination or constipation due to fibroid pressure",
      "Difficulty conceiving or history of recurrent miscarriage linked to fibroids",
    ],
    faqs: [
      {
        question: "Can I get pregnant after a laparoscopic myomectomy?",
        answer:
          "Yes! Because the uterus is preserved and meticulously sutured in multiple anatomical layers, many women conceive successfully after healing.",
      },
      {
        question: "Can fibroids grow back after being removed surgically?",
        answer:
          "The specific fibroids removed are permanently gone. However, tiny microscopic fibroid seedlings may develop into new fibroids years later.",
      },
      {
        question: "How does laparoscopic myomectomy differ from hysterectomy?",
        answer:
          "Myomectomy removes only the fibroids while preserving your uterus and fertility, whereas hysterectomy removes the entire uterus.",
      },
      {
        question: "How long should I wait after fibroid removal before attempting pregnancy?",
        answer:
          "We generally recommend waiting 3 to 6 months post-surgery to allow full uterine wall muscle strength and healing before conceiving.",
      },
      {
        question: "What is the hospital stay and recovery timeline after myomectomy?",
        answer:
          "Hospital stay is 24 to 48 hours. Most patients return to desk work in 7 to 10 days and resume full active exercise in 4 weeks.",
      },
      {
        question: "How do you control blood loss during laparoscopic fibroid excision?",
        answer:
          "We utilize vasopressin infiltration, temporary uterine artery clipping when necessary, and advanced bipolar vessel sealers to ensure minimal blood loss.",
      },
    ],
    icon: "scan",
    image: "https://res.cloudinary.com/dv9tivfvq/image/upload/v1786608482/IMG_1_wx7atm.jpg",
  },

  {
    slug: "laparoscopic-hysterectomy",
    title: "Laparoscopic Hysterectomy (TLH)",
    short: "Laparoscopic Hysterectomy",
    category: "Women's Care",
    blurb:
      "State-of-the-art total laparoscopic hysterectomy for benign uterine conditions, ensuring minimal pain, rapid recovery, and zero large abdominal cuts.",
    homeBlurb:
      "Advanced minimally invasive keyhole hysterectomy with fast recovery.",
    overview:
      "When medical management fails for definitive conditions like multiple large fibroids, severe adenomyosis, refractory heavy bleeding, or uterine prolapse, Hysterectomy (removal of the uterus) may be recommended. Total Laparoscopic Hysterectomy (TLH) replaces traditional open abdominal surgery with 3-4 keyhole punctures. Performed by Dr. Priyanka, TLH ensures precise vascular vessel sealing, minimal blood loss, and a smooth recovery.",
    keyBenefits: [
      "No Open Incisions: Leaves only tiny, fading keyhole marks with no large abdominal cuts.",
      "Reduced Post-Op Pain: Drastically lower discomfort compared to traditional open surgery.",
      "Short Hospital Stay: Hospital discharge within 24 to 48 hours.",
      "Hormonal Balance Preservation: Ovarian tissue retained whenever appropriate to prevent surgical menopause.",
      "Fast Routine Resumption: Quick return to daily activities within 1 to 2 weeks.",
    ],
    points: [
      "Total Laparoscopic Hysterectomy (TLH)",
      "Ovarian preservation options for hormonal balance",
      "Minimal blood loss using vessel sealing tech",
      "Post-operative pelvic floor support",
    ],
    treatmentsIncluded: [
      "Total Laparoscopic Hysterectomy (TLH)",
      "Laparoscopic Bilateral Salpingectomy / Oophorectomy (when indicated)",
      "Pelvic Adhesiolysis & Vaginal Vault Suspension",
    ],
    whenToConsult: [
      "Severe adenomyosis causing intractable pain and heavy bleeding",
      "Multiple large uterine fibroids unresponsive to medication",
      "Persistent heavy menstrual bleeding causing severe anemia",
      "Uterine prolapse or severe endometrial hyperplasia",
    ],
    faqs: [
      {
        question: "Will I enter menopause immediately after a Total Laparoscopic Hysterectomy?",
        answer:
          "If your ovaries are healthy and preserved during surgery, your body continues producing natural estrogen and progesterone, preventing surgical menopause.",
      },
      {
        question: "How long is the recovery period after TLH compared to open surgery?",
        answer:
          "TLH recovery is dramatically faster—discharge occurs in 24-48 hours, and patients return to routine work in 10-14 days vs 6 weeks for open cuts.",
      },
      {
        question: "What are the main clinical reasons for recommending a hysterectomy?",
        answer:
          "Common reasons include severe adenomyosis, large or symptomatic uterine fibroids, heavy bleeding unresponsive to hormonal treatment, or uterine prolapse.",
      },
      {
        question: "Will I have visible abdominal scars after laparoscopic hysterectomy?",
        answer:
          "No, the procedure uses 3 to 4 micro-punctures (5mm-10mm) that heal into tiny, barely visible marks.",
      },
      {
        question: "When can I safely resume work, exercise, and intimate relations?",
        answer:
          "Light work can resume in 10-14 days. Vigorous exercise, heavy lifting, and sexual intercourse should be deferred for 6 weeks to allow vaginal vault healing.",
      },
      {
        question: "Does a hysterectomy affect sexual sensation or pelvic organ support?",
        answer:
          "No, vaginal length is preserved and vault suspension techniques are performed to maintain strong pelvic floor architecture and normal intimate life.",
      },
    ],
    icon: "scan",
    image: "https://res.cloudinary.com/dv9tivfvq/image/upload/v1786608482/IMG_1_wx7atm.jpg",
  },

  {
    slug: "sacrocolpopexy",
    title: "Laparoscopic Sacrocolpopexy",
    short: "Sacrocolpopexy",
    category: "Women's Care",
    blurb:
      "Gold-standard laparoscopic surgical repair for pelvic organ prolapse, restoring pelvic floor anatomy and quality of life.",
    homeBlurb:
      "Advanced keyhole repair for uterine & vaginal vault prolapse.",
    overview:
      "Pelvic Organ Prolapse occurs when pelvic floor muscles and ligaments stretch or weaken, causing the uterus, bladder, or vaginal vault to slip down. Laparoscopic Sacrocolpopexy is considered the clinical gold standard for prolapse repair. Using a lightweight biocompatible mesh anchored to the sacral promontory via keyhole surgery, Dr. Priyanka restores anatomically durable support without large open incisions.",
    keyBenefits: [
      "Durable Long-Term Repair: Highest long-term success rate and lowest recurrence for prolapse.",
      "Anatomical Restoration: Restores normal pelvic support, vaginal depth, and intimate function.",
      "Minimally Invasive: Keyhole mesh anchoring approach with faster healing than open surgery.",
      "Pelvic Relief: Relief from vaginal bulges, pelvic heaviness, and urinary incontinence.",
    ],
    points: [
      "Laparoscopic mesh sacrocolpopexy & sacrohysteropexy",
      "Uterus-sparing prolapse repair options",
      "Pelvic floor reconstruction & bladder support",
    ],
    treatmentsIncluded: [
      "Laparoscopic Sacrocolpopexy (Post-Hysterectomy Vault Prolapse)",
      "Laparoscopic Sacrohysteropexy (Uterus-Preserving Prolapse Repair)",
      "Concomitant Anterior/Posterior Colporrhaphy",
    ],
    whenToConsult: [
      "Feeling or seeing a bulge coming out of the vagina",
      "Sensation of heaviness or pulling in the lower abdomen",
      "Urinary leakage when coughing/sneezing or difficulty emptying bladder",
      "Backache or discomfort during walking and sitting",
    ],
    faqs: [
      {
        question: "Is Sacrocolpopexy better than traditional vaginal prolapse repair?",
        answer:
          "Yes, Laparoscopic Sacrocolpopexy offers superior long-term anatomical support, significantly lower recurrence rates, and better preservation of vaginal depth.",
      },
      {
        question: "Can Sacrocolpopexy be performed while keeping my uterus (Sacrohysteropexy)?",
        answer:
          "Yes! For women who wish to keep their uterus, Laparoscopic Sacrohysteropexy anchors the uterus back into its natural anatomical position using mesh support.",
      },
      {
        question: "What material is used for the mesh support, and is it safe?",
        answer:
          "We use medical-grade, lightweight polypropylene mesh that integrates safely with natural tissue to provide permanent ligamentous support.",
      },
      {
        question: "What is the recovery time after laparoscopic prolapse repair?",
        answer:
          "Hospital stay is 24 to 48 hours. Patients walk comfortably the next day and resume light household activities within 1 to 2 weeks.",
      },
      {
        question: "What heavy lifting restrictions apply after sacrocolpopexy?",
        answer:
          "To allow mesh integration, avoid heavy lifting (>5 kg) and high-impact activities for 6 to 8 weeks post-surgery.",
      },
      {
        question: "Will this procedure resolve my urinary incontinence or pelvic heaviness?",
        answer:
          "Yes, restoring normal bladder and vaginal alignment relieves the dragging pelvic sensation and associated stress incontinence.",
      },
    ],
    icon: "scan",
    image: "https://res.cloudinary.com/dv9tivfvq/image/upload/v1786608482/IMG_1_wx7atm.jpg",
  },

  {
    slug: "sterilization",
    title: "Laparoscopic Sterilization",
    short: "Laparoscopic Sterilization",
    category: "Women's Care",
    blurb:
      "Safe, highly effective, permanent keyhole contraception performed as a quick day-care procedure.",
    homeBlurb:
      "Safe and permanent keyhole tubal ligation day-care procedure.",
    overview:
      "Laparoscopic Sterilization (Female Tubal Ligation) is a safe, permanent family planning procedure. Through a tiny 5mm umbilical puncture, the fallopian tubes are occluded or clipped under direct camera vision. The procedure takes under 20 minutes, allows same-day discharge, and offers immediate, reliable contraception without affecting hormonal balance.",
    keyBenefits: [
      "Permanent Protection: Over 99.5% effective permanent family planning.",
      "Day-Care Convenience: Quick 15-20 minute procedure under light anesthesia with same-day discharge.",
      "Hormone-Free Safety: Zero effect on natural menstrual cycles or hormone levels.",
      "Single Keyhole Mark: Performed through a virtually invisible tiny umbilical puncture.",
    ],
    points: [
      "Laparoscopic tubal ligation & clip application",
      "Day-care procedure (discharge in 4-6 hours)",
      "Permanent & highly effective birth control",
    ],
    treatmentsIncluded: [
      "Laparoscopic Tubal Banding / Ring Application",
      "Laparoscopic Bipolar Cautery Occlusion",
    ],
    whenToConsult: [
      "Women/couples who have completed their family and seek permanent contraception",
      "Seeking a hassle-free alternative to long-term hormonal contraceptives or IUDs",
    ],
    faqs: [
      {
        question: "Does laparoscopic sterilization alter my periods, weight, or hormone levels?",
        answer:
          "No, tubal ligation strictly seals the transport path for eggs. Ovaries continue normal hormone production, keeping menstrual cycles, weight, and libido completely unchanged.",
      },
      {
        question: "How effective is laparoscopic tubal ligation as permanent contraception?",
        answer:
          "It is over 99.5% effective, providing immediate and lifetime peace of mind against unplanned pregnancies.",
      },
      {
        question: "How long does the procedure take, and is it a day-care procedure?",
        answer:
          "The procedure takes 15 to 20 minutes under short anesthesia. Patients rest for 4 to 6 hours and return home the same day.",
      },
      {
        question: "When can I resume normal household work and physical activities?",
        answer:
          "Most women resume light domestic activities in 24-48 hours and return to full normal routines within 3 to 5 days.",
      },
      {
        question: "Can tubal ligation be reversed if my plans change in the future?",
        answer:
          "While considered permanent, surgical tubal recanalization or IVF can offer pregnancy options if personal circumstances change later.",
      },
      {
        question: "Will I feel any pain during or after the procedure?",
        answer:
          "You feel no pain during surgery due to anesthesia. Mild post-procedure abdominal stiffness subsides within 24 hours with mild oral medication.",
      },
    ],
    icon: "scan",
    image: "https://res.cloudinary.com/dv9tivfvq/image/upload/v1786608482/IMG_1_wx7atm.jpg",
  },

  {
    slug: "diagnostic-hysteroscopy",
    title: "Diagnostic Hysteroscopy",
    short: "Diagnostic Hysteroscopy",
    category: "Hysteroscopy",
    blurb:
      "Direct endoscopic visualization of the uterine cavity to evaluate abnormal bleeding, uterine septums, polyps, or unexplained infertility.",
    homeBlurb:
      "Gentle endoscopic evaluation of the uterine cavity.",
    overview:
      "Diagnostic Hysteroscopy involves introducing a ultra-thin lighted telescope (hysteroscope) through the natural opening of the cervix into the uterus. Because there are no surgical incisions, this procedure allows Dr. Priyanka to inspect the endometrial lining, tubal ostia, and cavity structure directly with zero abdominal cuts.",
    keyBenefits: [
      "Incisionless Access: Performed entirely through natural cervical passages with zero abdominal cuts.",
      "Direct Visual Clarity: Instant high-definition diagnosis of polyps, fibroids, or uterine septums.",
      "Painless Day-Care Care: Minimal discomfort with quick return home in a few hours.",
      "Single-Session Biopsy: Simultaneous targeted biopsy or minor treatment if needed.",
    ],
    points: [
      "Direct visualization of uterine lining & cavity structure",
      "Evaluation of abnormal uterine bleeding & fertility issues",
      "Identification of polyps, intrauterine adhesions (Asherman's) & septums",
    ],
    treatmentsIncluded: [
      "Diagnostic Hysteroscopy with Targeted Endometrial Biopsy",
      "Evaluation of Uterine Cavity prior to IVF",
    ],
    whenToConsult: [
      "Abnormal uterine bleeding or spotting between periods",
      "Post-menopausal bleeding",
      "Recurrent IVF failure or unexplained infertility",
      "Ultrasound showing suspected endometrial thickening or polyp",
    ],
    faqs: [
      {
        question: "Is diagnostic hysteroscopy painful, and is anesthesia required?",
        answer:
          "Diagnostic hysteroscopy causes minimal mild cramping. It is performed comfortably under light sedation or local paracervical block.",
      },
      {
        question: "Are there any cuts or stitches involved in diagnostic hysteroscopy?",
        answer:
          "No, the hysteroscope enters gently through the natural cervical canal, leaving zero skin cuts or stitches.",
      },
      {
        question: "How soon can I get the diagnostic report and results?",
        answer:
          "Dr. Priyanka shares high-definition visual findings immediately after the procedure. Biopsy results (if taken) arrive in 3-5 days.",
      },
      {
        question: "When in my menstrual cycle should diagnostic hysteroscopy be scheduled?",
        answer:
          "It is best performed in the early follicular phase right after your period ends (days 6 to 10 of your cycle) when the uterine lining is thin.",
      },
      {
        question: "Can minor treatment (like polyp removal or biopsy) be done during the same procedure?",
        answer:
          "Yes! Small polyps, minor adhesions, or targeted endometrial biopsies can be treated immediately in the same session.",
      },
      {
        question: "What are the main reasons for undergoing a diagnostic hysteroscopy?",
        answer:
          "Indications include abnormal uterine bleeding, post-menopausal spotting, recurrent miscarriages, suspected polyps/fibroids, and pre-IVF cavity evaluation.",
      },
    ],
    icon: "scan",
    image: "https://res.cloudinary.com/dv9tivfvq/image/upload/v1786608482/IMG_1_wx7atm.jpg",
  },

  {
    slug: "polypectomy",
    title: "Hysteroscopic Polypectomy",
    short: "Hysteroscopic Polypectomy",
    category: "Hysteroscopy",
    blurb:
      "Minimally invasive keyhole removal of endometrial polyps to restore normal menstrual flow and improve fertility.",
    homeBlurb:
      "Precision hysteroscopic removal of uterine polyps without cuts.",
    overview:
      "Endometrial polyps are benign overgrowths attached to the inner wall of the uterus. They often cause heavy periods, intermenstrual spotting, or interfere with embryo implantation. Hysteroscopic Polypectomy precisely snips and extracts polyps under direct camera visualization, leaving the surrounding healthy lining intact.",
    keyBenefits: [
      "No Surgical Cuts: Incisionless technique through natural cervical access.",
      "Bleeding Relief: Instant relief from abnormal bleeding and heavy periods.",
      "Fertility Enhancement: Improves uterine lining health and embryo implantation rates.",
      "Fast 24-Hour Recovery: Quick day-care procedure with rapid return to normal work.",
    ],
    points: [
      "Precision hysteroscopic resection of endometrial polyps",
      "Incisionless day-care procedure",
      "Histopathology verification of removed tissue",
    ],
    treatmentsIncluded: [
      "Hysteroscopic Polyp Resection",
      "Endometrial Biopsy & Cavity Cleaning",
    ],
    whenToConsult: [
      "Spotting after intercourse or between menstrual cycles",
      "Heavy or prolonged menstrual periods",
      "Infertility or difficulty with embryo implantation",
    ],
    faqs: [
      {
        question: "How long does a hysteroscopic polypectomy take?",
        answer:
          "The procedure usually takes 15 to 30 minutes. Patients rest comfortably for a few hours before going home the same day.",
      },
      {
        question: "Does removing endometrial polyps improve fertility and IVF success?",
        answer:
          "Yes! Removing polyps clears mechanical obstruction, reduces localized endometrial inflammation, and significantly improves embryo implantation rates.",
      },
      {
        question: "Will uterine polyps grow back after hysteroscopic removal?",
        answer:
          "Complete hysteroscopic excision of the polyp base minimizes recurrence, though periodic routine ultrasound checkups are recommended.",
      },
      {
        question: "What symptoms indicate that I might have uterine polyps?",
        answer:
          "Common symptoms include irregular spotting between periods, heavy bleeding, bleeding after menopause, or unexplained fertility delays.",
      },
      {
        question: "Is there any downtime or work leave needed after polypectomy?",
        answer:
          "Downtime is minimal—most women resume normal daily routine and work within 24 to 48 hours.",
      },
      {
        question: "Will the removed polyp tissue be sent for lab testing (histopathology)?",
        answer:
          "Yes, all excised polyp tissue is routinely sent for detailed histopathological analysis to confirm benign nature and full peace of mind.",
      },
    ],
    icon: "scan",
    image: "https://res.cloudinary.com/dv9tivfvq/image/upload/v1786608482/IMG_1_wx7atm.jpg",
  },

  {
    slug: "endometriosis-surgery",
    title: "Endometriosis Surgery & Care",
    short: "Endometriosis Surgery",
    category: "Endometriosis",
    blurb:
      "Specialized 3D laparoscopic excision of endometriotic implants, chocolate cysts, and pelvic adhesions for long-term pain relief and fertility enhancement.",
    homeBlurb:
      "Advanced 3D laparoscopic excision of endometriosis & pelvic pain relief.",
    overview:
      "Endometriosis occurs when tissue similar to the lining of the uterus grows outside the uterus—on ovaries, fallopian tubes, bowel, or pelvic lining—causing severe inflammation, chronic pelvic pain, and scar tissue (adhesions). Dr. Priyanka Pachauri specializes in advanced 3D Laparoscopic Excision Surgery, meticulously removing endometriotic lesions while liberating trapped organs and protecting fertility.",
    keyBenefits: [
      "Complete Tissue Excision: Removing root lesions rather than superficial burning.",
      "Pelvic Pain Relief: Significant relief from severe pelvic pain, dysmenorrhea, and painful intercourse.",
      "Anatomical Liberation: Restores pelvic organ mobility and tubal-ovarian relationships.",
      "Structured Aftercare: Comprehensive medical and hormonal post-operative care plan.",
    ],
    points: [
      "3D Laparoscopic excision of deep infiltrating endometriosis (DIE)",
      "Chocolate cyst / endometrioma excision with ovarian preservation",
      "Adhesiolysis & nerve-sparing pelvic dissection",
    ],
    treatmentsIncluded: [
      "Laparoscopic Excision of Pelvic Endometriosis",
      "Ovarian Endometrioma Cystectomy",
      "Pelvic Adhesiolysis & Uterovesical / Cul-de-sac Clearance",
    ],
    whenToConsult: [
      "Severe debilitating period pain unmanaged by standard painkillers",
      "Chronic pelvic pain throughout the month",
      "Pain during bowel movements or urination during periods",
      "Pain during intercourse (dyspareunia)",
      "Infertility associated with pelvic pain",
    ],
    faqs: [
      {
        question: "What is the difference between ablation and excision of endometriosis?",
        answer:
          "Ablation burns only the surface tissue, whereas laparoscopic excision surgically removes the entire root deposit, delivering superior long-term pain relief and lower recurrence rates.",
      },
      {
        question: "Will 3D laparoscopic endometriosis surgery help relieve my period pain?",
        answer:
          "Yes! Meticulous excision of active endometriotic implants and release of scarring brings profound relief from chronic pelvic pain and dysmenorrhea.",
      },
      {
        question: "Can endometriosis cause infertility, and does surgery improve pregnancy odds?",
        answer:
          "Endometriosis affects pelvic tubal anatomy and egg quality. Laparoscopic excision restores pelvic mobility and significantly improves natural and IVF conception rates.",
      },
      {
        question: "What is a chocolate cyst (endometrioma) and how is it treated?",
        answer:
          "An endometrioma is an ovarian cyst filled with old dark blood from endometriosis. We perform 3D laparoscopic cystectomy to strip the cyst wall while preserving healthy ovarian tissue.",
      },
      {
        question: "How is deep infiltrating endometriosis (DIE) diagnosed and managed?",
        answer:
          "DIE affects deeper pelvic structures like uterosacral ligaments and rectovaginal septum. It is diagnosed via specialized MRI/ultrasound and treated via expert laparoscopic micro-excision.",
      },
      {
        question: "What medical or hormonal therapy is prescribed after surgery to prevent recurrence?",
        answer:
          "Post-operative management may include hormonal suppressive therapy (Dienogest or GnRH analogues) tailored to whether you plan immediate conception or pain control.",
      },
    ],
    icon: "scan",
    image: "https://res.cloudinary.com/dv9tivfvq/image/upload/v1786608482/IMG_1_wx7atm.jpg",
  },

  {
    slug: "paediatrics",
    title: "Comprehensive Paediatrics",
    short: "Paediatric Care",
    category: "Pediatrics",
    blurb:
      "Compassionate child healthcare, newborn wellness checks, vaccination schedules, and pediatric consultations tailored to your growing family.",
    homeBlurb:
      "Compassionate pediatric consultations, vaccinations, and newborn care.",
    overview:
      "Your child's health and development require gentle, expert care at every step. From newborn assessments and immunizations to managing common childhood illnesses, growth tracking, and adolescent health, Dr. Priyanka Gynec offers a supportive environment where parents feel confident and children feel safe.",
    keyBenefits: [
      "Newborn Screening: Comprehensive infant wellness assessment and jaundice screening.",
      "Cold-Chain Immunization: Strict WHO-compliant cold-chain storage for safe vaccinations.",
      "Development Tracking: Growth, milestone, and nutritional progress monitoring.",
      "Child-Friendly Environment: Warm, reassuring clinic setting designed to keep children comfortable.",
    ],
    points: [
      "Newborn care & infant developmental tracking",
      "Complete vaccination schedules (IAP recommended)",
      "Treatment for childhood allergies, infections & fevers",
    ],
    treatmentsIncluded: [
      "Newborn Physical Assessment & Jaundice Evaluation",
      "Pediatric Immunization Services",
      "Growth & Milestone Tracking Consultations",
      "Common Illness Management (Respiratory, Gastrointestinal, Skin)",
    ],
    whenToConsult: [
      "Newborn routine wellness checkup or feeding guidance",
      "Due date for infant / child vaccinations",
      "High fever, persistent cough, rash, or vomiting in children",
      "Concerns regarding physical growth, speech, or developmental milestones",
    ],
    faqs: [
      {
        question: "Which vaccines are administered immediately after birth?",
        answer:
          "Standard newborn vaccines given within 24-48 hours of birth include BCG (tuberculosis), OPV (oral polio), and Hepatitis B birth dose.",
      },
      {
        question: "How often should I bring my newborn for routine growth and milestone checkups?",
        answer:
          "Routine checkups coincide with vaccination milestones at 6, 10, and 14 weeks, followed by monthly visits in the first year to monitor weight, height, and head circumference.",
      },
      {
        question: "How do you maintain vaccine safety and cold-chain storage at the clinic?",
        answer:
          "We use dedicated WHO-compliant pharmaceutical refrigerators with 24/7 digital temperature logging to guarantee vaccine potency and safety.",
      },
      {
        question: "What should I do if my baby develops a fever after vaccination?",
        answer:
          "Mild fever and site soreness are normal immune responses. We prescribe pediatric paracetamol drops and guide parents on gentle cold compresses.",
      },
      {
        question: "What advice do you provide for newborn breastfeeding and digestive colic?",
        answer:
          "We offer hands-on guidance for proper latching positions, burping techniques, and managing infant gas/colic to ensure peaceful sleep for baby and parents.",
      },
      {
        question: "When should I seek immediate pediatric attention for my child?",
        answer:
          "Seek prompt medical care for high persistent fever, rapid or labored breathing, lethargy, poor feeding, severe vomiting, or unusual rashes.",
      },
    ],
    icon: "baby",
    image: "https://res.cloudinary.com/dv9tivfvq/image/upload/v1786608482/IMG_1_wx7atm.jpg",
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
      "A highly distinguished and experienced specialist, Dr. Priyanka Pachauri co-leads Shree Advanced Urogynae Clinic and serves as a Consultant at Ujala Cygnus BrightStar Hospital. She is deeply committed to combining advanced, minimally invasive surgical precision with compassionate maternal care. Known for her technical skill in handling complex clinical challenges, she provides a supportive environment that inspires confidence in patients navigating high-risk pregnancies and reproductive health journeys.",

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
    title: "Navigating PCOS & Infertility: A Gynecologist's Step-by-Step Guide to Conceiving",
    excerpt:
      "Polycystic Ovary Syndrome (PCOS) is one of the most common—yet highly treatable—causes of difficulty in conceiving. Discover how lifestyle changes, ovulation induction, and personalized fertility plans help over 85% of women achieve pregnancy.",
    category: "Fertility & IVF",
    date: "August 18, 2026",
    readTime: "6 min read",
    author: "Dr. Priyanka",
    authorRole: "Senior Gynecologist & Fertility Specialist (MBBS, MS)",
    image: "https://res.cloudinary.com/dv9tivfvq/image/upload/v1787293425/Gemini_Generated_Image_1b0lda1b0lda1b0l_nxqlrl.png",
    takeaways: [
      "PCOS causes irregular ovulation, but eggs remain healthy and responsive to medical care.",
      "70%+ of women with PCOS achieve successful pregnancy with oral ovulation medications alone.",
      "Minimal laparoscopic ovarian drilling or IUI/IVF provide excellent secondary solutions if needed."
    ],
    sections: [
      {
        heading: "Understanding the Connection Between PCOS & Ovulation",
        content: `Polycystic Ovary Syndrome affects roughly 1 in every 5 women of reproductive age. The primary hurdle in conceiving with PCOS is anovulation—infrequent or absent ovulation caused by hormonal imbalances like elevated androgen levels and insulin resistance. Because the ovary does not regularly release a mature egg, natural conception becomes unpredictable. However, it is essential to understand that women with PCOS possess abundant egg reserves; they simply require the right endocrine signals to release them.`
      },
      {
        heading: "Step 1: Metabolic Optimization & Lifestyle Adjustments",
        content: `Before starting fertility medications, optimizing metabolic health is critical. A modest weight reduction of 5% to 10% can restore natural ovulatory cycles in up to 50% of women. Focus on a low-glycemic index diet, regular resistance exercise, and managing insulin sensitivity through physician-guided supplements like Inositol or Metformin.`
      },
      {
        heading: "Step 2: Medical Ovulation Induction",
        content: `When natural ovulation needs support, oral medications such as Letrozole or Clomiphene Citrate are first-line gold standards. Under ultrasound follicular monitoring, your specialist tracks follicle growth to pinpoint the exact fertile window, maximizing natural conception chances within 3 to 6 cycles.`
      },
      {
        heading: "Step 3: Advanced Solutions (Laparoscopy, IUI & IVF)",
        content: `For patients where oral medications are insufficient, minimally invasive Laparoscopic Ovarian Drilling (LOD) can restore hormonal equilibrium. Alternatively, Intrauterine Insemination (IUI) or In Vitro Fertilization (IVF) offers high success rates tailored to individual reproductive profiles.`
      }
    ]
  },

  {
    slug: "understanding-endometriosis",
    title: "Advanced Laparoscopic Surgery: Painless Recovery & Solutions for Endometriosis",
    excerpt:
      "Severe menstrual cramps and pelvic pain are not something you must suffer through silently. Learn how 3D 4K keyhole laparoscopic surgery offers precise diagnosis, complete excision, and rapid 24-hour recovery.",
    category: "Laparoscopy & Surgery",
    date: "August 14, 2026",
    readTime: "5 min read",
    author: "Dr. Priyanka",
    authorRole: "Laparoscopic Surgeon & Gynecologist (MBBS, MS)",
    image: "https://res.cloudinary.com/dv9tivfvq/image/upload/v1787293425/Gemini_Generated_Image_585exs585exs585e_zcaq9n.png",
    takeaways: [
      "Endometriosis occurs when tissue similar to the uterine lining grows outside the uterus, causing pain and scarring.",
      "Minimal access 3D/4K laparoscopy allows 100% precise visualization and complete lesion removal.",
      "Patients experience tiny 5mm incisions, minimal blood loss, and return home within 24 to 48 hours."
    ],
    sections: [
      {
        heading: "Symptoms You Should Never Ignore",
        content: `Chronic pelvic pain, debilitating period cramps (dysmenorrhea), pain during intercourse, and bowel/bladder discomfort during menstruation are hallmark symptoms of endometriosis. Far too often, women delay seeking medical help believing period pain is normal. Timely clinical evaluation prevents long-term scarring and fertility complications.`
      },
      {
        heading: "Why Keyhole Laparoscopy is the Gold Standard",
        content: `Unlike open abdominal surgery, laparoscopic surgery utilizes miniature 5mm to 10mm keyhole incisions and high-definition endoscopic cameras. This enables the surgeon to magnify microscopic endometrial implants, ovarian chocolate cysts (endometriomas), and pelvic adhesions that standard ultrasounds may miss.`
      },
      {
        heading: "Complete Excision vs. Simple Ablation",
        content: `Under Dr. Priyanka's surgical protocol, complete laparoscopic excision of endometrial tissue is prioritized over superficial burning. Excision removes the root of deep infiltrating lesions, drastically lowering recurrence rates and preserving surrounding ovarian tissue.`
      },
      {
        heading: "What to Expect During Recovery",
        content: `Thanks to advanced electrosurgical tools and bloodless dissection techniques, post-operative pain is minimal. Patients are ambulatory within 6 hours of surgery, resume light daily activities within 48 hours, and enjoy cosmetically invisible micro-scars.`
      }
    ]
  },

  {
    slug: "your-trimester-by-trimester-guide",
    title: "Your Trimester-by-Trimester Birthing Guide: Essential Care for Mother & Baby",
    excerpt:
      "From your initial positive test to painless normal delivery—a complete physician-guided roadmap covering vital ultrasound scans, nutrition, high-risk screening, and smooth labor preparedness.",
    category: "Pregnancy & Birthing",
    date: "August 10, 2026",
    readTime: "7 min read",
    author: "Dr. Priyanka",
    authorRole: "Consultant Obstetrician & Birthing Specialist (MBBS, MS)",
    image: "https://res.cloudinary.com/dv9tivfvq/image/upload/v1787293484/Gemini_Generated_Image_ncma0qncma0qncma_wvam9e.png",
    takeaways: [
      "Trimester 1 focuses on early viability scans, folic acid supplementation, and NIPT/NT screening.",
      "Trimester 2 involves detailed anomaly ultrasounds (TIFFA) and monitoring fetal movements.",
      "Trimester 3 prepares you for a safe birthing plan, painless labor options, and newborn care."
    ],
    sections: [
      {
        heading: "First Trimester (Weeks 1 – 12): Foundation & Screening",
        content: `The first trimester establishes the health of your pregnancy. Your first visit includes a viability ultrasound to confirm heartbeat and gestational age. Folic acid and essential micronutrients are started immediately to support neural tube development. Around weeks 11-13, an NT Scan and blood markers rule out chromosomal abnormalities.`
      },
      {
        heading: "Second Trimester (Weeks 13 – 28): Growth & Golden Period",
        content: `Often called the golden trimester, energy levels return as morning sickness fades. Between weeks 18 and 22, a comprehensive TIFFA (Level II Anomaly) scan evaluates every organ of your developing baby. Screening for gestational diabetes and blood pressure monitoring ensures mother and baby remain safe.`
      },
      {
        heading: "Third Trimester (Weeks 29 – 40): Preparation & Birthing Plan",
        content: `As delivery approaches, growth scans assess fetal weight, amniotic fluid levels, and placental position. Antenatal counseling covers painless labor techniques (Epidural Analgesia), breathing exercises, birth plan preferences, and recognizing true labor contractions.`
      },
      {
        heading: "Painless Normal Delivery & Postpartum Wellness",
        content: `Modern obstetrics prioritizes natural birthing whenever safe. Epidural analgesia allows mothers to experience active labor without distressing pain. Postpartum follow-ups ensure seamless lactation support, pelvic floor recovery, and emotional well-being.`
      }
    ]
  }
];