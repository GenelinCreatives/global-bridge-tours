import { Link, useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()

  return (
    <div className="bg-navy min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16 main">
      <div id="background"></div>

      <div className="mt-8 text-center top">
        <h1 className="font-bigB text-whiteB text-[5em] sm:text-[7em] md:text-[9em] leading-none text-shadow-grayB">
          404
        </h1>
        <h3 className="font-poppins text-[1.2em] sm:text-[1.5em] md:text-[2em] uppercase text-grayB mt-[-5px] font-extrabold mb-2">
          This page wandered off
        </h3>
      </div>

      <div className="mx-auto relative w-[180px] sm:w-[200px] md:w-[250px] h-[180px] sm:h-[200px] md:h-[250px] mt-4 sm:mt-6 md:mt-8 container">
        <div className="absolute w-1/2 h-[53%] left-1/4 top-[10%] rounded-t-[50%] bg-whiteB border border-grayB border-b-0 animate-float ghost">
          <div className="absolute w-full h-[60%] top-[20%] face">
            <div className="absolute bg-darkB w-[10px] sm:w-[12px] md:w-[13px] h-[10px] sm:h-[12px] md:h-[13px] rounded-full top-[40%] left-[25%] eye"></div>
            <div className="absolute bg-darkB w-[10px] sm:w-[12px] md:w-[13px] h-[10px] sm:h-[12px] md:h-[13px] rounded-full top-[40%] right-[25%] eye-right"></div>
            <div className="absolute top-[50%] left-[45%] w-[10px] sm:w-[12px] md:w-[14px] h-[5px] sm:h-[6px] md:h-[7px] border-4 border-transparent border-b-darkB rounded-full mouth"></div>
          </div>
        </div>

        <div className="absolute w-[35%] sm:w-[38%] md:w-[40%] h-[10%] sm:h-[11%] md:h-[12%] bg-grayB left-[30%] top-[80%] rounded-[50%] animate-shadowScale shadow"></div>
      </div>

      <div className="mt-4 text-center bottom">
        <p className="font-body text-white text-[0.75em] lg:text-[0.85em] uppercase">
          Even our ghost isn't sure where this one went.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center my-4 buttons">
          <button
            onClick={() => navigate(-1)}
            className="bg-gold px-4 sm:px-5 py-2 sm:py-3 m-2 font-body font-semibold uppercase text-navy text-[0.75em] lg:text-[0.85em] tracking-wider border-0 hover:bg-goldLight transition-all duration-400 btn"
          >
            Back
          </button>
          <Link
            to="/"
            role="button"
            className="bg-gold px-4 sm:px-5 py-2 sm:py-3 m-2 text-navy font-body font-semibold uppercase text-[0.75em] lg:text-[0.85em] tracking-wider border-0 hover:bg-goldLight transition-all duration-400 btn"
          >
            Home
          </Link>
        </div>
      </div>
    </div>
  )
}
export default NotFound