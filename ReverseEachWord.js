function reverseEachWord(arg) {
    const sentence = String(arg)
    let res = ""
    for(let i = sentence.length - 1; i >= 0; i--) {
        res += sentence[i]
    }
    return res
}

//few checks
console.log(reverseEachWord("Hello World!"))
console.log(reverseEachWord("Salam Yvelas!"))
console.log(reverseEachWord("And now his watch has ended."))