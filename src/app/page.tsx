import Link from "next/link";
import Image from "next/image";
import HomeHeading from "@/components/HomeHeading";
import HomeSubHeading from "@/components/HomeSubHeading";


export default function Home() {
  return (
    <div className="hero-overlay bg-opacity-80">
      <div className="relative hero min-h-screen">
        <Image
          className="absolute top-0 left-0 object-cover w-full h-full"
          src="/hero.png"
          alt="Descriptive text"
          width={1920}
          height={1080}
        />
        <div className="relative hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <HomeHeading title="Countries" />
<HomeSubHeading title = 'Discover the world and it&rsquo;s countries' iconClass = 'fas fa-globe-americas' />
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
