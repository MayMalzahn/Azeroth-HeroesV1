# Project and Portfolio 4

This project allows the user to input their character name and realm, add characters too a team, and view extra character information.
GitHub Link:
In case you are not familiar with World of Warcraft, here are some name-realm pairs you can input to see the site in action:
Maethrya - Greymane

Maeloa - Greymane

Caleo - Emerald Dream

Naros - Emerald Dream

Shamae - Greymane

Angrymae - Greymane

Most of these characters will have the same number for achivement points - not a bug. Achivement points are account wide, and those characters share an account.

Known issues:
"Team" can get order shuffled on reload.
The Blizzard API does not supply a specific error if it cannot find the character you are looking for. The problem can be in either the character or realm name, but since I do not get specific information back the error has to be generic.
 "find hero" button moves on smaller screen sizes.
You can add the same character multiple times to the team.
Demon Hunters name color may be too dark to be easily seen by the visually impaired. However, it is the same color (roughly) as the official sites use for that class. I cannot make it lighter as Warlocks have a lighter purple.
Priests names are a pale golden color rather than white, the offical priest color. Everything else is in white, not fair to make them not have a special color.


Cut features:
Wanted to be able to calculate if you had a full team on the team page (1 tank, 1 healer, 3 dps) but I have run out of time to fully impliment and test this.
Should not be able to add characters of different factions to the same team. Cut due to time constraints.
Wanted the character name, class, and realm to be beside the portrait on the home and team pages, rather than below. Cut because CSS makes me want to tear my hair out, and I could not get it working.
Original design featured characters guild. Cut, because it turns out that is not stored in the character data I received from the API, and I could not find out where it was.




