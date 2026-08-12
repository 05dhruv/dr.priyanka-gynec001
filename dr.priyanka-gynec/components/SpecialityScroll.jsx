"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const specialities = [
  {
    title: "Gynecology & Laparoscopy",
    description:
      "Expert care for women's reproductive health needs.",
    link: "/services/laparoscopy-gynecology",
    image:
      "https://res.cloudinary.com/dv9tivfvq/image/upload/v1786294076/clipping-flower-on-hair_qjjjl5.webp",
  },
  {
    title: "Pregnancy & Birthing Care",
    description:
      "Supportive and customized birthing experiences await.",
    link: "/services/pregnancy-birthing",
    image:
      "https://res.cloudinary.com/dv9tivfvq/image/upload/v1786294075/healing-with-ayurleaves_ryvkrj.webp",
  },
  {
    title: "Fertility & IVF",
    description:
      "Personalized fertility treatments to help you conceive.",
    link: "/services/fertility-ivf",
    image:
      "https://res.cloudinary.com/dv9tivfvq/image/upload/v1786294075/holding-tummy-with-hands_b5zo5f.webp",
  },
  {
    title: "Paediatric Care",
    description:
      "Comprehensive paediatric services for your little ones.",
    link: "/services/paediatrics",
    image:
      "https://res.cloudinary.com/dv9tivfvq/image/upload/v1786294075/tweo-girls-pausing_epbseb.webp",
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 80,
    scale: 0.95,
  },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      delay: i * 0.15,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function SpecialityScroll() {
  return (
    <section className="bg-[#fbf5ee] py-18 lg:py-18 overflow-hidden">
      <div className="max-w-[1700px] mx-auto px-5 lg:px-12">
        {/* =========================
            DESKTOP VERSION
        ========================== */}
        <div className="hidden lg:grid lg:grid-cols-[0.8fr_1.2fr] gap-20">

          {/* Left Sticky Heading */}
          <div className="sticky top-28 h-fit">
            <h2
              className="
                font-serif
                text-[#004b28]
                text-[70px]
                xl:text-[90px]
                leading-[0.92]
                tracking-[-0.03em]
              "
            >
              Care that grows
              <br />
              with Her—
              <span className="italic block">
                at every
                <br />
                life stage
              </span>
            </h2>
          </div>

          {/* Right Side Cards */}
          <div className="space-y-8">

            {specialities.map((item, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
                className="
                  rounded-[999px]
                  bg-[#f5e7d8]
                  border
                  border-[#ebd7c5]
                  overflow-hidden
                  px-6
                  py-4
                  shadow-[0_10px_30px_rgba(7,85,64,0.06)]
                "
              >
                <div className="flex items-center gap-4">

 {/* Circle Placeholder */}
 <div
  className="
    relative
    w-[130px]
    h-[130px]
    rounded-full
    overflow-hidden
    shrink-0
    border-[5px]
    border-[#9ecaba]
  "
>
  <Image
    src={item.image}
    alt={item.title}
    fill
    className="object-cover object-center"
  />
</div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-serif text-[#004b28] text-3xl xl:text-4xl leading-tight mb-3">
                      {item.title}
                    </h3>

                    <p className="text-[#1b4332] text-base leading-relaxed mb-5 max-w-xl">
                      {item.description}
                    </p>

                    <Link
                      href={item.link}
                      className="
                        inline-flex
                        items-center
                        gap-3
                        text-[#004b28]
                        hover:text-[#075540]
                        italic
                        text-xl
                        hover:gap-5
                        transition-all
                      "
                    >
                      Know More
                      <span>→</span>
                    </Link>
                  </div>

                </div>
              </motion.div>
            ))}

          </div>
        </div>

        {/* =========================
            MOBILE VERSION
        ========================== */}
        <div className="lg:hidden">

          <div className="text-center mb-6">
            <h2
              className="
                font-serif
                text-[#004b28]
                text-[42px]
                leading-[0.95]
              "
            >
              Care that grows
              <br />
              with Her—
              <span className="italic block">
                at every
                <br />
                life stage
              </span>
            </h2>
          </div>

          <div className="space-y-4">

            {specialities.map((item, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                whileTap={{ scale: 0.98 }}
                className="
                  rounded-[999px]
                  bg-[#f5e7d8]
                  border
                  border-[#ebd7c5]
                  overflow-hidden
                  px-6
                  py-4
                  shadow-[0_6px_20px_rgba(7,85,64,0.06)]
                "
              >
                <div className="flex items-center gap-4">
{/* Circle Image */}
<div
  className="
    relative
    w-24
    h-24
    rounded-full
    overflow-hidden
    shrink-0
    border-4
    border-[#9ecaba]
  "
>
  <Image
    src={item.image}
    alt={item.title}
    fill
    className="object-cover object-center"
  />
</div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">

                    <h3
                      className="
                        font-serif
                        text-[#004b28]
                        text-[20px]
                        leading-tight
                        mb-2
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        text-[#1b4332]
                        text-sm
                        leading-relaxed
                        mb-3
                      "
                    >
                      {item.description}
                    </p>

                    <Link
                      href={item.link}
                      className="
                        inline-flex
                        items-center
                        gap-2
                        text-[#004b28]
                        hover:text-[#075540]
                        italic
                        text-sm
                      "
                    >
                      Know More
                      <span>→</span>
                    </Link>

                  </div>

                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}