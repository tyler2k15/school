/*
   New Perspectives on HTML5, CSS, and JavaScript
   Tutorial 14
   Tutorial Case

   Author: Tyler Ronek
   Date:   4/4/16

   Filename: toc.js


   Function List
   =============

   makeTOC()
      Generates the text of the table of contents
      as a nested list

   createList(source, TOCList, headings)
      Creates a TOC list based on the source document,
      list items are appended to TOCList,
      the list items are based on the element names
      specified in the headings array

   expandCollapse()
      Expands and collapses the nested lists in the TOC

   expandCollapseDoc()
      Expands and collapses the source document to match
      to the TOC

   isHidden(object)
      Determines whether a TOC list item is hidden in the document


*/

// Generate a table of contents based on h1 through h6
// headings when the page is loaded by the browser
window.onload = makeTOC();

//Function to generate the TOC as a nested list
function makeTOC() {

    // Source document on which the TOC is based
    var source = document.getElementById("doc");

    // Location of the table of contents box
    var TOC = document.getElementById("toc");

    // Entries in the source document on which the
    // table of contents is based
    var headings = ["H1", "H2", "H3", "H4", "H5", "H6"];

    // Write a heading in the TOC Box
    TOC.innerHTML = "<h1>Table of Contents</h1>";

    // Create an ordered list element
    var TOCList = document.createElement("ol");

    // Append the list to the TOC
    TOC.appendChild(TOCList);

    // Create the list of table of contents entries
    createList(source, TOCList, headings);
}

function createList(source, TOCList, headings) {
    //

    // Loop through all of the child nodes of object,
    // sibling by sibling until no child nodes are left
    for (var n = source.firstChild; n != null; n = n.nextSibling) {

        // Determine the heading level (if any) of the current node
        var nodeLevel = headings.indexOf(n.nodeName);

        // If the node comes from a heading element,
        // create a list item and append it to the TOC
        if (nodeLevel != -1) {
            var listItem = document.createElement("li");
            listItem.innerHTML = n.innerHTML;
            TOCList.appendChild(listItem);
        }
    }
}