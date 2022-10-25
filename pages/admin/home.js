import {onAuthStateChanged, getAuth, signOut} from 'firebase/auth'
import {app,db} from "../../firebaseConfig"
import { getBlogs } from '../../api/firebaseFunc';
import { useEffect} from 'react'
import {useRouter}  from 'next/router';
import Head from 'next/head';
import Navbar from '../../components/admin-ui/Navbar';
import BlogTable from '../../components/admin-ui/BlogTable';

export default function Home({blogs}){

    const router = useRouter()
    const auth = getAuth(app)
    useEffect(()=>{
        onAuthStateChanged(auth, (user)=>{
            if(!user){
                router.push("/admin/login")
            } else{
            }
        });

    }, [])


        return(
            <div>
                      
            <Head>
                <title>Home | Admin</title>
                <meta name="description" content="Home" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
    
                <div className="min-h-screen font-inter dark:bg-[#0F172A] bg-gray-100">
                
                <Navbar/> 
                <header className="dark:bg-[#162239] bg-white shadow">
                <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight dark:text-white text-gray-900">Dashboard</h1>
                </div>
                </header>
                <main>
                <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
    
                    <div className="px-4 py-6 sm:px-0">
                    {/* <div className="h-96 rounded-lg border-4 border-dashed border-gray-200" /> */}
                    {
                        blogs.length>0 ? (
                            <BlogTable data={blogs}/>
                        ) : (
    
                          <div className="h-96 rounded-lg border-4 text-center border-dashed dark:border-gray-200 border-gray-300">
                            <h2 className='mt-40 text-2xl font-bold'>No blogs found. Start creating!</h2>
                          </div>
                        )
                    }
                    
                    </div>
    
                </div>
                </main>
            </div>
            </div>
        )
    
}

export const getServerSideProps = async () => {
    // Fetch data from external API
    let blogs = []
    await getBlogs().then(snap=>{
        snap.docs.map(doc=>{
            blogs.push(doc.data())
        })
    }).catch(err=>{
            console.log(err)
        })
    
    // Pass data to the page via props
    return { props: 
        { blogs,
        } }
  }