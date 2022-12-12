var day = prompt('введите день рождения');
var month = prompt('введите месец');

if( day >= 21 && day <= 31  && month === 'март' || day >=1 && day <= 20  && month === 'апрель' ){
    console.log("овен");
}else if ( day >= 21 && day <= 31  && month === 'апрель' || day >=1 && day <= 20  && month === 'май' ){
    console.log("телец");
}else if ( day >= 21 && day <= 31  && month === 'май' || day >=1 && day <= 20  && month === 'июнь' ){
    console.log("близнецы");
}else if ( day >= 21 && day <= 31  && month === 'июнь' || day >=1 && day <= 20  && month === 'июль' ){
    console.log("рак");
}else if ( day >= 21 && day <= 31  && month === 'июль' || day >=1 && day <= 20  && month === 'август' ){
    console.log("лев");
}else if ( day >= 21 && day <= 31  && month === 'август' || day >=1 && day <= 20  && month === 'сеньябрь' ){
    console.log("Дева");
}else if ( day >= 21 && day <= 31  && month === 'сентябрь' || day >=1 && day <= 20  && month === 'октябрь' ){
    console.log("Весы");
}else if ( day >= 21 && day <= 31  && month === 'октябрь' || day >=1 && day <= 20  && month === 'ноябрь' ){
    console.log("Скорпион");
}else if ( day >= 21 && day <= 31  && month === 'ноябрь' || day >=1 && day <= 20  && month === 'декабрь' ){
    console.log("Стрелец");
}else if ( day >= 21 && day <= 31  && month === 'декабрь' || day >=1 && day <= 20  && month === 'январь' ){
    console.log("Козерок");
}else if ( day >= 21 && day <= 31  && month === 'январь' || day >=1 && day <= 20  && month === 'февраль' ){
    console.log("Водолей");
}else if ( day >= 21 && day <= 31  && month === 'февраль' || day >=1 && day <= 20  && month === 'март' ){
    console.log("Рыба");
}else {console.log('Введите от 1 до 31');}