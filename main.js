

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

 // var mytype = /^[a-zA-Z-\s]+$/;

// ---------------------- function ------------------------

        // -------------- Delete row --------------
                
        function deleteRow(supprimer) {
            
            if (confirm("Prees Okey, If you want to delete data.")) 
                {
                    var i = supprimer.parentNode.parentNode.rowIndex;
                    Table.deleteRow(i);
                }    
        }
        
        // -------------- Edit row --------------
           
        function EditRow(modifier) {
            var i = modifier.parentNode.parentNode.rowIndex;
            var row = Table.rows[i];
            if (modifier.value == "Edit") 
            {
                myTitle.value  = row.cells[0].innerHTML;
                myAuthor.value = row.cells[1].innerHTML;
                myPrice.value  = row.cells[2].innerHTML;
                myDate.value   = row.cells[3].innerHTML;
                myLangue.value = row.cells[4].innerHTML;

                for (var i = 0; i < type.length; i++) {

                    if (row.cells[5].innerHTML == type[i].value) {
                        type[i].checked = true;
                    }
                    
                }
                modifier.value = "Save"
                document.getElementById("submit").setAttribute("disabled", "true");
            }
            else {
                row.cells[0].innerHTML = myTitle.value;
                row.cells[1].innerHTML = myAuthor.value ;
                row.cells[2].innerHTML = myPrice.value;
                row.cells[3].innerHTML = myDate.value;
                row.cells[4].innerHTML = myLangue.options[myLangue.selectedIndex].value;
                for (var i = 0; i < type.length; i++) {
                    if (type[i].checked==true) {
                        row.cells[5].innerHTML = type[i].value;
                    }
                    // type[i].checked==(true ) 
                    // row.cells[5](.innerHTML)
                }
                modifier.value = "Edit";
                document.getElementById("submit").removeAttribute("disabled")
            }
            
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


    if(myPrice.value ==""){
        erreurprice.innerHTML = ('This field is required');
        erreurprice.style.color ='red';
        validationOK = false;
    }
    else if(!isNaN(myPrice.value) ){
        if(myPrice.value>0){
            erreurprice.innerHTML = ('Valid');
            erreurprice.style.color ='#006400';
        }
        else{
            erreurprice.innerHTML = ("Enter a number >0 !");
            erreurprice.style.color ='red';
            validationOK = false;
        }
    }
    else{
        erreurprice.innerHTML = ("Enter number");
        erreurprice.style.color ='red';
        validationOK = false;
    }
    

        // --------------- myEmail -----------------
        
        if(myEmail.value !==""){
            
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

        // alert('Formulaire envoyé !') ;

                class book {
                    constructor(title, author, email, price, date, language, type){
                        this.title = title
                        this.author = author
                        this.email = email
                        this.price = price
                        this.date = date
                        this.language = language
                        this.type = type
                    }
                    DétailOuvrage(){
                        return "book" + title + "is a" + type + "in" + language +"language, written by" + author + "and published on the" + date + ". The price of" +title+ " is" + price+ "Dhs. "
                    }
                }

        // ------------------ Methode 1: insertRow / insertCell --------------------

                // -------------- Insert Row ----------------

                // var row = Table.insertRow(-1);
                var row = Table.insertRow(Table.rows.length);

                // -------------- Insert cells to the Row ----------------

                row.insertCell(0).innerHTML = myTitle.value;
                row.insertCell(1).innerHTML = myAuthor.value;
                row.insertCell(2).innerHTML = myPrice.value;
                row.insertCell(3).innerHTML = myDate.value;
                row.insertCell(4).innerHTML = myLangue.options[myLangue.selectedIndex].value;
                
                var temp_cell="";
                    for(var i=0 ; i<type.length ; i++){
                        if(type[i].checked)
                        {
                            temp_cell = type[i].value;
                        }
                    }
                row.insertCell(5).innerHTML = temp_cell;
                row.insertCell(6).innerHTML = 

                        "<input class='button' id='UpdateButton' onclick='EditRow(this)' type='button' value='Edit'> " +
                        "<input class='button' id='DeleteButton' onclick='deleteRow(this)' type='button' value='Delete'>";
                        

                         //--------clear form methode 1 -------

                    for(var j = 0; j<4; j++){
                        input[j].value = "";
                    } 
                    var clear = document.getElementsByClassName("type");
                    for (var j = 0 ; j < clear.length; j++) {
                            if (clear[j].type == "radio") {
                            clear[j].checked = false;
                        }
                    }

                        //--------- clear form methode 2------
                // myTitle.value = "";
                // myAuthor.value = "";
                // myPrice.value = "";
                // myDate.value = "";
                // myLangue.value = "";
                // }  
                
                // var x = document.getElementsByClassName("type");
                // var i;
                // for (i = 0; i < x.length; i++) {
                // if (x[i].type == "radio") {
                // x[i].checked = false;
                //   } 
                // }
     
                    
    
                // --------- Methode 2 create buttons -----------

                // var UpdateButton = document.createElement("button");
                // var DeleteButton = document.createElement("button");
                // var cell6 =  row.insertCell(6)
                // cell6 .appendChild(UpdateButton); 
                // UpdateButton.innerHTML="Update";
                // cell6 .appendChild(DeleteButton);
                // DeleteButton.innerHTML="Remove";
               
  
        // ------------------ Methode 2: innerHTML --------------------

                // var temp_cell="" ;
                //             for(var i=0;i<type.length;i++){
                //                 if(type[i].checked){
                //                     temp_cell = type[i].value;
                //                 }
                //             }
                
                // var tableAjoute = `
                //                     <tr>
                //                         <td>${myTitle.value}</td>
                //                         <td>${myAuthor.value}</td>
                //                         <td>${myPrice.value}</td>
                //                         <td>${myDate.value}</td>
                //                         <td>${myLangue.options[myLangue.selectedIndex].value}</td>
                //                         <td>${temp_cell}</td>
                //                     </tr>`;

                // Table.innerHTML+=tableAjoute; 

        }  

    
    }
            
		    
	
          
) 

   