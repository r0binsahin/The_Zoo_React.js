[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/lARfQeTG)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11034641&assignment_repo_type=AssignmentRepo)


## En lite mindre inlämning
Använd react för att skapa en sida för ett zoo.

Det skall gå att mata djuren.

En lista med djur finns tillängenlig på: https://animals.azurewebsites.net/api/animals

Du behöver ladda ner djuren till din applikation och spara dem i applikationen. Det kommer inte gå att ändra djuren via api:t. Förslagsvis lagrar dudem i localStorage eller sessionStorage.

## G
- [x] Skapa en SPA (i react med typescript) som innehåller en startsida där djuren presenteras med namn och en kort beskrivning. Det skall gå att klicka på ett djur för att se mer information om detta djur via en egenroute.

- [x] Från djurets egna sida skall du kunna markera om djuret nu är matat eller inte via en knapp som heter Mata djur. När du klickar på denna knapp skall djurets status ändras så att det framgår att det är matat. Och det skall inte längre gå att klicka på knappen. Du behöver också lägga in tiden som djuret matades.

### VG
- [x] När du går in på djurets sida nästa gång kontrollerar du om det har gått mer än tre timmar sedan senaste matningen. Om så är fallet nollställs matningen och det skall gå att mata djuret igen.

- [x] För lite extra utmaning, skall ni presentera en liten notis på startsidan, samt på djursidan, om att ett djur behöver matas om det är mer än fyra timmar sedan djuret matades.
