$(document).ready(function() {
    $('#pcGamesContent').hide();
    $('#pcGames').click(function() {
        $('#gameGrid').hide(); 
        $('#pcGamesContent').toggle(); 
    });
    $("#home").click(function() {
        $('#pcGamesContent').hide();
        $('#gameGrid').show(); 
    });
});
class Game {
    constructor(name, image, description) {
        this.name = name;
        this.image = image;
        this.description = description;
    }
}
var games = [
    new Game('Grand Theft Auto V', 'https://upload.wikimedia.org/wikipedia/en/a/a5/Grand_Theft_Auto_V.png', 'An action-adventure game by Rockstar Games.'),
    new Game('Far Cry', 'https://m.media-amazon.com/images/I/81aQxHbx9IL.jpg', 'A first-person shooter game series developed by Ubisoft.'),
    new Game('Ghost Recon Wildlands', 'https://image.api.playstation.com/cdn/UP0001/CUSA02902_00/LmixBxp3eIPxu3vc1y4Bxx3UIc3l6rzx.png?w=440', 'A tactical shooter game set in an open world environment.'),
    new Game('FC 24', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh_J4VwaFN4cj1vUTXkmrC6mSCsi5mvTEzHw&s ', 'A popular football simulation game.'),
    new Game('Assassin\'s Creed Valhalla', 'https://i.ebayimg.com/images/g/HN4AAOSwqqNfjaCX/s-l1200.jpg', 'An action role-playing game developed by Ubisoft.'),
];
document.addEventListener('DOMContentLoaded', () => {
    var searchInput = document.getElementById('search');
    var gameGrid = document.getElementById('gameGrid');
    searchInput.addEventListener('input', () => {
        var query = searchInput.value.toLowerCase();
        gameGrid.innerHTML = ''; 
        var filteredGames = games.filter(game => game.name.toLowerCase().includes(query));

        filteredGames.forEach(game => {
            var gameItem = document.createElement('div');
            gameItem.classList.add('grid-item');
            gameItem.innerHTML = `
                <img src="${game.image}" alt="${game.name}">
                <h2>${game.name}</h2>
                <p>${game.description}</p>
            `;
            gameGrid.appendChild(gameItem);
        });
    });
});
var pcGames = [
    { name: 'The Witcher 3', image: '/images/the-witcher-3-wild-hunt-cover-375x500.jpg', description: 'The game takes place in a fictional fantasy world based on Slavic mythology. Players control Geralt of Rivia, a monster slayer for hire known as a Witcher, and search for his adopted daughter, who is on the run from the otherworldly Wild Hunt..' },
    { name: ' TOMB RIDER', image: '/images/eOtEAB7.jpg', description: 'Tomb Raider is an Action-Adventure game that introduces players to the origin of one of the most identifiable video games icons of all-time,<br> Lara Croft. The game features a blend of survival, stealth, melee and ranged combat, and exploration gameplay as a young Lara Croft is forced to push herself past her know limits to survive and unravel the dark history of a forgotten island. <br> In the process she will unlock the adventurer within her. Additional game features include: weapons both familiar and new, upgradable items, a variety of play environments, and human and animal enemies...' },
    { name: 'READ DEAD REDEMPTION', image: 'https://rukminim1.flixcart.com/image/300/300/k63xle80/code-in-the-box-game/7/y/u/pc-red-dead-redemption-2-pc-standard-edition-original-imafzmkyques8mxp.jpeg', description: 'After a robbery goes badly wrong in the western town of Blackwater, Arthur Morgan and the Van der Linde gang are forced to flee. With federal agents and the best bounty hunters in the nation massing on their heels, the gang must rob, steal and fight their way across the rugged heartland of America in order to survive.<br> Lara Croft. The game features a blend of survival, stealth, melee and ranged combat, and exploration gameplay as a young Lara Croft is forced to push herself past her know limits to survive and unravel the dark history of a forgotten island. <br> In the process she will unlock the adventurer within her. Additional game features include: weapons both familiar and new, upgradable items, a variety of play environments, and human and animal enemies..' },
    { name: 'CYBERPUNK 2077', image: 'https://www.codesproduit.fr/wp-content/uploads/2021/01/Cyberpunk-2077-PC-COVER.jpg', description: 'Cyberpunk 2077 is an open-world action-adventure RPG set in Night City, a dark, futuristic megalopolis obsessed with power, glamour, and body modification' },
    { name: 'CALL OF DUTY', image: 'https://m.media-amazon.com/images/I/A10VM2eEiML._AC_UF1000,1000_QL80_.jpg', description: 'Call of Duty®: WWII Multiplayer marks an exciting return to the franchises World War II roots and combat that defined the franchise. Prepare for fast-paced, grounded action with an arsenal of iconic weapons and equipment in the fight to liberate a continent in the throes of tyranny.' },

];

pcGames.forEach(game => {
    var gameItem = document.createElement('div');
    gameItem.classList.add('grid-item');
    gameItem.innerHTML = `
        <img src="${game.image}" alt="${game.name}">
        <h3>${game.name}</h3>
        <p>${game.description}</p>
    `;
    pcGamesContainer.appendChild(gameItem);
});
document.getElementById('pcGames').addEventListener('click', () => {
    gameGrid.style.display = 'none';
    pcGamesContent.style.display = 'block';
});

document.getElementById('home').addEventListener('click', () => {
    pcGamesContent.style.display = 'none';
    gameGrid.style.display = 'block';
});
$(document).ready(function() {
    $('.game-button').click(function(event) {
        event.preventDefault();
        var url = $(this).data(''); 
        window.location.href = url; 
    });
});