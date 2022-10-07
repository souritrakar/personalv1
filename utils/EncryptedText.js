import { useEffect } from "react";

function replaceChar(origString, replaceChar, index) {
    let firstPart = origString.substr(0, index);
    let lastPart = origString.substr(index + 1);
      
    let newString = firstPart + replaceChar + lastPart;
    return newString;
}

export default function EncryptedText({original, nameClass}){

    var temp = original
    let counter = 0
    
    for(let j = 0; j<original.length; j++){
        var randomsymbol = String.fromCharCode(Math.floor(Math.random() * (41 - 33 + 1)) + 33)
        let t1 = temp
        temp = replaceChar(t1, randomsymbol, j)
    }

        setInterval(()=>{
                    let t2 = temp
                    temp = replaceChar(t2, original[counter], counter)
                    counter+=1

        }, 2000)

    return(
        <h1 suppressHydrationWarning className={nameClass}>{temp}</h1>
    )

}