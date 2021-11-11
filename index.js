//Traer el JSON con el método FETCH

fetch("./examen.json")
.then((response) => response.json())
.then((data) => bootcampData(data))
.catch((err) => console.log(err))

function  bootcampData (data) {
    console.log(data)
    for (const compis of data.examen) {
        console.log(compis)

        let pintarCompis = document.getElementById("BootcampMembers")
         pintarCompis.innerHTML += `<h2>${compis.nombre} ${compis.apellido}</h2>`
         + `<h1>${compis.cumpleaños}</h1>`
    }
}




    



          




