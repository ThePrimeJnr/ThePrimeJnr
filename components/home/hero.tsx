import Image from 'next/image';

const Hero = () => {
  return (
    <div id="hero" className="flex flex-col">
      <h1 className="font-bold text-6xl md:text-8xl leading-none ">
        Destiny Saturday
      </h1>
      <h2 className="pt-4 font-bold text-4xl md:text-5xl text-secondary">
        Full Stack Software &amp; DevOps Engineer
      </h2>

      <p className="py-14 max-w-2xl lg:max-w-2xl text-lg/8 md:text-xl/10">
        I&apos;m passionate about 💻 coding scalable systems, 🤖 automating
        workflows, ☁️ cloud infrastructure, and 🤝 collaborative development,
        thriving on adapting to new technologies 🚀.
      </p>
      <div
        id="achievements"
        className="flex md:flex-row flex-col gap-6 md:gap-10 text-md md:text-lg"
      >
        <div className="flex items-center gap-x-2">
          <Image
            src={'/logos/hng.png'}
            alt="HNG Logo"
            width={32}
            height={32}
            className="rounded-lg"
          />
          HNGx Finalist
        </div>
        <div className="flex items-center gap-x-2">
          <Image
            src={'/logos/gitearn.png'}
            alt="GitEarn Logo"
            width={32}
            height={32}
            className="rounded-full"
          />
          Building, Lernza
        </div>
      </div>
    </div>
  );
};

export default Hero;
