function camilize(phrase){

    array_phrase = phrase.split(' ');
    new_phrases = [];
    camelizada="";

    for (let index = 0; index < array_phrase.length; index++) {
        const word = array_phrase[index];

        if(word[0] === word[0].toUpperCase()){
            new_phrases.push(word[0].toLowerCase()+word.slice([1,]))
        }
        else{
            new_phrases.push(word[0].toUpperCase()+word.slice([1,]))
        }
    }

    for (let index = 0; index < new_phrases.length; index++) {
        const new_word = new_phrases[index];
        camelizada+=new_word
    }

    return camelizada

}

camilize("hola Manolo cabeza De coco")