import Link from "next/link";
import { deleteBlog } from "../../api/firebaseFunc";

export default function BlogTableRow({data}){

    const deleteItem = (pageId) =>{
        if(confirm("Delete blog?")){
            deleteBlog(pageId)
        }
    }
    return(

        
        <tr className="hover:opacity-90 cursor-pointer transition duration-300">

            <Link href={`/blogs/${data?.pageId}`}>
            <td class="px-5 py-5 bg-white dark:bg-gray-700 text-sm">
                <div class="flex items-center">
                    <div class="ml-3">
                        <p class="text-gray-900 whitespace-no-wrap dark:text-white">{data?.title}</p>
                    </div>
                </div>
            </td>
            </Link>

            <td class="px-5 py-5 bg-white dark:bg-gray-700 text-sm">
                <p class="text-gray-900 whitespace-no-wrap dark:text-white">{data?.creator}</p>
            </td>

            <td class="px-5 py-5 bg-white dark:bg-gray-700 text-sm">
                <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                <span aria-hidden="true" class="absolute inset-0 bg-green-200 opacity-50 rounded-full"> </span>
                <span class="relative dark:text-white"> {data?.created}</span>
                </span>
            </td>

            <td onClick={()=>{deleteItem(data?.pageId)}} className="px-5 py-5 bg-white dark:bg-gray-700"> 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 mt-1 ml-2 hover:bg-red-600 hover:text-white rounded-lg cursor-pointer transition duration-300 p-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>
            </td>

        </tr>
        
    )
}

