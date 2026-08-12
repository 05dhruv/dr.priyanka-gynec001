export const siteInfo = {
  name: "Dr. Priyanka Gynec",
  tagline: "Her Health First",
  address: "679, 11th Main Road, 36th Cross, 4th Block, Jayanagar, Bengaluru 560 011",
  email: "contact@Dr. Priyankagynec.com",
  phones: [
    { label: "+91 80 2244 1314", href: "tel:918022441314" },
    { label: "+91 80 2244 6262", href: "tel:918022446262" },
    { label: "+91 95917 87988", href: "tel:919591787988" },
    { label: "+91 76767 79106", href: "tel:917676779106" },
  ],
  whatsapp: { label: "+91 76767 79106", href: "https://wa.me/917676779106" },
  socials: [
    { label: "Facebook", href: "https://www.facebook.com/people/Dr. Priyanka-Gynec/61586318647453/" },
    { label: "Instagram", href: "https://www.instagram.com/Dr. Priyanka_gynec/" },
    { label: "YouTube", href: "https://www.youtube.com/@Dr. Priyanka_gynec" },
    { label: "WhatsApp", href: "https://wa.me/917676779106" },
  ],
};

export const navLinks = [
  { label: "About Us", href: "/about-us" },
  {
    label: "Specialities",
    href: "/services",
    children: [
      { label: "Fertility & IVF", href: "/services/fertility-ivf" },
      { label: "Laparoscopy & Gynecology", href: "/services/laparoscopy-gynecology" },
      { label: "Pregnancy & Birthing", href: "/services/pregnancy-birthing" },
      { label: "Paediatrics", href: "/services/paediatrics" },
    ],
  },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact Us", href: "/contact" },
];

export const services = [
  {
    slug: "laparoscopy-gynecology",
    title: "Laparoscopy & Gynaecology",
    short: "Gynecology & Laparoscopy",
    blurb:
      "Where surgical precision meets compassionate care. Minimally invasive expertise that prioritizes your comfort, safety, and faster return to life.",
    homeBlurb: "Expert care for women's reproductive health needs.",
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
    homeBlurb: "Personalized fertility treatments to help you conceive.",
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
    homeBlurb: "Supportive and customized birthing experiences await.",
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
    homeBlurb: "Comprehensive paediatric services for your little ones.",
    points: [
      "Newborn & child check-ups",
      "Vaccinations & preventive care",
      "Child growth & development monitoring",
      "Care for common illnesses & allergies",
    ],
    icon: "baby",
  },
];

export const testimonials = [
  {
    quote:
      "We came to know about madam through Instagram and approached her. We had been married for 7 years and went pillar to post for conception. Every hospital suggested IVF, but after consulting Dr Shilpa madam we conceived naturally. We highly recommend Dr Shilpa G B and Dr. Priyanka Gynec for all childless couples.",
    name: "Rudri J",
  },
  {
    quote:
      "We are crazy Instagram followers of her. When I saw her I got positive energy—her way of talking gives us hope. Madam and her team were really awesome. I don't know how to express my happiness, but thank you for all.",
    name: "Sneha Singh",
  },
  {
    quote:
      "Dr. Priyanka Gynec is an excellent IVF center with highly experienced and caring doctors. Dr. Shilpa mam is outstanding—very knowledgeable, kind, and extremely supportive throughout. Highly recommended for anyone seeking trusted, compassionate fertility treatment.",
    name: "Helna Mary Nelson",
  },
  {
    quote:
      "Shilpa maam's expertise combined with genuine empathy made a huge difference. They built trust immediately. The nursing team was amazing—always available, kind, and made my stay comfortable. From reception to discharge, every staff member was supportive, polite and cooperative.",
    name: "Shaista Maniyar",
  },
  {
    quote:
      "We are very much thankful to Dr Shilpa Madam. We had travelled so many places and underwent a lot of stress and disappointment, but after meeting her we finally had hope. After fertility treatment we are now blessed with twin babies.",
    name: "Mohan K C",
  },
  {
    quote:
      "I would say Dr. Shilpa is a real Mother Teresa. She takes care of her patients very well, and the staff are very kind and helpful. This was the best choice I made for my pregnancy—I would highly recommend her.",
    name: "Poojitha N",
  },
];

export const doctors = [
  {
    name: "Dr Shilpa G B",
    role: "Director, Fertility & Laparoscopic Care",
    bio: "Gold-medallist and pioneer in advanced fertility and laparoscopic care, Dr. Shilpa G B leads Dr. Priyanka Gynec with rare energy and grace. Tireless in her work and unwaveringly positive, she takes every challenge head-on—whether mastering new technology or guiding a complex birth. She combines cutting-edge medical precision with warmth and accessibility, trusting her team fully and inspiring confidence in everyone around her.",
    education: [
      "MBBS (2001) & MS in Obstetrics & Gynaecology (2005), JJM Medical College, Davanagere",
      "DNB in OBGyn from New Delhi (2006)",
      "Further training at Singapore's National University Hospital",
      "Diploma in Reproductive Medicine & Embryology, Kiel University, Germany",
      "Fellowship in Maternal & Child Health from NARCHI",
    ],
    awards: [
      "Former president ofMoradabad Society of OBGYN",
      "Former chairperson of the Infertility Committee of KSOGA",
      "Gold Medals for both her MBBS and MS (OBG) programs",
    ],
    experience: ["Director of Dr. Priyanka Gynec, based in Jayanagar, Bengaluru"],
  },
  {
    name: "Dr Sanjay Gururaj",
    role: "Paediatrician & General Physician",
    bio: "Dr. Sanjay Gururaj brings laughter and lightness into children's care. His larger-than-life personality instantly puts young patients at ease, and his depth of knowledge as a paediatrician and general physician is so trusted that even parents and grandparents often seek his advice. With over 33 years of experience, he stays deeply informed on the latest medical advances.",
    education: [
      "MBBS, University of Mysore (1992)",
      "Diploma in Child Health (DCH), MAHER University (2000)",
      "DNB in Paediatrics, University of Delhi (2002)",
    ],
    awards: [
      "Active member of the Indian Academy of Pediatrics (IAP)",
      "Member of the Indian Medical Association (IMA)",
    ],
    experience: [],
  },
];

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
