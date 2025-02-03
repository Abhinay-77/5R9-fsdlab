const btn = document.getElementById('btn');
const input = document.getElementById('city');
const temppara = document.getElementById('temp');
const humpara = document.getElementById('humidity');
let city = "hyderabad";
const getData = async () => {
    const rawData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f91c450278ba41d39f00463998e9ceab`);
    const data = await rawData.json();
    return data;
};
// let data1 = {};
btn.addEventListener("click", async () => {
    city = input.value;
    getData().then((data) => {
        // data1 = data;
        // console.log(data1);
        temppara.textContent = `${data.main.temp}°F`;
        humpara.textContent = `${data.main.humidity}%`;
    });
});
// console.log(data1);
const ctx = document.getElementById('myChart');
getData().then((data) => {
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Temp', 'Feels Like', 'Min-Temp', 'Max-Temp'],
            datasets: [{
                // barPercentage: 0.5,
                // barThickness: 6,
                // maxBarThickness: 8,
                // minBarLength: 2,
                label: 'Temperature in °F',
                data: [`${data.main.temp}`, `${data.main.feels_like}`, `${data.main.temp_min}`, `${data.main.temp_max}`],
                // data: [1, 2, 3, 4],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});