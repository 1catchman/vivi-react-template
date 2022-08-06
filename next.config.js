/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'www.w3schools.com',
      'avatars.mds.yandex.net',
      'pbs.twimg.com'
    ]
  }
};

module.exports = nextConfig;
