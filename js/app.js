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

      return  template += `
            
        <div class="card-img-overlay">
                <img class="class=img-fluid shadow-lg img-circle figure-img" style="height: 110px;" src="https://openweathermap.org/img/wn/${weather1.icon}.png" alt="image">
                <h5 class="card-title">Description:</h5>
                <p class="card-text m-1 px-2 bg-light"><b>${weather1.main} </b></p>
                <p class="card-text m-1 px-2 bg-light">Min temp: <b>${tasks.main.temp_min} &deg;C </b></p>
                <p class="card-text m-1 px-2 bg-light">Max temp: <b>${tasks.main.temp_max} &deg;C </b></p>
                <p class="card-text m-1 px-2 bg-light">Humidity: <b>${tasks.main.humidity} % </b></p>
                <p class="card-text m-1 px-2 bg-light">Pressure: <b>${tasks.main.pressure} hPa </b></p>
                <p class="card-text m-1 px-2 bg-light">Wind speed: <b>${tasks.wind.speed} meter/sec </b></p>
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