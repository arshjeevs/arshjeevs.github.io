import Image from "next/image";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  return (
    <section className="max-w-4xl mt-8">
      <div className="text-left mb-8 border-t border-[#27272a] pt-6">
        <p className="text-gray-400">Here are some of my <span className="text-white font-medium">Projects</span></p>
      </div>
      <div className="space-y-10">
        <ProjectCard
          href="https://github.com/arshjeevs/EED-ADHD"
          imgSrc="/vercel.svg"
          imgAlt="EEG-based ADHD Detection System"
          title="EEG-based ADHD Detection System"
          githubHref="https://github.com/arshjeevs/EED-ADHD"
          description={
            "Hybrid CNN-LSTM model for ADHD detection from EEG data, achieving 93% accuracy with advanced signal processing."
          }
        />
        <ProjectCard
          href="https://github.com/arshjeevs/Sorting-Visualizer"
          imgSrc="/next.svg"
          imgAlt="Algorithm Visualization Platform"
          title="Algorithm Visualization Platform"
          githubHref="https://github.com/arshjeevs/Sorting-Visualizer"
          description={
            "Interactive visualizer for sorting algorithms with real-time animation and comparison features."
          }
        />
        <ProjectCard
          href="https://github.com/arshjeevs/Hack_PY_App"
          imgSrc="/window.svg"
          imgAlt="PDF Document Intelligence System"
          title="PDF Document Intelligence System"
          githubHref="https://github.com/arshjeevs/Hack_PY_App"
          description={
            "RAG system for semantic PDF search and Q&A using transformers and FAISS vector database."
          }
        />
      </div>
    </section>
  );
};

export default ProjectsSection; 