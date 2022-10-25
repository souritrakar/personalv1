import { useEffect } from "react"
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { app } from '../../firebaseConfig'
import { useRouter } from "next/router";

export default function SignOut(){

    const auth = getAuth(app)
    const router = useRouter();

    useEffect(()=>{
        onAuthStateChanged(auth, (user)=>{
            if(user){
                signOut(auth)
                router.push("/admin/login")
                
            } else{
                router.push("/admin/login")
            }
            
            
        });

    }, [])


    return(
        <></>
    )
}