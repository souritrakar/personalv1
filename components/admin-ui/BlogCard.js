
import { useRouter } from "next/router"

export default function BlogCard({blog}){

    const router = useRouter()

    return(
        <div className="flex justify-center">
            <div className="block p-6 rounded-lg shadow-lg bg-white dark:bg-gray-700 max-w-md">

                <a href={`/blogs/${blog?.pageId}`} target="_blank" rel="noreferrer">
                <div className=" flex flex-col hover:cursor-pointer">
                
                <h5 className="text-gray-900 dark:text-white lg:text-xl text-2xl py-2 h-10 mb-4 leading-tight font-semibold">
                {blog?.title}
                </h5>
                <p className="text-gray-700 dark:text-white text-base mt-2">
                {blog?.description}
                </p>
                </div>

                </a>
                
                <div className="flex xl:flex-row flex-col">
                    
                
                <button
                type="button"
                className=" inline-block px-6 py-2.5 mt-16 lg:mt-10 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-md shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                onClick={()=>{router.push(`/blogs/${blog?.pageId}`)}}
                >
                Read more
                </button>

                <p className="text-gray-700 font-medium dark:text-white mt-4 ml-auto xl:mt-12 text-sm">
                {blog?.created}
                </p>

                </div>
            </div>
        </div>

    )
}