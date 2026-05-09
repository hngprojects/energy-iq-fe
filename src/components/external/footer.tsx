import React from "react"
import Image from "next/image"

interface FooterCardProp {
  id: string
  title: string
  list: string[]
}
const footerCards: FooterCardProp[] = [
  {
    id: "1",
    title: "Product",
    list: ["Features", "Pricing", "API Integrations", "Contact"],
  },
  {
    id: "2",
    title: "Company",
    list: ["About", "Blog", "Career", "News"],
  },
  {
    id: "3",
    title: "Resources",
    list: ["Use Cases", "Community", "Help Centre"],
  },
  {
    id: "4",
    title: "Download",
    list: ["Ios", "Android", "Windows"],
  },
]
const FooterCard = ({ title, list }: FooterCardProp) => {
  return (
    <div className="flex h-[192px] flex-col gap-[32px] md:w-[150px] 2xl:w-[203px]">
      <div className="text-xl">{title}</div>
      <div className="gap-2 text-lg">
        {list.map((list: string, listIndex) => (
          <p key={listIndex}>{list}</p>
        ))}
      </div>
    </div>
  )
}
export const Footer = () => {
  return (
    <footer className="flex w-full justify-center">
      <div className="max-width:100% relative flex h-[539px] h-auto w-[1440px] flex-col items-center overflow-hidden bg-[#1A1F2C] px-[80] py-[100] text-white">
        <div className="font-roboto flex h-[107px] h-auto flex-col items-center justify-between border-b-[0.5px] border-[#E7E7E7] px-[80px] pb-[10px] md:flex-row lg:w-[80%] 2xl:w-[1440px]">
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
        <div className="mt-2.5 flex h-auto flex-wrap justify-between gap-8 p-5 px-[80] xl:h-67 2xl:w-[1440]">
          {footerCards.map((footerCard) => (
            <div
              key={footerCard.id}
              className="flex h-[192px] flex-col gap-[32px] md:w-[150px] 2xl:w-50.75"
            >
              <FooterCard
                id={footerCard.id}
                title={footerCard.title}
                list={footerCard.list}
              />
            </div>
          ))}
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
        <div className="flex w-[100%] flex-col items-center justify-between px-[80px] sm:flex-row">
          <div className="mt-8 text-center text-sm">
            Copyright © {new Date().getFullYear()} BRIX Templates | All Rights Reserved .
          </div>
          <div className="flex items-center gap-[22px]">
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
