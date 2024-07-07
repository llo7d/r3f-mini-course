"use server";
import MailSvg from "@/components/Icons/MailSvg";
import MinusSvg from "@/components/Icons/MinusSvg";
import PlusSvg from "@/components/Icons/PlusSvg";
import UserCircleSvg from "@/components/Icons/UserCircleSvg";
import FooterSection from "@/containers/home-page/footer-section";
import HeaderSection from "@/containers/home-page/header-section";
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { redirect } from "next/navigation";
import { signOut } from "./action";

export default async function DashboardPage() {
  const supabase = createClient();
  const user = await supabase.auth.getUser();
  if (!user.data?.user && user?.error?.message === "Auth session missing!") {
    return redirect("/auth/login");
  }
  return (
    <main>
      <HeaderSection />
      <div className="max-w-[1200px] w-full mx-auto pt-10 pb-20">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h6 className="text-white text-2xl leading-[28px] font-bold">
              Account
            </h6>
            <p className="text-sm leading-[26px] font-normal text-[#FFFFFF8F]">
              Ultricies ut viverra in laoreet sit volutpat. Sed nullam eu eget.
            </p>
          </div>
          <div>
            <form action="">
              <button
                formAction={signOut}
                className="bg-[#FFFFFF0F] hover:bg-[#FFFFFF0D] rounded-full py-3 px-10 text-[#FF5A50]"
              >
                Log out
              </button>
            </form>
          </div>
        </div>
        <div>
          <div className="flex gap-y-8 flex-col">
            <div className="flex gap-x-8">
              <p className="text-[#FFFFFFCC] text-base font-bold w-[280px]">
                Personal info
              </p>
              <div className="bg-[#FFFFFF0F] border border-[#FFFFFF0F] w-full rounded-2xl">
                <div className="p-12 pb-10">
                  <div className="form flex flex-col gap-y-6">
                    <div>
                      <label
                        htmlFor=""
                        className="block text-white text-sm leading-[24px] font-normal mb-2"
                      >
                        User
                      </label>
                      <div className="flex items-center relative bg-[#FFFFFF14] border border-[#FFFFFF0F] w-full rounded-md pl-3">
                        <UserCircleSvg />
                        <input
                          type="text"
                          disabled
                          className="w-full px-4 py-3 bg-transparent disabled:text-[#FFFFFF52]"

                          value={
                            user?.data?.user?.user_metadata?.user_name || ""
                          }
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor=""
                        className="block text-white text-sm leading-[24px] font-normal mb-2"
                      >
                        Email
                      </label>
                      <div className="flex items-center relative bg-[#FFFFFF14] border border-[#FFFFFF0F] w-full rounded-md pl-3">
                        <MailSvg />
                        <input
                          type="text"
                          disabled
                          className="w-full px-4 py-3 bg-transparent disabled:text-[#FFFFFF52]"
                          value={user?.data?.user?.email || ""}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="divide bg-[#FFFFFF1A] h-[1px] w-full"></div>
            <div className="flex gap-x-8">
              <p className="text-[#FFFFFFCC] text-base font-bold w-[280px]">
                Purchase History:
              </p>
              <div
                className="bg-[#FFFFFF0F] border border-[#FFFFFF33] w-full rounded-xl"
                style={{
                  boxShadow:
                    "0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)",
                }}
              >
                <table className="border-collapse table-fixed w-full text-sm">
                  <thead className="bg-[#FFFFFF0F]">
                    <tr>
                      <th className="text-[#FFFFFFCC] tracking-[0.2px] text-xs text-left leading-4 font-medium py-3 px-6">
                        Date
                      </th>
                      <th className="text-[#FFFFFFCC] tracking-[0.2px] text-xs text-left leading-4 font-medium py-3 px-6">
                        Time
                      </th>
                      <th className="text-[#FFFFFFCC] tracking-[0.2px] text-xs text-left leading-4 font-medium py-3 px-6">
                        Name
                      </th>

                      <th className="text-[#FFFFFFCC] tracking-[0.2px] text-xs text-left leading-4 font-medium py-3 px-6">
                        Price
                      </th>
                      <th className="text-[#FFFFFFCC] tracking-[0.2px] text-xs text-left leading-4 font-medium py-3 px-6"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="">
                      <td className="py-[26px] px-6 text-[#FFFFFFCC] text-sm leading-[20px] border-b border-[#FFFFFF33]">
                        Dec 1, 2022
                      </td>
                      <td className="py-[26px] px-6 text-[#FFFFFFCC] text-sm leading-[20px] border-b border-[#FFFFFF33]">
                        15.35
                      </td>
                      <td className="py-[26px] px-6 text-[#FFFFFFCC] text-sm leading-[20px] border-b border-[#FFFFFF33]">
                        robot-landing page
                      </td>

                      <td className="py-[26px] px-6 text-[#FFFFFFCC] text-sm leading-[20px] border-b border-[#FFFFFF33]">
                        4.99 €
                      </td>
                      <td className="py-[26px] px-6 text-sm leading-[20px] text-[#635AFF]  border-b border-[#FFFFFF33]">
                        Find it here
                      </td>
                    </tr>
                    <tr className="">
                      <td className="py-[26px] px-6 text-[#FFFFFFCC] text-sm leading-[20px] ">
                        Dec 1, 2022
                      </td>
                      <td className="py-[26px] px-6 text-[#FFFFFFCC] text-sm leading-[20px] ">
                        15.35
                      </td>
                      <td className="py-[26px] px-6 text-[#FFFFFFCC] text-sm leading-[20px] ">
                        robot-landing page
                      </td>
                      <td className="py-[26px] px-6 text-[#FFFFFFCC] text-sm leading-[20px] ">
                        4.99 €
                      </td>
                      <td className="py-[26px] px-6 text-sm leading-[20px] text-[#635AFF] ">
                        Find it here
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="divide bg-[#FFFFFF1A] h-[1px] w-full"></div>
            <div className="flex gap-x-8">
              <p className="text-[#FFFFFFCC] text-base font-bold w-[280px]">
                FAQ
              </p>
              <div className="w-full">
                <div className="flex flex-col gap-y-6">
                  <div className="flex justify-between w-full items-start faq-item">
                    <input
                      className="faq-checkbox"
                      type="checkbox"
                      id="faq-1"
                      hidden
                    />

                    <div className="flex flex-col gap-y-1 faq-content">
                      <p className="text-base leading-6 font-medium text-white">
                        This is the quesitoon 1?
                      </p>
                      <p className="text-sm leading-[20px] text-[#FFFFFF8F] font-normal faq-sub-content">
                        This is the answer, that is somewhat long but somehow
                        not long enough to fill neough space
                      </p>
                    </div>
                    <label htmlFor="faq-1" className="faq-label cursor-pointer">
                      <PlusSvg className="faq-checkbox-open" />
                      <MinusSvg className="faq-checkbox-close" />
                    </label>
                  </div>
                  <div className="flex justify-between w-full items-start faq-item">
                    <input
                      className="faq-checkbox"
                      type="checkbox"
                      id="faq-2"
                      hidden
                    />

                    <div className="flex flex-col gap-y-1 faq-content">
                      <p className="text-base leading-6 font-medium text-white">
                        This is the quesitoon 1?
                      </p>
                      <p className="text-sm leading-[20px] text-[#FFFFFF8F] font-normal faq-sub-content">
                        This is the answer, that is somewhat long but somehow
                        not long enough to fill neough space
                      </p>
                    </div>
                    <label htmlFor="faq-2" className="faq-label cursor-pointer">
                      <PlusSvg className="faq-checkbox-open" />
                      <MinusSvg className="faq-checkbox-close" />
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="divide bg-[#FFFFFF1A] h-[1px] w-full"></div>
            <div className="flex gap-x-8">
              <p className="text-[#FFFFFFCC] text-base font-bold w-[280px]">
                Contact
              </p>
              <div className="flex items-center gap-x-2 w-full">
                <p className="text-white text-sm leading-[24px]">
                  DM via Twitter
                </p>
                <Link
                  href={"#"}
                  className="text-[#635AFF] text-sm leading-[24px] flex items-center"
                >
                  @justcode
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.83337 14.1666L14.1667 5.83331M14.1667 5.83331H5.83337M14.1667 5.83331V14.1666"
                      stroke="#635AFF"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterSection />
    </main>
  );
}
