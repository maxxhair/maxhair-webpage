const nextConfig = {
  images: {
    domains: ["backend.maxxhairextensions.com"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "192.168.50.22",
        port: "3008",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "fastly.picsum.photos",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "backend.maxxhairextensions.com",
        pathname: "/**"
      },
      {
        protocol: "http",
        hostname: "192.168.50.184",
        port: "3008",
        pathname: "/**"
      }
    ]
  }
};

module.exports = nextConfig;
