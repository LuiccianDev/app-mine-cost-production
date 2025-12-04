import Image from "next/image";

export default function About() {
  return (
    <section className=" min-h-screen flex items-center py-10">
      <div className="container mx-auto px-4 sm:px-8 w-full">
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-2xl font-light">about.</h2>
        </div>

        <div className="mb-8">
          <p className="text-4xl font-light leading-tight max-w-3xl">
            I collaborate with businesses of all sizes worldwide, using the
            latest technologies. My designs have also earned multiple awards.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-12 lg:pl-40 xl:pl-80">
          <div className="relative w-full max-w-sm">
            <div className="aspect-4/5 bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/img/logo.webp"
                alt="About"
                width={350}
                height={467}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>

          <div className="max-w-xl space-y-3">
            <p className="text-xl sm:text-2xl leading-relaxed text-gray-700">
              I&apos;m dedicated to crafting beautiful and highly functional
              designs that seamlessly align with my clients&apos; unique needs
              and long-term goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
