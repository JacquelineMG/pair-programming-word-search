const wordSearch = (letters, word) => {
    if (letters.length < 1) {
        return false
    }
    word = word.toUpperCase();
    let transposed = [];
    for (let i = 0; i < letters[0].length; i++) {
        transposed.push([]);
    }
    for (let i = 0; i < letters.length; i++) {
        for (let j = 0; j < letters[i].length; j++) {
            transposed[j].push(letters[i][j]);
        }
    }
    const horizontalJoin = letters.map(ls => ls.join(''));
    const verticalJoin = transposed.map(ls => ls.join(''));
    for (l of horizontalJoin) {
        if (l.includes(word)) {
            return true;
        }
    for (l of verticalJoin) {
        if (l.includes(word)) {
            return true;
        }
        
    } return false;
    } 
};


module.exports = wordSearch;
