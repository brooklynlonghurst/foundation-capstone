let loginEmail = document.querySelector('signInEmail')
let loginPassword = document.querySelector('passwordInput')
let loginButton = document.querySelector('loginBtn')

const baseURL = `http://localhost:4000/api`

loginButton.addEventListener('click', (event) => {
    event.preventDefault()

    let bodyObj = {
        loginEmail: loginEmail.value,
        loginPassword: loginPassword.value
    }

    loginEmail.value = ''
    loginPassword.value = ''

    axios.post(`${baseURL}/login`, body).then((result) => {
        (result.data)
    }).catch(() => {
        console.log('something went wrong')
    })
})

let signUpName = document.querySelector('signUpName')
let signUpEmail = document.querySelector('signUpEmail')
let signUpPassword = document.querySelector('passwordSignUpInput')
let signUpButton = document.querySelector('signUpBtn')

signUpButton.addEventListener('click', (event) => {
    event.preventDefault()

    let bodyObj = {
        signUpName: signUpName.value,
        signUpEmail: signUpEmail.value,
        signUpPassword: signUpPassword.value
    }
  
    signUpName.value = ''
    signUpEmail.value = ''
    signUpPassword.value = ''

    axios.post(`${baseURL}/signup`, body).then((result) => {
        (result.data)
    }).catch(() => {
        console.log('something went wrong')
    })
})