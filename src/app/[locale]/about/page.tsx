"use server"

import {logoShortImg} from "@/constants";
import {IParams} from "@/types";
import {AboutPage} from "@/views";
import {Metadata} from "next";
import {getTranslations} from "next-intl/server";

export async function generateMetadata({params}: { params: IParams }): Promise<Metadata> {
  const t = await getTranslations("about");

  return {
    title: t('seo.title'),
    keywords: t('seo.keywords'),
    description: t('seo.description'),
    metadataBase: new URL(`https://vanguard-group.com/${params.locale}/about`),
    robots: "index, follow",
    alternates: {
      canonical: params.locale === 'en'
        ? "https://vanguard-group.com/about"
        : `https://vanguard-group.com/${params.locale}/about`,
      languages: {
        en: "https://vanguard-group.com/about",
        ru: "https://vanguard-group.com/ru/about",
        uz: "https://vanguard-group.com/uz/about",
      }
    },
    openGraph: {
      title: t('seo.title'),
      description: t('seo.description'),
      url: params.locale === 'en'
        ? "https://vanguard-group.com/about"
        : `https://vanguard-group.com/${params.locale}/about`,
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

export default async function About() {
  return <AboutPage/>
}