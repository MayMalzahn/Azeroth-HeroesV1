
window.onbeforeunload = function(){processTeam(teamArray);
								  allToons(charArray);};
window.addEventListener("DOMContentLoaded",function()
						{
							var myPage = Singleton.getInstance();
							var charLook = document.getElementById("charLookup");
							document.addEventListener("view_ready", function(){myPage.controller.view.display(charArray);},null);
							if(charLook)
							{
								charLook.addEventListener("click",myPage.controller.sub,null);
								
							}
	loadTeam();
	charFill();
	if(charArray.length > 0){
		document.dispatchEvent(new Event("view_ready"));
	}
	
					
})
var charArray = [];		
function charFill(){
	var e = JSON.parse(sessionStorage.getItem("loadedToons"));
	if( e == null || e.length == 0){return;}
	else{
		charArray = JSON.parse(sessionStorage.getItem("loadedToons"));
	}
		
}
var teamArray = [];
class Singleton
{
	constructor()
	{
		console.log("Singleton Created");
		this.controller = new Controller();
	}
	
	static getInstance()
	{
		if(!Singleton._instance)
		{
			Singleton._instance = new Singleton();
		
			return Singleton._instance;
			
		}
		else
		{
			throw "This has already been done!";
		}
	}
	
}

class Controller{
		constructor(){
			this.view = new View();
		console.log("Controller created");
	}
	sub(){
		this.nam = document.getElementById("name").value;
		this.realm = document.getElementById("realm").value;
		if(charValidate(this.nam,this.realm,charArray) && charArray != null){
			window.alert("You have already added this character!")
		}
		else{
		this.realm.replace(' ','-'); //some realm names have a space. this needs to be a - for the api address.
		this.temp = getTalents(this.nam,this.realm);
		}
		
	}
}
		
			

class View{
		constructor(){
		console.log("View created");
	}
	display(a){
		let displ = document.getElementById("charList");
		displ.innerHTML = '';
		if(a.length > 0){
		if(displ){
			displ.innerHTML = '<div class="d-flex justify-content-center row"></div>';
			let darow=document.getElementsByClassName("row")[0];
		for(var i = 0; i < a.length; i++){
			let dis = '';
			dis+='<article class="">';
			dis+='<a href="details.html"><img class="port"  src = "http://render-us.worldofwarcraft.com/character/'+a[i].thumb+'" alt="'+a[i].nam+'" onclick="detailClick('+i+')"></a>';
			if(a[i].clas == "Warrior"){dis+='<h3 class="warrior">'+a[i].nam+'</h3>';}
				else if(a[i].clas == "Druid"){dis+='<h3 class="druid">'+a[i].nam+'</h3>';}
				else if(a[i].clas == "Death Knight"){dis+='<h3 class="dk">'+a[i].nam+'</h3>';}
				else if(a[i].clas == "Priest"){dis+='<h3 class="priest">'+a[i].nam+'</h3>';}
				else if(a[i].clas == "Shaman"){dis+='<h3 class="shaman">'+a[i].nam+'</h3>';}
				else if(a[i].clas == "Hunter"){dis+='<h3 class="hunter">'+a[i].nam+'</h3>';}
				else if(a[i].clas == "Demon Hunter"){dis+='<h3 class="dh">'+a[i].nam+'</h3>';}
				else if(a[i].clas == "Warlock"){dis+='<h3 class="warlock">'+a[i].nam+'</h3>';}
				else if(a[i].clas == "Rogue"){dis+='<h3 class="rogue">'+a[i].nam+'</h3>';}
				else if(a[i].clas == "Paladin"){dis+='<h3 class="paladin">'+a[i].nam+'</h3>';}
				else if(a[i].clas == "Monk"){dis+='<h3 class="monk">'+a[i].nam+'</h3>';}
				else if(a[i].clas == "Mage"){dis+='<h3 class="mage">'+a[i].nam+'</h3>';}
			dis+='<h4 class="">'+a[i].clas+'</h4>';
			dis+='<p class="">'+a[i].realm+'</p>';
			dis+='<p>Level: '+a[i].lvl+'</p>';
			if(a[i].roles == "HEALING"){
				dis+='<p><img class="rounded-circle smallSet" src="img/heal.png" alt="Healing symbol>"</p>';
			}
			else if(a[i].roles == "TANK"){
				dis+='<p><img class="rounded-circle smallSet" src="img/tank.png" alt="Tanking symbol>"</p>';
			}
			else if(a[i].roles == "DPS"){
				dis+='<p><img class="rounded-circle smallSet" src="img/dps.png" alt="DPS symbol>"</p>';
			}
			dis+='<p>Achivement Points: '+a[i].achiv+'</p>';
			dis+='<p>Honorable Kills: '+a[i].hk+'</p>';
			dis+=`<button class="btn add align-self-end" id="charAdd`+i+`" type="button" onclick="teamAdd('`+a[i].nam+`','`+a[i].realm+`')">Add to Team</button>`;
			dis+='<button class="btn del align-self-end" id="charSubtract'+i+'" type="button" onclick="delChar('+i+')">Delete</button>';
			dis+='</article>';
			darow.insertAdjacentHTML('beforeend',dis);
			}
		}}
	else{
		displ.innerHTML ='<h3 class="text-center">You have not added any heros yet!</h3>';
	}}

}

function delChar(num){
	charArray.splice(num,1);
	document.dispatchEvent(new Event("view_ready"));
}
function teamAdd(name,realm){
	if(teamArray == null){
		teamArray = [];
		this.name = name;
	this.realm = realm;
	teamArray.push({"nam":name,"realm":realm})
	window.alert(name+' from '+realm+' added to team.');}
	else if(charValidate(name,realm,teamArray)){
		window.alert(name+' from '+realm+' is already on your team!');
	}
	else if(teamArray.length <= 4 && teamArray != null){
	this.name = name;
	this.realm = realm;
	teamArray.push({"nam":name,"realm":realm})
	window.alert(name+' from '+realm+' added to team.');}
	else{
		window.alert("Cannont add hero to team. Team is full! Head to the team page to remove another hero.");
	}}

function processTeam(te){
	sessionStorage.setItem("teamArray", JSON.stringify(teamArray));
}
function allToons(toons){
	if(JSON.parse(sessionStorage.getItem("loadedToons"))!= null){
	sessionStorage.setItem("loadedToons",JSON.stringify(charArray));}
	else{return;}
}
function loadTeam(){
	teamArray = JSON.parse(sessionStorage.getItem("teamArray"));
}

function charValidate(nam,realm,arr){
	this.nam = nam.charAt(0).toUpperCase()+nam.slice(1);
	this.realm = realm.charAt(0).toUpperCase()+realm.slice(1);
	for(y = 0; y < arr.length; y++){
		if(this.nam === arr[y].nam && this.realm === arr[y].realm){
			return true;
		}
		else{
			continue;
		}
	}
	return false;
}

						  


