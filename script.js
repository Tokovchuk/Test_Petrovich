const form = document.querySelector('.form');
const password = document.querySelector('#password');
const login = document.querySelector('#email');
const URL = 'https://test.kluatr.ru/api/user/';
const wrapper = document.querySelector('.wrapper');

const auth = async (evt) => {
    evt.preventDefault();
    let user = {
        email: login.value,
        password: password.value
    }
    try {
        await fetch(`${URL}login`, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })

        const responseBonus = await fetch(`${URL}data`, {
            credentials: 'include'
        });
        const dataBonus = await responseBonus.json();
        const bonusValue = Math.round(dataBonus.data.bonus);


        form.style.display = 'none';
        wrapper.innerHTML = `<p class="bonus">Итого бонусов: ${bonusValue}</p>`;
    } catch (error) {
        console.log(error);
    }
}

form.addEventListener('submit', auth)
