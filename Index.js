
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
	if(charArray.length > 0){
		document.dispatchEvent(new Event("view_ready"));
	}
	
					
})
var charArray = JSON.parse(sessionStorage.getItem("loadedToons"));							
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
		this.realm.replace(' ','-'); //some realm names have a space. this needs to be a - for the api address.
		this.temp = getTalents(this.nam,this.realm);
		
	}
}
		
			

class View{
		constructor(){
		console.log("View created");
	}
	display(a){
		let displ = document.getElementById("charList");
		displ.innerHTML = '';
		if(displ){
		for(var i = 0; i < a.length; i++){
			let dis = '';
			dis+='<article>';
			dis+='<a href="Details.html"><img src = "http://render-us.worldofwarcraft.com/character/'+a[i].thumb+'" onclick="detailClick('+i+')"></a>';
			dis+='<h3>'+a[i].nam+'</h3>';
			dis+='<h4>'+a[i].clas+'</h4>';
			dis+='<p>'+a[i].realm+'</p>';
			dis+='<p>Level: '+a[i].lvl+'</p>';
			dis+='<p>Current Role:</p>';
			dis+='<p>'+a[i].roles+'</p>';
			dis+='<p>Achivement Points: '+a[i].achiv+'</p>';
			dis+='<p>Honorable Kills: '+a[i].hk+'</p>';
			dis+=`<button id="charAdd`+i+`" type="button" onclick="teamAdd('`+a[i].nam+`','`+a[i].realm+`')">Add to Team</button>`;
			dis+='<button id="charSubtract'+i+'" type="button" onclick="delChar('+i+')">Delete</button>';
			dis+='</article>';
			displ.insertAdjacentHTML('beforeend',dis);
			}
		}}

}

function delChar(num){
	charArray.splice(num,1);
	document.dispatchEvent(new Event("view_ready"));
}
function teamAdd(name,realm){
	this.name = name;
	this.realm = realm;
	teamArray.push({"nam":name,"realm":realm})
	console.log(name+' from '+realm+' added to team.');
}
function processTeam(te){
	sessionStorage.setItem("teamArray", JSON.stringify(teamArray));
}
function allToons(toons){
	sessionStorage.setItem("loadedToons",JSON.stringify(charArray));
}

						  


