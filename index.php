<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Web Weather</title>
    <link rel="stylesheet" href="https://bootswatch.com/5/journal/bootstrap.min.css">
        <script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script>
        <script src="https://code.jquery.com/jquery-3.6.3.min.js" integrity="sha256-pvPw+upLPUjgMXY0G+8O0xUf+/Im1MZjXxxgOcBQBXU=" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script> 
        <script src="js/app.js"></script>

</head>
<body style=" background-image: url('https://images3.alphacoders.com/810/81075.jpg');">
<nav class="navbar navbar-expand-lg navbar-dark bg-info p-4">
    <div class="container-fluid">
        <h3 class="text-center text-warning">* WEATHER TIME *</h3>
    </div>
</nav>


    <div class="container px-3">
        
        <div class="row">
            <div class="container">
                

                    <div  class="container" id="weather-time">
                        <div class="row p-4">
                            <div class="card-group">
                                <div class="col-4 p-4 bg-Secondary">
                                    <div class="col-md-12 p-2 d-flex align-content-start flex-wrap">
                                        <div class="card shadow-lg bg-info border-info">
                                            <div class="card-body">
                                            <form id="search" class="d-flex">
                                                <input id = "city" class="form-control me-sm-2" type="search" placeholder="Search City">
                                                <button class="btn btn-success my-2 my-sm-0" type="submit">Search</button>
                                            </form>
                                            </div>
                                                    <div id="ingresar" class="alert alert-danger alert-dismissible fade in" role="alert">
                                                        <strong>Error!</strong> Write a city.
                                                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                                    </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12 p-2 d-flex align-content-start flex-wrap justify-content-center">
                                        <div style="background-color: rgba(209, 240, 255, 0.5);" class="card shadow-lg border-info">
                                            <div class="card-body">
                                                
                                                <div id="temp"></div>
                    
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-8 p-8">
                                    <div class="col-md-12 p-2 d-flex align-content-start flex-wrap">
                                        <div class="card shadow-lg border-info">
                                            <div class="card-body">
                                                    <img class="card-img shadow-lg"src="https://images3.alphacoders.com/810/81075.jpg" alt="Card image">
                                                <!-- -->
                                                <div id="tasks"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
</body>
<footer class="bg-info text-center text-white">
        <!-- Grid container -->
        <div class="container p-4 pb-0">
            <!-- Section: Social media -->
            <section class="mb-4">

            <!-- Twitter -->
            <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                ><i class="fab fa-twitter"></i
            ></a>

            <!-- Google -->
            <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                ><i class="fab fa-google"></i
            ></a>

            <!-- Instagram -->
            <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                ><i class="fab fa-instagram"></i
            ></a>

            <!-- Linkedin -->
            <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                ><i class="fab fa-linkedin-in"></i
            ></a>

            <!-- Github -->
            <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                ><i class="fab fa-github"></i
            ></a>
            </section>
            <!-- Section: Social media -->
        </div>
        <!-- Grid container -->

        <!-- Copyright -->
        <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
            © 2023 Copyright:
            <a class="text-white" href="#">Jhon10101</a>
        </div>
        <!-- Copyright -->
        </footer>
</html>

