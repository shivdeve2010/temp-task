"use client";

import Image from "next/image";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import Link from "next/link";
import './styles.css';



const Video = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      
      <div className="container">
      <SectionTitle
          title="1L books for IIT JEE"
          paragraph=""
          center
          mb="80px"
        />

        <div className="-mx-4 flex-container">
          <div className="flex-container-div ">
                <Image src="/images/video/book.jpg" alt="book image" width="200" height="800" />  
          </div>
          
          <div className="book-rate flex-container-div ">
          <p className="mb-5 text-3xl font-bold leading-tight  dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                IIT JEE Maths Class 11</p>
                <p className="side-text mb-12 text-base font-medium !leading-relaxed :text-white dark:opacity-90 sm:text-lg md:text-xl">
                (12 Books)<br />
                Rs 12,000 (-20%) <s>Rs 15,000</s><br />
                SPECIAL PRICE! offer ends 21st August <br />
                </p >
                <p className="side-text mb-12 text-base font-medium !leading-relaxed :text-white dark:opacity-90 sm:text-lg md:text-xl">
                based on latest IIT JEE pattern <br/>
                concise theory + practise questions <br/>
                topic-wise detailed mcqs for revision <br/> 
                </p>
                  <Link
                    href="/"
                    className="rounded-md bg-black/20 py-4 px-8 text-base font-semibold text-black duration-300 ease-in-out hover:bg-black/30 dark:bg-white/20 dark:text-white dark:hover:bg-white/30"
                  >
                    book free counselling session
                  </Link>
                  <br />
                  <br />
                  
                  <Link
                    href="/"
                    className="btn-purchase rounded-md bg-primary py-4 px-8 text-base font-semibold yellow-text duration-300 ease-in-out hover:bg-primary/80"
                  >
                    start learning for free
                  </Link>
          </div>

        </div>
        
      </div>
     
    </section>
    
    
        
  );
};

export default Video;
