/*
   New Perspectives on HTML, CSS, and JavaScript
   Tutorial 13
   Case Problem 1

   Author: Tyler Ronek
   Date:   4/4/16

   Function List
   =============

   startup()
      Run when the Web page is loaded; applies the onclick
      event handlers to the font buttons.

   resizeText()
      Changes the inline font-size style for the document body,
      based on the value of the font image button being clicked.
	
*/

/*
        Create the startup() function
        The purpose of this function is to apply onclick event handlers  to the
        two font resize buttons.
        Create the fontButtons variable containing all of the page elements that
        belong to the fontsizer class. Loop through that collection and add an
        event handler to each item in the collection to run the resizeText()
        function when clicked.
 */

window.onload = startup();
function startup() {
    var fontButtons = document.getElementsByClassName("fontsizer");
    var i;
    alert(fontButtons.length);
    for (i = 0; i < fontButtons.length; i++) {
        fontButtons[i].onclick=function(){resizeText(this);};
    }

    function resizeText(objButton) {
        var fontChange;
        fontChange = parseFloat(objButton.value);

        if (document.body.style.fontSize == "") {
            document.body.style.fontSize = "1.0em";
        }

        var currentFontSize;
        alert("changed");
        currentFontSize = parseFloat(document.body.style.fontSize);
        currentFontSize = currentFontSize+fontChange;
        document.body.style.fontSize = "currentFontSize+em"
    }