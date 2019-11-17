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
			de.innerHTML = '<h3>'+charArray[0].nam+'</h3>';
			let dis = '';
			dis+='<article>';
			dis+='<img src = http://render-us.worldofwarcraft.com/character/'+charArray[0].thumb+'>';
			dis+='<h4>'+charArray[0].clas+'</h4>';
			dis+='<p>'+charArray[0].realm+'</p>';
			dis+='<p>Level: '+charArray[0].lvl+'</p>';
			dis+='<p>Current Role:</p>';
			dis+='<p>'+charArray[0].roles+'</p>';
			dis+='<p>Achivement Points: '+charArray[0].achiv+'</p>';
			dis+='<p>Honorable Kills: '+charArray[0].hk+'</p>';
			dis+='<section id="talents">'
			dis+='<p>Talents</p>';
			for(var y = 0 ; y < charArray[0].talents[0].talents.length ; y++){
				dis+='<img src="https://render-us.worldofwarcraft.com/icons/56/'+charArray[0].talents[0].talents[y].spell.icon+'.jpg"   alt='+charArray[0].talents[0].talents[y].spell.name+'>';
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