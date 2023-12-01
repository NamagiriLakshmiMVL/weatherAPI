const restURL = "https://restcountries.com/v3.1/all" //Getting API of restcountries

let resultvar = document.createElement("div");
resultvar.className = "container";
document.body.appendChild(resultvar);

let h1tag = document.createElement("h1")
h1tag.innerText = "Rest Countries and Weather using Fetch API";
h1tag.id = "title";
h1tag.className = "text-center"
resultvar.appendChild(h1tag)

const newFunction = (lat, lon) => {
    const APIURL = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a24ee4b11728ecee7ebbe20660a3d6fc`).then((res) => res.json()).then((data) => alert(`Weather Data\nMain:  ${data.weather[0].main} \nDescription:  ${data.weather[0].description}`))
}

let x = fetch(restURL).then((res) => res.json()).then((data) => {
    data.forEach((element) => {
        let row1 = document.createElement("div")
        row1.className = "row"
        resultvar.appendChild(row1)

        let col1 = document.createElement("div")
        col1.className = "col-sm-6 col-md-4 col-lg-4 col-xl-4"
        row1.appendChild(col1)

        let clsCard = document.createElement("div");
        clsCard.classList = "card h-100";
        //clsCard.className="h-100";
        clsCard.style.width = "18rem";
        col1.appendChild(clsCard)

        let headCard = document.createElement("div")  // creating card-head
        headCard.className = "card-header"
        headCard.innerHTML = element.name.common
        clsCard.appendChild(headCard)

        let imgCard = document.createElement("img")     //setting flag image
        imgCard.className = "card-img-top"
        imgCard.setAttribute("src", element.flags.svg)
        imgCard.setAttribute("alt", element.flag)
        clsCard.appendChild(imgCard)

        let bodyCard = document.createElement("div")  //creating card-body
        bodyCard.className = "card-body"
        clsCard.appendChild(bodyCard)

        let capitalFunction = document.createElement("div");
        capitalFunction.className = "card-text"                // displaying capital name
        capitalFunction.innerHTML = "Native Name: " + element.capital;
        bodyCard.appendChild(capitalFunction)

        let regionFunction = document.createElement("div");       //displaying Region
        regionFunction.className = "card-text"
        regionFunction.innerHTML = "Region: " + element.region
        bodyCard.appendChild(regionFunction)

        let countryCode = document.createElement("div");      //displaying country code
        countryCode.className = "card-text"
        countryCode.innerText = "Country Code: " + element.cca3
        bodyCard.appendChild(countryCode)

        let latDiv = document.createElement("div");      //displaying Latitude 
        latDiv.className = "card-text"
        latDiv.innerText = "Latitude: " + element.latlng[0]
        bodyCard.appendChild(latDiv)


        let lngDiv = document.createElement("div");      //displaying longitude
        lngDiv.className = "card-text"
        lngDiv.innerText = "Longitude: " + element.latlng[1]
        bodyCard.appendChild(lngDiv)

        let populationDiv = document.createElement("div");      //displaying Population
        populationDiv.className = "card-text"
        populationDiv.innerText = "Population: " + element.population
        bodyCard.appendChild(populationDiv)

        let btnClass = document.createElement("button")
        btnClass.className = "btn btn-primary"                   // creating button
        btnClass.setAttribute("type", "button");
        btnClass.setAttribute("onclick", `newFunction(${element.latlng[0]},${element.latlng[1]})`)
        btnClass.innerText = "Click for Weather"
        bodyCard.appendChild(btnClass)
    })

})











































