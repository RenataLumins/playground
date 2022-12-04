const site_name = 'Dorama.tv'

/*
function summa(a, b) {
    return a + b
}
*/

//summa(`site_name`) => "site_name"
//summa(site_name) => Dorama.tv


// && - and
// || - or
// == - равнозначно


const dropdown_button = document.querySelectorAll("*[data-dropdown]");


dropdown_button.forEach(function(dropdown_button) {
if (dropdown_button) {
    dropdown_button.addEventListener("click", () => {
        const dropdown_target= document.querySelector("#" + dropdown_button.getAttribute('data-dropdown'))

        if (dropdown_target.classList.contains('active')) {
            dropdown_button.classList.remove("active")
            dropdown_target.classList.remove("active")
        } else { 
            dropdown_button.classList.add("active")
            dropdown_target.classList.add("active")
        }
    });
}
});


const modal_buttons = document.querySelectorAll("*[show-modal]");

modal_buttons.forEach(function(modal_button) {
    if (modal_button) {
        modal_button.addEventListener("click", () => {
            const modal_target= document.querySelector("#" + modal_button.getAttribute('show-modal'))
            const body = document.querySelector("body");
    
            if (modal_target.classList.contains('active')) {
                modal_target.classList.remove("active")
                body.style.overflow = ''
                
                //УБИРАЕМ БОДИ СТИЛЬ (НЕ КЛАСС) OVERFLOW: HIDDEN;
            } else { 
                modal_target.classList.add("active")
                body.style.overflow = 'hidden'
                //ДОБАВЛЯЕМ БОДИ СТИЛЬ (НЕ КЛАСС) OVERFLOW: HIDDEN;
            }
        });
    }
});

//querySelector -> возвращает готовый <tag> и все сразу работает
//querySelectorAll -> возвращает массив из тегов [<tag1>, <tag2>, ...]
//Чтобы все работало с помощью querySelectorAll, нужно этот массив разобрать в цикле
//for, foreach или что-то из этого




const overlay = document.querySelector(".overlay");

if (overlay) {
    overlay.addEventListener("click", (event) => {
        const body = document.querySelector("body");

        if (event.target.classList.contains('overlay')) {
            if (overlay.classList.contains('active')) {
                overlay.classList.remove("active")
                body.style.overflow = ''
                //УБИРАЕМ БОДИ СТИЛЬ (НЕ КЛАСС) OVERFLOW: HIDDEN;
            }
        }
    });
}





const homepageDoramas = {
    'popular-doramas': {
        "title": "Обновление популярного",
        "items": [
            {
                "image": "",
                "title": "Токкэби",
                "seria": "12",
                "link": "url(/images/tokkebi.jpg)"
            },
            {
                "image": "",
                "title": "Фея тяжелой атлетики",
                "seria": "7",
                "link": "url(/images/fairy.jpg)"
            },
            {
                "image": "",
                "title": "Клетки Юми",
                "seria": "13",
                "link": "url(/images/kletki.jpg)"
            },
            {
                "image": "",
                "title": "Сыр в мышеловке",
                "seria": "3",
                "link": "url(/images/cheese.jpg)"
            },
            {
                "image": "",
                "title": "Цветочки после ягодок",
                "seria": "4",
                "link": "url(/images/flowers.jpeg)"
            },
            {
                "image": "",
                "title": "Озорной поцелуй",
                "seria": "2",
                "link": "url(/images/kiss.jfif)"
            },
            {
                "image": "",
                "title": "Мешающий ведущий",
                "seria": "215",
                "link": "url(/images/tokkebi.jpg)"
            },
            {
                "image": "",
                "title": "Мешающий ведущий",
                "seria": "215",
                "link": "url(/images/tokkebi.jpg)"
            },
            {
                "image": "",
                "title": "Мешающий ведущий",
                "seria": "215",
                "link": "url(/images/tokkebi.jpg)"
            },
            {
                "image": "",
                "title": "Мешающий ведущий",
                "seria": "215",
                "link": "url(/images/tokkebi.jpg)"
            },
        ]
    },
    'redaction-doramas': {
        "title": "Выбор редакции",
        "items": [
            {
                "image": "",
                "title": "Адамас",
                "seria": "14",
                "link": ""
            },
             {
                "image": "",
                "title": "Сегодняшний вебтун",
                "seria": "12",
                "link": ""
            },
             {
                "image": "",
                "title": "Чосонский психиатр Ю Се",
                "seria": "12",
                "link": ""
            },
             {
                "image": "",
                "title": "Расскажи мне свое желание",
                "seria": "10",
                "link": ""
            },
             {
                "image": "",
                "title": "Хорошая работа",
                "seria": "6",
                "link": ""
            },
             {
                "image": "",
                "title": "Маленькие женщины",
                "seria": "2",
                "link": ""
            },
        ]
    },
    'host-doramas': {
        "title": "Горячие новинки",
        "items": [
            {
                "image": "",
                "title": "Ночь любви с тобой",
                "seria": "",
                "link": ""
            },
             {
                "image": "",
                "title": "Я хочу видеть только тебя",
                "seria": "",
                "link": ""
            },
             {
                "image": "",
                "title": "Атхит - это я",
                "seria": "",
                "link": ""
            },
             {
                "image": "",
                "title": "Его человек",
                "seria": "",
                "link": ""
            },
             {
                "image": "",
                "title": "Теория 21 дня",
                "seria": "",
                "link": ""
            },
             {
                "image": "",
                "title": "На лужайке: отдых с друзьями",
                "seria": "",
                "link": ""
            },
        ]
    }
}


