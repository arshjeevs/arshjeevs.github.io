import Image from "next/image";



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
            aria-label="Harshan&apos;s GitHub"
            draggable={false}
            style={{ userSelect: "none" }}
          >
            <Image
              alt="Harshan&apos;s profile"
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
          I&apos;m <span className="text-white font-medium">Harshan</span>, a 19-year-old developer and student at NIT Calicut, currently trying to balance deep learning models and deep sleep (the second one&apos;s a work in progress).
        </p>
        <p>
          I love building things—from scratch neural networks and language models to full-stack apps and FPGA-powered projects. I dabble in both low-level systems and high-level ML, because why not suffer from both ends?
        </p>
        <p>
          When I&apos;m not coding, you&apos;ll find me binge-watching tech videos, obsessing over clean code, playing chess, or just vibing to lo-fi while pretending to be productive.
        </p>
        <p>
          Always curious, always experimenting—and maybe one day, my friends will stop asking me to &quot;fix the Wi-Fi&quot; just because I study engineering.
        </p>
      </div>
    </section>
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
      <p className="text-gray-400 mb-4">These are the technologies I&apos;ve learned and worked with. This list is constantly evolving as I continue to learn and grow as a developer.</p>
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

type SkillBadgeProps = {
  icon: string;
  label: string;
};

function SkillBadge({ icon, label }: SkillBadgeProps) {
  return (
    <button
      type="button"
      tabIndex={0}
      aria-label={label}
      className="flex items-center bg-[#18181b] border border-[#27272a] rounded-lg px-3 py-2 text-white font-medium text-xs gap-2 shadow transition hover:border-[#5aad62] focus:outline-none"
    >
      <Image src={icon} alt={`${label} icon`} width={16} height={16} className="w-4 h-4" style={{ color: 'transparent' }} />
      <span>{label}</span>
    </button>
  );
}

function Footer() {
  return (
    <footer className="w-full py-6 mt-12 flex justify-center items-center border-t border-[#232323] text-gray-500 text-sm">
      <span>
        © {new Date().getFullYear()} Harshan Jeevanantham. Built with Next.js &amp; Tailwind CSS.
        <a href="https://github.com/arshjeevs" target="_blank" rel="noopener noreferrer" className="ml-2 underline hover:text-gray-300">GitHub</a>
      </span>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-[#171717] flex flex-col justify-center items-center">
      <div className="max-w-3/8 pt-12 w-full flex-1">
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
      <Footer />
    </div>
  );
}
