/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['demo-alukas.myshopify.com', 'localhost'],
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '3001',
                pathname: '/uploads/**',
            },
        ],
    },
};

export default nextConfig;