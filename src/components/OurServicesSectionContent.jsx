const OurServicesSectionContent = () => {
  return (
    <div className="text-gray-800 font-poppins text-sm flex gap-8 absolute -left-12 -top-36">
      <div className="grid justify-center gap-4 p-8 bg-white border border-gray-100 rounded-lg w-[18svw] h-auto">
        <div className="icon text-gold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-ticket-check-icon lucide-ticket-check w-8 h-8"
          >
            <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
            <path d="m9 12 2 2 4-4" />
          </svg>
        </div>
        <div className="content space-y-2">
          <h3 className="font-bigB text-base">Flights, handled</h3>
          <p className="text-pretty leading-relaxed">
            Great fares on flights near and far, flexible dates, and someone
            to call if plans change mid-journey.
          </p>
        </div>
      </div>

      <div className="grid justify-center gap-4 p-8 bg-white border border-gray-100 rounded-lg w-[18svw] h-auto">
        <div className="icon text-gold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-passport w-8 h-8"
            viewBox="0 0 16 16"
          >
            <path d="M8 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6M6 8a2 2 0 1 1 4 0 2 2 0 0 1-4 0m-.5 4a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z" />
            <path d="M3.232 1.776A1.5 1.5 0 0 0 2 3.252v10.95c0 .445.191.838.49 1.11.367.422.908.688 1.51.688h8a2 2 0 0 0 2-2V4a2 2 0 0 0-1-1.732v-.47A1.5 1.5 0 0 0 11.232.321l-8 1.454ZM4 3h8a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1" />
          </svg>
        </div>
        <div className="content space-y-2">
          <h3 className="font-bigB text-base">Visas, made clear</h3>
          <p className="text-pretty leading-relaxed">
            Straightforward guidance for tourist, study, medical, or work
            visas — we know what each embassy actually wants to see.
          </p>
        </div>
      </div>

      <div className="grid justify-center gap-4 p-8 bg-white border border-gray-100 rounded-lg w-[18svw] h-auto">
        <div className="icon text-gold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-hotel-icon lucide-hotel w-8 h-8"
          >
            <path d="M10 22v-6.57" />
            <path d="M12 11h.01" />
            <path d="M12 7h.01" />
            <path d="M14 15.43V22" />
            <path d="M15 16a5 5 0 0 0-6 0" />
            <path d="M16 11h.01" />
            <path d="M16 7h.01" />
            <path d="M8 11h.01" />
            <path d="M8 7h.01" />
            <rect x="4" y="2" width="16" height="20" rx="2" />
          </svg>
        </div>
        <div className="content space-y-2">
          <h3 className="font-bigB text-base">Somewhere to stay</h3>
          <p className="text-pretty leading-relaxed">
            From no-frills stays to five-star suites and medical-trip
            accommodation, we match the room to the reason for travel.
          </p>
        </div>
      </div>
    </div>
  )
}
export default OurServicesSectionContent