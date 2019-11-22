class char
{
	constructor()
	{
	
	}
	static createChar(nam,realm,clas,lvl,achiv,thumb,hk,talents,role,fac)
	{
		if(clas == 1){

			var cl = "Warrior";
			return new Warrior(nam,realm,cl,lvl,achiv,thumb,hk,talents,role,fac);
		}
		if(clas == 2){

			var cl = "Paladin";
			return new Paladin(nam,realm,cl,lvl,achiv,thumb,hk,talents,role,fac);
		}
		if(clas == 3){

			var cl = "Hunter";
			return new Hunter(nam,realm,cl,lvl,achiv,thumb,hk,talents,role,fac);
		}
		if(clas == 4){

			var cl = "Rogue";
			return new Rogue(nam,realm,cl,lvl,achiv,thumb,hk,talents,role,fac);
		}
		if(clas == 5){

			var cl = "Priest";
			return new Priest(nam,realm,cl,lvl,achiv,thumb,hk,talents,role,fac);
		}
		if(clas == 6){

			var cl = "Death Knight";
			return new DeathKnight(nam,realm,cl,lvl,achiv,thumb,hk,talents,role,fac);	
		}
		if(clas == 7){

			var cl = "Shaman";
			return new Shaman(nam,realm,cl,lvl,achiv,thumb,hk,talents,role,fac);
		}
		if(clas == 8){

			var cl = "Mage";
			return new Mage(nam,realm,cl,lvl,achiv,thumb,hk,talents,role,fac);
		}
		if(clas == 9){

			var cl = "Warlock";
			return new Warlock(nam,realm,cl,lvl,achiv,thumb,hk,talents,role,fac);
		}
		if(clas == 10){

			var cl = "Monk";
			return new Monk(nam,realm,cl,lvl,achiv,thumb,hk,talents,role,fac);
		}
		if(clas == 11){

			var cl = "Druid";
			return new Druid(nam,realm,cl,lvl,achiv,thumb,hk,talents,role,fac);
		}
		if(clas == 12){

			var cl = "Demon Hunter";
			return new DemonHunter(nam,realm,cl,lvl,achiv,thumb,hk,talents,role,fac);
		}
		
		else
		{
			window.alert("I cannot create that class. Class number is: "+clas);
		}
	}
	
	
}