/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
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
