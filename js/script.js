const buttonLevelPassed = document.getElementById('button');
const description = document.getElementById('description');
const numberOfLevel = document.getElementById('number-of-level');
let level = 15;
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
    if (level == 12) {
        goToLevel(-11);
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
    else if (level == 12) {
        nextLevel.disabled = true;
        pastLevel.disabled = false;
    }
    else {
        nextLevel.disabled = false;
        pastLevel.disabled = false;
    }
    console.log(level);
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
        case 13: level12(); break;
        case 14: level12(); break;
        case 15: level12(); break;
        case 16: level12(); break;
        case 17: level12(); break;
        case 18: level12(); break;
        case 19: level12(); break;
        case 20: level12(); break;
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

function getSpan(text) {
    let span = document.createElement('span');
    span.textContent = text;
    return span;
}

function setCode() {
    const codeConteiner = document.getElementById('code-conteiner');
    let span;
    let textarea;
    if (level < 13) {
        span = getSpan('.class {');
        codeConteiner.children[0].appendChild(span);
        span = getSpan('display: flex;');
        span.classList.add('indent');
        codeConteiner.children[0].appendChild(span);
        textarea = document.createElement('textarea');
        if (level == 6 || level == 7 || (level >= 10 && level <=11)) {
            textarea.rows = 2;
        }
        else if (level == 12) {
            textarea.rows = 3;
        }
        else {
            textarea.rows = 1;
        }
        textarea.setAttribute('id', 'code');
        codeConteiner.children[1].appendChild(textarea);
        span = getSpan('}');
        codeConteiner.children[2].appendChild(span);
    }
    else if (level < 16) {
        span = getSpan('.class {');
        codeConteiner.children[0].appendChild(span);
        span = getSpan('display: flex;');
        span.classList.add('indent');
        codeConteiner.children[0].appendChild(span);
        span = getSpan('}');
        codeConteiner.children[0].appendChild(span);
        codeConteiner.children[0].appendChild(document.createElement('br'));
        span = getSpan('.green-cat {');
        codeConteiner.children[0].appendChild(span);
        textarea = document.createElement('textarea');
        if (level == 6 || level == 7 || (level >= 10 && level <=11)) {
            textarea.rows = 2;
        }
        else if (level == 12) {
            textarea.rows = 3;
        }
        else {
            textarea.rows = 1;
        }
        textarea.setAttribute('id', 'code');
        codeConteiner.children[1].appendChild(textarea);
        span = getSpan('}');
        codeConteiner.children[2].appendChild(span);
    }
}

function loadLevel() {
    numberOfLevel.textContent = level + '/16';
    setCode();
    setAnimals();
    textArea = document.getElementById('code');
    code = textArea.value.split('\n');
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
        getImg('../assets/eat/blue-food-bowl.png', 'синяя миска', 0);
        getImg('../assets/eat/blue-food-bowl.png', 'синяя миска', 0);
        getImg('../assets/eat/blue-food-bowl.png', 'синяя миска', 0);
        getImg('../assets/eat/blue-food-bowl.png', 'синяя миска', 0);
        getImg('../assets/eat/red-food-bowl.png', 'красная миска', 0, 'red-bowl-level14');
        getImg('../assets/cats/blue-cat.png', 'синяя кошка', 1);
        getImg('../assets/cats/blue-cat.png', 'синяя кошка', 1);
        getImg('../assets/cats/blue-cat.png', 'синяя кошка', 1);
        getImg('../assets/cats/blue-cat.png', 'синяя кошка', 1);
        getImg('../assets/cats/red-cat.png', 'красная кошка', 1);
    }
    else if (level == 15) {
        getImg('../assets/eat/blue-food-bowl.png', 'синяя миска', 0);
        getImg('../assets/eat/red-food-bowl.png', 'красная миска', 0);
        getImg('../assets/eat/red-food-bowl.png', 'красная миска', 0);
        getImg('../assets/eat/red-food-bowl.png', 'красная миска', 0);
        getImg('../assets/eat/red-food-bowl.png', 'красная миска', 0);
        getImg('../assets/eat/green-food-bowl.png', 'зеленая миска', 0);
        getImg('../assets/cats/blue-cat.png', 'синяя кошка', 1);
        getImg('../assets/cats/red-cat.png', 'красная кошка', 1);
        getImg('../assets/cats/red-cat.png', 'красная кошка', 1);
        getImg('../assets/cats/red-cat.png', 'красная кошка', 1);
        getImg('../assets/cats/red-cat.png', 'красная кошка', 1);
        getImg('../assets/cats/green-cat.png', 'зеленая кошка', 1);
    }
}

function checkCode() {
    code = textArea.value.split('\n');
    if (level <= 12) {
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
        if (level <= 12 || level >= 15) {
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
                style[1] = style[1].replace(' ', ''); 
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
    description.children[0].children[0].textContent = ' ';
    description.children[0].children[1].textContent = ' ';
    description.children[0].children[2].textContent = ' ';
    setDescription('');
    loadLevel();
}
function level16() {
    description.children[0].children[0].textContent = ' ';
    description.children[0].children[1].textContent = ' ';
    description.children[0].children[2].textContent = ' ';
    setDescription('');
    loadLevel();
}

