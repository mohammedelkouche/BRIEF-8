

 // ----------declaration des variables  ------------

    var MyForm = document.getElementById("MyForm");
    var myTitle = document.getElementById('Title');
    var myAuthor = document.getElementById('Author');
    var myPrice = document.getElementById('Prix');
    var myEmail = document.getElementById('Email');
    var myDate = document.getElementById('date');
    var myLangue = document.getElementById('langue');
    // var myselect = document.getElementById('select');
    // var myType = document.getElementById('type');
    var type = document.getElementsByClassName("type");
    var input = document.getElementsByTagName("input");

    var erreurTitle = document.getElementById("erreurTitle");
    var erreurAuthor = document.getElementById("erreurAuthor");
    var erreurprice = document.getElementById("erreurprice");
    var erreurEmail = document.getElementById("erreurEmail");
    var erreurdate = document.getElementById("erreurdate");
    var erreurLangue = document.getElementById("erreurLangue");
    var erreurType = document.getElementById("erreurType");
    var Roman = document.getElementById("Roman");
    var Essai = document.getElementById("Essai");
    var BandeDessinée = document.getElementById("Bande-Dessinée");
    var Table = document.getElementsByTagName("table")[0];
    var tableBody = document.getElementById("tableBody");
    var listBooks = [];

    // créer une  class book

    class book {
        constructor(title, author, price, email, date, language, type){
            this.title = title
            this.author = author
            this.price = price
            this.email = email
            this.date = date
            this.language = language
            this.type = type
            }
        Detailbook(){
            return "The book " + this.title + " is a " + this.type + " in " + this.language +" language, written by " + this.author + " and published on the " + this.date + " .The price of " +this.title+ " is " + this.price+ " Dhs. "
        }
    }
    

        // localstorage
        /* JSON.parse
        When receiving data from a web server, the data is always a string.
        Parse the data with JSON.parse(), and the data becomes a JavaScript object.*/

    var getdata = JSON.parse(localStorage.getItem("data"));
    if(getdata!= null){
        for (i=0 ; i<getdata.length;i++ ){
        
            var list =new book(getdata[i].title,getdata[i].author,getdata[i].price,getdata[i].email,getdata[i].date,getdata[i].language,getdata[i].type)
            listBooks.push(list);
        }
    }
    

    

    


    //TRIE l'ordre alphabétique des titres. 
        function trie(){
            listBooks.sort(function(a,b){
                if(a.title.toUpperCase()< b.title.toUpperCase())
                    return -1;
                else if (a.title.toUpperCase() > b.title.toUpperCase())
                    return 1;
                else
                    return 0;
            });
        }

    // ------------------ Methode 1: insertRow / insertCell --------------------

            // -------------- Insert table  from listBooks  ----------------

        function insertTable(){

            for(i=0 ; i< listBooks.length ;i++){
            

                var row = tableBody.insertRow(tableBody.rows.length);

                row.insertCell(0).innerHTML = listBooks[i].title ;
                row.insertCell(1).innerHTML = listBooks[i].author;
                row.insertCell(2).innerHTML = listBooks[i].price;
                row.insertCell(3).innerHTML = listBooks[i].email;
                row.insertCell(4).innerHTML = listBooks[i].date;
                row.insertCell(5).innerHTML = listBooks[i].language;
                row.insertCell(6).innerHTML = listBooks[i].type;  
                row.insertCell(7).innerHTML = 
                                            "<input class='button' id='UpdateButton' onclick='EditRow(this)' type='button' value='Edit'> " +
                                            "<input class='button' id='DeleteButton' onclick='deleteRow(this)' type='button' value='Delete'>";
                }
            }    
                       

// ---------------------- function ------------------------

        // -------------- Delete row --------------
                
        function deleteRow(supprimer) {
            
            if (confirm("Prees Okey, If you want to delete data.")) 
                {
                    var i = supprimer.parentNode.parentNode.rowIndex-1;
                    listBooks.splice(i,1);
                    trie ();
                    localStorage.setItem("data", JSON.stringify(listBooks));
                    tableBody.innerHTML="";  
                    insertTable() ;
                }    
        }
        
        // -------------- Edit row --------------
           
        function EditRow(modifier) {
            var i = modifier.parentNode.parentNode.rowIndex-1;

            var row = tableBody.rows[i];
            if (modifier.value == "Edit") 
            {
                myTitle.value  = row.cells[0].innerHTML;
                myAuthor.value = row.cells[1].innerHTML;
                myPrice.value  = row.cells[2].innerHTML;
                myEmail.value  = row.cells[3].innerHTML;
                myDate.value   = row.cells[4].innerHTML;
                myLangue.value = row.cells[5].innerHTML;

                for ( i = 0; i < type.length; i++) {

                    if (row.cells[6].innerHTML == type[i].value) {
                        type[i].checked = true;
                    }
                    
                }
                modifier.value = "Save"
                document.getElementById("submit").setAttribute("disabled", "true");
            }
            else {
                listBooks[i].title = myTitle.value;
                listBooks[i].author = myAuthor.value ;
                listBooks[i].price = myPrice.value;
                listBooks[i].email = myEmail.value ;
                listBooks[i].date = myDate.value;
                listBooks[i].language = myLangue.value;
                for (var j = 0; j < type.length; j++) {
                    if (type[j].checked) {
                        listBooks[i].type = type[j].value;
                    }
                }
            trie ();
            tableBody.innerHTML="";  
            localStorage.setItem("data", JSON.stringify(listBooks));
            insertTable() ;
            modifier.value = "Edit";
            document.getElementById("submit").removeAttribute("disabled")            
        } 
    }
    function printTable(){
        var tableDiv = document.getElementsByTagName("tbody")[0].innerHTML;
        var bodyContent = document.body.innerHTML;

        document.body.innerHTML = tableDiv;
        window.print();
        document.body.innerHTML = bodyContent;
    }


