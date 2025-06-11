import Link from "next/link";
import Image from "next/image";
const Stats = () => {
  return (
    <>
      <section className="dark:bg-gray-dark bg-white">
        <div className="mx-auto max-w-7xl gap-16 px-6 py-20 md:flex md:items-center md:justify-between lg:px-8">
          {/* Left: Image */}
          <div className="mb-10 md:mb-0 md:w-1/2">
            <Image
              src="/images/stats/image.avif" // Replace with actual path
              alt="People working on laptops"
              className="w-full rounded-xl object-cover shadow-lg"
            />
          </div>

          {/* Right: Text & Stats */}
          <div className="space-y-6 md:w-1/2">
            <p className="text-primary text-sm font-semibold">
              Our Track Record
            </p>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
              Proven impact backed by real results
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-500">
              {`Aevino Solutions empowers global businesses through scalable
              technology and deep industry expertise. Our numbers reflect the
              trust we've earned and the value we deliver across every project.`}
            </p>

            <div className="grid grid-cols-2 gap-6 border-t border-gray-200 pt-6 dark:border-gray-700">
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  120+
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Projects Delivered
                </p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  21+
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Global Clients
                </p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  99.9%
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Uptime for Deployed Apps
                </p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  5+
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Industries Served
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Stats;
