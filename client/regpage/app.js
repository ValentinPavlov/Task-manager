const regstr_btn = document.querySelector('.regstrbtn')
const login_btn = document.querySelector('.login_btn')

regstr_btn.addEventListener('click', async () => {

    const fullname = document.querySelector('.username').value
    const email = document.querySelector('.email').value
    const pass = document.querySelector('.pass').value
    // const confirm_pass = document.querySelector('.confirm_pass').value

        const response = await fetch('http://localhost:5000/api/user/register', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: fullname,
                email: email,
                password: pass,
                // confirm_pass: confirm_pass
            })
        });
        //проверка на успех регистрации
        const jsonResponse = await response.json();
        console.log(jsonResponse);
        alert(`Вы успешно зарегистрированы в системе, ${jsonResponse[jsonResponse.length-1].name} !`)
        window.location.href = 'login_page'
})

// login_btn.addEventListener('click', async () => {
//     window.location.href = 'login_page'
// })