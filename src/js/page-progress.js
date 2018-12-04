/*
 * Name    : Page Progress
 * Version : 1.0.0
 * Author  : Bhaktij Koli <bhaktijkoli121@gmail.com> (bhaktijkoli.com)
 * GitHub  : https://github.com/bhaktijkoli/page-progress
*/
window.pagePrgoress = function(selector, options) {
  if(options == null) options = {};
  var object = document.querySelector(selector);
  if(!object) {
    console.error("Object not found with " + selector);
    return null;
  }
  var defaults = {
    color: '#03A9F4',
    size: '5px',
    position: 'top',
    speed: '500',
  }
  object.style.position = "fixed";
  object.style.background = option('color');
  object.style.height = option('size');
  switch (option('position')) {
    case 'bottom':
    object.style.bottom = "0px";
    break;
    default:
    object.style.top = "0px";
  }
  object.style.transition = "width "+option('speed')+'ms';

  window.addEventListener('scroll', function(e){
    var h = document.documentElement,
    b = document.body,
    st = 'scrollTop',
    sh = 'scrollHeight';
    var percent = parseInt((h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100);
    object.style.width = percent+"vw"
  });
  return object;

  function option(prop) {
    if(options[prop]) return options[prop];
    return defaults[prop];
  }
}
