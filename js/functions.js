function getAllData(){
    const url = "http://api.weatherbit.io/v2.0/current?city=Aalborg&key="+key+"";
    asyncFetch(url).then(function(response){
        let allData = response.data[0];
        let div;
        console.log( "allData is : " + allData);
        Object.keys(allData).forEach(function(key) {
        console.log[key, allData[key]];
        key = [key];
        val = [allData[key]];
        div = document.createElement('div');
        div.append(key + " : " + val);
        document.body.append(div);
        })
    })
}

function getSelectCity(value){
    const url = "http://api.weatherbit.io/v2.0/current?city="+value+"&key="+key+"";
    asyncFetch(url).then(function(response){
        let allData = response.data[0];
        let div;
        console.log( "allData is : " + allData);
        Object.keys(allData).forEach(function(key) {
        console.log[key, allData[key]];
        key = [key];
        val = [allData[key]];
        div = document.createElement('div');
        div.append(key + " : " + val);
        document.body.append(div);
        })
    })
}

function getSpecificData(value){
    const url = "http://api.weatherbit.io/v2.0/current?city=Aalborg&key="+key+"";
    asyncFetch(url).then(function(response){
        let allData = response.data[0];
        let div;
        console.log( "allData is : " + allData);
        Object.keys(allData).forEach(function(key) {
        console.log[key, allData[key]];
        key = [key];
        val = [allData[key]];
        if (key == value){
        div = document.createElement('div');
        div.append(key + " : " + val);
        document.body.append(div);
        }
        })
    })
}

function getSpecificDataByCity(value, city){
    const url = "http://api.weatherbit.io/v2.0/current?city="+city+"&key="+key+"";
    asyncFetch(url).then(function(response){
        let allData = response.data[0];
        let div;
        console.log( "allData is : " + allData);
        Object.keys(allData).forEach(function(key) {
        console.log[key, allData[key]];
        key = [key];
        val = [allData[key]];
        if (key == value){
        div = document.createElement('div');
        div.append(key + " : " + val);
        document.body.append(div);
        }
        })
    })
}


// Usage of get specific data by city
getSpecificDataByCity("temp", "Paris")

// Usage of get specific data
//getSpecificData("timezone")

// Usage of Get Select City
//getSelectCity("Copenhagen")

// Usage of Get all data
//getAllData();