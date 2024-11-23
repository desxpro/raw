const input = document.querySelector('.input')
const knopka = document.querySelector('.knopka')
const podskazka = document.querySelector('.podskazka')
const chisla = document.querySelector('.chisla')
const ostatok = document.querySelector('.ostatok')

const rand = () => Math.floor(Math.random()* 100 +1) // генерация рандомного число 

let info = {        
    chisla:[],   // числа которые будут введены
    ostatok: 10,  // остаток попыток
    podskazka: 'Podskazka', // подсказка 
    sekretChislo: rand(),   // секретное число 
    textKnopka: '>>>'      // текст на кнопке 
}

const reset = () =>{        // начать заново игру
    info = {
        chisla:[],
        ostatok: 10,
        podskazka: 'Podskazka',
        sekretChislo: rand(),
        textKnopka: '>>>'
    }
    podskazka.classList.remove('greenText', 'redText')
    knopka.removeEventListener('click',reset)
    input.removeAttribute('disabled')
    input.value = ''
    podskazka.textContent = info.podskazka
    chisla.textContent = `Вашi числа: ${info.chisla.join(',')}`
    ostatok.textContent = `У вас залишилось ${info.ostatok} спроб`
    knopka.textContent = info.textKnopka
    knopka.addEventListener('click',fun)
}
const update = (info) =>{            // обновляет данные после изменения обьекта 
    podskazka.textContent = info.podskazka
    chisla.textContent = `Вашi числа: ${info.chisla.join(',')}`
    ostatok.textContent = `У вас залишилось ${info.ostatok} спроб`
    knopka.textContent = info.textKnopka
}
 
const fun = () =>{
    if(input.value){       // если число было введенно 
     if(Number(input.value) !== info.sekretChislo && info.ostatok >1){     // если числа не совпадают 
        info.chisla.push(input.value);
        info.ostatok -=1;
        info.podskazka = Number(input.value) > info.sekretChislo ? 'Ваше число больше': 'Ваше число меньше'
        input.value = ''
        update(info)
        console.log(info)
     }else if (info.ostatok == 1){         // если закончились попытки 
        info.podskazka = 'К сожалению ви проиграли ((('
        info.textKnopka = 'Ще раз?'
        info.ostatok -=1;
        podskazka.classList.add('redText')
        input.setAttribute('disabled','true')
        knopka.removeEventListener('click', fun)
        knopka.addEventListener('click',reset)
        update(info)
     }
     else{                              // если число совпало 
        info.podskazka = 'Поздравляю ви угадали число'
        info.textKnopka = 'Ще раз?'
        info.ostatok -=1;
        input.setAttribute('disabled','true')
        podskazka.classList.add('greenText')
        chisla.textContent = `Секретное число було ${input.value}`
        ostatok.textContent = `Ви впорались за ${10 - info.ostatok} спроб`
        knopka.removeEventListener('click', fun)
        knopka.addEventListener('click',reset)
        update(info)
     }
    }else{
        info.podskazka = 'Введите число'
        update(info)
    }
}
update(info)
knopka.addEventListener('click',fun)


