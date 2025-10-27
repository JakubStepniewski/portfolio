import AnimatedSection from "./components/AnimatedSection";
import ExperienceItem from "./components/ExperienceItem";
import LocaleSwitcher from "./components/LocaleSwitcher";
import SkillBar from "./components/SkillBar";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("HomePage");
  const e = useTranslations("Education");
  const exp = useTranslations("Experience");
  const l = useTranslations("languageNames");
  return (
    <div className="bg-[#09090B] min-h-screen bg-[radial-gradient(circle,_#222_1px,_transparent_1px)] [background-size:20px_20px] p-2 2xl:px-100 md:px-40 h-auto">
      {/* NAVBAR */}

      <div className="flex justify-between p-5 text-white bg-zinc-950/30 backdrop-blur-md sticky top-0 z-2 rounded-2xl">
        <div>
          <a className="font-bold text-2xl">{t("title")}</a>
        </div>
        <div className="flex gap-10 items-center">
          <a>{t("about")}</a>
          <a>{t("skills")}</a>
          <a>{t("education")}</a>
          <a>{t("experience")}</a>
          <a>{t("languages")}</a>
          <a>{t("contact")}</a>
          <LocaleSwitcher />
        </div>
      </div>

      {/* PROFILE */}
      <AnimatedSection>
        <div className=" bg-zinc-900/0 fade-in mt-30 flex justify-between rounded-2xl p-10 text-white">
          {/* DESCRIPTION */}
          <div className="w-150">
            <div>
              <a className="text-5xl font-bold">{t("greeting")}</a>
            </div>
            <div className="mt-5">
              <a className="text-2xl">{t("param1")}</a>
            </div>
            <div className="mt-5">
              <a className="text-2xl">{t("param2")}</a>
            </div>
            {/* SOCIALS */}
            <div className="flex gap-5 mt-5">
              <a
                href=" https://www.linkedin.com/in/jakub-st%C4%99pniewski-5b3b98210/"
                target="_blank"
              >
                <img
                  className="h-10 w-10 hover:scale-110 transition-transform duration-300 rounded-full bg-white border-1 border-white"
                  src="/linkedin.png"
                  alt="LinkedIn"
                />
              </a>
              <a href="github.com/stepniewski" target="_blank">
                <img
                  className="h-10 w-10 hover:scale-110 transition-transform duration-300 rounded-full bg-white border-1 border-white"
                  src="/github.png"
                  alt="GitHub"
                />
              </a>
              <a href="twitter.com/stepniewski_" target="_blank">
                <img
                  className="h-10 w-10 hover:scale-110 transition-transform duration-300 rounded-full bg-white border-1 border-white"
                  src="/twitter.png"
                  alt="Twitter"
                />
              </a>
              <a href="" target="_blank">
                <img
                  className="h-10 w-10 hover:scale-110 transition-transform duration-300 rounded-full bg-white border-1 border-white"
                  src="/phone.png"
                  alt="Facebook"
                />
              </a>
            </div>
          </div>
          {/* PHOTO */}
          <div className="border-4 border-white rounded-full h-70 w-70 overflow-hidden">
            <img
              className=" rounded-full h-70 w-70 object-cover scale-110 hover:scale-100 transition-transform duration-300"
              src="/profilePhoto.jpg"
              alt="Profile Picture"
            />
          </div>
        </div>
      </AnimatedSection>
      {/* SPACER */}
      <div className="h-1 rounded-full my-30 m-10 bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-900"></div>
      {/* ABOUT ME */}

      <AnimatedSection>
        <div className=" bg-zinc-900/0 fade-in mt-30 flex justify-between rounded-2xl p-10 text-white">
          <div className="w-150">
            <div>
              <a className="text-4xl font-bold">{t("about")}</a>
            </div>
            <div className="mt-5">
              <a className="text-2xl">{t("param3")}</a>
            </div>
            <div className="mt-5">
              <a className="text-2xl">{t("param4")}</a>
            </div>
            <div className="mt-5">
              <a className="text-2xl">{t("param5")}</a>
            </div>
          </div>
        </div>
      </AnimatedSection>
      {/* SPACER */}
      <div className="h-1 rounded-full my-30 m-10 bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-900"></div>
      {/* SKILLS */}
      <AnimatedSection>
        <div className=" bg-zinc-900/0 fade-in mt-30 flex justify-between rounded-2xl p-10 text-white">
          <div className="text-4xl">{t("skills")}</div>
        </div>
        <div className="m-10 mt-0 gap-7 grid grid-cols-2 grid-gap-7">
          <SkillBar label="HTML" value={90} />
          <SkillBar label="CSS" value={70} />

          <SkillBar label="JavaScript" value={80} />
          <SkillBar label="TypeScript" value={90} />

          <SkillBar label="React" value={95} />
          <SkillBar label="Next.js" value={85} />

          <SkillBar label="MongoDB" value={80} />
          <SkillBar label="PostgreSQL" value={75} />

          <SkillBar label="Tailwind" value={90} />
          <SkillBar label="Java" value={75} />

          <SkillBar label="Python" value={60} />
          <SkillBar label="C#" value={80} />
        </div>
      </AnimatedSection>
      {/* SPACER */}
      <div className="h-1 rounded-full my-30 m-10 bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-900"></div>

      {/* EDUCATION */}
      <AnimatedSection>
        <div>
          <div className=" bg-zinc-900/0 fade-in mt-30 justify-between rounded-2xl p-10 text-white">
            <div className="text-4xl">{t("education")}</div>
            <div className="mt-10 flex flex-col gap-10">
              <ExperienceItem
                title={e("title1")}
                organization="Technikum nr 4 im. Ryszarda Kaczorowskiego Kielce"
                organizationLink="https://zse-kielce.edu.pl/"
                startDate="2016"
                endDate="2020"
                location={e("locationCity") + ", " + e("locationCountry")}
                description={e("description1")}
              />
              <ExperienceItem
                title={e("title2")}
                organization={e("organization")}
                organizationLink="https://tu.kielce.pl/"
                startDate="2020"
                endDate="2023"
                location={e("locationCity") + ", " + e("locationCountry")}
                description={e("description2")}
              />
              <ExperienceItem
                title={e("title3")}
                organization={e("organization")}
                organizationLink="https://tu.kielce.pl/"
                startDate="2023"
                endDate="2025"
                location={e("locationCity") + ", " + e("locationCountry")}
                description={e("description3")}
              />
            </div>
          </div>
        </div>
      </AnimatedSection>
      {/* SPACER */}
      <div className="h-1 rounded-full my-30 m-10 bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-900"></div>
      {/* EXPERIENCE */}
      <AnimatedSection>
        <div>
          <div className=" bg-zinc-900/0 fade-in mt-30 justify-between rounded-2xl p-10 text-white">
            <div className="text-4xl">{t("experience")}</div>
            <div className="mt-10 flex flex-col gap-10">
              <ExperienceItem
                title={exp("title1")}
                organization={exp("organization1")}
                organizationLink="https://infover.pl/"
                startDate="2023"
                endDate="2023"
                location={e("locationCity") + ", " + e("locationCountry")}
                description={exp("description1")}
              />
              <ExperienceItem
                title={exp("title1")}
                organization={exp("organization2")}
                organizationLink="https://www.giaic.ai"
                startDate="2023"
                endDate="2023"
                location={e("locationCity") + ", " + e("locationCountry")}
                description={exp("description2")}
              />
            </div>
          </div>
        </div>
      </AnimatedSection>
      {/* SPACER */}
      <div className="h-1 rounded-full my-30 m-10 bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-900"></div>
      {/* LANGUEAGES */}
      <AnimatedSection>
        <div className=" bg-zinc-900/0 fade-in mt-30 flex justify-between rounded-2xl p-10 text-white">
          <div className="text-4xl">{t("languages")}</div>
        </div>
        <div className="flex flex-col m-10 mt-0 gap-7">
          <div className="grid grid-cols-2 gap-7">
            <SkillBar label={l("polish")} value={100} />
            <SkillBar label={l("english")} value={90} />
            <SkillBar label={l("german")} value={70} />
          </div>
        </div>
      </AnimatedSection>
      {/* SPACER */}
      <div className="h-1 rounded-full my-30 m-10 bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-900"></div>
      {/* PROJECTS */}
      <AnimatedSection>
        <div className=" bg-zinc-900/0 fade-in mt-30 flex justify-between rounded-2xl p-10 text-white">
          <div className="text-4xl">{t("projects")}</div>
        </div>
        <div className="flex flex-col m-10 mt-0 gap-7 mb-20">
          <a className="text-2xl text-white">{t("projectsSection")}</a>
        </div>
      </AnimatedSection>

      {/* SPACER */}
      <div className="h-1 rounded-full my-30 m-10 bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-900"></div>
      {/* CONTACT */}
      <AnimatedSection>
        <div className=" bg-zinc-900/0 fade-in mt-30 flex justify-between rounded-2xl p-10 text-white">
          <div className="text-4xl">{t("contact")}</div>
        </div>
        <div className="flex flex-col m-10 mt-0 gap-7 mb-20">
          <a className="text-2xl text-white">
            Feel free to reach out for collaborations or just a friendly chat!
          </a>
          <div className="flex">
            <div>hello</div>
            <div className="flex-col">
              <div>
                <a className="text-2xl text-white">Email:</a>
              </div>
              <div>kubastp12@gmai.com</div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
