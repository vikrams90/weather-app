// "http://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=45d127ef68299f8ee14d04013012acc1"
// 'http://api.weatherapi.com/v1/current.json?key=a70917a8318b4db5b06185121232607&q=London&aqi=no'

const formweather = document.querySelector(".form-weather");
const hidden = document.querySelector(".hidden");
const mode = document.querySelector(".check");
let day = "#3396a5";
let night = "#464a60";
let daybg = "#58BAC9";
let nightbg = "#494E60";

// alert
const alertPlaceholder = document.getElementById("liveAlertPlaceholder");
const appendAlert = (message, type) => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    "</div>",
  ].join("");

  alertPlaceholder.append(wrapper);
};
// night mode function
const nightmode = () => {
  const bg = document.querySelectorAll(".bg");
  console.log(bg);
  const bgel = document.querySelectorAll(".bg-color");
  console.log(bgel);
  const textcolor = document.querySelectorAll(".text-white");
  bg.forEach(
    (elements = (el) => {
      el.style = `background-color:${nightbg} !important`;
      console.log(el.style.backgroundColor);
    })
  );

  bgel.forEach(
    (elements = (el) => {
      el.style = `background-color: ${night} !important`;
      console.log(el.style.backgroundColor);
    })
  );

  textcolor.forEach(
    (elements = (el) => {
      el.classList.remove("text-white");
      el.classList.add("text-white-50");
      console.log(el);
    })
  );
};
// daymode fuction
const daymode = () => {
  const bg = document.querySelectorAll(".bg");
  console.log(bg);
  const bgel = document.querySelectorAll(".bg-color");
  console.log(bgel);
  const textcolor = document.querySelectorAll(".text-white-50");
  bg.forEach(
    (elements = (el) => {
      el.style = `background-color:${daybg} !important`;
      console.log(el.style.backgroundColor);
    })
  );

  bgel.forEach(
    (elements = (el) => {
      el.style = `background-color: ${day} !important`;
      console.log(el.style.backgroundColor);
    })
  );

  textcolor.forEach(
    (elements = (el) => {
      el.classList.remove("text-white-50");
      el.classList.add("text-white");
      console.log(el.style.backgroundColor);
    })
  );
};
// colormode function

const colormode = () => {
  if (mode.checked) {
    nightmode();
  } else {
    daymode();
  }
};
// api call function

const apicall = async (val) => {
    //  APIKey = "5c1bd7ab180215147990c98e0f09de69";
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=a70917a8318b4db5b06185121232607&q=${val}&aqi=no`
  );
  const data = await response.json();
  return data;
};

//  api calling
const getweather = async(e) => {
    e.preventDefault();
    const input = document.querySelector(".input");
    const place = document.querySelector(".place");
    const weather = document.querySelector(".weather");
    const iconw = document.querySelector(".iconw");
    const celcius = document.querySelector(".celcius");
    const time = document.querySelector(".time");
    const country = document.querySelector(".country");
    const feel = document.querySelector(".feel");
    const temp1 = document.querySelector(".temp1");
    const temp2 = document.querySelector(".temp2");
    const timecurrent = document.querySelector(".time");
    const wind = document.querySelector(".wind");
    const humidity = document.querySelector(".humidity");
    const cloud = document.querySelector(".cloud");
 
  try {
    const data = await apicall(input.value);
      console.log(data )
    place.innerText = data.location.name;
    country.innerText = data.location.country;
    weather.innerText = data.current.condition.text;
    celcius.innerText = data.current.temp_c + "°C";
    feel.innerText = `feels like ${data.current.feelslike_c}`;
    temp1.innerText = data.current.temp_c + "°C";
    temp2.innerText = data.current.temp_f + "°F";
    wind.innerText = data.current.wind_kph;
    iconw.src = data.current.condition.icon;
    humidity.innerText = data.current.humidity;
    cloud.innerText = data.current.cloud;
    time.innerText = data.location.localtime;
    hidden.classList.remove("d-none");
    let timex = data.location.localtime.split(" ");
    timex = timex[1].split(":");
    check = timex[0];

    if (check > 19 || check < 8) {
      nightmode();
      mode.checked = true;
    } else if (check < 19 || check > 8) {
      daymode();
      mode.checked = false;
    }
  } catch (err) {
    console.log(err)
    appendAlert(
      "sorry this city is either not valid or we don't have any data for it",
      "warning"
    );
    hidden.classList.add("d-none");
  }
};

// set data
const setdata=async()=>{
    const indore = {city:document.querySelector(".c1"), weather:document.querySelector(".w1"), icon:document.querySelector(".i1"),temperature:document.querySelector(".t1")}
    // console.log(indore)
    const data1 = await apicall("indore");
    indore.city.innerText = data1.location.name
    indore.weather.innerText = data1.current.condition.text
    indore.icon.src=data1.current.condition.icon
    indore.temperature.innerText = data1.current.temp_c + "°C";

    const mumbai = {city:document.querySelector(".c2"), weather:document.querySelector(".w2"), icon:document.querySelector(".i2"),temperature:document.querySelector(".t2")}
    // console.log(indore)
    const data2 = await apicall("mumbai");
    mumbai.city.innerText = data2.location.name
    mumbai.weather.innerText = data2.current.condition.text
    mumbai.icon.src=data2.current.condition.icon
    mumbai.temperature.innerText = data2.current.temp_c + "°C";

    const delhi = {city:document.querySelector(".c3"), weather:document.querySelector(".w3"), icon:document.querySelector(".i3"),temperature:document.querySelector(".t3")}
    // console.log(indore)
    const data3 = await apicall("delhi");
    delhi.city.innerText = data3.location.name
    delhi.weather.innerText = data3.current.condition.text
    delhi.icon.src=data3.current.condition.icon
    delhi.temperature.innerText = data3.current.temp_c + "°C";

    const bangalore = {city:document.querySelector(".c4"), weather:document.querySelector(".w4"), icon:document.querySelector(".i4"),temperature:document.querySelector(".t4")}
    // console.log(indore)
    const data4 = await apicall("bangalore");
    bangalore.city.innerText = data4.location.name
    bangalore.weather.innerText = data4.current.condition.text
    bangalore.icon.src=data4.current.condition.icon
    bangalore.temperature.innerText = data4.current.temp_c + "°C";
    // 

}

setdata()
formweather.addEventListener("submit", getweather);
mode.addEventListener("click", colormode);


