
// #1 За допомогою ajax-запиту вивести погоду
//
// http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19
// q=XXX - місто, для якого показати погоду

// Вводимо в інпут назву міста, натискаємо кнопку Погода
// Якщо таке місто не існує (404), виводимо напис, що таке місце не знайдено
// Якщо місто існує, виводимо наступну інформацію:
// temp – температура
// pressure - тиск
// description – опис
// humidity – вологість
// speed – швидкість вітру
// deg - напрям у градусах
// icon - значок, де 10d код іконки (виводимо картинку з таким урлом, як нам повернувся)
// http://openweathermap.org/img/w/10d.png

const inputCity = document.getElementById("inputCity");
const checkWeatherBtn = document.getElementById("checkWeatherBtn");
const weatherResult = document.getElementById("weatherResult");

async function getWeather(name) {
  const cityName = name.trim();

  try {
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=5d066958a60d315387d9492393935c19`
    );
    if (!response.ok) {
      return null;
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
}
checkWeatherBtn.addEventListener("click", async function () {
  const city = inputCity.value;
  if (city.trim() === "") {
    weatherResult.innerHTML = "Enter city name";
    return;
  }

  const data = await getWeather(city);

  if (data === null) {
    weatherResult.innerHTML = "City not found";
    return;
  }

  weatherResult.innerHTML = `
  <p>Temperature: ${data.main.temp} °C</p>
  <p>Pressure: ${data.main.pressure}</p>
  <p>Description: ${data.weather[0].description}</p>
  <p>Humidity: ${data.main.humidity}%</p>
  <p>Wind speed: ${data.wind.speed}</p>
  <p>Wind direction: ${data.wind.deg}°</p>
  <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="weather icon">
`;
});

// За бажанням:
// #2 Використовуючи API https://jsonplaceholder.typicode.com/ зробити отримання поста за ід.
// На сторінку вивести інпут та кнопку Пошук
// Ід поста має бути введений в інпут (валідація: ід від 1 до 100)
// Якщо знайдено пост, то вивести на сторінку нижче блок з постом і зробити кнопку для отримання коментарів до посту.
// По клику на кнопку коментарі має бути виведені нижче під постом коментарі до цього посту
// Якщо зробити Пошук нового поста, старий пост та коментарі видаляються зі сторінки
// Зробити завдання використовуючи проміси, перехопити помилки.
