const buttonLevelPassed = document.getElementById('button');
const description = document.getElementById('description');
const numberOfLevel = document.getElementById('number-of-level');
let level = 20;
let textArea;
let code;
const animals = document.getElementById('animals');
const nextLevel = document.getElementById('next-level');
const pastLevel = document.getElementById('past-level');

startLevel();

function goToLevel(i) {
    clearAll();
    level += i;
    buttonLevelPassed.disabled = true;
    startLevel();
}

nextLevel.addEventListener('click', () => {
    goToLevel(1);
})

pastLevel.addEventListener('click', () => {
    goToLevel(-1);
})

buttonLevelPassed.addEventListener('click', () => {
    if (level == 20) {
        goToLevel(-19);
    }
    else {
        goToLevel(1);
    }
})

function startLevel() {
    if (level == 1) {
        pastLevel.disabled = true;
        nextLevel.disabled = false;
    }
    else if (level == 20) {
        nextLevel.disabled = true;
        pastLevel.disabled = false;
    }
    else {
        nextLevel.disabled = false;
        pastLevel.disabled = false;
    }
    switch (level) {
        case 1: level1(); break;
        case 2: level2(); break;
        case 3: level3(); break;
        case 4: level4(); break;
        case 5: level5(); break;
        case 6: level6(); break;
        case 7: level7(); break;
        case 8: level8(); break;
        case 9: level9(); break;
        case 10: level10(); break;
        case 11: level11(); break;
        case 12: level12(); break;
        case 13: level13(); break;
        case 14: level14(); break;
        case 15: level15(); break;
        case 16: level16(); break;
        case 17: level17(); break;
        case 18: level18(); break;
        case 19: level19(); break;
        case 20: level20(); break;
        default:
            break;
    }
}

function clearAll() {
    const codeConteiner = document.getElementById('code-conteiner');
    for (i = 0; i <= 2; i++) {
        while (codeConteiner.children[i].children[0]) {
            codeConteiner.children[i].removeChild(codeConteiner.children[i].children[0]);
        }
    }
    while (description.children[1].children[0].children[0]) {
        description.children[1].children[0].removeChild(description.children[1].children[0].children[0]);
    }
    for (i = 0; i <= 1; i++) {
        while (animals.children[i].children[0]) {
            animals.children[i].removeChild(animals.children[i].children[0]);
        }
    }
    animals.children[1].style.cssText = null;
    animals.children[1].classList.remove('animals-wrap');
    animals.children[0].classList.remove('food-bowls-level' + level);
}

function setDescription(property) {
    switch (property) {
        case 'justify-content':
            properties = ['flex-start', 'flex-end', 'center', 'space-between', 'space-around']
            propertiesDescriptions = ['элементы выравниваются по левой стороне',
                                    'элементы выравниваются по правой стороне',
                                    'элементы выравниваются горизонтально по центру',
                                    'элементы отображаются с одинаковыми отступами между ними',
                                    'элементы отображаются с одинаковыми отступами вокруг них'
                                    ]
            break;
        case 'align-items':
            properties = ['flex-start', 'flex-end', 'center', 'baseline', 'stretch']
            propertiesDescriptions = ['элементы выравниваются по верхнему краю',
                                    'элементы выравниваются по нижнему краю',
                                    'элементы выравниваются вертикально по центру',
                                    'элементы отображаются на базовой линии',
                                    'элементы растягиваются, чтобы заполнить всё пространство'
                                    ]
            break;
        case 'flex-direction':
            properties = ['row', 'row-reverse', 'column', 'column-reverse']
            propertiesDescriptions = ['элементы размещаются по направлению текста',
                                    'элементы отображаются в обратном порядке к направлению текста',
                                    'элементы располагаются сверху вниз',
                                    'элементы располагаются снизу вверх'
                                    ]
            break;
        case 'flex-wrap':
            properties = ['nowrap', 'row-reverse', 'column']
            propertiesDescriptions = [' размеры элементов устанавливаются автоматически, чтобы они поместились в один ряд',
                                    'элементы автоматически переносятся на новую строку',
                                    'элементы автоматически переносятся на новую строку, но строки расположены в обратном порядке'
                                    ]
            break;
        case 'align-content':
            properties = ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'stretch']
            propertiesDescriptions = ['ряды группируются в верхней части',
                                'ряды группируются в нижней части',
                                'ряды группируются вертикально по центру',
                                'ряды отображаются с одинаковыми расстояниями между ними',
                                'ряды отображаются с одинаковыми расстояниями вокруг них',
                                'ряды растягиваются, чтобы заполнить место равномерно'
                                ]
            break;
        case 'all':
            properties = ['justify-content', 'align-items', 'flex-direction', 'order', 'flex-wrap', 'flex-flow', 'align-content']
            propertiesDescriptions = ['',
                                '',
                                '',
                                '',
                                '',
                                '',
                                ''
                                ]
            break;
        default:
            properties = [];
            propertiesDescriptions = [];
            break;
    }
    for (const el in properties) {
        let strong = document.createElement('strong');
        let li = document.createElement('li');
        let span = document.createElement('span');
        strong.textContent = properties[el];
        span.textContent = ': ' + propertiesDescriptions[el];
        li.appendChild(strong);
        li.appendChild(span);
        description.children[1].children[0].appendChild(li);
    }
}

