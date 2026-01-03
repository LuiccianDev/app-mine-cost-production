import Image from 'next/image'

export default function About() {
  return (
    <section className="flex min-h-screen items-center py-10">
      <div className="container mx-auto w-full px-4 sm:px-8">
        <div className="mb-6 flex items-start justify-between">
          <h2 className="text-2xl font-light">about.</h2>
        </div>

        <div className="mb-8">
          <p className="max-w-3xl text-4xl leading-tight font-light">
            I collaborate with businesses of all sizes worldwide, using the latest technologies. My
            designs have also earned multiple awards.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-8 lg:flex-row lg:gap-12 lg:pl-40 xl:pl-80">
          <div className="relative w-full max-w-sm">
            <div className="aspect-4/5 overflow-hidden rounded-lg bg-gray-200">
              <Image
                src="/img/logo.webp"
                alt="About"
                width={350}
                height={467}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>

          <div className="max-w-xl space-y-3">
            <p className="text-xl leading-relaxed text-gray-700 sm:text-2xl">
              I&apos;m dedicated to crafting beautiful and highly functional designs that seamlessly
              align with my clients&apos; unique needs and long-term goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
