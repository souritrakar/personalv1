import languages from "../utils/languages";

export default function Tools(){
    return(
        
        <div className="left grid ml-8 mt-8 mr-4 lg:grid-cols-10 md:grid-cols-4 grid-cols-8"> 

        {
            languages.map(language=>{
                return(
                    <a href={language.href} className="z-40 hover:scale-125 transition duration-300" target="_blank"> 
                    <img src={language.imgurl} alt={language.href} width="40" height="40"/> 
                    </a>
                )
            })
        }

        </div>
    )
}