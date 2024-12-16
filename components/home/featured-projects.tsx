import { GitHub, Language } from '@mui/icons-material';
import { ArrowRightAlt } from '@mui/icons-material';
import fs from 'fs';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';
import Link from 'next/link';
import path from 'path';

interface Project {
  title: string;
  description: string;
  github: string;
  website: string;
  image: string;
  stack: string[];
  featured: boolean;
}

const FeaturedProjects = () => {
  const projectsDirectory = path.join(process.cwd(), 'data/projects');
  const projectFiles = fs.readdirSync(projectsDirectory);

  const featuredProjects = projectFiles
    .map((filename) => {
      const filePath = path.join(projectsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContents);

      return {
        title: data.title,
        description: data.description,
        github: data.github,
        website: data.website,
        image: data.image,
        stack: data.stack,
        featured: data.featured,
      } as Project;
    })
    .filter((project) => project.featured);

  return (
    <div id="featured-projects">
      <h2 className="font-bold text-4xl md:text-5xl mb-8">Featured Projects</h2>
      <div className="space-y-10">
        {featuredProjects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row md:justify-between"
          >
            <div className="md:max-w-md lg:max-w-lg xl:max-w-xl text-lg/8 space-y-4">
              <h3 className="text-secondary font-bold text-3xl">
                {project.title}
              </h3>
              <MDXRemote source={project.description} />
              <Link
                className="relative block md:hidden"
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={250}
                  className="rounded-lg object-cover h-[250px]"
                />
              </Link>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-muted/20 font-medium p-1 rounded-lg text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex flex-row gap-4 mt-4 text-sm md:text-md">
                <Link
                  href={project.github}
                  className="hover:scale-110 transition-transform duration-200 hover:text-secondary underline flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHub />
                  <span>GitHub</span>
                </Link>
                <Link
                  href={project.website}
                  className="hover:scale-110 transition-transform duration-200 hover:text-secondary underline flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Language />
                  <span>Live Preview</span>
                </Link>
              </div>
            </div>
            <Link
              className="hidden md:block"
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={250}
                className="rounded-lg object-cover h-[250px]"
              />
            </Link>
          </div>
        ))}
        <Link
          href="/projects"
          className="font-medium hover:text-secondary underline flex items-center gap-2 hover:scale-110 transition-transform duration-200 max-w-fit"
        >
          View All Projects
          <ArrowRightAlt />
        </Link>
      </div>
    </div>
  );
};

export default FeaturedProjects;
