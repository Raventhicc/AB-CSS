// ==UserScript==
// @name         AB Anilist Links
// @version       1.1
// @description  Anilist AB linker (Edited by Raven)
// @author       Chosensilver
// @icon         https://animebytes.tv/favicon.ico
// @grant        none
// @match        https://animebytes.tv/torrents.php*
// @run-at       document-end
// ==/UserScript==

(function() {
	'use strict';

	function insertAfter(newNode, existingNode) {
		existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
	}

  let header = document.querySelectorAll('h3 a');
  header = header[header.length - 1];
  let seriesName = document.querySelectorAll('h2 a')[0].innerText;

  document.querySelectorAll('h3 a').forEach(e => {

    $(e).attr('target', '_blank');


  });

  function createnewLink(linku,link, name, blank){
   linku = document.createElement("a");
	linku.innerHTML = " | " + name;
	linku.href = link + seriesName;
  linku.style.fontWeight = "900";
  linku.style.fontSize = "15px";
  //anilistLink.style.color = "#7FFFD4"
    if(blank){

        $(linku).attr('target', '_blank');

    }
	$(linku).insertAfter(header);

  };

  
  
  createnewLink("nyaalink","https://nyaa.si/?f=0&c=0_0&q=","Nyaa",true);
  createnewLink("u2link","https://u2.dmhy.org/torrents.php?incldead=1&spstate=0&inclbookmarked=0&search=","U2",true);
  createnewLink("tvDBlink","https://www.thetvdb.com/search?query=","TVDB",true);
  createnewLink("IMDBlink","https://www.imdb.com/find?q=","IMDB",true);
  createnewLink("anilistLink","https://anilist.co/search/anime?search=","Anilist",true);


})();
