"use server"

import {IParams} from "@/types";
import {ServicesPage} from "@/views";
import {Metadata} from "next";
import {getTranslations} from "next-intl/server";

export async function generateMetadata({params}: { params: IParams }): Promise<Metadata> {
  const t = await getTranslations("services");

  return {
    title: t('seo.title'),
    keywords: t('seo.keywords'),
    description: t('seo.description'),
    metadataBase: new URL(`https://vanguard-group.com/${params.locale}/services`),
    alternates: {
      canonical: `https://vanguard-group.com/${params.locale}/services`,
      languages: {
        en: "https://vanguard-group.com/services",
        ru: "https://vanguard-group.com/ru/services",
        uz: "https://vanguard-group.com/uz/services",
      }
    },
  };
}

export default async function Services() {
  return <ServicesPage/>
}