
var morse = require("./morse");

function encode(msg) {

    var result = "";
    msg = msg.toUpperCase();
    
    for(var j in msg){
        var i = msg[j];
        var morseEncoded = morse[i];
        
        if(morseEncoded === undefined){ //ALWAYS USE === IF COMPARING TO A FALSEY VALUE!
            //throw "Character not found in morse tables";
            result += "?";
        
        }else{
            result += morseEncoded;
            if(j != msg.length - 1 && i != " "){
                result += " ";
            }
            
        }

    }
    return result;
}

module.exports = encode;