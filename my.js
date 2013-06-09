// PDeveloper custom script, included in index.html

var currency = ["AED", "AUD", "CHF", "GBP", "INR", "JPY", "KWD", "QAR", "RUB", "SAR", "SGD", "USD"];
      //localStorage.clear();
    	$.each(currency, function(key, val) {
    		$.getJSON(
    				"http://rate-exchange.appspot.com/currency?from=USD&to="+val+"&callback=?", 
        			function(data) {
      					localStorage.setItem( val, data.rate );
      					localStorage.setItem('USD',1);
        	});
    	});
    	$('#c1').change(function() {
    		$('#s_tb').val(($('#f_tb').val()*localStorage.getItem($('#c2').val()))/localStorage.getItem($('#c1').val()));
  			
		});
    	$('#c2').change(function() {
    		$('#s_tb').val(($('#f_tb').val()*localStorage.getItem($('#c2').val()))/localStorage.getItem($('#c1').val()));
  			
		});
    	$('#f_tb').change(function() {
    		$('#s_tb').val(($('#f_tb').val()*localStorage.getItem($('#c2').val()))/localStorage.getItem($('#c1').val()));
		});
    	$('#s_tb').change(function() {
    		$('#f_tb').val(($('#s_tb').val()*localStorage.getItem($('#c1').val()))/localStorage.getItem($('#c2').val()));
		});
