/** @type {import('next').NextConfig} */
const NextFederationPlugin = require('@module-federation/nextjs-mf');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
    webpack(config, options) {
        const { isServer } = options;
        config.plugins.push(
            new NextFederationPlugin({
                name: 'remote1',
                filename: 'static/chunks/remoteEntry.js',
                exposes: {
                    './recentClients': './components/RecentClients.js',
                    './recentActivity': './components/RecentActivityTable.js',
                    './stats': './components/Stats.js',
                    './secondNav': './components/SecondNav.js',
                    './header': './components/Header.js',
                },
            })
        );

        return config;
    },
}

module.exports = nextConfig
