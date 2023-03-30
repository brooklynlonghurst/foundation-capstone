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

    login(bodyObj)

    loginEmail.value = ''
    loginPassword.value = ''

    axios.post(`${baseURL}/login`, body).then((result) => {
        (result.data)
    }).catch(() => {
        console.log('something went wrong')
    })
})