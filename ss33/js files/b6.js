const weatherData = {
    "Hà Nội": {
        temperature: 25,
        humidity: 70,
        windSpeed: 5,
        description: "Có mây",
        icon: "☁️"
    },
    "Hồ Chí Minh": {
        temperature: 32,
        humidity: 75,
        windSpeed: 7,
        description: "Nắng",
        icon: "☀️"
    },
    "Đà Nẵng": {
        temperature: 28,
        humidity: 82,
        windSpeed: 12,
        description: "Mưa rào",
        icon: "🌧️"
    }
};
let btn = document.getElementById("searchBtn");
let container = document.querySelector(".container")
let input = document.getElementById("search").value
function render(){
    container.innerHTML = ``
}
btn.onclick = function() {
    render()
    let input = document.getElementById("search").value
    if(input ===""){
        render()
    }else{
        render()
        Object.keys(weatherData).forEach(function(name){
            let str1 = input.toLowerCase()
            let str2 = name.toLowerCase()
            if(str1 == str2){
                let data = weatherData[name]
                container.innerHTML += `  
                <b class="name">${name}</b>
            <div class="info">
                <span class="icon">${data.icon}</span>
                <b class="temp">${data.temperature}<sup>o</sup>C </b>
                <div class="description">
                    <span class="desc">${data.description}</span>
                    <span class="desc">Độ ẩm: ${data.humidity}%</span>
                    <span class="desc">Tốc độ gió: ${data.windSpeed}km/h</span>
                </div>
            </div>`
                
            }
        })
    }
}