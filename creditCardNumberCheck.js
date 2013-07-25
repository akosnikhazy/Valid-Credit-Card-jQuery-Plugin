(function ( $ ) {
  var numToTen,subTotal,evenCheck,evenSplit,lastNum;
  
  $.fn.isCreditCard = function() {
    var n = this.val();
    
    //Can't be card number if not 16 char long or not a number. return false
    if(n.length != 16 || isNaN(n)){return false;}
    
    //Set everything
    numToTen=subTotal=evenCheck=evenSplit=lastNum=0;
    
    //From here it use the Hans Peter Luhn algorithm to check the card number
    var nums = n.split('');
    var lastNum = nums[15];
   

    for(var i = 0; i<=14; i++){
  	if(i%2 == 0){
		  evenCheck = parseInt(nums[i])*2;

		  if(evenCheck > 9){
			subTotal+=parseInt(1 + (evenCheck-10));
		  } else {
			subTotal+=evenCheck;
		  }

		} else {
		  subTotal+=parseInt(nums[i]);
		}
    }

    while(subTotal%10 != 0){
      subTotal++;
      numToTen++;
    }
    if(numToTen != lastNum)
      return false;
      
    return true;
};}( jQuery ));
