const reverseString = function(theString) {
    let newString = "";
    for(let i=0; i<theString.length; i++){
        //console.log(theString.charAt((theString.length-1)-i));
        newString = newString + theString.charAt((theString.length-1)-i);
    }
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
