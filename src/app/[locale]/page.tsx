"use server"

import {logoShortImg} from "@/constants";
import {IParams} from "@/types";
import {HomePage} from "@/views";
import {Metadata} from "next";
import {getTranslations} from "next-intl/server";

export async function generateMetadata({params}: { params: IParams }): Promise<Metadata> {
  const t = await getTranslations();

  return {
    title: t('seo.title'),
    keywords: t('seo.keywords'),
    description: t('seo.description'),
    metadataBase: new URL(`https://vanguard-group.com/${params.locale}`),
    robots: "index, follow",
    alternates: {
      canonical: `https://vanguard-group.com/${params.locale}`,
      languages: {
        en: "https://vanguard-group.com",
        ru: "https://vanguard-group.com/ru",
        uz: "https://vanguard-group.com/uz",
      }
    },
    openGraph: {
      title: t('seo.title'),
      description: t('seo.description'),
      url: `https://vanguard-group.com/${params.locale}`,
      type: "website",
      siteName: "Vanguard",
      images: [
        {
          url: logoShortImg.src,
          width: 1200,
          height: 630,
          alt: "About Vanguard",
        }
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
          alt: "About Vanguard",
        }
      ],
    },
  };
}

export default async function Home() {
  return <HomePage/>
}
