import Image from "next/image";

const ProfileCard = () => {
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
          Hi, I'm <span className="text-white font-medium">Harshan</span> — B.Tech student at NIT Calicut (CGPA: 9.87/10), AI/ML enthusiast, and part-time bug whisperer. I've built deep learning models that (sometimes) work, wrangled signals, and shipped full-stack apps. 
        </p>
        <p>
          I love Python, PyTorch, React, and cloud tools. Whether it's research or hacking on side projects, or just chasing the next "aha!" moment, I'm all about building things that make a difference (and occasionally break the Wi-Fi).
        </p>
      </div>
    </section>
  );
};

export default ProfileCard; 