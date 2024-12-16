import {
  IconType,
  SiAmazons3,
  SiAndroidstudio,
  SiApache,
  SiAsana,
  SiBootstrap,
  SiC,
  SiCelery,
  SiChakraui,
  SiChartdotjs,
  SiCircleci,
  SiCloudinary,
  SiCodecov,
  SiCplusplus,
  SiCss3,
  SiDart,
  SiDatadog,
  SiDjango,
  SiDocker,
  SiExpress,
  SiFastapi,
  SiFlask,
  SiFlutter,
  SiFrappe,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiGnubash,
  SiGooglecloud,
  SiGooglecolab,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiJira,
  SiJupyter,
  SiKubernetes,
  SiLinux,
  SiLua,
  SiMake,
  SiMdx,
  SiMongodb,
  SiMysql,
  SiNeovim,
  SiNestjs,
  SiNextdotjs,
  SiNginx,
  SiNgrok,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiPrecommit,
  SiPrisma,
  SiPython,
  SiPythonanywhere,
  SiRailway,
  SiReact,
  SiRedis,
  SiRender,
  SiSentry,
  SiSocketdotio,
  SiSqlalchemy,
  SiTailwindcss,
  SiThreedotjs,
  SiTravisci,
  SiTrello,
  SiTypescript,
  SiVercel,
  SiVim,
} from '@icons-pack/react-simple-icons';

export interface Tool {
  name: string;
  icon: IconType;
  type:
    | 'Languages'
    | 'Frameworks/Libraries'
    | 'Databases'
    | 'Cloud/DevOps'
    | 'Tools';
}

