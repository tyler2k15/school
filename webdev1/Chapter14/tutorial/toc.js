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
    
    // Store the level of the previous list item
    // 0 = top level, 1 = 2nd level, 2 = 3rd level, etc.
    var prevLevel = 0;

    // Keep a running count of the TOC entries from
    // the source document
    var entryNum = 0;

    // Loop through all of the child nodes of object,
    // sibling by sibling until no child nodes are left
    for (var n = source.firstChild; n != null; n = n.nextSibling) {

        // Determine the heading level (if any) of the current node
        var nodeLevel = headings.indexOf(n.nodeName);

        // If the node comes from a heading element,
        // create a list item and append it to the TOC
        if (nodeLevel != -1) {

            // Add an id attribute to the element to be used
            // as the target of a hypertext link
            entryNum++;
            if (n.id == "") n.id = "heading" + entryNum;

            var listItem = document.createElement("li");
            listItem.id = "TOC" + n.id;//listItem.innerHTML = n.innerHTML;

            // Create a link to the heading node in the source document
            var linkItem = document.createElement("A");
            linkItem.innerHTML = n.innerHTML;
            linkItem.href = "#" + n.id;

            // Append the hypertext link to the TOC list item
            listItem.appendChild(linkItem);

            if (nodeLevel == prevLevel) {
                // Append the list item to the current list
                TOCList.appendChild(listItem);
            }

            else if (nodeLevel > prevLevel) {
                // Start a new nested list
                var nestedList = document.createElement("ol");
                nestedList.appendChild(listItem);

                // Append nested list to last item in the current list
                TOCList.lastChild.appendChild(nestedList);

                // Change the current list to the nested list
                TOCList = nestedList;
            }

            else {
                // Append the list item to a higher nested list

                // Calculate the difference between the previous
                // level and the higher-order level
                var levelUp = prevLevel - nodeLevel;

                // Change the current list to the higher-order list
                for (var i = 1; i <= levelUp; i++) {
                    TOCList = TOCList.parentNode.parentNode;
                }

                TOCList.appendChild(listItem);
            }

            // Update the previous node level value to the current level
            prevLevel = nodeLevel;

        }
    }
}

/*
            Section 14.1 Commit Notes:
 * Section 14.1
 * Create the following functions:
 * window.onload = makeTOC();
 * Create makeTOC(), createList(),
 * Apply indexOf() function
 * Create list item for each function

 Notes: Followed tutorial and double checked all steps,
 but it does not seem to work on chrome or firefox from my `localhost`

 ** After debugging, found that moving script src to before closing <body>
 *     tag that it now behaves as it should. Unsure why this is a bug.
 *     Debugger in WebStorm now also shows no errors, whereas before
 *     it had 3 errors:
 *     
 *     Error 1: 'Uncaught TypeError: Cannot set property 'innerHTML' of null - toc.js:56'
 *     Error 2: 'makeTOC - toc.js:56'
 *     Error 3: '(anonymous function) - toc.js:40'
 *     
 *     Where toc.js:56/40 refers to the toc.js file lines 40 and 56
 *     Line 40: window.onload = makeTOC();
 *     Line 56: TOC.innerHTML = "<h1>Table of Contents</h1>";
 *     
 *     A final note: the errors also occur when the script is at end of the
 *     <HEAD> element, even if it is also before the closing <body> element.
 */