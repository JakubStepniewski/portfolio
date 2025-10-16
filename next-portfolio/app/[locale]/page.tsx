import AnimatedSection from "./components/AnimatedSection";
import ExperienceItem from "./components/ExperienceItem";
import LocaleSwitcher from "./components/LocaleSwitcher";
import SkillBar from "./components/SkillBar";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <div className="bg-[#09090B] min-h-screen bg-[radial-gradient(circle,_#222_1px,_transparent_1px)] [background-size:20px_20px] p-2 md:px-100 px-20 h-auto">
      {/* NAVBAR */}

      <div className="flex justify-between p-5 text-white bg-zinc-950/30 backdrop-blur-md sticky top-0 z-2 rounded-2xl">
        <div>
          <a className="font-bold text-2xl">{t("title")}</a>
        </div>
        <div className="flex gap-10 items-center">
          <a>About</a>
          <a>Skills</a>
          <a>Experience</a>
          <a>Tech stack</a>
          <a>Projects</a>
          <a>Contact</a>
          <LocaleSwitcher />
        </div>
      </div>

      {/* PROFILE */}
      <AnimatedSection>
        <div className=" bg-zinc-900/0 fade-in mt-30 flex justify-between rounded-2xl p-10 text-white">
          {/* DESCRIPTION */}
          <div className="w-150">
            <div>
              <a className="text-5xl font-bold">Hi, I'm Jakub Stępniewski</a>
            </div>
            <div className="mt-5">
              <a className="text-2xl">
                A passionate frontend developer with a knack for creating
                stunning and user-friendly web applications.
              </a>
            </div>
            <div className="mt-5">
              <a className="text-2xl">
                With expertise in React, Next.js, and modern web technologies, I
                bring ideas to life through clean and efficient code.
              </a>
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
              <a className="text-4xl font-bold">About Me</a>
            </div>
            <div className="mt-5">
              <a className="text-2xl">
                I'm a dedicated frontend developer with a passion for crafting
                visually appealing and user-friendly web applications. My
                journey in web development began with a fascination for design
                and a desire to create seamless digital experiences.
              </a>
            </div>
            <div className="mt-5">
              <a className="text-2xl">
                Over the years, I've honed my skills in HTML, CSS, and
                JavaScript, and have become proficient in modern frameworks like
                React and Next.js. I thrive on challenges and enjoy
                collaborating with cross-functional teams to bring innovative
                ideas to life.
              </a>
            </div>
            <div className="mt-5">
              <a className="text-2xl">
                When I'm not coding, you can find me exploring the latest tech
                trends, contributing to open-source projects, or indulging in my
                love for photography and travel.
              </a>
            </div>
          </div>
        </div>
      </AnimatedSection>
      {/* SPACER */}
      <div className="h-1 rounded-full my-30 m-10 bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-900"></div>
      {/* SKILLS */}
      <AnimatedSection>
        <div className=" bg-zinc-900/0 fade-in mt-30 flex justify-between rounded-2xl p-10 text-white">
          <div className="text-4xl">Skills</div>
        </div>
        <div className="flex flex-col m-10 mt-0 gap-7">
          <div className="flex justify-between">
            <SkillBar label="HTML" value={95} />
            <SkillBar label="HTML" value={95} />
          </div>
          <div className="flex justify-between">
            <SkillBar label="HTML" value={95} />
            <SkillBar label="HTML" value={95} />
          </div>
          <div className="flex justify-between">
            <SkillBar label="HTML" value={95} />
            <SkillBar label="HTML" value={95} />
          </div>
          <div className="flex justify-between">
            <SkillBar label="HTML" value={95} />
            <SkillBar label="HTML" value={95} />
          </div>
          <div className="flex justify-between">
            <SkillBar label="HTML" value={95} />
            <SkillBar label="HTML" value={95} />
          </div>
          <div className="flex justify-between">
            <SkillBar label="HTML" value={95} />
            <SkillBar label="HTML" value={95} />
          </div>
        </div>
      </AnimatedSection>
      {/* SPACER */}
      <div className="h-1 rounded-full my-30 m-10 bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-900"></div>
      {/* EXPERIENCE */}
      <AnimatedSection>
        <div>
          <div className=" bg-zinc-900/0 fade-in mt-30 justify-between rounded-2xl p-10 text-white">
            <div className="text-4xl">Experience</div>
            <div className="mt-10 flex flex-col gap-10">
              <ExperienceItem
                title="Leader Student"
                organization="GIAIC (Governor Initiative AI & Computing)"
                organizationLink="https://www.giaic.ai"
                startDate="September 2024"
                endDate="Present"
                location="Karachi, Pakistan"
                description="Promoted to Leader Student based on exceptional performance and contributions. Mentoring fellow students, helping with complex coding problems, and mastering Python and AI development in Quarter 3."
              />
              <ExperienceItem
                title="Leader Student"
                organization="GIAIC (Governor Initiative AI & Computing)"
                organizationLink="https://www.giaic.ai"
                startDate="September 2024"
                endDate="Present"
                location="Karachi, Pakistan"
                description="Promoted to Leader Student based on exceptional performance and contributions. Mentoring fellow students, helping with complex coding problems, and mastering Python and AI development in Quarter 3."
              />
              <ExperienceItem
                title="Leader Student"
                organization="GIAIC (Governor Initiative AI & Computing)"
                organizationLink="https://www.giaic.ai"
                startDate="September 2024"
                endDate="Present"
                location="Karachi, Pakistan"
                description="Promoted to Leader Student based on exceptional performance and contributions. Mentoring fellow students, helping with complex coding problems, and mastering Python and AI development in Quarter 3."
              />
            </div>
          </div>
        </div>
      </AnimatedSection>
      {/* SPACER */}
      <div className="h-1 rounded-full my-30 m-10 bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-900"></div>
      {/* EDUCATION */}
      <AnimatedSection>
        <div>
          <div className=" bg-zinc-900/0 fade-in mt-30 justify-between rounded-2xl p-10 text-white">
            <div className="text-4xl">Education</div>
            <div className="mt-10 flex flex-col gap-10">
              <ExperienceItem
                title="Leader Student"
                organization="GIAIC (Governor Initiative AI & Computing)"
                organizationLink="https://www.giaic.ai"
                startDate="September 2024"
                endDate="Present"
                location="Karachi, Pakistan"
                description="Promoted to Leader Student based on exceptional performance and contributions. Mentoring fellow students, helping with complex coding problems, and mastering Python and AI development in Quarter 3."
              />
              <ExperienceItem
                title="Leader Student"
                organization="GIAIC (Governor Initiative AI & Computing)"
                organizationLink="https://www.giaic.ai"
                startDate="September 2024"
                endDate="Present"
                location="Karachi, Pakistan"
                description="Promoted to Leader Student based on exceptional performance and contributions. Mentoring fellow students, helping with complex coding problems, and mastering Python and AI development in Quarter 3."
              />
              <ExperienceItem
                title="Leader Student"
                organization="GIAIC (Governor Initiative AI & Computing)"
                organizationLink="https://www.giaic.ai"
                startDate="September 2024"
                endDate="Present"
                location="Karachi, Pakistan"
                description="Promoted to Leader Student based on exceptional performance and contributions. Mentoring fellow students, helping with complex coding problems, and mastering Python and AI development in Quarter 3."
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
          <div className="text-4xl">Languages</div>
        </div>
        <div className="flex flex-col m-10 mt-0 gap-7">
          <div className="flex justify-between">
            <SkillBar label="HTML" value={95} />
            <SkillBar label="HTML" value={95} />
          </div>
          <div className="flex justify-between">
            <SkillBar label="HTML" value={95} />
          </div>
        </div>
      </AnimatedSection>
      {/* SPACER */}
      <div className="h-1 rounded-full my-30 m-10 bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-900"></div>
      {/* PROJECTS */}
      <AnimatedSection>
        <div className=" bg-zinc-900/0 fade-in mt-30 flex justify-between rounded-2xl p-10 text-white">
          <div className="text-4xl">Projects</div>
        </div>
      </AnimatedSection>

      {/* SPACER */}
      <div className="h-1 rounded-full my-30 m-10 bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-900"></div>
      {/* CONTACT */}
      <AnimatedSection>
        <div className=" bg-zinc-900/0 fade-in mt-30 flex justify-between rounded-2xl p-10 text-white">
          <div className="text-4xl">Contact</div>
        </div>
        <div className="flex flex-col m-10 mt-0 gap-7 mb-20">
          <a className="text-2xl text-white">
            Feel free to reach out for collaborations or just a friendly chat!
          </a>
          <div className="flex">
            <div>siema</div>
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
