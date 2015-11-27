

var GLOBALS = {
}


var exponate = {};


/** Lese Daten aus Webseite */
function init(){
	Array.prototype.forEach.call(document.getElementsByClassName("row"), function(element){
		var uuid = element.dataset.uuid;
		if (uuid){
			exponate[uuid] = element;
		}
	});
}


var state = {
	$: {},
	_data: {
		discovered: {},
		visited: {}, //besuchte Exponate
	},
	init: function(){
		this.$.body = document.getElementsByTagName('body')[0];
		this.$.countDiscovered = document.getElementById('count_discovered');
		this.$.countTotal = document.getElementById('count_total'); 
		this.render([]);
	},
	render: function(beacons){
		//Body resetten
		this.$.body.className = '';
		
		//Position Exponate resetten
		for (var x in exponate){
			exponate[x].className= 'row hidden'; 
		}
		
		//Neue Positionen bestimmen
		for (var i = 0; i < beacons.length; i+=1){
			//Body Klasse basierend auf Anzahl Beacons
			this.$.body.classList.add('teaser-' + (i + 1));
						
			//Exponat positionieren
			var uuid = beacons[i][0];
			exponate[uuid].className= 'row ' + 'positioned position-' + (i + 1);
			
			if (i == 0){
				this._data.visited[uuid] = true;
			}
			this._data.discovered[uuid] = true;
		}

		//Aktualisiere alle besuchten Exponate
		var total = 0;
		var discovered = 0;
		for (var x in exponate){
			total += 1;
			if (this._data.visited[exponate[x].dataset.uuid]){
				exponate[x].classList.add('visited'); 
			}
			if (this._data.discovered[exponate[x].dataset.uuid]){
				exponate[x].classList.add('discovered'); 
				discovered += 1;
			}
		}
		state.$.countTotal.innerHTML = total;
		state.$.countDiscovered.innerHTML = discovered;
	},
	save: function(){
		
	},
	load: function(){
		
	}
}





/**
 * Externe Funktionen
 */
 
 
 window._announceBeacons = function(beaconList){
	 
 }

 /** 
 * State berechnen
 * [["UUID-123123", 400],["UUID-234234", 123]]
 */

 /** Tests */
function test(id){
  console.log('Running Test ' + id);
  var tests = [
	[],
	[["B3", 100]],
	[["B4", 200],["B2", 100]],
	[["B3", 300],["B2", 200],["B1", 100]]  
  ];
  state.render(tests[id]);
}

window.onload = function(){
	init();
	state.init();
	console.log('exponate', exponate);
}
