var mergeAlternately = function (word1, word2) {
    let margeStr = [];
    i = 0;
    j = 0;

    while (i < word1.length || j < word2.length) {

        if (i < word1.length) {
            margeStr.push(word1[i++]);
        }

        if (j < word2.length) {
            margeStr.push(word2[j++]);
        }

    }

    return margeStr.join("");
};