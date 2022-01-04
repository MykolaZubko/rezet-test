const wordsArray = [
    ["Hello", "world"],
    ["Brad", "came", "to", "dinner", "with", "us"] ,
    ["He", "lover", "tacos"]  
]

const sidesArr = ["LEFT", 'RIGHT', 'LEFT']

checkWords(wordsArray, sidesArr)

function checkWords(wordsArray, sidesArr, limitLength = 16){
    

    let result = ['******************']

    for(let i = 0; i < wordsArray.length; i++){
        let strLength = wordsArray[i].join(' ').length
        if(strLength <= limitLength){
            
            result.push(formArr(wordsArray[i].join(' '), sidesArr[i], limitLength))
            
        } else {  
            let countStr = Math.ceil(strLength / limitLength)
            for(let j = 0; j < strLength; j+=strLength / countStr){
               let newStr = wordsArray[i].join(' ').slice(j, strLength / countStr + j)
               result.push(formArr(newStr, sidesArr[i], limitLength))
            }
           
        }
        
    }
    result.push('******************') 
    console.log(result)
}

function formArr (str, side, limitLength){
    let result = "*"
    let spacesStr = ""
    let spacesCount = limitLength - str.length
    for(let i = 0; i < spacesCount; i++){
        spacesStr += ' '
    }
    if(side === "LEFT"){
      return result.concat(str, spacesStr,"*")

    } else {
        return result.concat(spacesStr, str, "*")
    }
   
}
