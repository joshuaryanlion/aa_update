let removeVowels = function(word) {
	let vowels = 'aeiou';
  	let newWord = '';

  	for (let i = 0; i < word.length; i++) {
    	let char = word[i];
      	if (!vowels.includes(char)) {
        	newWord += char;
        }
    }
  	return newWord;
};

let abbreviateWords = function(sentence) {
	let words = sentence.split(' ');
  	let newWords = [];

  	for (let i = 0; i < words.length; i++) {
    	let word = words[i];
      	if (word.length > 4) {
        	newWords.push(removeVowels(word));
        } else {
        	newWords.push(word);
        }
    }
  	return newWords.join(' ');
};




console.log(abbreviateWords('what a wonderful place to live')); // what a wndrfl plc to live
console.log(abbreviateWords('she sends an excellent message ')); // she snds an xcllnt mssg
