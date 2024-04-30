# Remove duplicate words
## Description
This Javascript function removes all duplicate words from a given string, leaving only the first occurrence of each word.It splits the input string into words, filters out duplicate words and returns a string with only the unique words.
## Example
### Input:
'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
### Output:
'alpha beta gamma delta'
## Function Implementation
The `removeDuplicateWords` function takes a string as input and returns a string with duplicate words removed.
In this function:
* We first split the input string into an array of words using `split(' ')`
* We then iterate over each word in the array and check if it is already in the `uniqueWords` array using `includes()`. If the word is not already in the array, we add it to the `uniqueWords` array.
* Finally, we join the unique words back together into a string using `join(' ')` and return the result.
## Instructions
* Fork this repository from Github
* Clone this repository to your local machine
* Open files in visual studio code
## Contributions
Feel free to send your pull requests for any changes
## Contacts
For any feedbacks contact me through my email bilhaleposo@gmail.com
