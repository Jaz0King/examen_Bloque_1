//Traer el JSON con el método FETCH

fetch("./examen.json")
.then((response) => response.json())
.then((data) => bootcampData(data))
.catch((err) => console.log(err))

function  bootcampData (data) {
    console.log(data)
    for (const compis of data.examen) {
        console.log(compis)
    }
}

let compis = " "

let pintarCompis = document.getElementById("bootcampMembers");
pintarCompis.innerHTML += data.nombre.apellido;


    



          




