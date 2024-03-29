(function(){

    'use strict';
    console.log('reading js');

    const myForm = document.querySelector('form');
    const myArticle = document.querySelector('.madlib');


    myForm.addEventListener('submit', function(event) {
        event.preventDefault(); //prevents default

        //establishing the variables
        const maleName = document.querySelector('#maleName').value;
        const num = document.querySelector('#num').value;
        const building = document.querySelector('#building').value;
        const city = document.querySelector('#city').value;
        const occupation = document.querySelector('#occupation').value;
        const occupation2 = document.querySelector('#occupation2').value;
        const tv = document.querySelector('#tv').value;
        const celebrity = document.querySelector('#celebrity').value;
      
        const celebrity2 = document.querySelector('#celebrity2').value;
        const verb = document.querySelector('#verb').value;
        const noun = document.querySelector('#noun').value;
        const verb2 = document.querySelector('#verb2').value;
        const liquid = document.querySelector('#liquid').value;
        const solid = document.querySelector('#solid').value;
        const schooling = document.querySelector('#schooling').value;
        const adj = document.querySelector('#adj').value;


        let myText;


        //IF statements to make sure that all boxes are filled out.
        if (maleName== ''){
            myText = "Please provide a male name.";
            document.querySelector('#maleName').focus();
        }

        else if (num==''){
            myText = "Please provide a number 18+.";
            document.querySelector('#num').focus();

        }

        else if (building==''){
            myText = "Please provide the name of a type of building.";
            document.querySelector('#building').focus();

        }

        else if (city==''){
            myText = "Please provide a city.";
            document.querySelector('#city').focus();

        }

        else if (occupation==''){
            myText = "Please provide an occupation title.";
            document.querySelector('#occupation').focus();

        }

        else if (occupation2==''){
            myText = "Please provide another occupation title.";
            document.querySelector('#occupation2').focus();

        }

        else if (tv==''){
            myText = "Please provide a tv show name.";
            document.querySelector('#tv').focus();

        }

        else if (celebrity==''){
            myText = "Please provide a celebrity name.";
            document.querySelector('#celebrity').focus();

        }
        
        //second set
        else if (celebrity2==''){
            myText = "Please provide another occupation celebrity name.";
            document.querySelector('#celebrity2').focus();

        }

        else if (verb==''){
            myText = "Please provide a verb.";
            document.querySelector('#verb').focus();

        }

        else if (noun==''){
            myText = "Please provide a noun.";
            document.querySelector('#noun').focus();

        }

        else if (verb2==''){
            myText = "Please provide another verb.";
            document.querySelector('#verb2').focus();

        }

        else if (liquid==''){
            myText = "Please provide a liquid.";
            document.querySelector('#liquid').focus();

        }

        else if (solid==''){
            myText = "Please provide a solid.";
            document.querySelector('#solid').focus();

        }

        else if (schooling==''){
            myText = "Please provide a level of schooling.";
            document.querySelector('#schooling').focus();

        }

        else if (adj==''){
            myText = "Please provide an adjective.";
            document.querySelector('#adj').focus();

        }

        //result
        else {

            myText = 
            
       
        `<section id="results">
            <div class="imageCont">
                <img src="images/toastf.png" id="toast" width="360">
                <h2 id="note">${maleName}, (${num})</h2>
            </div>
            

            <div class="bioCont">

                <h3>Meet your match!</h3>
                <p>Hi, my name is <strong>${maleName}</strong> (age <strong>${num}</strong>), and I live in a <strong>${building}</strong> in the heart of <strong>${city}</strong>. I am currently a <strong>${occupation}</strong> by day and a <strong>${occupation2}</strong> by night. You might have also seen me on the hit reality TV show, <strong>${tv}</strong>, where I co-starred with <strong>${celebrity}</strong> and <strong>${celebrity2}</strong>.  When I'm not <strong>${verb}</strong> with my pet <strong>${noun}</strong>, I am <strong>${verb2} ${liquid}</strong> while eating <strong>${solid}</strong>. I may have peaked in <strong>${schooling}</strong>, but I am a great catch since many people describe me as <strong>${adj}</strong>!</p>
            
                <div id = "choose">
                    <img src="images/loafy.png" id="loafy" width="150">
                    <img src ="images/toasty.png" id="toasty" width = "150">
                </div>
            
            </div>
            
        </section>`;
        }

        //UNCOMMENT THIS STUFF OUT AFTER STYLIZING
        myArticle.innerHTML = myText;
        myArticle.className = "showMadlib";

    });

})();