"use strict";
(function ( $ ) {

  $.fn.isCreditCard = function() {
  
    // Gatekeeping: can't be a card number if not 16 char long or not a number.
    // we just stop here.
    if(this.val().length != 16 || isNaN(this.val())) {return false;}
    
    // Set everything
    var digits = this.val().split('').map(Number);
	
    // From here it use the Hans Peter Luhn algorithm to check the card number
    // How it works is you double the value of every second digit, if the doubled
    // value is bugger than 9 you add up the digits of that number and at the end
    // you add up all the digits you made this way. If the result is dividable with
    // ten it is a valid credit card number.
    for(var i = 14; i >= 0; i -= 2)
    {
	if(digits[i]*2 > 9)
	{
		digits[i] = 1 + (digits[i]*2-10);
		continue;
	}
		
	digits[i] = digits[i]*2;
		
    }
	
    // if the total is not dividable by ten it is not valid
    if(digits.reduce((a, b) => a + b, 0)%10 !== 0) return false;
	  
    return true;
};}( jQuery ));
