import { ArrowRightAlt } from '@mui/icons-material';
import fs from 'fs';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';
import Link from 'next/link';
import path from 'path';
import readingTime from 'reading-time';

import Time from '../shared/time';

interface Article {
  title: string;
  description: string;
  date: string;
  image: string;
  tags: string[];
  slug: string;
  featured: boolean;
  readingTime: string;
}

const FeaturedArticles = () => {
  const articlesDirectory = path.join(process.cwd(), 'data/articles');
  const articleFiles = fs.readdirSync(articlesDirectory);

  const featuredArticles = articleFiles
    .map((filename) => {
      const filePath = path.join(articlesDirectory, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContents);
      const { text: readingTimeText } = readingTime(content);

      return {
        title: data.title,
        description: data.description,
        date: data.date,
        image: data.image,
        tags: data.tags,
        slug: filename.replace(/^\d+-/, '').replace('.mdx', ''),
        featured: data.featured,
        readingTime: readingTimeText,
      } as Article;
    })
    .filter((article) => article.featured);

  return (
    <div id="featured-articles">
      <h2 className="font-bold text-4xl md:text-5xl mb-8">Featured Articles</h2>
      <div className="space-y-10">
        {featuredArticles.map((article, index) => (
          <Link
            passHref
            href={`/blog/${article.slug}`}
            key={index}
            className="flex flex-col md:flex-row gap-8 transform transition duration-300 relative group"
          >
            <div className="absolute inset-0 -m-4 md:-m-6 -z-10 rounded-xl transition duration-300 opacity-0 group-hover:opacity-30 bg-gray-300 dark:bg-gray-700"></div>
            <Image
              src={article.image}
              alt={article.title}
              width={350}
              height={220}
              className="rounded-lg object-cover h-[220px]"
            />
            <div className="text-lg/8">
              <h3 className="font-bold text-3xl mb-4 transition duration-300 group-hover:underline">
                {article.title}
              </h3>
              <MDXRemote source={article.description} />
              <p className="text-sm tracking-wider opacity-70 my-2">
                <Time date={article.date} /> • {article.readingTime}
              </p>
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-muted/20 font-medium p-1 rounded-lg text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
        <Link
          href="/projects"
          className="font-medium hover:text-secondary underline flex items-center gap-2 hover:scale-110 transition-transform duration-200 max-w-fit"
        >
          Read More Articles
          <ArrowRightAlt />
        </Link>
      </div>
    </div>
  );
};

export default FeaturedArticles;
