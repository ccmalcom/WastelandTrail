This is all for personal reference, will not be included in final production

Mechanics:

Movement:
    - user will explore the world using a grid system, a la dungeon crawler games. The game sometimes functions as a side scroller, as the character will be moving west.
    - There will be buildings and towns to explore that allow users to move more freely



Interacting with world:
    - if pc is within 1 tile of another npc or an item, user may interact by clicking space bar/left click
    - some npc's may simply make a comment, while others open dialogue
    - some npc's function as traders or merchants
    - some dialog options may require skill checks
    - some interactions may result in combat
    - npc's may interact with character in the same way, including if they are hostile

Combat:
    - combat will be turn based and turn order will be established by a 'dice roll' (d10)
    - pc may perform actions on their turn, depending on inventory and skills/weapons
    - pc may also choose to flee combat, success is determined by agility mod + dice roll 

Karma:
    - even in the wastes, your reputation can preceed you. Depending on your karma score (-50 to 50), certain settlements, factions, and npcs may react differently to you

Energy:
    - this mechanic will cause players to think strategically. Each day, player must rest to rest energy. PC starts with 2 energy and each even level grants +1 energy.
    - food may refill certain amounts of energy and health
    - players who enter combat with 0 energy will suffer -2 debuff to each stat


User loads site
-game greeting, name of game, animation, start game (save game would be intersting, not sure how to do it)

-character creator:
    -name (user entered, grab from DOM)
    -stats assignment (10 point system). Stats affect success of outcomes in game. Modifier is added to dice roll. Default stats are 2 per category, pc may assign 10 points at start
        -strength
        -dexterity/agility
        -constitution/hardiness (health + energy, user begins with 1 energy)
        -wisdom/perception
        -Intelligence (first aid) 
        -Charisma
    eventual features:
        -change skin tone, gender, clothes (similar to stardew valley)
        -backstory/class (work into game mechanics)

First scene/tutorial
-Opens in saloon, in dialogue with Janice
    -Janice talking about leaving, giving context to story, pc character has options to join her or stay (doesn't actually matter)
    -Dialogue ends with Janice leaving saloon and telling pc she is leaving at dawn, with or without them
    -Player can walk around saloon and talk to people/interact with environment
    -When player walks to door:
        -bloddied, terrified npc walks in saying 'they're here, they just killed the sheriff'
        -enemies approach from east
    Objective: escape; optional: find Janice; optional: get supplies from home

    PC will find Janice along route to escape, fending off two attackers
    options:
        -help Janice
            -PC will recieve +1 karma
            -If combat successful, and pc passes first aid check, janice will survive and join party
            -If combat successful but pc does not pass first aid check, Janice will die
            -Regardless, player will recieve map 
        -ignore her and look for supplies at her house
            -PC will encounter enemy by her house
            -PC will find map, ammo, machete, and food rations at her house
            -PC will -1 karma
        -ignore her and escape
            -PC will recieve no extra map markers or bonuses, -1 karma for ignoring Janice
        

WORLD VIEW:

After escaping the town, player will enter the world view. World map is broken into hexes. 
Actions:
    -move: movement cost depends on terrain (-1 for normal, -2 for difficult terrain)
    -rest: resting restores energy bank

LOCAL VIEW:

Player begins on right side and walks leftward through hex. PC may encounter other travelers, merchants, or enemies. 

Some hexes may be located in a town
