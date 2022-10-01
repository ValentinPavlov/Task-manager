const login_btn = document.querySelector('.login_btn')
const reg_btn = document.querySelector('.reg_btn')

login_btn.addEventListener('click', async () => {

    const email = document.querySelector('.email').value
    const pass = document.querySelector('.pass').value

        const login_request = await fetch('http://localhost:5000/api/user/auth/', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: pass
            })
        })

        // //проверка на успех логина
        const jsonResponse = await login_request.json();
        console.log(jsonResponse);
        window.location.href = 'http://localhost:5000/taskpage/index.html'
        // //спросить у Ани как загружаться
})

// reg_btn.addEventListener('click', async () => {
//     window.location.href = 'reg_page'
// })