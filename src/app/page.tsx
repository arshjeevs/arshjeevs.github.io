import Image from "next/image";

function Header() {
  return (
    <header className="flex justify-between items-center w-full pt-8 px-12">
      <span className="text-gray-200 font-mono text-lg">IN 01:42</span>
      <span className="text-gray-400 flex items-center gap-1">
        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" className="inline-block"><circle cx="12" cy="12" r="10" stroke="#A3A3A3" strokeWidth="2"/></svg>
        Mumbai, India
      </span>
    </header>
  );
}

function ProfileCard() {
  return (
    <section className="flex flex-col items-start mt-8">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center overflow-hidden">
          <a
            href="https://github.com/arshjeevs"
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center overflow-hidden transition-transform duration-200 hover:scale-[1.04] focus:scale-[1.04]"
            tabIndex={0}
            aria-label="Harshan's GitHub"
            draggable={false}
            style={{ userSelect: "none" }}
          >
            <Image
              alt="Harshan's profile"
              src="/Photo.png"
              width={80}
              height={80}
              className="object-cover w-16 h-16 md:w-20 md:h-20 rounded-full pointer-events-none select-none"
              draggable={false}
              style={{ color: "transparent" }}
            />
          </a>
        </div>
        <div>
          <h1 className="font-doto font-bold tracking-wider text-[26px] leading-8 text-[#ffffff]">
            Harshan
          </h1>
          <p className="mt-1 font-jetbrains-mono text-sm text-[#8ab4f8] text-left font-normal tracking-wider">
            <a
              href="https://twitter.com/arshjeevs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors duration-300 cursor-pointer"
            >
              @arshjeevs
            </a>
          </p>
        </div>
      </div>
      <div
        className="text-left mt-4 space-y-2 tracking-wider"
        style={{ wordSpacing: "0.25em" }}
      >
        <p>
          I'm <span className="text-white font-medium">Harshan</span>, a 19-year-old developer and student at NIT Calicut, currently trying to balance deep learning models and deep sleep (the second one's a work in progress).
        </p>
        <p>
          I love building things—from scratch neural networks and language models to full-stack apps and FPGA-powered projects. I dabble in both low-level systems and high-level ML, because why not suffer from both ends?
        </p>
        <p>
          When I'm not coding, you'll find me binge-watching tech videos, obsessing over clean code, playing chess, or just vibing to lo-fi while pretending to be productive.
        </p>
        <p>
          Always curious, always experimenting—and maybe one day, my friends will stop asking me to "fix the Wi-Fi" just because I study engineering.
        </p>
      </div>
    </section>
  );
}

function ActionButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
      <button className="bg-[#232323] text-pink-400 px-6 py-3 rounded-lg flex items-center gap-2 font-medium hover:bg-[#2a2a2a] border border-[#232323]">
        <span className="w-2 h-2 bg-pink-400 rounded-full inline-block"></span>
        Available for new opportunities
        <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M17 8l4 4m0 0l-4 4m4-4H3" stroke="#A3A3A3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
      <button className="bg-[#232323] text-gray-200 px-6 py-3 rounded-lg flex items-center gap-2 font-medium hover:bg-[#2a2a2a] border border-[#232323]">
        <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M12 17v-6m0 0V7m0 4h4m-4 0H8" stroke="#A3A3A3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        Download CV
      </button>
    </div>
  );
}

function ContactLinks() {
  return (
    <div className="flex flex-wrap gap-4 justify-center mt-8">
      <a href="#" className="bg-[#232323] text-gray-200 px-5 py-2 rounded-lg font-medium hover:bg-[#2a2a2a] border border-[#232323]">Email Me</a>
      <a href="#" className="bg-[#232323] text-gray-200 px-5 py-2 rounded-lg font-medium hover:bg-[#2a2a2a] border border-[#232323]">Twitter</a>
      <a href="#" className="bg-[#232323] text-gray-200 px-5 py-2 rounded-lg font-medium hover:bg-[#2a2a2a] border border-[#232323]">GitHub</a>
      <a href="#" className="bg-[#232323] text-gray-200 px-5 py-2 rounded-lg font-medium hover:bg-[#2a2a2a] border border-[#232323]">Linkedin</a>
      <a href="#" className="bg-[#232323] text-gray-200 px-5 py-2 rounded-lg font-medium hover:bg-[#2a2a2a] border border-[#232323]">Peerlist</a>
    </div>
  );
}

