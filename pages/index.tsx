import ContactCard from "@/components/ContactCard";
import Layout from "@/components/Layout";
import SkillCard from "@/components/SkillCard";
import { skills, contacts, socials } from "@/libs/data";
import { HomeProps } from "@/libs/types";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <Layout>
      <div className="space-y-8 ">
        <section className="flex flex-col items-center px-6 py-16 mx-auto  container sm:py-28">
          <div className="container mx-auto flex flex-row sm:pt-28 pt-0 xl:pt-24 md:pt-0 sm:gap-16 gap-5 ">
            <div className="space-y-5 flex flex-col  w-1/2">
              <label className="text-2xl sm:text-4xl sm:mt-10 mt-0 pr-0 2xl:pr-40 font-bold">
                Hi! I am a Frontend Developer.
              </label>

              <div>
                <ContactCard>
                  <div className="flex flex-col">
                    <label className="text-xl sm:text-2xl mt-0 sm:mt-4 pr-0 2xl:pr-40 font-bold">
                      Contact Details
                    </label>
                    <div className="space-y-5 text-xl mt-0 sm:mt-10 pr-0 2xl:pr-40">
                      <div className="grid space-y-3">
                        {contacts?.map((contact) => (
                          <div
                            key={contact.id}
                            className="grid grid-cols-2 items-center"
                          >
                            <span className="flex flex-row space-x-2">
                              {contact.icon}
                              <p className="font-bold text-green-500">
                                {contact.title}
                              </p>
                            </span>
                            <p className="font-medium">{contact.content}</p>
                          </div>
                        ))}
                      </div>
                      <div className="grid grid-cols-5 gap-5">
                        {socials?.map((social) => (
                          <div key={social.id} className={`flex flex-col`}>
                            {social.icon}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </ContactCard>
              </div>
            </div>
            <div className="w-full sm:w-6/12 md:w-6/12 2xl:w-4/12 mx-auto flex items-end justify-center ">
              <Image
                className="rounded-lg"
                src="/PAT.jpg"
                alt="patricia lofamia img"
                width={500}
                height={650}
              />
            </div>
          </div>

          <div className="w-full  pt-5">
            <button className="border-2 shadow-sm w-1/3 py-2 rounded-lg text-base font-bold hover:bg-black hover:text-white">
              About me
            </button>
          </div>
        </section>

       

        <section className="space-y-6">
          <label className="sm:text-4xl text-2xl font-bold mb-6 w-full sm:w-2/3">
            Skill Set
          </label>

          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 text-xl">
            {skills.map((skill) => (
              <SkillCard key={skill.id}>
                <div className="flex flex-col gap-y-4">
                  <div className="text-xl sm:text-sm md:text-base font-bold text-center">
                    {skill.title}
                  </div>
                  <div className="flex justify-center">{skill.icon}</div>
                </div>
              </SkillCard>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}
