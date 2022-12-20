const regstr_btn = document.querySelector('.create_acc')
const checkTypeData = (name, mail, pass, confirm) => {
    try {
        let count = 0;
        if (/^[a-zA-Z0-9_]+$/g.test(name)) count++
        else throw new Error(`You must use only letters/numbers and _.`)
        if (/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(mail)) count++
        else throw new Error(`The mail does not meet the condition`)
        if (pass.length > 7) count++
        else throw new Error(`Password cannot be less than 8 characters long`)
        if (pass === confirm) count++
        else throw new Error(`Passwords do not match`)
        return count
    } catch (error) {
        return error
    }
}

regstr_btn.addEventListener('click', async () => {
    const name_in = document.querySelector('.input.username').value
    const pass_in = document.querySelector('.pass').value
    const mail_in = document.querySelector('.email').value
    const confirm = document.querySelector('.pass_conf').value

    const inputStatus = checkTypeData(name_in, mail_in, pass_in, confirm)
    if (inputStatus != 4) alert(inputStatus)

    else {
        const response = await fetch('http://localhost:5000/api/register', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name_in,
                email: mail_in,
                password: pass_in
            })
        });
        const jsonResponse = await response.json();
        console.log(jsonResponse);
        alert(`Вы успешно зарегистрированы в системе, ${jsonResponse[jsonResponse.length-1].name} !`);

        const result = document.querySelector('.result')
        for (let i = 0; i < jsonResponse.length; i++) {
            const p = document.createElement("p");
            p.className = `class-p${i}`
            result.appendChild(p)
            document.querySelector(`.class-p${i}`).innerHTML = jsonResponse[i].name
        }
    }
})
