let a = Number(prompt ('Введите стоимость товара'))
let b = Number(prompt ('Введите кол-во денег'))

if(a==b){
    mes = 'Покупка совершена'
}
else{
    if(a>b){
        let c = a-b
        mes = 'Для покупки не хватает ' +c+ ' р.'
    }
    else{
        let k = b-a
        mes = 'Покупка совершена. Ваша сдача ' +k+ ' р.'
    }
}

let text = document.querySelector('.text')
text.textContent = mes
text.style.background = '#E0FFFF'
text.style.padding = '15px'
