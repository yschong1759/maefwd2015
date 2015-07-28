!function displayFunction() {
	var table = document.getElementById("displayTable");
	var type = document.getElementById("pokeType").options[document.getElementById("pokeType").selectedIndex].text;
	var pokemon = document.getElementById("pokemonSelect").options[document.getElementById("pokemonSelect").selectedIndex].text;
	var row = table.insertRow(0);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	cell1.innerHTML = type;
	cell2.innerHTML = pokemon;
}
