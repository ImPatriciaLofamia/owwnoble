import Layout from "@/components/Layout";
import SkillCard from "@/components/SkillCard";
import { SiJavascript, SiTypescript, SiReact, SiNextdotjs } from "react-icons/si";

export default function Home() {
  return (
    <Layout>
      <div>
      on edit
      </div>
      <div className=" flex grid-row space-x-5 justify-center">
        <SkillCard>
          <div className="">
            <h1 className="text-2xl font-bold">JAVASCRIPT</h1>
            <span className="flex justify-center"><SiJavascript size={50}/></span>
          </div>
        </SkillCard>
        <SkillCard>
          <div className="">
            <h1 className="text-2xl font-bold">TYPESCRIPT</h1>
            <span className="flex justify-center"><SiTypescript size={50}/></span>
          </div>
        </SkillCard>
        <SkillCard>
          <div className="">
            <h1 className="text-2xl font-bold">REACT/REACT NATIVE</h1>
            <span className="flex justify-center"><SiReact size={50}/></span>
          </div>
        </SkillCard>
        <SkillCard>
          <div className="">
            <h1 className="text-2xl font-bold">NEXT JS</h1>
            <span className="flex justify-center"><SiNextdotjs size={50}/></span>
          </div>
        </SkillCard>
      </div>
    </Layout>
  );
}
