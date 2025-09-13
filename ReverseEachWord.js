function reverseEachWord(arg) {
    const sentenceSplitted = String(arg).split(" ")
    let res = ""
    for(let j = 0; j < sentenceSplitted.length; j++) {
        for(let i = sentenceSplitted[j].length - 1; i >= 0; i--) {
            res += sentenceSplitted[j][i]
        }
        if(j !== sentenceSplitted.length - 1) res += " "
    }
    return res
}

//few checks
console.log(reverseEachWord("Hello World!"))
console.log(reverseEachWord("Salam Yvelas!"))
console.log(reverseEachWord("And now his watch has ended."))