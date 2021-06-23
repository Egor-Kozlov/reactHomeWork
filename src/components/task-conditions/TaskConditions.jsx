import React from 'react'
//add the package
import ReactTooltip from 'react-tooltip';

function TaskConditions(props) {
    return (
     <>   
        <ReactTooltip id='3.1' aria-haspopup='true' >
            <p>Создать компонент Text который можно настраивать по четырем параметрам</p>
            <ul>
                <li>- выводить с его помощью разный текст</li>
                <li>- изменять размер текста, задавая его целым числом</li>
                <li>- изменять цвет текста</li>
                <li>- возможность делать текст подчеркнутым - передавая true или false проп</li>
            </ul>
        </ReactTooltip>
        <ReactTooltip id='3.2' aria-haspopup='true' >
            <p>Внутри компонента Squad нужно использовать пропсы, которые передаются в этот компонент: к label можно обратиться как props.label, а к cssClass - props.cssClass</p>
        </ReactTooltip>
        <ReactTooltip id='4.1' aria-haspopup='true' >
            <p>Создать компонент с внутренним состоянием - чекбокс - изначально он показывает крестик.</p>
            <ul>
                <li>По клику на крестик он подменяется на галочку</li>
                <li>По клику на галочку она подменяется на крестик</li>
            </ul>
        </ReactTooltip>
        <ReactTooltip id='4.2' aria-haspopup='true' >
        <p>Создать компонент-кнопку, которая циклически меняет три состояния.</p>
        <p>Пример - кнопка в плеере для повтора треков (трека)</p>
        <ul>
            <li>- исходное состояние - повтор треков выключен</li>
            <li>- по клику повтор треков включен, внешний вид кнопки меняется</li>
            <li>- по клику еще раз включается повтор одного трека, внешний вид кнопки снова меняется.</li>
        </ul>
        <p>То есть кликая на кнопку она циклически меняет три состояния</p>
        </ReactTooltip>
        <ReactTooltip id='4.3' aria-haspopup='true' >
        <p>По клику на текст он становится курсивом, по клику еще раз, становится нормальным</p>
        </ReactTooltip>
        <ReactTooltip id='5.2' aria-haspopup='true' >
        <p>Нажимаем на кнопку "сказать привет" - появляется лоадер и через три секунды появляется надпись "привет" и лоадер исчезает.</p>
        </ReactTooltip>
        <ReactTooltip id='5.3' aria-haspopup='true' >
        <ul>
            <li>Создать стейт в компоненте App, внутри будет переменная isSignedIn - переводится как "Выполнен ли вход". Вход имеется в виду логин в приложение. По умолчанию false</li>
            <li>Сделать кнопку, с надписью Sign In, по нажатию на которую спустя 3 секунды вызывать setState и устанавливать isSignedIn в true</li>
            <li>Использовать тернарный оператор, чтобы когда this.state.isSignedIn был true показывать текст с приветствием пользователя, а когда false - отображать кнопку входа</li>
        </ul>
        </ReactTooltip>
        <ReactTooltip id='6' aria-haspopup='true' >
        <p>Используя map вывести каждый элемент массива data как div, в котором в тэгах h3 и h4 выводятся поля name.first и name.last (имя и фамилия)</p>
        </ReactTooltip>
   </>
    )
}

export default TaskConditions 