// Generated by LiveScript 1.3.1
$(document).ready(function(){
  var imgs, shadow, shadowImage, easeInOutQuad;
  imgs = Array.from(document.querySelectorAll('.reveal'));
  shadow = document.createElement('div');
  shadowImage = document.createElement('div');
  shadow.setAttribute('class', 'reveal-shadow');
  document.body.appendChild(shadow);
  shadow.appendChild(shadowImage);
  shadow.addEventListener('click', function(){
    return import$(import$(shadow.style, shadow.source), {
      opacity: 0,
      zIndex: -1
    });
  });
  Array.from(document.querySelectorAll('.lightbox')).map(function(img){
    return img.addEventListener('click', function(){
      var box;
      box = img.getBoundingClientRect();
      shadow.setAttribute('class', 'reveal-shadow');
      shadow.box = box;
      shadow.source = {
        width: box.width + "px",
        height: box.height + "px",
        top: box.top + "px",
        left: box.left + "px",
        zIndex: 9999
      };
      import$(shadow.style, shadow.source);
      shadowImage.style.backgroundImage = "url(" + (img.getAttribute('data-lg-src') || img.getAttribute('data-src')) + ")";
      return setTimeout(function(){
        shadow.setAttribute('class', 'reveal-shadow active');
        return import$(shadow.style, {
          width: "100%",
          height: "100%",
          top: "0",
          left: "0",
          opacity: 1
        });
      }, 10);
    });
  });
  window.addEventListener('scroll', function(){
    var h, y;
    h = window.innerHeight;
    y = window.pageYOffset;
    return imgs.map(function(img){
      var top;
      top = img.getBoundingClientRect().top;
      if (top < h * 0.8 && !img.revealed) {
        img.revealed = true;
        img.node = new Image();
        img.node.onload = function(){
          return setTimeout(function(){
            var cls;
            img.style.backgroundImage = "url(" + (img.getAttribute('data-src') || '') + ")";
            cls = img.getAttribute('class').split(' ');
            if (!~cls.indexOf('on')) {
              cls.push('on');
            }
            return img.setAttribute('class', cls.join(' '));
          }, Math.random() * 200);
        };
        return img.node.src = img.getAttribute('data-src') || '';
      }
    });
  });
  window.scrollto = function(node, dur){
    var element, ref$, des, src, diff, start, animateScroll;
    dur == null && (dur = 500);
    element = document.documentElement || document.body;
    if (typeof node === 'string') {
      node = document.querySelector(node);
    }
    ref$ = [node.getBoundingClientRect().top, window.pageYOffset], des = ref$[0], src = ref$[1];
    ref$ = [des - src, -1], diff = ref$[0], start = ref$[1];
    animateScroll = function(timestamp){
      var val;
      if (start < 0) {
        start = timestamp;
      }
      val = easeInOutQuad(timestamp - start, src, diff, dur);
      element.scrollTop = val;
      if (timestamp <= start + dur) {
        return requestAnimationFrame(animateScroll);
      }
    };
    return requestAnimationFrame(animateScroll);
  };
  return easeInOutQuad = function(t, b, c, d){
    t = t / (d * 0.5);
    if (t < 1) {
      return c * 0.5 * t * t + b;
    }
    t = t - 1;
    return -c * 0.5 * (t * (t - 2) - 1) + b;
  };
});
function import$(obj, src){
  var own = {}.hasOwnProperty;
  for (var key in src) if (own.call(src, key)) obj[key] = src[key];
  return obj;
}