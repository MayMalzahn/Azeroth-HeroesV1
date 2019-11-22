window.onload = function(){if(localStorage.getItem("loadedToons") == null || localStorage.getItem("loadedToons") == undefined ){
		sessionStorage.setItem("loadedToons",JSON.stringify([]));}}
//this is for explicitly loading the saved character list on the home page. if placed in index, it does not load these before loading the element that uses it, causing an undefined error on charArray.