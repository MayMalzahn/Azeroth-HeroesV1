window.onload = function(){if(localStorage.getItem("loadedToons") == null || localStorage.getItem("loadedToons") == undefined ){
		sessionStorage.setItem("loadedToons",JSON.stringify([]));}}