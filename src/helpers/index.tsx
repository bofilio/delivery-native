

export function trimString(text : String, length: number){
    if(text.length<= length) return text;
    else return text.substring(0, length-1)+"...";
}


 