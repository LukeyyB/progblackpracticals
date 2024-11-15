let adjectives = ["innocent", "inquisitive", "roasted", "spooky", "acoustic", "present", "complete", "sore", "tasteful", "snobbish", "rhetorical", "elegant", "ossified", "straight", "blue", "synonymous", "vulgar", "naughty", "brown", "tasty", "zealous", "legal", "unbiased", "young", "misty", "smoggy", "One", "satisfying", "stale", "incandescent"]
let nouns =["storage", "membership", "art", "eye", "copper", "territory", "quarter", "depth", "arm", "effort", "goldfish", "ant", "requirement", "mother", "advertising", "feet", "grade", "thing", "number", "fireman", "iron", "awareness", "chalk", "ratio", "newspaper", "vein", "cause", "selection", "star", "push"]
let verbs = ["like", "strike", "qualify", "stoop", "seize", "prefer", "train", "crashes", "educate", "slay", "sip", "retain", "fly", "ache", "salute", "get", "regret", "convene", "join", "prepare", "increase", "damage", "need", "beseech", "wax", "bind", "flop", "consign", "hate", "slide"]
let advebrs = ["helplessly","tightly","energetically","yawningly","sedately","justly","unaccountably","furiously","enthusiastically","voluntarily","boastfully","lightly","merrily","softly","literally","recently","youthfully","instead","bitterly","thoroughly","perfectly","together","lively","accidentally","blissfully","completely","basically","joyfully","gladly","upward"]



function generate(){
    let adjective = adjectives[Math.floor(Math.random()*31)];
    let noun = nouns[Math.floor(Math.random()*31)];
    let verb = verbs[Math.floor(Math.random()*31)];
    let adverb = advebrs[Math.floor(Math.random()*31)];

    return "The " + adjective + " " + noun + " " + verb + " " + adverb
}

function generateSentence(){
    const sentenceTextArea = document.getElementById("rndSentence");
    sentenceTextArea.innerText = generate() + ".";
}

function generatePoem(){
    const poemTextArea = document.getElementById("rndPoem");
    poem = ""
    for(let i = 0; i < 7; i++){
        poem += generate() + ",\n"
    }
    poem = poem.slice(0,-2) + "."
    poemTextArea.innerText = poem
}