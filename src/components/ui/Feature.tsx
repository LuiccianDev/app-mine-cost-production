import Image from "next/image";

export default function Products() {
  return (
    <section className="min-h-screen flex items-center py-16">
      <div className="container mx-auto px-8 w-full">
        <div className="mb-12">
          <h2 className="text-2xl  font-light mb-4">feature.</h2>
          <p className="text-4xl text-gray-600 max-w-md">
            Specialized tools for mining calculations with intuitive interface
            and accurate real-time results.
          </p>
        </div>

        <div className="space-y-16 md:space-y-24">
          <div className="flex items-center gap-8 md:gap-12">
            <div className="relative w-full max-w-3xl">
              <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/img/mockup1.webp"
                  alt="Mockup 1"
                  width={600}
                  height={800}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="max-w-2xl space-y-3 text-xl pl-20">
              <h3 className=" font-light text-gray-900">Accurate Calculations</h3>
              <p className=" text-gray-600 leading-relaxed">
                Intuitive interface to perform drilling pattern, blasting,
                and operational cost calculations with real-time results.
              </p>
            </div>
          </div>

          <div className="flex flex-row-reverse items-center gap-8 md:gap-12">
            <div className="relative w-full max-w-3xl">
              <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/img/mockup2.webp"
                  alt="Mockup 2"
                  width={600}
                  height={800}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="max-w-2xl space-y-3 text-xl pr-20">
              <h3 className=" font-light text-gray-900">Easy Export</h3>
              <p className=" text-gray-600 leading-relaxed">
                Generate professional PDF reports with all your calculations and
                parameters to share with your team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
