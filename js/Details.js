window.addEventListener("DOMContentLoaded",function()
						{
							loadChar();
							document.addEventListener("detailLoad", function(){view();},null);
})


var detailToon = JSON.parse(sessionStorage.getItem("detailToon"));
var charArray = [];
function loadChar(){
	detailToon.realm.replace(' ','-');
	this.temp = getTalents(detailToon.nam, detailToon.realm);

}
function view(){
		let de = document.getElementById("detail");
		if(de){
			console.log(charArray[0]);
			if(charArray[0].clas == "Warrior"){de.innerHTML='<h3 class="warrior">'+charArray[0].nam+'</h3>';}
				else if(charArray[0].clas == "Druid"){de.innerHTML='<h3 class="druid text-center">'+charArray[0].nam+'</h3>';}
				else if(charArray[0].clas == "Death Knight"){de.innerHTML='<h3 class="dk text-center">'+charArray[0].nam+'</h3>';}
				else if(charArray[0].clas == "Priest"){de.innerHTML='<h3 class="priest text-center">'+charArray[0].nam+'</h3>';}
				else if(charArray[0].clas == "Shaman"){de.innerHTML='<h3 class="shaman text-center">'+charArray[0].nam+'</h3>';}
				else if(gcharArray[0].clas == "Hunter"){de.innerHTML='<h3 class="hunter text-center">'+charArray[0].nam+'</h3>';}
				else if(charArray[0].clas == "Demon Hunter"){de.innerHTML='<h3 class="dh text-center">'+charArray[0].nam+'</h3>';}
				else if(charArray[0].clas == "Warlock"){de.innerHTML='<h3 class="warlock text-center">'+charArray[0].nam+'</h3>';}
				else if(charArray[0].clas == "Rogue"){de.innerHTML='<h3 class="rogue text-center">'+charArray[0].nam+'</h3>';}
				else if(charArray[0].clas == "Paladin"){de.innerHTML='<h3 class="paladin text-center">'+charArray[0].nam+'</h3>';}
				else if(charArray[0].clas == "Monk"){de.innerHTML='<h3 class="monk text-center">'+charArray[0].nam+'</h3>';}
				else if(gcharArray[0].clas == "Mage"){de.innerHTML='<h3 class="mage text-center">'+charArray[0].nam+'</h3>';}
			let dis = '';
			dis+='<article class="text-center">';
			dis+='<img class="text-center Bigport" src = http://render-us.worldofwarcraft.com/character/'+charArray[0].thumb+'>';
			dis+='<h4>'+charArray[0].clas+'</h4>';
			dis+='<p>'+charArray[0].realm+'</p>';
			dis+='<p>Level: '+charArray[0].lvl+'</p>';
			if(charArray[0].roles == "HEALING"){
				dis+='<p><img class="rounded-circle smallSet" src="img/heal.png" alt="Healing symbol>"</p>';
			}
			else if(charArray[0].roles == "TANK"){
				dis+='<p><img class="rounded-circle smallSet" src="img/tank.png" alt="Tanking symbol>"</p>';
			}
			else if(charArray[0].roles == "DPS"){
				dis+='<p><img class="rounded-circle smallSet" src="img/dps.png" alt="DPS symbol>"</p>';
			}
			dis+='<p>Achivement Points: '+charArray[0].achiv+'</p>';
			dis+='<p>Honorable Kills: '+charArray[0].hk+'</p>';
			dis+='<section class="text-center" id="talents">'
			dis+='<p class=" text-center ">Talents</p>';
			for(var y = 0 ; y < charArray[0].talents[0].talents.length ; y++){
				dis+='<img class="rounded-circle col small" src="https://render-us.worldofwarcraft.com/icons/56/'+charArray[0].talents[0].talents[y].spell.icon+'.jpg"   alt='+charArray[0].talents[0].talents[y].spell.name+' >';
			}
			dis+='</section>'
			dis+='<section id="moreInfo">';
			dis+='<h5><a href="https://worldofwarcraft.com/en-us/character/us/'+charArray[0].realm+'/'+charArray[0].nam+'"</a>Official Armory</h5>';
			dis+='<h5><a href="https://raider.io/characters/us/'+charArray[0].realm+'/'+charArray[0].nam+'"</a>Raider.IO</h5>';
			dis+='</section>'
			dis+='</article>';
			de.insertAdjacentHTML('beforeend',dis);
			}
}