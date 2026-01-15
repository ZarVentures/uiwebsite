/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Prefer fixing type errors rather than ignoring them; keeping this for now
    // but consider setting this to false once the codebase is clean.
    ignoreBuildErrors: true,
  },
  images: {
    // Enable Next.js image optimization for better performance on Amplify
    // (all images are served from the same domain).
    formats: ["image/avif", "image/webp"],
  },
}

export default nextConfig
