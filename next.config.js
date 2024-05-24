module.exports = {
  async rewrites() {
    return [
      {
        source: '/basketballstars/:path*',
        destination: '/Vafor_IT-main/basketballstars/:path*',
      },
      {
        source: '/ovo/:path*',
        destination: '/Vafor_IT-main/ovo/:path*',
      },
    ];
  },
};
