import Link from "next/link";

export default function Home() {
  return (
    <div className="hero-overlay bg-opacity-80">
      <div className="relative hero min-h-screen">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 object-cover w-full h-full"
          src="/earth2.mp4"
        ></video>
        <div className="relative hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-headline text-stroke-black">
             Countries
            </h1>
            <p className="mb-5 text-2xl text-headline">
                Discover the world and it&rsquo;s countries
            </p>
            <Link href="/countries">
              <button
                type="button"
                className="btn btn-primary bg-button text-black hover:text-headline hover:bg-background"
              >
                Search Countries
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
