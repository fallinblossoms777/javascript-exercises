const leapYears = function(year) {
    if ( (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0) )
        return true;
    else
        return false;
};

// Do not edit below this line
module.exports = leapYears;

/*
Determinar si un año es bisiesto.
Una año es bisiesto cuando:
.Es divisible por 4 y no es divisible por 100.
o
.Es divisible por 400.
if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0))
*/