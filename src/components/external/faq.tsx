import Image from "next/image"

export const Faq = () => {
  return (
    <section className="flex w-full justify-center">
      <div className="flex h-[1009px] w-[1440px] flex-col items-center bg-[#FEFEFE] px-[10px] py-[100px] md:px-[80px]">
        <div className="line-height: 1 flex h-[124px] flex-col text-left text-5xl font-bold md:w-[4/5] xl:w-[1281px]">
          <p className="text-secondary text-4xl md:text-5xl">Frequently Asked </p>
          <p className="text-accent-foreground text-4xl md:text-5xl">Questions</p>
        </div>
        <div className="flex h-[637px] w-[90%] flex-col gap-8 lg:w-[839px]">
          <div className="line-height: 1 font-weight: 600 gap-4 rounded-[10px] border border-[#E9EFFD] p-5 text-xl sm:h-[257] sm:w-[4/5] lg:h-[157px] lg:w-[839px]">
            <div className="flex items-center justify-between">
              <h2 className="text-secondary">Do I need to install new hardware?</h2>
              <Image
                src="/images/cross.svg"
                alt="cross"
                width={32}
                height={32}
                className="h-[32px] w-[32px]"
              />
            </div>
            <p className="text-[#5a6070]">
              No, you don’t need to install any new hardware. EnergyIQ works with your
              existing inverter and solar setup. You simply connect your system details or
              integrate with supported inverter platforms to start monitoring your energy
              in real time.
            </p>
          </div>
          <div className="round-[10px] flex h-[64px] w-[full] items-center justify-between border border-[#E9EFFD] md:p-[20px] lg:w-[839px]">
            <h2 className="text-secondary">Do I need to install new hardware?</h2>
            <Image
              src="/images/plus.svg"
              alt="plus"
              width={32}
              height={32}
              className="h-[32px] w-[32px]"
            />
          </div>
          <div className="round-[10px] flex h-[64px] w-[full] items-center justify-between border border-[#E9EFFD] md:p-[20px] lg:w-[839px]">
            <h2 className="text-secondary">Which inverter brands are supported?</h2>
            <Image
              src="/images/plus.svg"
              alt="plus"
              width={32}
              height={32}
              className="h-[32px] w-[32px]"
            />
          </div>
          <div className="round-[10px] flex h-[64px] w-[full] items-center justify-between border border-[#E9EFFD] md:p-[20px] lg:w-[839px]">
            <h2 className="text-secondary">Does the AI agent really speak Pidgin?</h2>
            <Image
              src="/images/plus.svg"
              alt="plus"
              width={32}
              height={32}
              className="h-[32px] w-[32px]"
            />
          </div>
          <div className="round-[10px] flex h-[64px] w-[full] items-center justify-between border border-[#E9EFFD] md:p-[20px] lg:w-[839px]">
            <h2 className="text-secondary">Is my data safe?</h2>
            <Image
              src="/images/plus.svg"
              alt="plus"
              width={32}
              height={32}
              className="h-[32px] w-[32px]"
            />
          </div>
          <div className="round-[10px] flex h-[64px] w-[full] items-center justify-between border border-[#E9EFFD] md:p-[20px] lg:w-[839px]">
            <h2 className="text-secondary">Can solar installers white‑label EnergyIQ?</h2>
            <Image
              src="/images/plus.svg"
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
