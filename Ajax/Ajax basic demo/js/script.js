$( document ).ready(function() {
  
  $("#GetAjax").click(function () {
	  
	  /*$.ajax({
		  url: "ajax_info.txt",
		  cache: false,
		  success: function(html){
			  //console.log("response veikia");
			$("#result").append(html);
		  }
		});*/
		$.ajax({
		  url: "https://www.w3schools.com/xml/demo_get.asp",
		  cache: false,
		  success: function(html){
			  //console.log("response veikia");
			$("#result").append(html);
		  }
		});
		//
		
		
	  //http://api.db-ip.com/addrinfo?addr=185.252.145.10&api_key=5043c5484819df22289d62cc68842df4bd16dd4a
	  
	  
	  /*var xhttp = new XMLHttpRequest();
	  xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			$("#result").html(this.responseText);
		}
	  };
	  xhttp.open("GET", "ajax_info.txt", true);
	  xhttp.send();	  */
  });
});