function getSpan(text, cl = null) {
    let span = document.createElement('span');
    span.textContent = text;
    if (cl) {
        span.classList.add(cl);
    }
    return span;
}

function setTextarea() {
    textarea = document.createElement('textarea');
    if (level == 6 || level == 7 || (level >= 10 && level <=11) || (level == 16)) {
        textarea.rows = 2;
    }
    else if (level == 12) {
        textarea.rows = 3;
    }
    else if (level == 20) {
        textarea.rows = 4;
    }
    else {
        textarea.rows = 1;
    }
    textarea.setAttribute('id', 'code');
    return textarea;
}

function setCode() {
    const codeConteiner = document.getElementById('code-conteiner');
    if (level < 13 || level >= 15) {
        codeConteiner.children[0].appendChild(getSpan('.class {'));
        codeConteiner.children[0].appendChild(getSpan('display: flex;', 'indent'));
        if (level == 18) {
            codeConteiner.children[0].appendChild(getSpan('flex-wrap: wrap;', 'indent'));
        }
        codeConteiner.children[1].appendChild(setTextarea());
        codeConteiner.children[2].appendChild(getSpan('}'));
    }
    else if (level <= 14) {
        codeConteiner.children[0].appendChild(getSpan('.class {'));
        codeConteiner.children[0].appendChild(getSpan('display: flex;', 'indent'));
        codeConteiner.children[0].appendChild(getSpan('}'));
        codeConteiner.children[0].appendChild(document.createElement('br'));
        codeConteiner.children[0].appendChild(getSpan('.green-cat {'));
        codeConteiner.children[1].appendChild(setTextarea());
        codeConteiner.children[2].appendChild(getSpan('}'));
    }
}

function loadLevel() {
    numberOfLevel.textContent = level + '/20';
    setCode();
    setAnimals();
    textArea = document.getElementById('code');
    // code = textArea.value.split('\n');
    textArea.addEventListener('keyup', checkCode);
}

function getImg(path, alt, index, cl = null) {
    let img = document.createElement('img');
    img.src = path;
    img.alt = alt;
    if (cl) {
        img.classList.add(cl);
    }
    animals.children[index].appendChild(img);
    return img;
}

