/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'd205bpvrqc9yn1.cloudfront.net',
                port: '',
                pathname: '/**',
            }
            ]
    }
}

module.exports = nextConfig