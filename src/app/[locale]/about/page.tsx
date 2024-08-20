"use server"

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
    alternates: {
      canonical: `https://vanguard-group.com/${params.locale}/about`,
      languages: {
        en: "https://vanguard-group.com/about",
        ru: "https://vanguard-group.com/ru/about",
        uz: "https://vanguard-group.com/uz/about",
      }
    },
  };
}

export default async function About() {
  return <AboutPage/>
}