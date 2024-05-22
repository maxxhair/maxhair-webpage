const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "192.168.50.22",
        port: "3000",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "fastly.picsum.photos",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "your.production.url",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
