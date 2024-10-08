import { AboutMe, Service } from "@/components/about";

export default function About() {
  return (
    <>
      <div className="inline-block">
        <h2 className="h2">About Me</h2>
        <div className="h-1 bg-blue-400 rounded-md mt-1 mb-2 w-full"></div>
      </div>
      <AboutMe />
      <Service />
    </>
  );
}
