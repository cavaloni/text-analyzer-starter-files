function getWords() {
	$('form').on('submit', function(event) {
        var wordsInput = $('#user-text').val();   
        event.preventDefault();
        $('dl').removeClass('hidden');
      	$( "dt:contains('Word count')" ).next().text(wordCount(wordsInput));
        $( "dt:contains('Unique word count')" ).next().text(uniqueWordCount(wordsInput));
        $( "dt:contains('Average word length')" ).next().text(avgWordLength(wordsInput));
        $( "dt:contains('Average sentence length')" ).next().text(avgSentenceLength(wordsInput));
        wordCount(wordsInput);
        avgWordLength(wordsInput);
        avgSentenceLength(wordsInput);
    })
};
    
getWords();

function wordCount (words) {
	var splitWords = words.split(" ");
	var count = 0
	for (i = 0; i < splitWords.length; i++) {
		count++;
	}
	return (count);
}

function uniqueWordCount (words) {
	words = tokenize(words);
	var splitWords = words.split(" ");
	var wordsObj = {};
	for (i = 0; i < splitWords.length; i++)  {
		if (splitWords[i] in wordsObj) {
			wordsObj[splitWords[i]]++;
		}
		else { 
			wordsObj[splitWords[i]]=1;
		}
	}
	var count = Object.keys(wordsObj);
	return count.length;
}

function tokenize (words) {
	return words.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
}

function avgWordLength (words) {
	var splitWords = words.split(" ");
	var totalChars = 0
	var totalWords = splitWords.length
	splitWords.forEach(function (item) {
		item = tokenize(item);
		totalChars = item.length + totalChars;
	});
	return (totalChars / totalWords);
}

function avgSentenceLength (words) {
	var replacedWords = words.replace(/([.!?])/g, '|').split("|");
	var counter = 0
	replacedWords.forEach(function (item) {
		counter += item.length;
	});
	return (counter / replacedWords.length - 1);
}


// var key = 0;
	// words.forEach(function (word) {
	// 	key++;
	// 	if (word in wordArr) {
	// 		wordArr[key] = word;
	// 		wordArr[key][++];
	// 	}
	// 	else {
	// 		wordArr[key] = word;
	// 		wordArr[key][]
	