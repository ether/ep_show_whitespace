exports.aceEditorCSS = function(){
  return ['ep_show_whitespace/static/css/editor.css'];
};

exports.aceEditEvent = function(hook_name, args){
  if(!args.callstack.docTextChanged) return false; // we should only run this if the pad contents is changed..
  var divs = $('iframe[name="ace_outer"]').contents().find('iframe').contents().find("#innerdocbody").children("div");
  $(divs).each(function(){
    var text = $(this).text(); // get the text
    var ch = text.charAt( text.length-1 ); // what's the last char of the string?
    var hasTrailingWhitespace = (ch.match(/^\s{0,2}/)[0].length); // see if we have trailing whitespace
    if(hasTrailingWhitespace){
      $(this).css({"background-color":"red"}); // make it red
    }else{
      if($(this).css("background-color") === "red"){ // if it's red
        $(this).css({"background-color":auto}); // remove it's color
      }
    }
  });
}
