function compass(heading) {
    // We're going to convert a compass heading (0 - 359) to a named direction
    // The 16 winds are: 
    // N, NNE, ENE, E, ESE, SSE, E, S, SSW, WSW, W, WNW, NNW

    //I challenge you to write this in one line, with ternaries!
    if(heading < 0) return null;
    if(heading >= 360) return null;
    if(heading <= 16.88) return "N";
    if(heading <= 28.12) return "NNE";
    if(heading <= 50.62) return "NE";
    if(heading <= 73.12) return "ENE";
    if(heading <= 95.62) return "E";
    if(heading <= 118.12) return "ESE";
    if(heading <= 140.62) return "SE";
    if(heading <= 163.12) return "SSE";
    if(heading <= 185.62) return "S";
    if(heading <= 208.12) return "SSW";
    if(heading <= 230.62) return "SW";
    if(heading <= 253.12) return "WSW";
    if(heading <= 275.62) return "W";
    if(heading <= 298.12) return "WNW";
    if(heading <= 320.62) return "NW";
    if(heading <= 343.12) return "NNW";
    return "N";
}


// We need this line to run tests
module.exports = compass;