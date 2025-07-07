import Image from "next/image";

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

const SkillsSection = () => {
  return (
    <section className="mt-12">
      <div className="space-y-4">
        {/* LANGUAGES */}
        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-400 mb-4 uppercase tracking-wider"> Skills</h3>
          <p className="text-gray-400 mb-4">These are the technologies I&apos;ve learned and worked with. This list is constantly evolving as I continue to learn and grow as a developer.</p>
        </div>
      </div>
      <div className="space-y-4">
        {/* LANGUAGES */}
        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-400 mb-4 uppercase tracking-wider"> Languages</h3>
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
          <h3 className="text-sm font-medium text-gray-400 mb-4 uppercase tracking-wider"> Frameworks / Libraries</h3>
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
          <h3 className="text-sm font-medium text-gray-400 mb-4 uppercase tracking-wider"> Backend & Runtime </h3>
          <div className="flex flex-wrap gap-3">
            <SkillBadge icon="https://megh.me/skills/nodejs.svg" label="Node.js" />
          </div>
        </div>
        {/* DATABASE */}
        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-400 mb-4 uppercase tracking-wider"> Database</h3>
          <div className="flex flex-wrap gap-3">
            <SkillBadge icon="https://megh.me/skills/mongodb.svg" label="MongoDB" />
          </div>
        </div>
        {/* DEVELOPER TOOLS */}
        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-400 mb-4 uppercase tracking-wider"> Developer Tools</h3>
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
};

export default SkillsSection; 