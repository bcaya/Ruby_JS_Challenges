var answer; //Declares answer as a variable(should do each time)

var answer = prompt("Enter in a Palindrome to check") // answer is set to what user inputs which is received from a prompt method

var isPalindrome = function (string) { //function for checking if input is a palindrome
    if (string == string.split('').reverse().join('')) { //checks if the input (string) is the same as the string after it has been split/reversed and join
    //.split separates each character, .reverse reverses the array(mutates), .join combines them again while being checked if it is the same
        alert(string + ' is palindrome.'); //if it passes the above criteria it says this
    }
    else {
        alert(string + ' is not palindrome.'); //if it is not it does not mutate and it tells user it doesnt work. 
    }
}

isPalindrome(answer)