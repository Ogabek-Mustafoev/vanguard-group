"use server"

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
    alternates: {
      canonical: `https://vanguard-group.com/${params.locale}`,
      languages: {
        en: "https://vanguard-group.com",
        ru: "https://vanguard-group.com/ru",
        uz: "https://vanguard-group.com/uz",
      }
    }
  };
}

export default async function Home() {
  return <HomePage/>
}