const tools: Tool[] = [
  // Languages
  {
    name: 'Python',
    icon: SiPython,
    type: 'Languages',
  },
  {
    name: 'C',
    icon: SiC,
    type: 'Languages',
  },
  {
    name: 'C++',
    icon: SiCplusplus,
    type: 'Languages',
  },
  {
    name: 'JavaScript',
    icon: SiJavascript,
    type: 'Languages',
  },
  {
    name: 'TypeScript',
    icon: SiTypescript,
    type: 'Languages',
  },
  {
    name: 'BashScript',
    icon: SiGnubash,
    type: 'Languages',
  },
  {
    name: 'Lua',
    icon: SiLua,
    type: 'Languages',
  },
  {
    name: 'Dart',
    icon: SiDart,
    type: 'Languages',
  },
  {
    name: 'HTML',
    icon: SiHtml5,
    type: 'Languages',
  },
  {
    name: 'CSS',
    icon: SiCss3,
    type: 'Languages',
  },

  // Frameworks/Libraries
  {
    name: 'ReactJS',
    icon: SiReact,
    type: 'Frameworks/Libraries',
  },
  {
    name: 'NextJS',
    icon: SiNextdotjs,
    type: 'Frameworks/Libraries',
  },
  {
    name: 'TailwindCSS',
    icon: SiTailwindcss,
    type: 'Frameworks/Libraries',
  },
  {
    name: 'Bootstrap',
    icon: SiBootstrap,
    type: 'Frameworks/Libraries',
  },
  {
    name: 'Flutter',
    icon: SiFlutter,
    type: 'Frameworks/Libraries',
  },
  {
    name: 'Chakra UI',
    icon: SiChakraui,
    type: 'Frameworks/Libraries',
  },
  {
    name: 'Frappe',
    icon: SiFrappe,
    type: 'Frameworks/Libraries',
  },
  {
    name: 'Django',
    icon: SiDjango,
    type: 'Frameworks/Libraries',
  },
  {
    name: 'Flask',
    icon: SiFlask,
    type: 'Frameworks/Libraries',
  },
  {
    name: 'FastAPI',
    icon: SiFastapi,
    type: 'Frameworks/Libraries',
  },
  {
    name: 'Node.js',
    icon: SiNodedotjs,
    type: 'Frameworks/Libraries',
  },
  {
    name: 'ExpressJS',
    icon: SiExpress,
    type: 'Frameworks/Libraries',
  },
  {
    name: 'NestJS',
    icon: SiNestjs,
    type: 'Frameworks/Libraries',
  },
  {
    name: 'MDX',
    icon: SiMdx,
    type: 'Frameworks/Libraries',
  },
  {
    name: 'Three.js',
    icon: SiThreedotjs,
    type: 'Frameworks/Libraries',
  },
  {
    name: 'GraphQL',
    icon: SiGraphql,
    type: 'Frameworks/Libraries',
  },
  {
    name: 'Socket.io',
    icon: SiSocketdotio,
    type: 'Frameworks/Libraries',
  },
  {
    name: 'Chart.js',
    icon: SiChartdotjs,
    type: 'Frameworks/Libraries',
  },
  {
    name: 'Prisma',
    icon: SiPrisma,
    type: 'Frameworks/Libraries',
  },
  {
    name: 'SQLAlchemy',
    icon: SiSqlalchemy,
    type: 'Frameworks/Libraries',
  },

  // Databases
  {
    name: 'MySQL',
    icon: SiMysql,
    type: 'Databases',
  },
  {
    name: 'PostgreSQL',
    icon: SiPostgresql,
    type: 'Databases',
  },
  {
    name: 'MongoDB',
    icon: SiMongodb,
    type: 'Databases',
  },
  {
    name: 'Redis',
    icon: SiRedis,
    type: 'Databases',
  },

  // Cloud/DevOps
  {
    name: 'Amazon S3',
    icon: SiAmazons3,
    type: 'Cloud/DevOps',
  },
  {
    name: 'Cloudinary',
    icon: SiCloudinary,
    type: 'Cloud/DevOps',
  },
  {
    name: 'Vercel',
    icon: SiVercel,
    type: 'Cloud/DevOps',
  },
  {
    name: 'Render',
    icon: SiRender,
    type: 'Cloud/DevOps',
  },
  {
    name: 'SiRailway',
    icon: SiRailway,
    type: 'Cloud/DevOps',
  },
  {
    name: 'Pyhton Anywhere',
    icon: SiPythonanywhere,
    type: 'Cloud/DevOps',
  },
  {
    name: 'Google Cloud',
    icon: SiGooglecloud,
    type: 'Cloud/DevOps',
  },
  {
    name: 'Google Colab',
    icon: SiGooglecolab,
    type: 'Cloud/DevOps',
  },
  {
    name: 'Docker',
    icon: SiDocker,
    type: 'Cloud/DevOps',
  },
  {
    name: 'Kubernetes',
    icon: SiKubernetes,
    type: 'Cloud/DevOps',
  },
  {
    name: 'Nginx',
    icon: SiNginx,
    type: 'Cloud/DevOps',
  },
  {
    name: 'Apache',
    icon: SiApache,
    type: 'Cloud/DevOps',
  },
  {
    name: 'GitHub Actions',
    icon: SiGithubactions,
    type: 'Cloud/DevOps',
  },
  {
    name: 'Travis',
    icon: SiTravisci,
    type: 'Cloud/DevOps',
  },
  {
    name: 'CircleCI',
    icon: SiCircleci,
    type: 'Cloud/DevOps',
  },
  {
    name: 'Codecov',
    icon: SiCodecov,
    type: 'Cloud/DevOps',
  },
  {
    name: 'PreCommit',
    icon: SiPrecommit,
    type: 'Cloud/DevOps',
  },
  {
    name: 'Datadog',
    icon: SiDatadog,
    type: 'Cloud/DevOps',
  },

  // Tools
  {
    name: 'Git',
    icon: SiGit,
    type: 'Tools',
  },
  {
    name: 'GitHub',
    icon: SiGithub,
    type: 'Tools',
  },
  {
    name: 'Trello',
    icon: SiTrello,
    type: 'Tools',
  },
  {
    name: 'Jira',
    icon: SiJira,
    type: 'Tools',
  },
  {
    name: 'Asana',
    icon: SiAsana,
    type: 'Tools',
  },
  {
    name: 'Neovim',
    icon: SiNeovim,
    type: 'Tools',
  },
  {
    name: 'Android Studio',
    icon: SiAndroidstudio,
    type: 'Tools',
  },
  {
    name: 'Postman',
    icon: SiPostman,
    type: 'Tools',
  },
  {
    name: 'Vim',
    icon: SiVim,
    type: 'Tools',
  },
  {
    name: 'Sentry',
    icon: SiSentry,
    type: 'Tools',
  },
  {
    name: 'Ngrok',
    icon: SiNgrok,
    type: 'Tools',
  },
  {
    name: 'Celery',
    icon: SiCelery,
    type: 'Tools',
  },
  {
    name: 'Linux',
    icon: SiLinux,
    type: 'Tools',
  },
  {
    name: 'Jupyter Notebook',
    icon: SiJupyter,
    type: 'Tools',
  },
  {
    name: 'Make',
    icon: SiMake,
    type: 'Tools',
  },
];

export default tools;