function setAnimals() {
    animals.children[0].classList.add('food-bowls-level' + level);
    if (level == 1 || level == 6) { 
        getImg('../assets/eat/food-bowl.png', 'миска', 0);
        getImg('../assets/dogs/dog.png', 'собака', 1);
    }
    else if (level == 2) {
        getImg('../assets/eat/blue-food-bowl.png', 'синяя миска', 0);
        getImg('../assets/eat/red-food-bowl.png', 'красная миска', 0);
        getImg('../assets/cats/blue-cat.png', 'синяя кошка', 1);
        getImg('../assets/cats/red-cat.png', 'красная кошка', 1);
    }
    else if (level < 13) {
        getImg('../assets/eat/blue-food-bowl.png', 'синяя миска', 0);
        getImg('../assets/eat/red-food-bowl.png', 'красная миска', 0);
        getImg('../assets/eat/green-food-bowl.png', 'зеленая миска', 0);
        getImg('../assets/cats/blue-cat.png', 'синяя кошка', 1);
        getImg('../assets/cats/red-cat.png', 'красная кошка', 1);
        getImg('../assets/cats/green-cat.png', 'зеленая кошка', 1);
    }
    else if (level == 13) {
        getImg('../assets/eat/blue-food-bowl.png', 'синяя миска', 0);
        getImg('../assets/eat/red-food-bowl.png', 'красная миска', 0);
        getImg('../assets/eat/green-food-bowl.png', 'зеленая миска', 0, 'green-bowl-level13');
        getImg('../assets/cats/blue-cat.png', 'синяя кошка', 1);
        getImg('../assets/cats/green-cat.png', 'зеленая кошка', 1);
        getImg('../assets/cats/red-cat.png', 'красная кошка', 1);
    }
    else if (level == 14) {
        for (i = 0; i < 4; i++) {
            getImg('../assets/eat/blue-food-bowl.png', 'синяя миска', 0);
        }
        getImg('../assets/eat/red-food-bowl.png', 'красная миска', 0, 'red-bowl-level14');
        for (i = 0; i < 4; i++) {
            getImg('../assets/cats/blue-cat.png', 'синяя кошка', 1);
        }
        getImg('../assets/cats/red-cat.png', 'красная кошка', 1);
    }
    else if (level == 15) {
        getImg('../assets/eat/blue-food-bowl.png', 'синяя миска', 0);
        for (i = 0; i < 6; i++) {
            getImg('../assets/eat/red-food-bowl.png', 'красная миска', 0);
        }
        getImg('../assets/eat/green-food-bowl.png', 'зеленая миска', 0);
        getImg('../assets/cats/blue-cat.png', 'синяя кошка', 1);
        for (i = 0; i < 6; i++) {
            getImg('../assets/cats/red-cat.png', 'красная кошка', 1);
        }
        getImg('../assets/cats/green-cat.png', 'зеленая кошка', 1);
    }
    else if (level == 16 || level == 17) {
        for (i = 0; i < 5; i++) {
            getImg('../assets/eat/blue-food-bowl.png', 'синяя миска', 0);
            getImg('../assets/cats/blue-cat.png', 'синяя кошка', 1);
        }
        for (i = 0; i < 5; i++) {
            getImg('../assets/eat/red-food-bowl.png', 'красная миска', 0);
            getImg('../assets/cats/red-cat.png', 'красная кошка', 1);
        }
        for (i = 0; i < 5; i++) {
            getImg('../assets/eat/green-food-bowl.png', 'зеленая миска', 0);
            getImg('../assets/cats/green-cat.png', 'зеленая кошка', 1);
        }
    }
    else if (level == 18 || level == 19) {
        animals.children[1].classList.add('animals-wrap');
        for (i = 0; i < 15; i++) {
            getImg('../assets/eat/red-food-bowl.png', 'красная миска', 0);
            getImg('../assets/cats/red-cat.png', 'красная кошка', 1);
        }
    }
    else if (level == 20) {
        getImg('../assets/eat/blue-food-bowl.png', 'синяя миска', 0);
        getImg('../assets/cats/blue-cat.png', 'синяя кошка', 1);
        for (i = 0; i < 4; i ++) {
            getImg('../assets/eat/red-food-bowl.png', 'красная миска', 0);
            getImg('../assets/cats/red-cat.png', 'красная кошка', 1);

        }
        for (i = 0; i < 2; i++) {
            getImg('../assets/eat/green-food-bowl.png', 'зеленая миска', 0);
            getImg('../assets/cats/green-cat.png', 'зеленая кошка', 1);
        }
    }
}

