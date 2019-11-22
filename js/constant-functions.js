//reused functions


var id = "de8df8220aba46f794d661d7683ed707";
var secret = "CSh9ZdAIQdI5Df9yVC99k7SYQG08oIH8";
var grant = {grant_type: "client_credentials",
			client_id: id,
			client_secret: grant};
var token = JSON.parse(getToken());

	
	function getToken(){
	//getting the access token using my client id and secret. This is required to pull anything from my chosen api
	var result = $.ajax({
		type: 'POST',
		url: 'https://us.battle.net/oauth/token',
		data:{"grant_type":"client_credentials"},
		beforeSend: function(request)
		{	//sends the id and secret to log in
			request.setRequestHeader("Authorization","Basic "+btoa(id+":"+secret));
		},
		headers: {//makes the grant_type work. Ill admit I am not sure why
				'Content-Type': 'application/x-www-form-urlencoded',
				 "accepts": "application/json"},
		body: grant,
		async:false,
		success:function(data)
		{}
    
	}).responseText;
		//returns results for storage in token
		return result;
	}

function getTalents(nam,realm){
	this.realm = realm;
	this.nam = nam;
		fetch('https://us.api.blizzard.com/wow/character/'+this.realm+'/'+this.nam+'?fields=talents&locale=en_US&access_token='+token["access_token"])
	.then(function(response){
		  if(!response.ok){
			  //unfortunately, the api only returns "not found", not if the realm or character is the problem.
			window.alert("Character or Realm "+response.statusText);
			  return;
		}
			return response;
		  }
		 )
		.then((resp)=> resp.json())
		.then(function (data)
		{
			let name = data.name;
			let realm = data.realm;
			let clas = data.class;
			let level = data.level;
			let achiv = data.achievementPoints;
			let thumb = data.thumbnail;
			let hk = data.totalHonorableKills;
			let talents = data.talents;
			let role = data.talents[0].spec.role;
			let temp = char.createChar(name,realm,clas,level,achiv,thumb,hk,talents,role);
			console.log(data);
			charArray.push(temp);
			let isDetail = document.getElementById("detail");
			if(isDetail){
				document.dispatchEvent(new Event("detailLoad"));
			}
			let isIndex = document.getElementById("charList");
			if(isIndex){
				document.dispatchEvent(new Event("view_ready"));
			}
			let isTeam = document.getElementById("teamList");
			if(isTeam){
				document.dispatchEvent(new Event("Teamgo"));
			}
		
		})

		.catch(function (error)
		{
			console.log(error);
		})
			}

		function detailClick(p){
	sessionStorage.setItem("detailToon", JSON.stringify(charArray[p]));
	
}