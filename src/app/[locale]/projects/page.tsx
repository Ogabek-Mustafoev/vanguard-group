"use server"

import {logoShortImg} from "@/constants";
import {IParams} from "@/types";
import {ProjectsPage} from "@/views";
import {Metadata} from "next";
import {getTranslations} from "next-intl/server";

export async function generateMetadata({params}: { params: IParams }): Promise<Metadata> {
  const t = await getTranslations("projects");

  return {
    title: t('seo.title'),
    keywords: t('seo.keywords'),
    description: t('seo.description'),
    metadataBase: new URL(`https://vanguard-group.com/${params.locale}/projects`),
    robots: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
    alternates: {
      canonical: params.locale === 'en'
        ? "https://vanguard-group.com/projects"
        : `https://vanguard-group.com/${params.locale}/projects`,
      languages: {
        en: "https://vanguard-group.com/projects",
        ru: "https://vanguard-group.com/ru/projects",
        uz: "https://vanguard-group.com/uz/projects",
      }
    },
    openGraph: {
      title: t('seo.title'),
      description: t('seo.description'),
      url: params.locale === 'en'
        ? "https://vanguard-group.com/projects"
        : `https://vanguard-group.com/${params.locale}/projects`,
      type: "website",
      siteName: "Vanguard",
      images: [
        {
          url: logoShortImg.src,
          width: 1200,
          height: 630,
          type: 'image/png',
          alt: "About Vanguard",
        },
      ],
    },
    twitter: {
      title: t('seo.title'),
      description: t('seo.description'),
      card: "summary_large_image",
      site: "@vanguard-group",
      creator: "@vanguard-group",
      images: [
        {
          url: logoShortImg.src,
          width: 1200,
          height: 630,
          type: 'image/png',
          alt: "About Vanguard",
        },
      ],
    },
  };
}

export default async function Projects() {
  return <ProjectsPage/>
}