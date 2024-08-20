"use server"

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
    alternates: {
      canonical: `https://vanguard-group.com/${params.locale}/projects`,
      languages: {
        en: "https://vanguard-group.com/projects",
        ru: "https://vanguard-group.com/ru/projects",
        uz: "https://vanguard-group.com/uz/projects",
      }
    },
  };
}

export default async function Projects() {
  return <ProjectsPage/>
}