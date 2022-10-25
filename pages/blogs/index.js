import Navbar from "../../components/Navbar"
import BannerHeader from "../../components/BannerHeader"
import BlogCard from "../../components/admin-ui/BlogCard"
import Head from "next/head"
import { getBlogs } from '../../api/firebaseFunc';

export default function Blogs({blogs}){
    return(

        <div className="dark:bg-[#0f1523] bg-gray-100 lg:h-screen h-full pb-6 ">

        <Head>
          <title>Blogs</title>
          <meta name="description" content="Home" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Navbar/>

        <div className="mt-12">
        <BannerHeader style={'lg:mr-32 lg:ml-20 ml-6 px-8 bg-[#0F172A] dark:bg-gray-100 dark:text-black '} title={"Blogs"}/>
        </div>

        <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 mt-8 lg:mt-14 lg:ml-20 ml-6 md:ml-6 mr-6 mb-6">
            {
                blogs?.map((blog, key)=>{
                    return(
                        <BlogCard blog={blog} key={key} />
                    )
                })
            }


        </div>
       

        </div>

    )
}

export const getServerSideProps = async () => {

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