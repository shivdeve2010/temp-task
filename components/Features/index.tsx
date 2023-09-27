import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import "./styles.css"
import React from 'react'
import Link from "next/link";

const Features = () => {
  return (
    <>
      <section
        id="features"
        className="bg-primary/[.03] py-16 md:py-20 lg:py-28"
      >
        <div className="container">
          {/* <SectionTitle
            title="courses for you"
            paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
            center
          /> */}
          <h2 className="center-text mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
          courses for you
        </h2>
        <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="/"
                    className="rounded-md bg-primary py-4 px-8 text-base font-semibold yellow-text duration-300 ease-in-out hover:bg-primary/80"
                  >
                    all
                  </Link>
                  <Link
                    href="/"
                    className="rounded-md bg-primary py-4 px-8 text-base font-semibold yellow-text duration-300 ease-in-out hover:bg-primary/80"
                  >
                    live
                  </Link>
                  <Link
                    href="/"
                    className="rounded-md bg-primary py-4 px-8 text-base font-semibold yellow-text duration-300 ease-in-out hover:bg-primary/80"
                  >
                    recorded
                  </Link>
                  <Link
                    href="/"
                    className="rounded-md bg-primary py-4 px-8 text-base font-semibold yellow-text duration-300 ease-in-out hover:bg-primary/80"
                  >
                    crash course
                  </Link>
                  
                </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
          <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <Link
                    href="/"
                    className=" rounded-md bg-primary py-4 px-8 text-base font-semibold yellow-text duration-300 ease-in-out hover:bg-primary/80"
                  >
                    book the counselling session
          </Link>
          </div>
          
        </div>
        
      </section>
    </>
  );
};

export default Features;
