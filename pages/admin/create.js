
import {useState, useEffect} from 'react';
import { useRouter } from 'next/router'
import { publishBlog } from '../../api/firebase';
import Head from 'next/head';
import { NotionRenderer } from "react-notion";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { app } from '../../firebaseConfig';

export default function Create(){

    const router = useRouter();
    // // let path = router.pathname.split('/')[2]
    const auth = getAuth(app)
    const [page, setPage] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("")
    const [loading, setLoading] = useState(false)
    const [blockMap, setBlockMap] = useState(null)

    useEffect(()=>{
        onAuthStateChanged(auth, (user)=>{
            if(!user){
                router.push("/admin/login")
            } else{
            }
        });

    }, [])

    const renderPage = (async ()=>{
        if(page?.length>0){
            const data = await fetch(
                `https://notion-api.splitbee.io/v1/page/${page}`
              ).then(res => res.json());

              setBlockMap(data)
        } else{
            alert("Invalid Page ID")
        }
    })

    const changeTitle = (() => {
        let blogTitle = window.prompt("Enter blog title")
        setTitle(blogTitle)
    });

    const changeDescription = (() => {
        let blogDesc = window.prompt("Enter blog description")
        setDescription(blogDesc)
    });

    const createBlog = () =>{
        
        if(title?.length>0 && page?.length>0 && description?.length>0){
           if(confirm("Are you sure you want to publish?")){
            setLoading(true)
            publishBlog(page, title, description).then((status)=>{
                if(status === 200){
                    router.push("/admin/home")
                }
            })
           }
        } else{
          alert("Cannot be blank")
        }

    }

    return(
        <div className="bg-white h-screen overflow-y-scroll">

            <Head>
                <title>{title}</title>
                <meta name="description" content="Home" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header className="dark:bg-[#162239] bg-gray-50 shadow">
            <div className="max-w-7xl py-4 px-4 sm:px-6 lg:px-8 flex lg:flex-row flex-col">
               {/*Title*/}

               <input
                type="text"
                name="title"
                id="title"
                className="block w-auto dark:bg-gray-600  rounded-md pl-4 pr-12 py-2 sm:text-sm"
                placeholder="Your title"
                value={title} 
                onClick={()=>{changeTitle()}}
                />

                <div className='lg:mt-0 mt-4 lg:ml-4 flex'>

                <input
                type="text"
                name="pageid"
                id="pageid"
                className="block w-auto dark:bg-gray-600  rounded-md pl-4 pr-12 py-2  sm:text-sm"
                placeholder="Notion Page ID"
                value={page} 
                onChange={(e)=>{setPage(e.target.value)}}
                />  

                <svg 
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 mt-1 ml-2 hover:bg-gray-200 rounded-lg cursor-pointer transition duration-300 p-2"
                    onClick={()=>{renderPage()}}
                >
                <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
                </svg>

                </div>

                <svg 
                  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 mt-1 ml-2 hover:bg-gray-200 rounded-lg cursor-pointer transition duration-300 p-2"
                  onClick={()=>{changeDescription()}}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                </svg>


                <button onClick={()=>{createBlog()}} className={`w-40 h-10 lg:ml-8 lg:mt-1 mt-4 font-semibold dark:bg-white bg-[#0F172A] text-white dark:text-black text-lg rounded-lg text-center hover:bg-gray-700  ${loading ? 'cursor-wait':'cursor-pointer'} transition duration-300`}>
                 Publish
                </button>

            </div>
            </header>

            <NotionRenderer hideHeader fullPage blockMap={blockMap ? blockMap : ""} />


        </div>
    )
}
