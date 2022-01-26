// ==UserScript==
// @name         AB Anilist Links
// @version       1.1.1
// @description  Anilist AB linker (Edited by Raven)
// @author       Dattebayo13
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
  let seriesAnidb = document.querySelectorAll('h3 a')[0];

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

    function createnewLink2(linku, link1, link2, name, blank){
   linku = document.createElement("a");
	linku.innerHTML = " | " + name;
	linku.href = link1 + seriesAnidb + link2 ;
  linku.style.fontWeight = "900";
  linku.style.fontSize = "15px";
  //anilistLink.style.color = "#7FFFD4"
    if(blank){

        $(linku).attr('target', '_blank');

    }
	$(linku).insertAfter(header);

  };



  createnewLink("nyaalink","https://nyaa.si/?f=0&c=0_0&q=","Nyaa",true);
  createnewLink2("u2link","https://u2.dmhy.org/torrents.php?incldead=1&spstate=0&inclbookmarked=0&search=","&search_area=4&search_mode=2","U2",true);
  createnewLink("Sonarr","http://localhost:9090/add/new?term=","Sonarr",true);
  createnewLink("tvDBlink","https://www.thetvdb.com/search?query=","TVDB",true);
  createnewLink("IMDBlink","https://www.imdb.com/find?q=","IMDB",true);
  createnewLink("anilistLink","https://anilist.co/search/anime?search=","Anilist",true);


})();
