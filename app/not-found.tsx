import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="text-center space-y-6 max-w-md">
        <h1 className="text-6xl font-bold text-[#39FF14]">404</h1>
        <h2 className="text-2xl font-semibold">Page Not Found</h2>
        <p className="text-[#A7ACB8]">The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-[#39FF14] text-[#05050A] rounded-md font-semibold hover:bg-[#2dd40e] transition-colors"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
