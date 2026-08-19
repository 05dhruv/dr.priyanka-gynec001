import { notFound } from "next/navigation";
import { services } from "@/data/site";
import ServiceDetailView from "@/components/ServiceDetailView";

function getServiceBySlug(rawSlug) {
  if (!rawSlug) return null;
  
  // 1. Direct match
  const directMatch = services.find((s) => s.slug === rawSlug);
  if (directMatch) return directMatch;

  // 2. Alias mapping for common variations or nav links
  const aliasMap = {
    "cystectomy": "laparoscopic-cystectomy",
    "myomectomy": "laparoscopic-myomectomy",
    "hysterectomy": "laparoscopic-hysterectomy",
    "laparoscopy-gynecology": "laparoscopy-gynecology",
  };

  const mappedSlug = aliasMap[rawSlug];
  if (mappedSlug) {
    return services.find((s) => s.slug === mappedSlug) || null;
  }

  return null;
}

export function generateStaticParams() {
  const paramSet = new Set();
  services.forEach((s) => paramSet.add(s.slug));
  // Include aliases so SSG generates them too
  paramSet.add("cystectomy");
  paramSet.add("myomectomy");
  paramSet.add("hysterectomy");

  return Array.from(paramSet).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: `${service.title} | Dr. Priyanka Gynec Moradabad`,
    description: service.blurb || service.overview,
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetailView service={service} />;
}
