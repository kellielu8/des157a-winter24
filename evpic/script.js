(function(){

    'use strict';
    console.log('reading js');


    const boxes = ['images/buncatbox.png', 'images/icecreamcatbox.png', 'images/dogbox.png', 'images/pandabox.png', 'images/plantbox.png'];

    const items = ['images/buncat.png', 'images/icecreamcat.png', 'images/dog.png', 'images/panda.png', 'images/plant.png'];

    const message = ['t0', 't1', 't2', 't3', 't4'];
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
        document.getElementById('description').innerHTML = message[randoItemIndex];

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

   

})();

        // console.log('function showItem is working')
        // // console.log('event target source: ' + event.target.src);
        // console.log('image container source: ' + document.getElementById('imgContainer').src);
        // if (images[0]) {
        //     document.getElementById('item').src= "images/buncat.png";
        //     document.getElementById('description').innerHTML = "You got bun cat!"
        // } else if (images[1]) { 
        //     document.getElementById('item').src= "images/icecreamcat.png";
        //     document.getElementById('description').innerHTML = "You got ice cream cat!"
        // } else if (images[5]) { 
        //     document.getElementById('item').src= "images/plant.png";
        //     document.getElementById('description').innerHTML = "You got a succulent!"
        // }


        // if (document.getElementById('imgContainer').src == "images/buncatbox.png"){
        //     document.getElementById('item').src= "images/buncat.png";
        // } 
    


//     
//    document.querySelector('images/buncat.png').addEventListener('click',showItem)
