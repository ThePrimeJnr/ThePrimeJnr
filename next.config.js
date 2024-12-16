const withMDX = require('@next/mdx')();

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  async rewrites() {
    return [
      {
        source: '/resume',
        destination:
          'https://docs.google.com/document/d/1vykA1k5T_AK7_p6qdX7EwGwgXlcHDkKeYMlvdMWLNf0/export?usp=sharing&format=pdf',
      },
    ];
  },
};

module.exports = withMDX(nextConfig);
