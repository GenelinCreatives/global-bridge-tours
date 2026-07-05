const WhyUsSection = () => {
  return (
    <section className="bg-white p-6 sm:p-8 lg:p-10 grid place-items-center gap-5 lg:gap-2 lg:h-[75svh]">
      <div className="grid place-items-center text-center">
        <div className="w-10 h-px bg-gold mb-3" />
        <h3 className="text-gold font-poppins text-sm lg:text-base tracking-wide uppercase">
          A few reasons
        </h3>
        <h1 className="font-bigB text-navy text-xl lg:text-2xl">
          Why people choose us
        </h1>
      </div>
      <article>
        <ol className="list-none grid sm:grid-cols-2 lg:grid-cols-3 justify-center gap-8">
          <li className="flex">
            <span className="text-gold flex">
              <span className="font-poppins font-semibold">01</span>
              <span className="text-gray-800 mx-1 lg:mx-2">
                <span className="lg:hidden text-gold font-semibold">.</span>
                <span className="hidden lg:inline-block">———</span>
              </span>
            </span>
            <span className="text-gray-800 font-poppins">
              <h4 className="mb-2 font-semibold">
                We know Kenya, and we know the world
              </h4>
              <p className="text-sm text-gray-700 font-poppins">
                Local insight into what Kenyan travelers actually need, paired
                with contacts stretched across dozens of countries.
              </p>
            </span>
          </li>

          <li className="flex">
            <span className="text-gold flex">
              <span className="font-poppins font-semibold">02</span>
              <span className="text-gray-800 mx-1 lg:mx-2">
                <span className="lg:hidden text-gold font-semibold">.</span>
                <span className="hidden lg:inline-block">———</span>
              </span>
            </span>
            <span className="text-gray-800 font-poppins">
              <h4 className="mb-2 font-semibold">Doors already open</h4>
              <p className="text-sm text-gray-700 font-poppins">
                Long-standing relationships with airlines, consulates,
                employers, and schools mean fewer roadblocks for you.
              </p>
            </span>
          </li>

          <li className="flex">
            <span className="text-gold flex">
              <span className="font-poppins font-semibold">03</span>
              <span className="text-gray-800 mx-1 lg:mx-2">
                <span className="lg:hidden text-gold font-semibold">.</span>
                <span className="hidden lg:inline-block">———</span>
              </span>
            </span>
            <span className="text-gray-800 font-poppins">
              <h4 className="mb-2 font-semibold">A real person, not a queue</h4>
              <p className="text-sm text-gray-700 font-poppins">
                One consultant sees your case through from first question to
                final booking or approval.
              </p>
            </span>
          </li>

          <li className="flex">
            <span className="text-gold flex">
              <span className="font-poppins font-semibold">04</span>
              <span className="text-gray-800 mx-1 lg:mx-2">
                <span className="lg:hidden text-gold font-semibold">.</span>
                <span className="hidden lg:inline-block">———</span>
              </span>
            </span>
            <span className="text-gray-800 font-poppins">
              <h4 className="mb-2 font-semibold">A track record you can check</h4>
              <p className="text-sm text-gray-700 font-poppins">
                Visas approved, careers launched abroad, and trips that went
                exactly as planned — ask around.
              </p>
            </span>
          </li>

          <li className="flex">
            <span className="text-gold flex">
              <span className="font-poppins font-semibold">05</span>
              <span className="text-gray-800 mx-1 lg:mx-2">
                <span className="lg:hidden text-gold font-semibold">.</span>
                <span className="hidden lg:inline-block">———</span>
              </span>
            </span>
            <span className="text-gray-800 font-poppins">
              <h4 className="mb-2 font-semibold">One call covers it all</h4>
              <p className="text-sm text-gray-700 font-poppins">
                Visas, work placements, school applications, travel plans —
                no need to juggle five different providers.
              </p>
            </span>
          </li>

          <li className="flex">
            <span className="text-gold flex">
              <span className="font-poppins font-semibold">06</span>
              <span className="text-gray-800 mx-1 lg:mx-2">
                <span className="lg:hidden text-gold font-semibold">.</span>
                <span className="hidden lg:inline-block">———</span>
              </span>
            </span>
            <span className="text-gray-800 font-poppins">
              <h4 className="mb-2 font-semibold">We answer the phone</h4>
              <p className="text-sm text-gray-700 font-poppins">
                Quick responses and straight answers, so you're never left
                guessing where things stand.
              </p>
            </span>
          </li>
        </ol>
      </article>
    </section>
  )
}
export default WhyUsSection