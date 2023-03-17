$(function() {

    window.onload = function() {
        document.getElementById("city").focus();
    };

    let keywords;
    $("#ingresar").hide();

    $.post('api-data/api-weather.php', {keywords}, function (response) {

            // console.log(response);
            let tasks = JSON.parse(response);
            //  console.log(tasks);
        template = tempCity(tasks);
        $('#temp').html(template);
            
            template = fetchTasks(tasks);
            $('#tasks').html(template);

    });
    
    function fetchTasks(tasks) {
        let template = '';

        weather1 = tasks.weather[0];
        let tempCityInt = parseInt(tasks.main.temp);
        let tempdescripcion = (weather1.description);
        tempdescripcion = tempdescripcion.replace(/^\w/, (c) => c.toUpperCase()); 
      return  template += `
     <div class="row">       
        
                <div class="col-md-4 col-12">
                <img class="card-img-top" src="https://openweathermap.org/img/wn/${weather1.icon}.png" alt="image">
                </div>
                <div class="col-md-8 col-12" ml-auto">
                    <div><h1 class="card-text text-center m-2 px-2">${tempCityInt} &deg;C </h1></div>
                    <div><h4 class="card-text text-center m-2 px-2">${tasks.name}, ${tasks.sys.country}</h4></div>
                    <div><h5 class="card-title"></h5></div>
                    <div class="card-text m-1 px-2 bg-light"><b>${tempdescripcion} </b></div>
                    <div class="card-text m-1 px-2">Min temp: <b>${tasks.main.temp_min} &deg;C </b></div>
                    <div class="card-text m-1 px-2">Max temp: <b>${tasks.main.temp_max} &deg;C </b></div>
                    <div class="card-text m-1 px-2">Humidity: <b>${tasks.main.humidity} % </b></div>
                    <div class="card-text m-1 px-2">Pressure: <b>${tasks.main.pressure} hPa </b></div>
                    <div class="card-text m-1 px-2">Wind speed: <b>${tasks.wind.speed} meter/sec </b></div>
                </div>
        
    </div>
        `
    }
    function tempCity(tasks) {
        let template = '';
        let tempCityInt = parseInt(tasks.main.temp);
       weather1 = tasks.weather[0];
     //  weather1 = weather1[0];

       let ucwords = (weather1.description).toUpperCase();

        
      return  template += `
        <b>${ucwords}</b>
        <h1 class="card-text m-2 px-2">${tempCityInt} &deg;C </h1>
        <p class="card-text m-2 px-2">${tasks.name}, ${tasks.sys.country}</p>
        `
    }

    //  console.log("hello world");
   

        $('#search').submit(function(e) {
                        
            let keywords = $('#city').val();
            
            e.preventDefault();
        
        keywords = $.trim(keywords);
       // console.log(keywords.length);
        if(keywords.length > 0){
            $.post('api-data/api-weather.php', {keywords}, function(response) {
                //console.log(response);
               // $('#temp').html(response);
                document.getElementById("city").focus();
                $('#city').val('');
                let tasks = JSON.parse(response);
                template = tempCity(tasks);
                    $('#temp').html(template);
                template = fetchTasks(tasks);
                    $('#tasks').html(template);

            });

        }else{
            
            $('#ingresar').fadeTo(2000,500).slideUp(500, function(){
                $('#ingresar').slideUp(500);
                document.getElementById("city").focus();
            });
            
        }

        })



});