$(function(){ //when jQuery is ready

  $('.images').shuffleChildren();
  //slice: how many you want, how many there are
  $('.images').children().slice(5,22).remove();

  $('.images').packery({
    // itemSelector: '.packery'
    transitionDuration: 0
  });

  $('.images').children().each(function(){
    var rand = Math.random() * 200; //get a random # between 0 and 200
    var rand2 = Math.random() * (400 - 100) + 100; //get a random # between 0 and 200

    $(this).css('margin', rand) // make this child hav a random margin from the # above.
    $(this).css('width', rand2) // make this child hav a random margin from the # above.
    $('.images').packery('layout'); //repack it.

  })


  $('.see').click(function(){
    console.log('see clicked');
    $('.zoom').zoom();

    $('.images').children().find('canvas').remove();



  })

  $('.play').click(function(){
    console.log('play clicked');
    $('.zoom').trigger('zoom.destroy')

    $('.images').children().each(function(){

      var me = $(this).find('img');

      var sketch = function(p) {
        p.setup = function(){
          p.createCanvas(me.width(), me.height()); //you can change the size here
        }
        p.draw = function(){
          if(p.mouseIsPressed){
            p.stroke(255,255,255);
            p.strokeWeight(5);
            p.line(p.mouseX,p.mouseY,p.pmouseX,p.pmouseY)
          }
        }
      };

      new p5(sketch, this); // make sure this is the same 'id' as the div you want the drawing to go into.

    })


  })


})







$.fn.shuffleChildren = function() {
    $.each(this.get(), function(index, el) {
        var $el = $(el);
        var $find = $el.children();

        $find.sort(function() {
            return 0.5 - Math.random();
        });

        $el.empty();
        $find.appendTo($el);
    });
};
