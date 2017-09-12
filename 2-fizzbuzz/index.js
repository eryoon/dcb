/*
**************************************************************
*Eric's Statement on the Use of Arrays for Frivolous Purposes*
**************************************************************
Hello there! As you can see in the code below, I have used an array for a very simple game of fizzbuzz.
First of all, the downsides of using an array is that it will be considerably slower than just a simple if tree.
Well, what I say, is that it is MUCH more elegant. It is also more expandable.
What happens if the teacher asks you to add more replacement cases? Then you will have to expand your giant if block! (or a switch case if you're smart)
What happens if the teacher asks you to programatically assign a replacement for EVERY PRIME NUMBER?!
And yes, this is just me foreshadowing what our next assignment will be. So, before entering this program into a "how long can it go without crashing" contest, I will gladly write another more efficient program.
*/

var keyWords = [
    {
        "number": 3,
        "replacement": "Fizz"
    },
    {
        "number": 5,
        "replacement": "Buzz"
    }
]; 
function fizzBuzz(n) {
    var output = "";
    var isReplaced = false;
    keyWords.forEach((i) => {
        if(n % i.number == 0){
            output += i.replacement;
            isReplaced = true;
        }
    });
    if(!isReplaced) return n.toString();
    
    return output + "!";
}

function game(turns) {
    // An Array into which we'll put the result of our game
    var results = [];
    
    // A loop that attaches the correct value to results
    for (var i=1; i <= turns; i++) {
        // turnResult should not just be i; it needs to use fizzBuzz()
        var turnResult = fizzBuzz(i);
        results.push(turnResult);
    }
    results.forEach((i) => {
        console.log(i);
    });

    return results;
}

// We need this line for testing
module.exports = {fizzBuzz, game};