'use strict';

exports.aceEditorCSS = () => ['ep_show_whitespace/static/css/editor.css'];

exports.aceEditEvent = (hookName, args) => {
  // we should only run this if the pad contents is changed..
  if (!args.callstack.docTextChanged) return false;
  const divs = $('iframe[name="ace_outer"]').contents()
      .find('iframe').contents().find('#innerdocbody').children('div');
  $(divs).each(function () {
    // get the text
    const text = $(this).text();
    // what's the last char of the string?
    const ch = text.charAt(text.length - 1);
    // see if we have trailing whitespace
    const hasTrailingWhitespace = (ch.match(/^\s{0,2}/)[0].length);
    if (hasTrailingWhitespace) {
      // make it red
      $(this).css({'background-color': '#ffe1e1'});
      // if it's red
    } else if ($(this).css('background-color') === '#ffe1e1') {
      // remove it's color
      $(this).css({'background-color': 'auto'});
    }
  });
};
