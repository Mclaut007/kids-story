// Встраиваем yandex-карту на сайт. В index.html нужно подключить <script src="https://api-maps.yandex.ru/2.1/?apikey=8e80ab78-f0e9-4e5b-be6e-7342eafea3c7&lang=ru_RU"></script>

export default function createYandexMap() {
  // Координаты центра карты
  let center = [59.9398428180508, 30.314276954855654];

  function init() {
    // Указываем ниже id со значением map - это id html-элемента, в который будет встроена yandex-карта.
    let map = new ymaps.Map("map", {
      // Указываем координаты центра карты. Можно их определить вот здесь - https://yandex.ru/map-constructor/location-tool/
      center: center,
      zoom: 16,
    });

    // Создаем метку для карты. Указываем координаты метки. Она не обязательно должна быть по центру карты на нашем сайте. А может совпадать в центром карты
    let placemark = new ymaps.Placemark(
      center,
      {
        // Сюда пишем данные балуна (вслывающая подсказка)
        balloonContentHeader: "Хедер балуна",
        balloonContentBody: "Боди балуна",
        balloonContentFooter: "Подвал",
      },
      {
        // Строкой ниже указываем, что мы хотим использовать свою картинку для метки на карте
        iconLayout: "default#image",
        // Указываем путь до нашей картинки
        iconImageHref: "/img/map/mark.svg",
        // Задаем размер картинки
        iconImageSize: [70, 93],
        // Задаем отступ от центра
        iconImageOffset: [-30, -110],
      }
    );
    // Делаем кастомный балун
    let placemark1 = new ymaps.Placemark(
      center,
      {
        balloonContent: `
          <div class="balloon">
            <div class="balloon__address">г.Cанкт-Петербург</div>
            <div class="balloon__contacts">
              <a href="tel:+79999999999">+79999999999</a>
            </div>
          </div>
        `,
        // Теперь с помощью классов balloon, balloon__address мы можем стилизовать наш балун
      },
      {
        iconLayout: "default#image",
        iconImageHref: "img/map/mark.svg",
        iconImageSize: [70, 93],
        iconImageOffset: [-30, -110],
      }
    );

    // Можно убрать с карты различные элементы и отключить скролл на ПК
    map.controls.remove("geolocationControl"); // Удаляем геолокацию
    map.controls.remove("searchControl"); // Удаляем поиск
    map.controls.remove("trafficControl"); // Удаляем контроль трафика
    map.controls.remove("typeSelector"); // Удаляем тип
    map.controls.remove("fullscreenControl"); // Удаляем кнопку перехода в полноэкранный режим
    map.controls.remove("zoomControl"); // Удаляем контрол зуммирования
    map.controls.remove("rulerControl"); // Удаляем контрол правил
    map.behaviors.disable(["scrollZoom"]); // Отключаем скролл карты (опционально)

    // Добавляем созданную выше метку на карту
    // map.geoObjects.add(placemark);
    // Отключили стандартный балун, подключили кастомный
    map.geoObjects.add(placemark1);

    // Код ниже делает балун сразу открытым
    // placemark1.balloon.open();
  }

  ymaps.ready(init);
}

// Некоторые элементы не убираются через JS. Можно убрать их через CSS. Например, [class*="copyrights-pane"] {display: none !important;}
// Делаем карту серой - [class*="ground-pane"]{filter:grayscale(1)}
