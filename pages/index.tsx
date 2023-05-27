import Layout from "@/components/Layout";
import SkillCard from "@/components/SkillCard";
import { skills } from "@/libs/data";

export default function Home() {
  return (
    <Layout>
      <div className="space-y-8">
        <div className="w-1/2">
          <label
            className={`sm:text-2xl text-2xl font-bold mb-6 w-full sm:w-2/3 
        `}
          >
            Hello, I am Patricia Lofamia. I am a Frontend Developer.
          </label>
        </div>
        <button className="border-2 shadow-sm w-1/3"> About me</button>

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
