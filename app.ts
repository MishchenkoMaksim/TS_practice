window.onload = function(){
    class constForArr{
        constructor(public question: string, public options: any[], public answer: any){}
    }

    class QuestArr{
        questOfArr: constForArr[] = [];

        add(questionsArrObj: constForArr){
            this.questOfArr.push(questionsArrObj);
        }
    }

    let arr: QuestArr = new QuestArr();


    arr.add(new constForArr('Сколько будет 3 * 8?', [25, 27, 24, 21], 24));
    arr.add(new constForArr('Сколько будет 28 / 2?', [14, 16, 18, 12], 14));
    arr.add(new constForArr('Сколько будет 7 + 33?', [50, 30, 41, 40], 40));
    arr.add(new constForArr('Сколько будет 11 * 5?', [55, 115, 26, 52], 55));
    arr.add(new constForArr('Сколько будет 76 - 20?', [56, 36, 48, 60], 56));
    arr.add(new constForArr('Сколько будет 4 * 7?', [38, 22, 28, 23], 28));
    arr.add(new constForArr('Сколько будет 28 - 11?', [15, 10, 17, 11], 17));
    arr.add(new constForArr('Сколько будет 18 + 33?', [51, 33, 42, 47], 51));
    arr.add(new constForArr('Сколько будет 10 + 36?', [54, 46, 29, 57], 46));
    arr.add(new constForArr('Сколько будет 1 * 0?', [1, 2, 0, -1], 0));

    let main = document.getElementById('main');

    let btn = document.createElement('button');
    btn.setAttribute('class', 'chkBtn');

    let div_res = document.createElement('div');
    div_res.setAttribute('class', 'none');

    let btn_res = document.createElement('button');
    btn_res.innerHTML = 'Закрыть';
    btn_res.setAttribute('class', 'closeBtn');

    let counter: number = 0;
    let incorrect_count: number = 0;

    for(let i = 0; i < arr.questOfArr.length;i++){
        let quest_p = document.createElement('p');
        quest_p.innerHTML = [i + 1] + ") " + arr.questOfArr[i].question;
        quest_p.setAttribute('class', 'question');

        main.appendChild(quest_p);

        for(let q = 0; q < arr.questOfArr[i].options.length; q++){
            let ans_div = document.createElement('div');
            ans_div.setAttribute('class', 'answer');

            let inpt = document.createElement('input');
            inpt.type = 'radio';
            inpt.name = "name" + i;
            inpt.value = arr.questOfArr[i].options[q];
            inpt.setAttribute('id', arr.questOfArr[i].options[q]);

            let label = document.createElement('label');
            label.setAttribute('for', arr.questOfArr[i].options[q]);
            label.innerHTML = arr.questOfArr[i].options[q];

            ans_div.appendChild(inpt);
            ans_div.appendChild(label);
            main.appendChild(ans_div);

            btn.innerHTML = 'Проверить';
            main.appendChild(btn);

            btn.addEventListener('click', function(){
                if(inpt.checked){
                    
                    if(inpt.value == arr.questOfArr[i].answer){
                        inpt.value = 'block';
                        counter++;
                    } else{
                        incorrect_count++;
                    }
                }


                if(counter > 2){
                    div_res.innerHTML = 'Вы прошли тест! У вас ' + counter + ' правильных ответов!';
                    div_res.className = 'show';
                } else if(counter <= 2){
                    div_res.innerHTML = 'Вы не прошли тест! У вас ' + counter + ' правильных ответов!';
                    div_res.className = 'show';
                }
                main.appendChild(div_res);
                    div_res.appendChild(btn_res);
            });

            btn_res.addEventListener('click', function(){
                div_res.className = 'none';
            });
        }
    }        
}