window.addEventListener('load', (event) => {
    Object.entries(homepageDoramas).forEach(([key, value]) => {
        let doramaItemsHTML = ''

        value['items'].forEach((value2) => {
            doramaItemsHTML += `
            <div class="swiper-slide" style="background-image: `+ value2['link'] + ` ;  background-size: cover;"   >
                    
                    <div>Серия ` + value2['seria'] + `</div>
                    <div>` + value2['title'] + `</div>

            </div>
            `
        }) 

        document.getElementById(key).innerHTML = `
            <div class="titles"> ` + value['title'] + ` </div>
            <div class="swiper swiper-horizontal">
            <div class="posters-list swiper-wrapper">
                ` + doramaItemsHTML + `
            </div>
            <div class="swiper-scrollbar"></div>
            </div>
        `
    })

});

//////////

const accordion = {
    'show-accord1': {
        "question": "Что такое дорама?",
        "answer": "Дорамы - это азиатские сериалы, самыми популярными из которых являются японского и корейского производства. Эти одни из самых рейтинговых телепередач на восточных телеканалах обрели ярых поклонников во всех частях мира. Несмотря на название существуют различные жанры дорам: детектив, романтика, комедия, ужасы и многие другие."
    },
    'show-accord2': {
        "question": "Для кого создан наш сайт?",
        "answer": "Для таких же фанатов дорам, как и мы. Здесь можно совершенно бесплатно найти дораму по душе, посмотреть онлайн, а также обсудить. У нас вы с легкостью найдете интересных собеседников, потому что наш портал является местом сбора всего русскоязычного сообщества любителей дорам."
    },
    'show-accord3': {
        "question": "Полнота каталога целиком и полностью зависит от Вас!",
        "answer": " Мы благодарны Вам за добавление новых сериалов, исправление описаний, а также добавление ссылок и видео."
    }
}


window.addEventListener('load', (event) => {
    Object.entries(accordion).forEach(([key, value], index) => {
        let accordItemsHTML = ''

        document.getElementById(key).innerHTML = `
            <div class="accord_item">
                <div class="accord_q"> <img src="/images/arrow.svg" id="arrow" class="arrow" height="20px" width="20px">` + value['question'] + ` </div>
                <div class="accord_a"> ` + value['answer'] + ` </div>  
            </div>
        `
    })

});


window.addEventListener('load', (event) => {
    const all_accords_buttons = document.querySelectorAll(".accord_q");

    all_accords_buttons.forEach(function(accord_button) {
        if (accord_button) {
            accord_button.addEventListener("click", () => {
                const accord_item = accord_button.closest(".accord_item");
        
                if (accord_item) {
                    if (accord_item.classList.contains('active')) {
                        accord_item.classList.remove("active")
                    }
                    else { 
                        const accords_group = accord_button.closest(".accord_group");

                        const all_accord_group_items = accords_group.querySelectorAll(".accord_item");

                        all_accord_group_items.forEach(function(item) {
                            item.classList.remove("active");
                        })

                        accord_item.classList.add("active")
                    }
                }
            });
        }
    });
});


//





function openNav() {
    document.getElementById("alsoMySidenav").style.transform = "none";

    document.querySelector("html").style.overflow = "hidden";
  }
  
  
  function closeNav() {
    document.getElementById("alsoMySidenav").style.transform = "translateX(100%)";
    document.querySelector("html").style.overflow = "";
  }

  
///////



window.addEventListener('load', (event) => {
    const loginform = document.getElementById('loginform');

    loginform.addEventListener('submit', (event) => {
        //Предотвращаем работу формы по умолчанию
        event.preventDefault();
        

        //Получаем все поля формы
        const formData = new FormData(event.target);
        const formDataArray = {};

        //И преобразуем их в удобный массив вида ключ-значение
        formData.forEach((inputValue, inputName) => {
            formDataArray[inputName] = inputValue
        });


        //Объявляем пустой массив с ошибками
        let errors = {}

        //Указываем наши требования к полям
        //Если требования не выполнены - добавляем информацию об ошибке в массив
        if (formDataArray["password"].length < 6) {
            errors['password'] = `Пароль должен быть не менее 6 символов`;
        }
        if (!formDataArray["email"].includes("@")) {
            errors['email'] = `Некорректный почтовый адрес`;
        }

        //Если массив пустой
        if (Object.keys(errors).length == 0) {
            alert("vse ok")
        }
        //Если в массиве что-то есть
        else {
            //Перебираем массив с ошибками
            Object.keys(errors).forEach((key) => {
                //Каждый раз находим поле, куда мы засунем ошибку
                const error_field = document.getElementById('error_' + key);

                //Находим нужный текст с ошибкой в массиве с ошибками по ключу
                error_field.textContent = errors[key]
            });
        }
    });
})
   





window.addEventListener('load', (event) => {
    const swiper = new Swiper('.poster', {
        direction: 'horizontal',
        slidesPerView: 1,
        loop: true,
        pagination: {
        el: '.swiper-pagination',
        },
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
        scrollbar: false,
    });


    const swiper2 = new Swiper('.swiper-horizontal', {
        direction: 'horizontal',
        slidesPerView:'auto',
        spaceBetween: 10,
        freeMode: {
            enabled: true,
        },
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    })

})