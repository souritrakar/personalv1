import { useState } from "react"
import { getBlogs } from "../../api/firebase"
import BlogTableRow from "./BlogTableRow"

export default function BlogTable({data}){

    return(
        <>

        <div class="container mx-auto px-4 sm:px-8 max-w-6xl">
        <h1 className="text-2xl font-bold tracking-tight dark:text-white text-gray-900">Blogs:</h1>
        <div class="py-8">
            <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div class="inline-block min-w-full h-96 rounded-t-lg selection:rounded-lg overflow-y-scroll">
                <table class="min-w-full leading-normal bg-gray-200">
                <thead>
                    <tr>
                    <th scope="col" class="px-5 py-3 dark:border-gray-500 text-gray-800 text-left text-sm uppercasefont-semibold dark:bg-gray-800 dark:text-white">Title</th>
                    <th scope="col" class="px-5 py-3 dark:border-gray-500 text-gray-800 text-left text-sm uppercasefont-semibold dark:bg-gray-800 dark:text-white">Creator</th>
                    <th scope="col" class="px-5 py-3 dark:border-gray-500 text-gray-800 text-left text-sm uppercasefont-semibold dark:bg-gray-800 dark:text-white">Created</th>
                    <th scope="col" class="px-5 py-3 dark:border-gray-500 text-gray-800 text-left text-sm uppercasefont-semibold dark:bg-gray-800 dark:text-white">Action</th>
                    </tr>
                </thead>
                <tbody>

                  {
                   data?.map((blog,key)=>{
                    return(
                        <BlogTableRow data={blog} key={key}/>
                    )
                   }) 
                  }
                
                </tbody>
                </table>
            </div>
            </div>
        </div>
        </div>

        </>
    )
}

