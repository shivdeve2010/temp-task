import Link from "next/link";
import './styles.css'

const Hero = () => {
  
  return (
    <>
      <section
        id="home"
        className="your-component-class relative z-10 overflow-hidden pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp mx-auto max-w-[800px] text-center"
                data-wow-delay=".2s"
              >
                <h1 className=" mb-5 text-3xl font-bold leading-tight  dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                <p className="white-text">power up your </p><p className="yellow-text">IITJEE PREP</p> <p className="white-text">with Infinity Learn</p></h1>
                <h1 className="yellow-text mb-5 text-3xl font-bold leading-tight  dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                </h1>
                <h1 className="white-text mb-5 text-3xl font-bold leading-tight  dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                </h1>
                <p className=" white-text mb-12 text-base font-medium !leading-relaxed :text-white dark:opacity-90 sm:text-lg md:text-xl">
                NEET (national entrance cum eligibility test) is an important medical entrance examination conducted in India.
                <br />
                </p>
                <p className="side-text white-text mb-12 text-base font-medium !leading-relaxed :text-white dark:opacity-90 sm:text-lg md:text-xl">
                Biology, Physics, Chemistry <br />
                date of NEET 2024 to be announced <br />
                18 lakh + NEETpplicants | 1.1 lakh seats <br />
                </p>
                
                
                
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="/"
                    className="rounded-md bg-primary py-4 px-8 text-base font-semibold yellow-text duration-300 ease-in-out hover:bg-primary/80"
                  >
                    start learning for free
                  </Link>
                  
                  <Link
                    href="/"
                    className="rounded-md bg-black/20 py-4 px-8 text-base font-semibold text-black duration-300 ease-in-out hover:bg-black/30 dark:bg-white/20 dark:text-white dark:hover:bg-white/30"
                  >
                    book free counselling session
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </section>
    </>
  );
};

export default Hero;
