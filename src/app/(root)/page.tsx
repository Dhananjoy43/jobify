import { JobSearch } from "@/components/shared/job-search";
import Image from "next/image";

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center py-3 px-6 lg:px-40">
            <section className="w-full flex flex-col-reverse md:flex-row items-center md:justify-between gap-10">
                <div className="flex flex-col w-full md:w-2/3">
                    <h1 className="text-3xl lg:text-6xl font-extrabold ">
                        Find your dream job on Jobify
                    </h1>
                    <p className="font-medium text-primary mt-6">
                        The ultimate destination for job seekers and employers
                        alike. Whether you&apos;re on the hunt for your dream
                        job or seeking talented individuals to join your team.
                    </p>
                    <JobSearch />
                </div>
                <div className="flex object-contain">
                    <Image
                        src="/images/hero.svg"
                        alt="Job Search"
                        width={700}
                        height={700}
                    />
                </div>
            </section>

            {/* Sponsers */}
            <section className="w-full flex items-center justify-between">
                <Image
                    src={"/images/Airbnb.svg"}
                    width={150}
                    height={80}
                    alt="airbnb logo"
                />
                <Image
                    src={"/images/Binance.svg"}
                    width={150}
                    height={80}
                    alt="airbnb logo"
                />
                <Image
                    src={"/images/Coinbase.svg"}
                    width={150}
                    height={80}
                    alt="airbnb logo"
                />
                <Image
                    src={"/images/Dropbox.svg"}
                    width={150}
                    height={80}
                    alt="airbnb logo"
                />
            </section>
        </div>
    );
}
