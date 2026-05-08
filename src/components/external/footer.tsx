import React from "react"
import Image from "next/image"

export const Footer = () => {
  return (
    <footer className="flex w-full justify-center">
      <div className=":xl:h-[539px] relative flex h-auto w-360 flex-col items-center bg-[#1A1F2C] px-20 py-[100] text-white sm:absolute">
        <div className="bg-blue l:h-[107px] font-roboto flex h-auto w-[60%] flex-col items-center justify-between border-b-[0.5px] border-[#E7E7E7] px-[80px] pb-[10px] md:flex-row lg:w-[80%] 2xl:w-[1440px]">
          <div className="flex h-auto w-38.5 flex-col items-center gap-2 md:h-8 md:flex-row">
            <Image src="/images/logo.svg" alt="Logo" width={21.33} height={21.33} />
            <span>
              ENERGY<span className="text-[#F5A623]">IQ</span>
            </span>
          </div>
          <div className="line-height:1 font-roboto h-auto w-75 text-[16px] font-normal text-[#E6E6E6] md:w-155 xl:h-13.75">
            <p>
              AI-powered energy management & optimization platform for Nigerian SMEs and
              African businesses. Nigeria has the energy problem. We have the intelligence
              solution.
            </p>
          </div>
        </div>

        <div className="mt-2.5 flex h-auto w-[40%] flex-col justify-between gap-8 p-5 md:w-[60%] md:flex-row lg:w-[80%] xl:h-67 2xl:w-full">
          <div className="flex h-[192px] flex-col gap-[32px] md:w-[150px] 2xl:w-50.75">
            <h1 className="text-xl">Product</h1>
            <ul className="gap-2 text-lg">
              <li>Features</li>
              <li>Pricing</li>
              <li>API Integrations</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="flex h-[192px] flex-col gap-[32px] md:w-[150px] 2xl:w-[203px]">
            <h1 className="text-xl">Company</h1>
            <ul className="gap-2 text-lg">
              <li>About</li>
              <li>Blog</li>
              <li>Career</li>
              <li>News</li>
            </ul>
          </div>
          <div className="flex h-[192px] flex-col gap-[32px] md:w-[150px] 2xl:w-[203px]">
            <h1 className="text-xl">Resources</h1>
            <ul className="gap-2 text-lg">
              <li>Use Cases</li>
              <li>Community</li>
              <li>Help Centre</li>
            </ul>
          </div>
          <div className="flex h-[192px] flex-col gap-[32px] md:w-[150px] 2xl:w-[203px]">
            <h1 className="text-xl">Download</h1>
            <ul className="gap-2 text-lg">
              <li>Ios</li>
              <li>Android</li>
              <li>Windows</li>
            </ul>
          </div>
          <div className="flex h-[224px] w-[321px] flex-col items-start gap-[32px]">
            <h1 className="text-xl">Subscribe to our newsletter</h1>
            <p>Enter your email to get mails concerning us.</p>
            <input
              type="text"
              className="h-[48px] w-[267px] gap-[10px] rounded-xl border bg-white px-[28px] py-[13px] text-gray-400 placeholder:text-sm"
              placeholder="Enter your name"
            ></input>
            <button className="h-[48px] w-[124px] gap-[10px] rounded-[12px] bg-[#F5A623] px-[24px] py-[16px] text-[#2A2F3C]">
              Subscribe
            </button>
          </div>
        </div>
        <div className="flex w-[40%] flex-col items-center justify-between px-[80px] md:w-[60%] md:flex-row lg:w-[80%] 2xl:w-[1440px]">
          <div className="mt-8 pt-4 text-center text-sm">
            Copyright © {new Date().getFullYear()} BRIX Templates | All Rights Reserved .
          </div>
          <div className="flex gap-[22px]">
            <Image
              src="/images/facebook.svg"
              alt="Logo"
              width={21}
              height={15}
              className="h-[15px] w-[21px]"
            />
            <Image
              src="/images/twitter.svg"
              alt="Logo"
              width={21}
              height={15}
              className="h-[15px] w-[21px]"
            />
            <Image
              src="/images/instagram.svg"
              alt="Logo"
              width={21}
              height={15}
              className="h-[15px] w-[21px]"
            />
            <Image
              src="/images/linkedin.svg"
              alt="Logo"
              width={21}
              height={15}
              className="h-[15px] w-[21px]"
            />
            <Image
              src="/images/youtube.svg"
              alt="Logo"
              width={21}
              height={15}
              className="h-[15px] w-[21px]"
            />
          </div>
        </div>
      </div>
    </footer>
  )
}
