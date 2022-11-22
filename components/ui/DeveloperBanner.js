
import Lottie from "lottie-react";
import animationData from "../../public/programmer.json"
import BannerHeader from "../BannerHeader";
import Tools from "../Tools";

export default function DeveloperBanner(){
    return(
                    
        <div id="about" className="flex flex-row justify-around dark:bg-gray-800 bg-gray-100 py-4">
        <Lottie animationData={animationData} loop={true} className='mr-full '/>

        <div className=" lg:mt-12 mt-8">
        <BannerHeader style={'lg:mr-32 ml-8 px-4 bg-sky-500'} title={"About Me"}/>

        <Tools/>

        <ul class="list-none font-normal lg:mr-32 text-2xl space-y-4 lg:mt-4 p-8 rounded-xl">
            
            <li>💻 Working on: <strong>Spotify Mini-Clone</strong></li>
            <li>🤖 Currently learning: <strong>DS & Algorithms</strong></li>
            <li>🤝 Looking to collaborate on: <strong>JavaScript</strong></li>
            <li>⚡ Current favourite technology: <strong>Next.js</strong></li>
        </ul>

        </div>
       
         </div>
    )
}