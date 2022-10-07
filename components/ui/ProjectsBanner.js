
import BannerHeader from "../BannerHeader";
import projectslist from "../../utils/ProjectsList";
import Project from "../Project";
import { Fragment } from "react";
// import dynamic from 'next/dynamic'

export default function ProjectsBanner(){

    return(  

      <Fragment>
        <div id="projects" className="flex flex-row justify-around dark:bg-[#0F172A] bg-[#e4e2e2] py-4">
        <div className=" lg:mt-14 mr-auto lg:ml-26 ml-10 mt-6">
        <BannerHeader style={'lg:mr-32 lg:ml-8 px-4 bg-sky-500'} title={"Projects"}/>
        
        <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 mt-8 lg:mt-14 lg:ml-8 mr-6 mb-6">
          {
            projectslist?.map((project)=>{
                return(
                    <Project project={project}/>
                )
            })
          }

         <button className="w-48 h-12 lg:mt-20 lg:ml-8 mt-6 dark:bg-white bg-[#0F172A] text-white dark:text-black text-xl rounded-lg text-center z-40 hover:dark:bg-gray-300 transition duration-300 cursor-poiinter">
          <a href="https://github.com/souritrakar" target="_blank" rel="noreferrer">See all</a>
        </button>

        </div>

        </div> 
         </div>

         </Fragment>
    )
}