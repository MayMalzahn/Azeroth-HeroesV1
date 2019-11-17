window.onbeforeunload = function(){processTeam(teamArray);};
window.addEventListener("DOMContentLoaded",function()
						{
							document.addEventListener("view_ready", function(){teamFill();},null);
							document.addEventListener("Teamgo", function(){teamDisplay(charArray);},null);
							document.dispatchEvent(new Event("view_ready"));
})

var charArray = [];
function teamFill(){
	var e = JSON.parse(sessionStorage.getItem("teamArray"));
	for(var k = 0;k<e.length;k++){
		this.nam = e[k].nam;
		this.realm = e[k].realm;
		this.realm.replace(' ','-'); //some realm names have a space. this needs to be a - for the api address.
		this.temp = getTalents(this.nam,this.realm);
		console.log(charArray);
		console.log(charArray.length);
		}
		
}
function delChar(num){
	if(charArray.length > 1){
	charArray.splice(num,1);}
	else{charArray = []}
	sessionStorage.setItem("teamArray", JSON.stringify(charArray));
	charArray = [];
	console.log(charArray);
	document.dispatchEvent(new Event("view_ready"));
}
function teamDisplay(g){
	console.log("made to team display");
		let teamdispl = document.getElementById("teamList");
		teamdispl.innerHTML = '<h3>You have not added any heros to your team yet!</h3>';
		if(teamdispl){
			if(g.length != 0 || null){
			teamdispl.innerHTML = '<h3>The Team</h3>';
			console.log("Team found. Displaying.");
			for(var i = 0; i < g.length; i++){
			let dis = '';
			dis+='<article>';
			dis+='<a href="Details.html"><img src = "http://render-us.worldofwarcraft.com/character/'+g[i].thumb+'" onclick="detailClick('+i+')"></a>';
			dis+='<h3>'+g[i].nam+'</h3>';
			dis+='<h4>'+g[i].clas+'</h4>';
			dis+='<p>'+g[i].realm+'</p>';
			dis+='<p>Level: '+g[i].lvl+'</p>';
			dis+='<p>Current Role:</p>';
				dis+='<p>'+g[i].roles+'</p>';
			dis+='<p>Achivement Points: '+g[i].achiv+'</p>';
			dis+='<p>Honorable Kills: '+g[i].hk+'</p>';
			dis+='<button id="charSubtract'+i+'" type="button" onclick="delChar('+i+')">Delete</button>';
			dis+='</article>';
			teamdispl.insertAdjacentHTML('beforeend',dis);
			}
		}
			else{
				teamdispl.innerHTML = '<h3>You have not added any heros to your team yet!</h3>';
			}
		}
}