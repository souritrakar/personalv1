import { useEffect, useState } from 'react'
import { LockClosedIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import Head from 'next/head'
import finallogo from "../../public/finallogo.png"

//Firebase imports
import {app, db} from "../../firebaseConfig"
import {signInWithEmailAndPassword, getAuth, onAuthStateChanged} from 'firebase/auth'
import {useRouter}  from 'next/router';


export default function Login(){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // const dbInstance = collection(db, 'admins')
    const auth = getAuth(app)
    
    const router = useRouter()

    
    const login = (e) =>{
        e.preventDefault()
        if(email.length > 0 && password.length>0){
            signInWithEmailAndPassword(auth, email.toLowerCase(), password).then(()=>{
                router.push('/admin/home')
            }).catch(err=>{
                switch(err.code.split("auth/")[1]){
                    case 'user-not-found':
                        alert("User not found.")
                        break;
                    case 'wrong-password':
                        alert("Wrong password")
                        break;
                    default:
                        alert("Error occured.")
                        break;
                }
            })
        }

        else{
            alert("Enter email/password")
        }

    }

    useEffect(()=>{
        onAuthStateChanged(auth, (user)=>{
            if(user){
                router.push('/admin/home')
            }
        });
    }, [])
    return(
        <>
         <Head>
            <title>Login</title>
            <meta name="description" content="Login" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="dark:bg-[#0F172A] bg-gray-100 flex min-h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-md space-y-8 dark:bg-gray-100 bg-[#0F172A] p-8 rounded-xl">
            <div>

            <div className="w-14 h-14 mx-auto rounded-full border-4 border-red-500">
                <Image src={finallogo} width={80} height={80}/>
            </div>

              <h2 className="mt-6 text-center text-3xl font-inter font-bold tracking-tight dark:text-gray-900 text-white">
                Sign in to admin
              </h2>
            </div>

            <form className="mt-8 space-y-6 font-inter" onSubmit={(e)=>{login(e)}}>
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="-space-y-px shadow-sm">
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="relative block w-full appearance-none rounded-sm dark:bg-gray-300 bg-gray-500 px-3 py-2 dark:text-gray-800 text-white focus:z-10 focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                    placeholder="Email address"
                    onChange={(e)=>{setEmail(e.target.value)}}
                  />
                </div>

                <br/> 

                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="relative block w-full appearance-none rounded-sm dark:bg-gray-300 bg-gray-500 px-3 py-2 dark:text-gray-800 text-white focus:z-10 focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                    placeholder="Password"
                    onChange={(e)=>{setPassword(e.target.value)}}
                  />
                </div>
              </div>
  
              <div className="flex items-center justify-between">
  
                <div className="text-sm">
                  <a href="#" className="font-medium text-sky-600 hover:text-sky-500">
                    Forgot your password?
                  </a>
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  className="group relative flex w-full justify-center rounded-md border border-transparent bg-sky-600 py-2 px-4 text-sm font-medium text-white hover:bg-sky-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                >
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <LockClosedIcon className="h-5 w-5 text-sky-500 group-hover:text-sky-400 " aria-hidden="true" />
                  </span>
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    )
}