function checkCode() {
    console.log(getComputedStyle(animals.children[1]));
    code = textArea.value.split('\n');
    if (level <= 12 || level >= 15) {
        animals.children[1].style.cssText = "";
        for (const el in code) {
            animals.children[1].style.cssText += code[el];
        }
    }
    else if (level == 13) {
        animals.children[1].children[1].style.cssText = "";
        for (const el in code) {
            animals.children[1].children[1].style.cssText += code[el];
        }
    }
    else if (level == 14) {
        animals.children[1].children[4].style.cssText = "";
        for (const el in code) {
            animals.children[1].children[4].style.cssText += code[el];
        }
    }
    if (code.length == document.getElementById('code-conteiner').children[1].children[0].rows) {
        if (level <= 12 || level >= 14) {
            styles = getComputedStyle(animals.children[0]);
        }
        else if (level == 13) {
            styles = getComputedStyle(animals.children[1].children[1]);
        }
        else if (level == 14) {
            styles = getComputedStyle(animals.children[1].children[4]);
        }
        let style;
        bool = true;
        for (const el in code) {
            style = code[el].split(':');
            try { 
                style[1] = style[1].trim(); //убирает все пробелы по бокам
            } catch (error) {}
            if (styles.getPropertyValue(style[0]) + ';' !== style[1]) {
                bool = false;
            }
        }
        if (bool) {
            buttonLevelPassed.disabled = false;
        }
        else if (buttonLevelPassed.disabled != true) {
            buttonLevelPassed.disabled = true;
        }
    }
    else if (buttonLevelPassed.disabled != true) {
        buttonLevelPassed.disabled = true;
    }
}

