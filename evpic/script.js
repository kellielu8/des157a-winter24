(function(){

    'use strict';
    console.log('reading js');


    const boxes = ['images/buncatbox.png', 'images/icecreamcatbox.png', 'images/dogbox.png', 'images/pandabox.png', 'images/plantbox.png'];

    const items = ['images/buncat.png', 'images/icecreamcat.png', 'images/dog.png', 'images/panda.png', 'images/plant.png'];

    const message = ['You got BUN CAT, a cat who loves to bake tasty pastries (not for you, but for himself).', 'You got ICE CREAM CAT, a cat who likes ice cream more than you.', 'You got POODLE, who looks like a chicken nugget from afar.', 'You got PANDA CAT, simply a cat dressed in a red panda costume.', 'You got GARDENIA SUCCULENT, a sweet little plant.'];
    let randoItemIndex = 0;
    console.log(randoItemIndex);

    //DISPLAY THE IMAGE OF THE BOX ON PAGE!
    function displayImage() {
        randoItemIndex = Math.floor(Math.random() * boxes.length);

        const imageUrl = boxes[randoItemIndex];
        document.getElementById('imgContainer').src = imageUrl;
        console.log('image container source: ' + document.getElementById('imgContainer').src);
    }

    //IF USER CLICKS BUTTON, IMAGE DISPLAYS!
    document.getElementById('generateImageButton').addEventListener('click',displayImage);
    

    //SHOW ITEM FROM EACH BOX!
    function showItem(event) {

        document.getElementById('item').src= items[randoItemIndex];   
        document.getElementById('description').innerHTML = message [randoItemIndex];

    }


    //OVERLAY - OPENS AND CLOSES
    document.querySelector('.open').addEventListener('click', function (event){
        event.preventDefault();
        document.getElementById('overlay').className = 'showing';
    
    showItem(event);
    });

    document.querySelector('.close').addEventListener('click', function (event){ 
        event.preventDefault();
        document.getElementById('overlay').className = 'hidden';

    });

   

})(); //END
