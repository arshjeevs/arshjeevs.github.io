'use client';

type ProjectCardProps = {
  href: string;
  title: string;
  description: string;
  githubHref: string;
};

function ProjectCard({ href, title, description, githubHref }: ProjectCardProps) {
  const openGitHub = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(githubHref, '_blank', 'noopener,noreferrer');
  };
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block border border-[#27272a] rounded-lg p-4 mb-2 bg-[#18181b] hover:bg-[#232323] transition-colors focus:outline-none focus:ring-2 focus:ring-[#1e1e1e]"
      tabIndex={0}
      aria-label={`Open project: ${title}`}
    >
      <div className="flex items-center justify-between mb-1">
        <span className="font-figtree text-lg text-white font-semibold">{title}</span>
        <button
          onClick={openGitHub}
          className="ml-2 text-gray-400 hover:text-white transition-colors"
          aria-label="GitHub"
          tabIndex={-1}
          type="button"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github" aria-hidden="true"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
        </button>
      </div>
      <div className="text-gray-400 text-sm">{description}</div>
    </a>
  );
}

export default ProjectCard;