function SkillsSection() {
  return (
    <section className="mt-12">
      <h2 className="text-4xl font-mono text-gray-100 mb-2 tracking-widest">Skills <span className="text-gray-500 text-base font-normal ml-2">Which I use/know</span></h2>
      <p className="text-gray-400 mb-4">These are the technologies I've learned and worked with. This list is constantly evolving as I continue to learn and grow as a developer.</p>
      <div className="space-y-4">
        {/* LANGUAGES */}
        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-400 mb-4 uppercase tracking-wider">&lt; Languages /&gt;</h3>
          <div className="flex flex-wrap gap-3">
            <SkillBadge icon="https://megh.me/skills/javascript.svg" label="JavaScript" />
            <SkillBadge icon="https://megh.me/skills/typescript.svg" label="TypeScript" />
            <SkillBadge icon="https://megh.me/skills/c.svg" label="C" />
            <SkillBadge icon="https://megh.me/skills/cpp.svg" label="C++" />
            <SkillBadge icon="https://megh.me/skills/html.svg" label="HTML" />
            <SkillBadge icon="https://megh.me/skills/css.svg" label="CSS" />
          </div>
        </div>
        {/* FRAMEWORKS / LIBRARIES */}
        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-400 mb-4 uppercase tracking-wider">&lt; Frameworks / Libraries /&gt;</h3>
          <div className="flex flex-wrap gap-3">
            <SkillBadge icon="https://megh.me/skills/reactjs.svg" label="React" />
            <SkillBadge icon="https://megh.me/skills/nextjs.svg" label="Next.js" />
            <SkillBadge icon="https://megh.me/skills/expressjs.svg" label="Express.js" />
            <SkillBadge icon="https://megh.me/skills/tailwind.svg" label="TailwindCSS" />
            {/* <SkillBadge icon="https://megh.me/skills/tanstackquery.svg" label="TanStack Query" /> */}
            {/* <SkillBadge icon="https://megh.me/skills/framermotion.svg" label="Framer Motion" /> */}
            {/* <SkillBadge icon="https://megh.me/skills/gsap.svg" label="GSAP" /> */}
          </div>
        </div>
        {/* BACKEND & RUNTIME */}
        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-400 mb-4 uppercase tracking-wider">&lt; Backend & Runtime /&gt;</h3>
          <div className="flex flex-wrap gap-3">
            <SkillBadge icon="https://megh.me/skills/nodejs.svg" label="Node.js" />
          </div>
        </div>
        {/* DATABASE */}
        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-400 mb-4 uppercase tracking-wider">&lt; Database /&gt;</h3>
          <div className="flex flex-wrap gap-3">
            <SkillBadge icon="https://megh.me/skills/mongodb.svg" label="MongoDB" />
          </div>
        </div>
        {/* DEVELOPER TOOLS */}
        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-400 mb-4 uppercase tracking-wider">&lt; Developer Tools /&gt;</h3>
          <div className="flex flex-wrap gap-3">
            <SkillBadge icon="https://megh.me/skills/git.svg" label="Git" />
            <SkillBadge icon="https://megh.me/skills/github.svg" label="GitHub" />
            <SkillBadge icon="https://megh.me/skills/vscode.svg" label="VS Code" />
            <SkillBadge icon="https://megh.me/skills/vercel.svg" label="Vercel" />
            <SkillBadge icon="https://megh.me/skills/postman.svg" label="Postman" />
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillBadge({ icon, label }) {
  return (
    <button
      type="button"
      tabIndex={0}
      aria-label={label}
      className="flex items-center bg-[#18181b] border border-[#27272a] rounded-lg px-3 py-2 text-white font-medium text-xs gap-2 shadow transition hover:border-[#5aad62] focus:outline-none"
    >
      <img src={icon} alt={`${label} icon`} className="w-4 h-4" style={{ color: 'transparent' }} />
      <span>{label}</span>
    </button>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-[#171717] flex justify-center items-center">
      <div className="max-w-3/8 pt-12">
        <main className="flex flex-col items-center justify-center">
          <ProfileCard/>
          {/* <ActionButtons /> */}
          <div className="mt-8 w-full flex flex-col items-center">
            <span className="text-gray-300 mb-2">Where to find me (<span className="italic">digitally</span>) if you wish to</span>
            <ContactLinks />
          </div>
          <SkillsSection />
        </main>
      </div>
    </div>
  );
}
