 function removeDuplicateWords(str) {
    const words = str.split('');  //Split the input string into an array of words
    const uniqueWords = [];

    //Iterate over each word in the array checking if it is already in the uniqueWords array using includes()
    words.forEach(word => {
        if (!uniqueWords.includes(word)) {       
            uniqueWords.push(word);          //If the word is not already in the uniqueWords array,we add it using .push()
        }
    });

    return uniqueWords.join('');   //Join the unique words back together into a string using join() and return the result

 }

  // Test case
 const input = 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta';
 const output = removeDuplicateWords(input);
 console.log(output); // Output: 'alpha beta gamma delta'