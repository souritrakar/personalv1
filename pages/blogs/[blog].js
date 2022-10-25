import { getBlog } from "../../api/firebaseFunc";
import { NotionRenderer } from "react-notion";
import Head from "next/head";
export default function Blog({blogdata, title}){

        return(
            <div className="bg-white">
    
            <Head>
                <title>{blogdata ? title : "404 Not Found"}</title>
                <meta name="description" content="Home" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {
                blogdata ? (
                    <div className="pb-4">
                        <NotionRenderer hideHeader fullPage blockMap={blogdata} />
                    </div>
                ) : (
                    <>
                    </>
                )
            }
    
            
            </div>
    
        )
    
}

export async function getServerSideProps(context) {
    
    let blogdata;
    let title = ''

    await getBlog(context.query.blog).then(async (data)=>{
        const myData = await fetch(
            `https://notion-api.splitbee.io/v1/page/${data?.data().pageId}`
          ).then(res=>res.json()).catch(err=>{
            console.log(err)
          })

         blogdata = myData
         title = data?.data().title
        
    }).catch(err=>{
        console.log(err)
    })



    return { props: 
        { blogdata,
          title
        } }
   
  }