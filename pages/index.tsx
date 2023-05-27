import ContactCard from "@/components/ContactCard";
import Layout from "@/components/Layout";
import SkillCard from "@/components/SkillCard";
import { skills, contacts } from "@/libs/data";
import Image from "next/image";
import Link from "next/link";
import {
  SiFacebook,
  SiTwitter,
  SiInstagram,
  SiLinkedin,
} from "react-icons/si";
import { SlCallIn, SlEnvolope } from "react-icons/sl";

export default function Home() {
  return (
    <Layout>
      <div className="space-y-8">
        <section className="flex flex-row">
          <div className="sm:container mx-auto flex md:flex-row flex-col sm:pt-28 pt-0 xl:pt-24 md:pt-0 sm:gap-16 gap-5">
            <div className="space-y-5 flex flex-col">
              <label
                className={`sm:text-4xl text-2xl sm:mt-10 mt-0 2xl:pr-40 pr-0 font-bold`}
              >
                Hello, I am Patricia Lofamia. I am a Frontend Developer.
              </label>

              <ContactCard>
                <div>
                  <label
                    className={`sm:text-2xl text-xl sm:mt-10 mt-0 2xl:pr-40 pr-0 font-bold`}
                  >
                    Contact Information
                  </label>
                  <div className="text-xl sm:mt-10 mt-0 2xl:pr-40 pr-0 font-bold`">
                    <ul>
                      <li className="flex flex-row space-x-3 items-center text-xl font-bold">
                        <SiFacebook size={30} />
                        <Link
                          href="https://web.facebook.com/owwnoblee"
                          passHref={true}
                          legacyBehavior
                        >
                          <a target="_blank">fb//owwnoblee</a>
                        </Link>
                      </li>
                      <li className="flex flex-row space-x-3 items-center text-xl font-bold">
                        <SiTwitter size={30} />
                        <Link
                          href="https://web.facebook.com/owwnoblee"
                          passHref={true}
                          legacyBehavior
                        >
                          <a target="_blank">twitter//oww_noble</a>
                        </Link>
                      </li>
                      <li className="flex flex-row space-x-3 items-center text-xl font-bold">
                        <SiInstagram size={30} />
                        <Link
                          href="https://web.facebook.com/owwnoblee"
                          passHref={true}
                          legacyBehavior
                        >
                          <a target="_blank">ig//oww_noble</a>
                        </Link>
                      </li>
                      <li className="flex flex-row space-x-3 items-center text-xl font-bold">
                        <SiLinkedin size={30} />
                        <Link
                          href="https://web.facebook.com/owwnoblee"
                          passHref={true}
                          legacyBehavior
                        >
                          <a target="_blank">linkedin//patricialofamia</a>
                        </Link>
                      </li>
                      <li className="flex flex-row space-x-3 items-center text-xl font-bold">
                      <SlCallIn size={30}/>
                        <Link
                          href="https://web.facebook.com/owwnoblee"
                          passHref={true}
                          legacyBehavior
                        >
                          <a target="_blank">09949241944</a>
                        </Link>
                      </li>
                      <li className="flex flex-row space-x-3 items-center text-xl font-bold">
                      <SlEnvolope size={30}/>
                        <Link
                          href="https://web.facebook.com/owwnoblee"
                          passHref={true}
                          legacyBehavior
                        >
                          <a target="_blank">iampatricialofamia@gmail.com</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </ContactCard>
            </div>

            <div className="sm:w-6/12 2xl:w-4/12 flex items-end justify-center">
              <Image
                className="rounded-lg"
                src="pat.jpg"
                alt="patricia lofamia img"
                width={400}
                height={400}
              />
            </div>
          </div>
        </section>
        <button className="border-2 shadow-sm w-1/3 py-2 rounded-lg text-base font-bold hover:bg-black hover:text-white">
          {" "}
          About me
        </button>

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
