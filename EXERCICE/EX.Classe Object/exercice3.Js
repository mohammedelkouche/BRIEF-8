// local storage
//setItem 
//getItems
//removeItems
// localStorage.setItem("name","mohamed")
// console.log(localStorage.getItem("name"))
// localStorage.removeItem("name")
// console.log(localStorage.getItem("name"))



var text = document.getElementById("text") ;
var Nombre= document.getElementById("Nombre") ;
var ListePersonnes = [];
var Table = document.getElementsByTagName("table")[0];
var Trie = document.getElementById("Trie")

// class personnes
class personnes {
    constructor(nom,age){
        this.nom = nom ;
        this.age = age ;
    }
}

// vider le tableau HTML

function vider (){
   
        var tableRow = Table.getElementsByTagName('tr');
        var rowCount =  tableRow.length;
        for (var x=rowCount-1; x>0; x--){
        Table.removeChild(tableRow[x]);
        }   
}

//------- charger le tableau HTML

function charger(){
   
    vider () ;
 
    for(i=0 ; i< ListePersonnes.length ;i++ ){

        var tr = document.createElement("tr");
        Table.appendChild(tr);
        tr.innerHTML  +=  "<td>"+ListePersonnes[i].nom+"</td><td>"+ListePersonnes[i].age+"</td>" ;

    }
}

//------- validé et charger ListePersonnes javascript

function AJOUTER(){
    if(text.value!="" && Nombre.value!=""){
        var Personne = new personnes(text.value , Nombre.value);
        ListePersonnes.push(Personne);
        charger();
    }
    text.value =""
    Nombre.value =""
}


     // "TRIER"
Trie.addEventListener('change', function(){
let valeurTri = Trie.value;
switch(valeurTri){
    case 'tri1':
        trier("nom", "asc");
        break;
    case 'tri2':
        trier("nom", "dsc");
        break;
    case 'tri3':
        trier("age", "asc");
        break;
    case 'tri4':
        trier("age", "dsc");
        break;
    }
});

function trier(colonne, ordre){

    // tri par nom
    if(colonne == "nom"){
        if(ordre == "asc"){
            ListePersonnes.sort(function(a,b){
                if(a.nom < b.nom)
                    return -1;
                else if (a.nom > b.nom)
                    return 1;
                else
                    return 0;
            });
        }
        else if(ordre == "dsc"){
            ListePersonnes.sort(function(a,b){
                if(a.nom > b.nom)
                    return -1;
                else if (a.nom < b.nom)
                    return 1;
                else
                    return 0;
            });
        }
    }

    // tri par age
    else if(colonne == "age"){
        if(ordre == "asc"){
            ListePersonnes.sort(function(a,b){
                return a.age - b.age;
            });
        }
        else if(ordre == "dsc"){
            ListePersonnes.sort(function(a,b){
                return b.age - a.age;
            });
        }
    }

    charger();
}




// ---------- 2 ére methode ---------------
// html

/* <label for="fname">Full Name</label><input id="fname" type="text"><br><br>
<label for="age">Age</label><input id="age" type="text"><br><br>
<input id="btn" type="button" value="Add">
<label for="sort">Sort By</label>
<select id="sort">
    <option value="name_desc">name desc</option>
    <option value="name_asc">name asc</option>
    <option value="age_desc">age desc</option>
    <option value="age_asc">age asc</option>
</select> */

//    js

// var fname = document.getElementById("fname");
//         var age = document.getElementById("age");
//         var btn = document.getElementById("btn");
//         var table = document.getElementById("tbody");
//         var sort = document.getElementById("sort");
//         var listP = [];
//         class Person{
//             constructor(fname, age){
//                 this.firstName = fname;
//                 this.age = age;
//             }
//         }
//         function add_person(){
//             var person = new Person(fname.value, age.value);
//             listP.push(person);
//             for(var i=0;i<listP.length;i++){
//                 table.innerHTML += `<tr>
//                                     <td>${listP[i].firstName}</td>
//                                     <td>${listP[i].age}</td>
//                                 </tr>`
//             }
//         }
//         btn.addEventListener("click", function(){
//             table.innerHTML = "";
//             add_person();
//         })

//         function sort_table(){
//             if (sort.options[sort.selectedIndex].value == "age_desc"){
//                 listP.sort(function(a,b){return b.age - a.age});
//             }
//             else if (sort.options[sort.selectedIndex].value == "age_asc"){
//                 listP.sort(function(a,b){return a.age - b.age});
//             }
//             else if (sort.options[sort.selectedIndex].value == "name_asc"){
//                 listP.sort(a.firstName, b.firstName);
//             }
//             else{
//                 listP.sort(a.firstName, b.firstName);
//             }
//             table.innerHTML = "";
//             for(var i=0;i<listP.length;i++){
//                 table.innerHTML += `<tr>
//                                     <td>${listP[i].firstName}</td>
//                                     <td>${listP[i].age}</td>
//                                 </tr>`
//             }
//         }

//         sort.addEventListener("change", sort_table)