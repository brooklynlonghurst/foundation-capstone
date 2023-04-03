let loginEmail = document.getElementById('signInEmail')
let loginPassword = document.getElementById('passwordInput')
let loginButton = document.getElementById('loginBtn')

const baseURL = `http://localhost:4000/api`

loginButton.addEventListener('click', (event) => {
    event.preventDefault()

    let body = {
        loginEmail: loginEmail.value,
        loginPassword: loginPassword.value
    }

    loginEmail.value = ''
    loginPassword.value = ''

    axios.post(`${baseURL}/login`, body).then((result) => {
        // console.log('hello')
        window.location.assign('http://127.0.0.1:5501/client/profile.html')
        //console.log(result.data)
    }).catch(() => {
        console.log('something went wrong')
    })
})

let signUpName = document.getElementById('signUpName')
let signUpEmail = document.getElementById('signUpEmail')
let signUpPassword = document.getElementById('passwordSignUpInput')
let signUpButton = document.getElementById('signUpBtn')

signUpButton.addEventListener('click', (event) => {
    event.preventDefault()

    let body = {
        signUpName: signUpName.value,
        signUpEmail: signUpEmail.value,
        signUpPassword: signUpPassword.value
    }
  
    signUpName.value = ''
    signUpEmail.value = ''
    signUpPassword.value = ''

    axios.post(`${baseURL}/signup`, body).then((result) => {
        console.log(result.data)
    }).catch(() => {
        console.log('something went wrong')
    })
})


let modal = document.getElementById("signup-popup")
let btn = document.getElementById("signUpBtn")
let span = document.getElementsByClassName("close")[0]

btn.onclick = function() {
    modal.style.display = "block";
}
  
span.onclick = function() {
    modal.style.display = "none";
}
  
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}

const signUpMessage = `<h3>Thanks for signing up, ${signUpName}!</h3>`

document.h3.innerHTML = signUpMessage