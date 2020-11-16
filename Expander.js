//Emmett Wainwright
//Expander.js
//JQuery Lab


$.makeExpander = function(root) {
   if(root.html().trim() !== "") {root.addClass("root")};
   root.children().each(function() {
      $(this).addClass("expanderBody").wrap($('<div></div>'));
      $(this).before($('<div></div>').text($(this).attr("title"))
       .addClass("title").click(function(e) {$(e.target).toggleClass("closed")
       .siblings().filter(".expanderBody").toggleClass("contracted")
      }));
   });
   root.children().each(function() {
      $(this).prepend($('<img src="down.png" class="buttons"></img>')
       .click(function(e) {var parent = $(e.target).parent();
        if(parent.prev()) {parent.insertAfter(parent.next())};}));
      $(this).prepend($('<img src="up.png" class="buttons"></img>')
       .click(function(e) {var parent = $(e.target).parent();
        if(parent.prev()) {parent.insertBefore(parent.prev())};}));
   });
}