/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cf.bstatic.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "r-xx.bstatic.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