MyForm.addEventListener("submit", function(e)
{
    e.preventDefault();

    validationOK = true;

        // --------------- myTitle -----------------

        
    if( myTitle.value.trim() =="" )
    {
        erreurTitle.innerHTML = ('This field is required');
        erreurTitle.style.color ='red';
        validationOK = false;  
    }
    else if(!isNaN(myTitle.value)){
        erreurTitle.innerHTML = ('Enter letters');
        erreurTitle.style.color ='red';
        validationOK = false; 
    }
    else if(myTitle.value.length>30){
        erreurTitle.innerHTML = ('Enter less than 30 letters');
        erreurTitle.style.color ='red';
        validationOK = false;
    }

    else {
        erreurTitle.innerHTML = ('Valid');
        erreurTitle.style.color ='#006400';
    }
    
        // --------------- myAuthor -----------------


    if( myAuthor.value.trim() ==""){
        erreurAuthor.innerHTML = ('This field is required');
        erreurAuthor.style.color ='red';
        validationOK = false;  
    }
    else if(!isNaN(myAuthor.value)){
        erreurAuthor.innerHTML = ('Enter letters');
        erreurAuthor.style.color ='red';
        validationOK = false;
    }
    else if(myAuthor.value.length>30){
        erreurAuthor.innerHTML = ('Enter less than 30 letters');
        erreurAuthor.style.color ='red';
        validationOK = false;
    }
    else{
        erreurAuthor.innerHTML = ('Valid');
        erreurAuthor.style.color ='#006400';
    }

        // --------------- myprice -----------------

        //https://www.sitepoint.com/basic-javascript-regular-expression/
        
        var regPrice = /[(0-9)+.?(0-9)*]+/ ;

    if(myPrice.value !==""){
         
        if(regPrice.test(myPrice.value)){
            erreurprice.innerHTML = ('Valid');
            erreurprice.style.color ='#006400';
        }
        else{
            erreurprice.innerHTML = ("Invalid Price Format");
            erreurprice.style.color ='red';
            validationOK = false;
        }
    }

    else{
        erreurprice.innerHTML = ("This field is required'");
        erreurprice.style.color ='red';
        validationOK = false;
    }
    

        // --------------- myEmail -----------------
      
        
    var regEmail = /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,6}$/ ;

    if(myEmail.value !==""){

        if(regEmail.test(myEmail.value) ){

            erreurEmail.innerHTML = ('Valid');
            erreurEmail.style.color ='#006400';
        }
        else{
            erreurEmail.innerHTML =('Invalid Email Format');
            erreurEmail.style.color ='red' ;
            validationOK = false;
        }     
    }
    else{
        erreurEmail.innerHTML =('This field is required');
        erreurEmail.style.color ='red' ;
        validationOK = false;
    }

        // --------------- mydate -----------------


    if(myDate.value ==""){
        erreurdate.innerHTML = ('This field is required');
        erreurdate.style.color ='red';
        validationOK = false;
    }
    else{
        erreurdate.innerHTML = ('Valid');
        erreurdate.style.color ='#006400';
    }
    
        // --------------- myLangue -----------------

    
    if(myLangue.value == ""){
        erreurLangue.innerHTML = ('Select one language');
        erreurLangue.style.color ='red';
        validationOK = false;
    } 
    else{
        erreurLangue.innerHTML = ('Valid');
        erreurLangue.style.color ='#006400';
    }  

        // --------------- mytype -----------------

    
    if( !(Roman.checked || Essai.checked || BandeDessinée.checked)){
        erreurType.innerHTML = (' select one type');
        erreurType.style.color ='red';
        validationOK = false;
    } 
    else{
        erreurType.innerHTML = ('Valid');
        erreurType.style.color ='#006400';   
    }
    
        // --------------- validationOK = true -----------------


    if(validationOK ){
        
        // Effacer les erreurs 
        erreurTitle.innerHTML = "" ;
        erreurAuthor.innerHTML = "" ;
        erreurprice.innerHTML = "" ;
        erreurEmail.innerHTML = "" ;
        erreurdate.innerHTML = "" ;
        erreurLangue.innerHTML = "" ;
        erreurType.innerHTML = "" ;

                
                var temp_cell="";
                    for(var i=0 ; i<type.length ; i++){
                        if(type[i].checked)
                        {
                            temp_cell = type[i].value;
                        }
                    }

            // OBJET  "BOOK" 

                var BOOK = new book(myTitle.value ,myAuthor.value ,myPrice.value ,myEmail.value ,myDate.value ,myLangue.options[myLangue.selectedIndex].value ,temp_cell)
                listBooks.push(BOOK);
            
            // TRIE     

                trie()  

                localStorage.setItem("data", JSON.stringify(listBooks));
      
            // vider la table html 

                tableBody.innerHTML="";  
                
                insertTable()

                var mesage = BOOK.Detailbook();
                document.getElementById("mesage").innerHTML= mesage ;
                 

                        //--------clear form methode 1 -------

                    for(var j = 0; j<5; j++){
                        input[j].value = "";
                    } 

                    myLangue.value=""; 

                    var clear = document.getElementsByClassName("type");
                    for (var j = 0 ; j < clear.length; j++) {
                            if (clear[j].type == "radio") {
                            clear[j].checked = false;
                            }
                        }


        }  
    
    }
                    
) 