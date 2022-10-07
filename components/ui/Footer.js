export default function Footer(){
    return(
            <footer className="text-center dark:text-white text-black z-50 dark:bg-gray-800 bg-gray-100">
                 <div
                    className="text-center dark:text-white text-black p-4"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
                >
                    Made with 
                    <strong className="ml-2 dark:text-white text-black" >
                    NextJS
                    </strong>
                </div>
               
        </footer>

    )
}