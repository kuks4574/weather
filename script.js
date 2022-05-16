let requestAdress = "https://api.openweathermap.org/data/2.5/forecast?q=Moskwa&appid=97021a8a058fe506e8686a6c06c5d8ca";

let submitBtn = document.getElementById("submit-btn");
submitBtn.onclick = function () {
    let cityValue = document.getElementById("city").value;

    requestAdress = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityValue + "&units=metric&appid=97021a8a058fe506e8686a6c06c5d8ca&cnt=6";

    let request;
    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    }
    else {
        request = new ActiveXObject("Microsoft.XMLHTTP");
    }

    request.open("GET", requestAdress);

    request.onload = function () {
        if (request.status === 200) {
            // alert(request.response); // вывод как текст
            let weather = JSON.parse(request.response);
            console.log(weather);

            // Очистка поля ввода
            document.getElementById("city").value = "";

            // БЛОК-1 ОБЩИЕ ДАННЫЕ

            // Исчезание блока ERROR

            function opacity1() {
                error.style.opacity = "0.75";
            }
            function opacity2() {
                error.style.opacity = "0.5";
            }
            function opacity3() {
                error.style.opacity = "0.25";
            }
            function none() {
                error.style.display = "none";
            }

            setTimeout(opacity1, 100);
            setTimeout(opacity2, 200);
            setTimeout(opacity3, 300);
            setTimeout(none, 400);

            // Название города
            document.getElementById('nameCity').innerHTML = weather.city.name;

            // Иконка

            let iconCod1 = weather['list'][0]['weather'][0]['icon'];
            document.getElementById("iconFirst").src = "img/" + iconCod1 + ".png";

            //  облачность
            document.getElementById('cloudiness').innerHTML = weather['list'][0]['weather'][0]['description'];

            // Текущая температура
            let temp1 = weather['list'][0]['main']['temp'];
            if (temp1 > 0) {
                document.getElementById('temp').innerHTML = "+" + Math.floor(temp1) + " <sup>o</sup>C";
            } else {
                document.getElementById('temp').innerHTML = Math.floor(temp1) + " <sup>o</sup>C";
            }

            // Текущая Дата
            var now = new Date();
            let dd = now.getDate();
            let mm = now.getMonth() + 1;
            if (mm < 10) {
                mm = "0" + mm;
            } else {
                mm = "" + mm;
            }
            let gggg = now.getFullYear();
            document.getElementById('date').innerHTML = dd + "." + mm + "." + gggg;

            // Минимальная температура на день

            let mintemp = weather['list'][0]['main']['temp_min'];
            if (mintemp > 0) {
                document.getElementById('minTemp').innerHTML = "Min temperature: " + "+" + Math.floor(mintemp) + " <sup>o</sup>C";
            } else {
                document.getElementById('minTemp').innerHTML = "Min temperature: " + Math.floor(mintemp) + " <sup>o</sup>C";
            }

            // Максимальная температура на день

            let maxtemp = weather['list'][0]['main']['temp_max'];
            if (maxtemp > 0) {
                document.getElementById('maxTemp').innerHTML = "Max temperature: " + "+" + Math.floor(maxtemp) + " <sup>o</sup>C";
            } else {
                document.getElementById('maxTemp').innerHTML = "Max temperature: " + Math.floor(maxtemp) + " <sup>o</sup>C";
            }

            // Ветер м/c

            document.getElementById('windSpeed').innerHTML = "Wind speed (m/s): " + Math.floor(weather['list'][0]['wind']['speed']);


            // БЛОК-2 ДАННЫЕ ПО ЧАСАМ

            // ДАТЫ

            let date1 = weather['list'][0]['dt_txt'];
            let date11 = date1.split(' ')[1];
            let date111 = date11.slice(0, -3);
            document.getElementById('dt2').innerHTML = date111;

            let date2 = weather['list'][1]['dt_txt'];
            let date22 = date2.split(' ')[1];
            let date222 = date22.slice(0, -3);
            document.getElementById('dt3').innerHTML = date222;

            let date3 = weather['list'][2]['dt_txt'];
            let date33 = date3.split(' ')[1];
            let date333 = date33.slice(0, -3);
            document.getElementById('dt4').innerHTML = date333;

            let date4 = weather['list'][3]['dt_txt'];
            let date44 = date4.split(' ')[1];
            let date444 = date44.slice(0, -3);
            document.getElementById('dt5').innerHTML = date444;

            let date5 = weather['list'][4]['dt_txt'];
            let date55 = date5.split(' ')[1];
            let date555 = date55.slice(0, -3);
            document.getElementById('dt6').innerHTML = date555;

            let date6 = weather['list'][5]['dt_txt'];
            let date66 = date6.split(' ')[1];
            let date666 = date66.slice(0, -3);
            document.getElementById('dt7').innerHTML = date666;

            // Forecast 
            document.getElementById('fc2').innerHTML = weather['list'][0]['weather'][0]['description'];
            document.getElementById('fc3').innerHTML = weather['list'][1]['weather'][0]['description'];
            document.getElementById('fc4').innerHTML = weather['list'][2]['weather'][0]['description'];
            document.getElementById('fc5').innerHTML = weather['list'][3]['weather'][0]['description'];
            document.getElementById('fc6').innerHTML = weather['list'][4]['weather'][0]['description'];
            document.getElementById('fc7').innerHTML = weather['list'][5]['weather'][0]['description'];

            // Temperature

            let temp2 = weather['list'][0]['main']['temp'];
            if (temp2 > 0) {
                document.getElementById('temp2').innerHTML = "+" + Math.floor(temp2) + " <sup>o</sup>C";
            } else {
                document.getElementById('temp2').innerHTML = Math.floor(temp2) + " <sup>o</sup>C";
            }

            let temp3 = weather['list'][1]['main']['temp'];
            if (temp3 > 0) {
                document.getElementById('temp3').innerHTML = "+" + Math.floor(temp3) + " <sup>o</sup>C";
            } else {
                document.getElementById('temp3').innerHTML = Math.floor(temp3) + " <sup>o</sup>C";
            }

            let temp4 = weather['list'][2]['main']['temp'];
            if (temp4 > 0) {
                document.getElementById('temp4').innerHTML = "+" + Math.floor(temp4) + " <sup>o</sup>C";
            } else {
                document.getElementById('temp4').innerHTML = Math.floor(temp4) + " <sup>o</sup>C";
            }

            let temp5 = weather['list'][3]['main']['temp'];
            if (temp5 > 0) {
                document.getElementById('temp5').innerHTML = "+" + Math.floor(temp5) + " <sup>o</sup>C";
            } else {
                document.getElementById('temp5').innerHTML = Math.floor(temp5) + " <sup>o</sup>C";
            }

            let temp6 = weather['list'][4]['main']['temp'];
            if (temp6 > 0) {
                document.getElementById('temp6').innerHTML = "+" + Math.floor(temp6) + " <sup>o</sup>C";
            } else {
                document.getElementById('temp6').innerHTML = Math.floor(temp6) + " <sup>o</sup>C";
            }

            let temp7 = weather['list'][5]['main']['temp'];
            if (temp7 > 0) {
                document.getElementById('temp7').innerHTML = "+" + Math.floor(temp7) + " <sup>o</sup>C";
            } else {
                document.getElementById('temp7').innerHTML = Math.floor(temp7) + " <sup>o</sup>C";
            }

            // Wind
            document.getElementById('wind2').innerHTML = Math.floor(weather['list'][0]['wind']['speed']);
            document.getElementById('wind3').innerHTML = Math.floor(weather['list'][1]['wind']['speed']);
            document.getElementById('wind4').innerHTML = Math.floor(weather['list'][2]['wind']['speed']);
            document.getElementById('wind5').innerHTML = Math.floor(weather['list'][3]['wind']['speed']);
            document.getElementById('wind6').innerHTML = Math.floor(weather['list'][4]['wind']['speed']);
            document.getElementById('wind7').innerHTML = Math.floor(weather['list'][5]['wind']['speed']);

            // Иконки погоды

            let iconCod2 = weather['list'][0]['weather'][0]['icon'];
            document.getElementById("icon2").src = "img/" + iconCod2 + ".png";

            let iconCod3 = weather['list'][1]['weather'][0]['icon'];
            document.getElementById("icon3").src = "img/" + iconCod3 + ".png";

            let iconCod4 = weather['list'][2]['weather'][0]['icon'];
            document.getElementById("icon4").src = "img/" + iconCod4 + ".png";

            let iconCod5 = weather['list'][3]['weather'][0]['icon'];
            document.getElementById("icon5").src = "img/" + iconCod5 + ".png";

            let iconCod6 = weather['list'][4]['weather'][0]['icon'];
            document.getElementById("icon6").src = "img/" + iconCod6 + ".png";

            let iconCod7 = weather['list'][5]['weather'][0]['icon'];
            document.getElementById("icon7").src = "img/" + iconCod7 + ".png";

            // let iconCod = '01d';

            // Определение картинки по id
            //            function iconWeather(x) {
            //             let str1 = '';
            //     switch (x) {
            //         case '01d': return str1 += '01d';
            //         case '01n': return str1 += '01n';
            //         case '02d': return str1 += '02d';
            //          case '02n': return str1 += '02n';
            //         case '03d': return str1 += '03d';
            //          case '03n': return str1 += '03n';
            //         case '04d': return str1 += '04d';
            //          case '04n': return str1 += '04n';
            //         case '09d': return str1 += '09d';
            //          case '09n': return str1 += '09n';
            //         case '10d': return str1 += '10d';
            //          case '10n': return str1 += '10n';
            //         case '11d': return str1 += '11d';
            //          case '11n': return str1 += '11n';
            //         case '13d': return str1 += '13d';
            //          case '13n': return str1 += '13n';
            //         case '50d': return str1 += '50d';
            //          case '50n': return str1 += '50n';    
            //     }

            // }

            // let m = iconWeather(iconCod);
            // console.log(m);


        } else {

            // Показать блок ERROR

            function opacity1() {
                error.style.display = "";
                error1.style.display = "block";
                error2.style.display = "block";
                error.style.border = "15px solid rgb(240, 11, 11)";
                error.style.opacity = "0.25";
            }

            function opacity2() {
                error.style.opacity = "0.5";
            }

            function opacity3() {
                error.style.opacity = "0.75";
            }

            function opacity4() {
                error.style.opacity = "1";
            }

            setTimeout(opacity1, 100);
            setTimeout(opacity2, 200);
            setTimeout(opacity3, 300);
            setTimeout(opacity4, 400);

        }
    }
    request.send();
}