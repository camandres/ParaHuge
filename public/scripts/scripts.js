/*
 *   Name: Menu Script for Huge
 *   Author: Camilo Arenas
 *	 Date: 18/08/2015
 *   Comments:
 *   -   This script will add the contents of the secondary items of the menu
 */
var url = "/api/nav.json",
    xmlhttp = new XMLHttpRequest;
xmlhttp.open("GET", url, !0), xmlhttp.onreadystatechange = function() {
    if (4 == xmlhttp.readyState) {
        var e, t, l, a = JSON.parse(xmlhttp.responseText),
            n = "";
			
        for (e = 0; e < a.items.length; e++)
            if (t = a.items[e], 0 == a.items[e].items.length) {
                n += '<li><a href="' + t.url + '"><p>' + t.label + "</p></a></li>";
                var i = document.getElementById("nav-inner")
            } else if (a.items[e].items.length > 0) {
            for (n += '<li><div class="second"><input type="radio" name="toggled" id="toggle-' + e + '" class="toggle"><label for="toggle-' + e + '"><a for="toggle-' + e + '">' + t.label + '</a><div class="arrow" for="toggle-' + e + '"></div></label><div class="dropdown"><ul>', l = 0; l < a.items[e].items.length; l++) {
                second = a.items[e].items[l], n += '<li><a href="' + second.url + '">' + second.label + "</a></li>";
                var i = document.getElementById("nav-inner");
                i.innerHTML = n
            }
            n += "</ul></div></div></li>"
        }
    }
}, xmlhttp.send(null);