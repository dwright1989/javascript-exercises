const leapYears = function(year) {
    // check to see if it's divisale by four
    if((year%4==0)){
        // check it isn't divisable by 100 unless it's divisable by 400
        if((year%100==0) && !(year%400==0)){
            // this is not a leap year
            return false;
        }

        return true;
        
    }else{
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
