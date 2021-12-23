
        // var paragraphes = document.getElementsByClassName("p")
        // var paragraphe = document.getElementsByTagName("p")
        var paragraphes = document. querySelectorAll(".p")
        //  console.log(paragraphes[0].innerHTML)
        //  console.log(paragraphes[1].innerHTML)
        //  console.log(paragraphes[2].innerHTML)
        
        for(var i=0; i<paragraphes.length ; i++){
            console.log(paragraphes[i].innerHTML)
        }

        for(var i=0; i<paragraphes.length;i++){
            var newValue = prompt("Entrez la nouvelle valeur du paragraphe " + (i+1));
            paragraphes[i].innerHTML = newValue;
        }

        // paragraphes.forEach(function(aParagraph){
        //     console.log(aParagraph.innerHTML);
        // );

        // paragraphes.forEach((el) => {
        //     console.log(el.innerHTML);
        // );

        var message="le nombre de paraghraphes trouvés est :"+paragraphes.length;
        console.log(message);
 

