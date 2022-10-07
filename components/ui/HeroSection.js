import {useDencrypt} from "use-dencrypt-effect"
import { useEffect } from "react";

export default function HeroSection(){

    const values = ["Souritra Kar"];
    const { result, dencrypt }  = useDencrypt()

    useEffect(() => {
        dencrypt(values[0]);
    }, [result]);

        return(

            <main className=" flex flex-col flex-grow min-h-full py-8 lg:py-10 px-0 dark:bg-[#0F172A] bg-white ">
        
            <h1 className="lg:text-7xl text-4xl z-40 font-sans font-black text-center lg:my-10 my-6 text-[#0F172A] dark:text-white">
              {result}
            </h1>
            <p className="dark:text-gray-300 text-gray-500 font-sans text-center font-light lg:text-2xl z-40">Student | South City International School</p>

          </main>
        )

     
}