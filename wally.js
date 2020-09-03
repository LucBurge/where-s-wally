(function() {

  let magic = document.querySelector('.magic');
  let magicWHalf = magic.offsetWidth / 2;

  document.body.addEventListener('mousemove',function(e){
    magic.style.left = e.pageX - magicWHalf+'px';
    magic.style.top = e.pageY - magicWHalf+'px';
  });

  document.body.addEventListener('mouseout',function(e){
    //magic.style.left = 'calc(50% - 10rem)';
    //magic.style.top = 'calc(50% - 10rem)';
  });

})();