function level1() {
    description.children[0].children[0].textContent = 'О Боже! Кажется эта прекрасная булочка проголодалась! Помоги ей дойти до миски с помощью свойства';
    description.children[0].children[1].textContent = 'justify-content,';
    description.children[0].children[2].textContent = 'которое выравнивает элементы горизонтально и принимает следующие значения:';
    setDescription('justify-content');
    loadLevel();
}
function level2() {
    description.children[0].children[0].textContent = 'Используй';
    description.children[0].children[1].textContent = 'justify-content';
    description.children[0].children[2].textContent = 'еще раз, чтобы помочь котикам дойти до своих мисок. Напомню, что это свойство выравнивает элементы горизонтально:';
    setDescription('justify-content');
    loadLevel();
}
function level3() {
    description.children[0].children[0].textContent = 'Помоги котятам найти их миски. Используй';
    description.children[0].children[1].textContent = 'justify-content.';
    description.children[0].children[2].textContent = 'В этот раз миски находятся посередине.';
    setDescription('');
    loadLevel();
}
function level4() {
    description.children[0].children[0].textContent = 'Теперь между мисками находится пространство вокруг. Используй';
    description.children[0].children[1].textContent = 'justify-content,';
    description.children[0].children[2].textContent = 'чтобы помочь котикам набить свои животики.';
    setDescription('');
    loadLevel();
}
function level5() {
    description.children[0].children[0].textContent = 'О нет! Котики в попытках найти еду, ушли далеко наверх от мисок! Используй свойство';
    description.children[0].children[1].textContent = 'align-items,';
    description.children[0].children[2].textContent = 'чтобы помочь им добраться до вкусностей. Свойство принимает следующие значения:';
    setDescription('align-items');
    loadLevel();
}
function level6() {
    description.children[0].children[0].textContent = 'И снова булочка потеряла свою мисочку. Используй свойства';
    description.children[0].children[1].textContent = 'justify-content и align-items';
    description.children[0].children[2].textContent = 'вместе.';
    setDescription('');
    loadLevel();
}
function level7() {
    description.children[0].children[0].textContent = 'Используй свойства';
    description.children[0].children[1].textContent = 'justify-content и align-items,';
    description.children[0].children[2].textContent = 'чтобы вновь помочь котикам (без тебя они не справятся :с).';
    setDescription('');
    loadLevel();
}
function level8() {
    description.children[0].children[0].textContent = 'Чтобы помочь котикам, используй свойство';
    description.children[0].children[1].textContent = 'flex-direction,';
    description.children[0].children[2].textContent = 'которое задаёт направление, в котором будут расположены элементы в контейнере, и принимает следующие значения:';
    setDescription('flex-direction');
    loadLevel();
}
function level9() {
    description.children[0].children[0].textContent = 'Обрати внимание, что котикам нужно подойти к мискам с соответствующим цветом. Вновь используй свойство';
    description.children[0].children[1].textContent = 'flex-direction,';
    description.children[0].children[2].textContent = 'принимающее следующие значения:';
    setDescription('flex-direction');
    loadLevel();
}
function level10() {
    description.children[0].children[0].textContent = 'И снова котики перепутали свои миски! Используй свойства';
    description.children[0].children[1].textContent = 'flex-direction и justify-content';
    description.children[0].children[2].textContent = 'вместе, чтобы расположить котиков около их мисок.';
    setDescription('');
    loadLevel();
}
function level11() {
    description.children[0].children[0].textContent = 'На этот раз злая хозяйка расставила мисочки далеко друг от друга, дабы котики не путались. Но это всё равно не помогло :с. Используй свойство';
    description.children[0].children[1].textContent = 'flex-direction вместе с justify-content или align-items.';
    description.children[0].children[2].textContent = 'Обрати внимание! При "flex-direction: column" свойство justify-content влияет на вертикальное выравнивание, а свойство align-items на горизонтальное (напомним, что без "flex-direction: column", наоборот).';
    setDescription('');
    loadLevel();
}
function level12() {
    description.children[0].children[0].textContent = 'Ты большой молодец! Ты разобрался со свойствами';
    description.children[0].children[1].textContent = 'justify-content, flex-direction и align-items.';
    description.children[0].children[2].textContent = 'Используй все изученные свойства сразу, чтобы расставить котиков по местам (они тебя уже очень любят :3).';
    setDescription('');
    loadLevel();
}
function level13() {
    description.children[0].children[0].textContent = 'Иногда изменения порядка отображения элементов недостаточно. В таких случаях мы можем применить свойство';
    description.children[0].children[1].textContent = 'order,';
    description.children[0].children[2].textContent = 'которое применяется к конкретным элементам. По умолчанию, значение этого свойства - 0. Можно задавать положительные и отрицательные целые значения этому свойству.';
    setDescription('');
    loadLevel();
}
function level14() {
    description.children[0].children[0].textContent = 'Используй свойство';
    description.children[0].children[1].textContent = 'order,';
    description.children[0].children[2].textContent = 'чтобы поставить красного котика к его миске.';
    setDescription('');
    loadLevel();
}
function level15() {
    description.children[0].children[0].textContent = 'О нет! Кажется котики не влезли в один ряд! Перенеси их с помощью свойства';
    description.children[0].children[1].textContent = 'flex-wrap,';
    description.children[0].children[2].textContent = 'принимающего значения:';
    setDescription('flex-wrap');
    loadLevel();
}
function level16() {
    description.children[0].children[0].textContent = 'Помоги этим пушистым клубочкам распределиться по мисочкам с помощью комбинации свойств';
    description.children[0].children[1].textContent = 'flex-wrap и flex-direction.';
    setDescription('');
    loadLevel();
}
function level17() {
    description.children[0].children[0].textContent = 'Свойства flex-wrap и flex-direction используются достаточно часто, поэтому было создано свойство';
    description.children[0].children[1].textContent = 'flex-flow,';
    description.children[0].children[2].textContent = 'для их объединения. Это свойство применяет их значения, разделенные пробелом, например: flex-flow: row nowrap. Используй flex-flow, чтобы повторить выполнение предыдущего уровня, но на этот раз одной строкой :).';
    setDescription('');
    loadLevel();
}
function level18() {
    description.children[0].children[0].textContent = 'Котиков раскидало по всей комнате, но миски расположены вверху. Ты можешь использовать свойство';
    description.children[0].children[1].textContent = 'align-content,';
    description.children[0].children[2].textContent = 'чтобы указать, как должны ряды разделяться друг от друга. Свойство принимает следующие значения:';
    setDescription('align-content');
    loadLevel();
}
function level19() {
    description.children[0].children[0].textContent = 'Теперь миски расположены на одинаковом расстоянии друг от друга. Используй свойство';
    description.children[0].children[1].textContent = 'align-content,';
    description.children[0].children[2].textContent = 'чтобы расположить котиков у мисок.';
    setDescription('');
    loadLevel();
}
function level20() {
    description.children[0].children[0].textContent = 'Котики просят у тебя помощи в последний раз! Дальше они будут справляться сами :с. Используй все изученные свойства, чтобы помочь им добраться до своих мисок:';
    setDescription('all');
    loadLevel();
}
