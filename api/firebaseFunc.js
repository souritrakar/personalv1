import {app,db} from "../firebaseConfig"
import {doc, setDoc,collection, getDoc, getDocs,deleteDoc , serverTimestamp} from "firebase/firestore"
import {getAuth} from 'firebase/auth'
import Router from "next/router"

const blogcollection = collection(db, 'Blogs')


export const getBlogs =  async () =>{
    const blogSnap =  await getDocs(blogcollection)
    return blogSnap
}

export const getBlog = async(pageId)=>{
  let docRef = doc(db, "Blogs", pageId)
  let datasnap = await getDoc(docRef)

  return datasnap
}

export const publishBlog = async(page, title, description) =>{
      
        const auth = getAuth(app)
        let status;

        const today = new Date();
        const yyyy = today.getFullYear();
        let mm = today.getMonth() + 1;
        let dd = today.getDate();

        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;

        const formattedToday = dd + '/' + mm + '/' + yyyy;

        const pageId = title.replace(/\s+/g, '-').toLowerCase() + "-"+ page
        console.log(pageId)
        const data = {
          created:formattedToday,
          creator:auth?.currentUser?.email.substring(0, auth?.currentUser?.email.lastIndexOf("@")),
          title:title,
          description:description,
          pageId:pageId,
        }

        await setDoc(doc(db, "Blogs", pageId ? pageId : "a"), data).then(()=>{
          status = 200
        }).catch(err=>{
          console.log(err)
        })

        return status
}

export const deleteBlog = async (pageId) =>{
  await deleteDoc(doc(db, "Blogs", pageId ? pageId : "")).catch(err=>{
    console.log(err)
  }).then(()=>{
    Router.reload(window.location.pathname)
  })
}