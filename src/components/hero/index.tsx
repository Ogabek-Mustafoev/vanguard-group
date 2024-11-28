"use client"

import {useTranslations} from "next-intl";
import {FC} from "react";
import {heroImg} from "@/constants";
import Image from "next/image";
import {Button} from "@nextui-org/react";
import {Link, MotionEl} from "@/components";

export const Hero: FC = () => {
  const t = useTranslations("hero");

  return (
    <div className="relative h-screen text-white bg-black flex flex-col">
      <div className="container h-full z-10 flex items-center">
        <div className="w-full lg:w-2/5 flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-6">
          <MotionEl
            el="h1"
            delay={.3}
            direction={"right"}
            className="text-3xl drop-shadow-lg uppercase md:text-4xl xl:text-5xl flex-1 font-semibold leading-tight"
          >
            {t("title")}
          </MotionEl>
          <MotionEl el="p" delay={.4} direction="right" className="text-lg drop-shadow font-medium">
            {t('description')}
          </MotionEl>
          <MotionEl delay={.5} direction="right" className="mt-5 md:mt-8 lg:mt-10">
            <Button
              as={Link}
              radius="full"
              type="button"
              color="primary"
              href="#contact"
              aria-label="leave a request"
              className="md:py-7 md:px-7 text-white w-max text-lg md:text-xl font-medium"
            >
              {t('request')}
            </Button>
          </MotionEl>
        </div>
      </div>
      <Image
        src={heroImg}
        alt="hero bg"
        className="w-full brightness-50 lg:brightness-100 lg:w-[57%] -z-0 h-full object-center lg:object-left absolute right-0 top-0 object-cover"
      />
    </div>
  )
}