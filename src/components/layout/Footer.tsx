import React from "react"
import Image from "next/image"
import logo from "../../assets/logo.svg"
import facebook from "../../assets/facebook.svg"
import instagram from "../../assets/instagram.svg"
import linkedin from "../../assets/linkedin.svg"
import twitter from "../../assets/twitter.svg"
import youtube from "../../assets/youtube.svg"

export const Footer = () => {
  return (
    <footer className="flex w-full justify-center">
      <div className="flex h-[539px] w-[1440px] flex-col items-center bg-[#1A1F2C] px-[80px] py-[100] text-white">
        <div className="font-roboto flex h-[107px] w-[1440px] items-center justify-between border-b-[0.5px] border-[#E7E7E7] px-[80px] pb-[10px]">
          <div className="flex h-[32px] w-[154px] items-center gap-2">
            <Image src={logo} alt="Logo" width={21.33} height={21.33} />
            <span>
              ENERGY<span className="text-[#F5A623]">IQ</span>
            </span>
          </div>
          <div className="line-height:1 font-roboto h-[55px] w-[620px] text-[16px] font-normal text-[#E6E6E6]">
            <p>
              AI-powered energy management & optimization platform for Nigerian SMEs and
              African businesses. Nigeria has the energy problem. We have the intelligence
              solution.
            </p>
          </div>
        </div>

        <div className="flex h-[268px] w-full justify-between gap-[32px] p-[20px]">
          <div className="flex h-[192px] w-[203px] flex-col gap-[32px]">
            <h1 className="text-xl">Product</h1>
            <ul className="gap-2 text-lg">
              <li>Features</li>
              <li>Pricing</li>
              <li>API Integrations</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="flex h-[192px] w-[203px] flex-col gap-[32px]">
            <h1 className="text-xl">Company</h1>
            <ul className="gap-2 text-lg">
              <li>About</li>
              <li>Blog</li>
              <li>Career</li>
              <li>News</li>
            </ul>
          </div>
          <div className="flex h-[192px] w-[203px] flex-col gap-[32px]">
            <h1 className="text-xl">Resources</h1>
            <ul className="gap-2 text-lg">
              <li>Use Cases</li>
              <li>Community</li>
              <li>Help Centre</li>
            </ul>
          </div>
          <div className="flex h-[192px] w-[203px] flex-col gap-[32px]">
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
        <div className="flex w-[1440px] items-center justify-between px-[80px]">
          <div className="mt-8 pt-4 text-center text-sm">
            Copyright © {new Date().getFullYear()} BRIX Templates | All Rights Reserved .
          </div>
          <div className="flex gap-[22px]">
            <Image
              src={facebook}
              alt="Logo"
              width={21}
              height={15}
              className="h-[15px] w-[21px]"
            />
            <Image
              src={twitter}
              alt="Logo"
              width={21}
              height={15}
              className="h-[15px] w-[21px]"
            />
            <Image
              src={instagram}
              alt="Logo"
              width={21}
              height={15}
              className="h-[15px] w-[21px]"
            />
            <Image
              src={linkedin}
              alt="Logo"
              width={21}
              height={15}
              className="h-[15px] w-[21px]"
            />
            <Image
              src={youtube}
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
