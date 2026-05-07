import React from "react"
import Image from "next/image"
import cross from "../../assets/cross.svg"
import plus from "../../assets/plus.svg"

export const Faq = () => {
  return (
    <section className="flex w-full justify-center">
      <div className="flex h-[1009px] w-[1440px] flex-col items-center bg-[#FEFEFE] px-[80px] py-[100px]">
        <div className="line-height: 1 flex h-[124px] w-[1281px] flex-col text-left text-5xl font-bold">
          <p className="fonttext-5xl text-secondary">Frequently Asked </p>
          <p className="fonttext-5xl text-accent-foreground">Questions</p>
        </div>
        <div className="flex h-[637px] w-[839px] flex-col gap-8">
          <div className="line-height: 1 font-weight: 600 h-[157px] w-[839px] gap-4 rounded-[10px] border border-[#E9EFFD] p-5 text-xl">
            <div className="flex items-center justify-between">
              <h2 className="text-secondary">Do I need to install new hardware?</h2>
              <Image src={cross} alt="cross" className="h-[32px] w-[32px]" />
            </div>
            <p className="text-[#5a6070]">
              No, you don’t need to install any new hardware. EnergyIQ works with your
              existing inverter and solar setup. You simply connect your system details or
              integrate with supported inverter platforms to start monitoring your energy
              in real time.
            </p>
          </div>
          <div className="round-[10px] flex h-[64px] w-[839px] items-center justify-between border border-[#E9EFFD] p-[20px]">
            <h2 className="text-secondary">Do I need to install new hardware?</h2>
            <Image
              src={plus}
              alt="plus"
              width={32}
              height={32}
              className="h-[32px] w-[32px]"
            />
          </div>
          <div className="round-[10px] flex h-[64px] w-[839px] items-center justify-between border border-[#E9EFFD] p-[20px]">
            <h2 className="text-secondary">Which inverter brands are supported?</h2>
            <Image
              src={plus}
              alt="plus"
              width={32}
              height={32}
              className="h-[32px] w-[32px]"
            />
          </div>
          <div className="round-[10px] flex h-[64px] w-[839px] items-center justify-between border border-[#E9EFFD] p-[20px]">
            <h2 className="text-secondary">Does the AI agent really speak Pidgin?</h2>
            <Image
              src={plus}
              alt="plus"
              width={32}
              height={32}
              className="h-[32px] w-[32px]"
            />
          </div>
          <div className="round-[10px] flex h-[64px] w-[839px] items-center justify-between border border-[#E9EFFD] p-[20px]">
            <h2 className="text-secondary">Is my data safe?</h2>
            <Image
              src={plus}
              alt="plus"
              width={32}
              height={32}
              className="h-[32px] w-[32px]"
            />
          </div>
          <div className="round-[10px] flex h-[64px] w-[839px] items-center justify-between border border-[#E9EFFD] p-[20px]">
            <h2 className="text-secondary">Can solar installers white‑label EnergyIQ?</h2>
            <Image
              src={plus}
              alt="plus"
              width={32}
              height={32}
              className="h-[32px] w-[32px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
