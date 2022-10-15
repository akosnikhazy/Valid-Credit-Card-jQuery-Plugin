"use strict";
(function ( $ ) {

  $.fn.isCreditCard = function() {
  
    // Gatekeeping: can't be a card number if not 16 char long or not a number.
	// we just stop here.
    if(this.val().length != 16 || isNaN(this.val())) {return false;}
    
    // Set everything
    var subTotal  = 0;
    var digits = this.val().split('').map(Number);
	
    // From here it uses the Hans Peter Luhn algorithm to check the card number
    // How it works is you double the value of every second digit; if the doubled
    // value is bigger than 9 you add up the digits of that number and at the end
    // you add up all the digits you made this way with the digits you didn't touch. 
    // If the result is dividable by ten it is a valid credit card number.

    for(var i = 15; i >= 0; i--)
	{
		if(i%2 != 0)
		{
			subTotal += digits[i];
			continue;
		}
		
		if(digits[i]*2 > 9)
		{
			subTotal += 1 + (digits[i]*2-10);
			continue;
		}
		
		subTotal += digits[i]*2;
	}
	
	// if the total is not dividable by ten it is not valid
	if(subTotal%10 !== 0) return false;
	  
	return true;
};}( jQuery ));
