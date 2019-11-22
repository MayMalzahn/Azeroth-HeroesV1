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
	if(e.length == 0 || e == null){document.dispatchEvent(new Event("Teamgo"));}
	else{
	for(var k = 0;k<e.length;k++){
		this.nam = e[k].nam;
		this.realm = e[k].realm;
		this.realm.replace(' ','-'); //some realm names have a space. this needs to be a - for the api address.
		this.temp = getTalents(this.nam,this.realm);
		console.log(charArray);
		console.log(charArray.length);
		}}
		
}
function delChar(num){
	if(charArray.length > 1){
	charArray.splice(num,1);}
	else{charArray = []}
	console.log(charArray);
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
			
			if(g.length != 0 && g.length != null && g.length != undefined){
			teamdispl.innerHTML ='<div class="d-flex justify-content-center row"></div>';
				let darow=document.getElementsByClassName("row")[0];
			console.log("Team found. Displaying.");
			for(var i = 0; i < g.length; i++){
				let dis = '';
				dis+='<article class="">';
				dis+='<a href="details.html"><img class="port" src = "http://render-us.worldofwarcraft.com/character/'+g[i].thumb+'" alt="'+g[i].nam+'" onclick="detailClick('+i+')"></a>';
					dis+='<div class="col">';
				if(g[i].clas == "Warrior"){dis+='<h3 class="warrior">'+g[i].nam+'</h3>';}
				else if(g[i].clas == "Druid"){dis+='<h3 class="druid">'+g[i].nam+'</h3>';}
				else if(g[i].clas == "Death Knight"){dis+='<h3 class="dk">'+g[i].nam+'</h3>';}
				else if(g[i].clas == "Priest"){dis+='<h3 class="priest">'+g[i].nam+'</h3>';}
				else if(g[i].clas == "Shaman"){dis+='<h3 class="shaman">'+g[i].nam+'</h3>';}
				else if(g[i].clas == "Hunter"){dis+='<h3 class="hunter">'+g[i].nam+'</h3>';}
				else if(g[i].clas == "Demon Hunter"){dis+='<h3 class="dh">'+g[i].nam+'</h3>';}
				else if(g[i].clas == "Warlock"){dis+='<h3 class="warlock">'+g[i].nam+'</h3>';}
				else if(g[i].clas == "Rogue"){dis+='<h3 class="rogue">'+g[i].nam+'</h3>';}
				else if(g[i].clas == "Paladin"){dis+='<h3 class="paladin">'+g[i].nam+'</h3>';}
				else if(g[i].clas == "Monk"){dis+='<h3 class="monk">'+g[i].nam+'</h3>';}
				else if(g[i].clas == "Mage"){dis+='<h3 class="mage">'+g[i].nam+'</h3>';}
				dis+='<h4 class="">'+g[i].clas+'</h4>';
				dis+='<p class="">'+g[i].realm+'</p>';
				dis+='<p>Level: '+g[i].lvl+'</p>';
				if(g[i].roles == "HEALING"){
				dis+='<p><img class="rounded-circle smallSet" src="img/heal.png" alt="Healing symbol>"</p>';
			}
			else if(g[i].roles == "TANK"){
				dis+='<p><img class="rounded-circle smallSet" src="img/tank.png" alt="Tanking symbol>"</p>';
			}
			else if(g[i].roles == "DPS"){
				dis+='<p><img class="rounded-circle smallSet" src="img/dps.png" alt="DPS symbol>"</p>';
			}
				dis+='<p>Achivement Points: '+g[i].achiv+'</p>';
				dis+='<p>Honorable Kills: '+g[i].hk+'</p>';
				dis+='</div>';
				dis+='<button class="btn del" id="charSubtract'+i+'" type="button" onclick="delChar('+i+')">Delete</button>';
				dis+='</article>';
				darow.insertAdjacentHTML('beforeend',dis);
			}
		}
			else{
				console.log("No characters found.");
				teamdispl.innerHTML = '<h3>You have not added any heros to your team yet!</h3>';
			}
		}
}
function processTeam(te){
	sessionStorage.setItem("teamArray", JSON.stringify(teamArray));
}