/*:
* @plugindesc Core plugin for plugins created by LMPGames
* @author LMPGames
*
*
* @param Add Space Between Icon and Name
* @desc When enabled, for database items that have icons, adds a space between the icon and name
* @type boolean
* @default false
*
*/
var LMPGamesCore = {};
var tempLMPGamesCore = {}; //For loading data

//Core Plugin Params
LMPGamesCore.coreParams = {};
LMPGamesCore.coreParams = PluginManager.parameters('LMPGames_Core');

function parseMapData(dataString){
	let data = JSON.parse(dataString);
	for (let key in data) {
		let value = data[key];
		if (value.substr(0, 2) == '[\"' ||
			value.substr(0, 2) == '[]' ||
			value.substr(0, 2) == '{\"' ||
			value.substr(0, 2) == '{}')
		{
			data[key] = parseMapData(value);
		}
	}

	return data;
}