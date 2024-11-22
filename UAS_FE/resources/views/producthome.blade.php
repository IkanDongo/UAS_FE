<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="{{ asset('CSS/home.css') }}">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Acme&family=Noto+Sans+Telugu:wght@100..900&family=Poiret+One&display=swap" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>
    <script src="../JS/model.js"></script>
    <script src="{{ asset('JS/navbarModel/navbar-model.js') }}"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://kit.fontawesome.com/1975de5d56.js" crossorigin="anonymous"></script>
    <title>SOMETHING WEBSITE - Home Page</title>
</head>
<body ng-app="myApp">
    <navbar-model></navbar-model>
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
        <div class="carousel-item active">
            <img src="/image/mensfashion.gif" class="d-block w-100" alt="Men's Fashion">
        </div>
        <div class="carousel-item">
            <img src="/image/womensfashion.gif" class="d-block w-100" alt="Women's Fashion">
        </div>
        <div class="carousel-item">
            <img src="/image/kidsfashion.gif" class="d-block w-100" alt="Kids' Fashion">
        </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
</div>

<div class="container py-5">
    <div class="row">
        <div class="col-md-12 text-center">
            <h2>Handpicked by Our Designer</h2>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-4 col-md-6 mb-4">
            <div class="card">
                <img src="/Image/casual_shirt2.webp" class="card-img-top" alt="Casual Shirt">
                <div class="card-body">
                    <h3 class="card-title">Elegansi Modern</h3>
                    <p class="card-text">Rasakan dunia di mana fashion bertemu dengan tujuan...</p>
                    <p class="card-text"><strong>Testimoni:</strong> "Saya suka bagaimana koleksi ini..."</p>
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-md-6 mb-4">
            <div class="card">
                <img src="/Image/jeans2.webp" class="card-img-top" alt="Jeans">
                <div class="card-body">
                    <h3 class="card-title">Kenyamanan Kasual</h3>
                    <p class="card-text">Kenyamanan tanpa usaha, didefinisikan ulang...</p>
                    <p class="card-text"><strong>Testimoni:</strong> "Jeans ini adalah yang paling nyaman..."</p>
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-md-6 mb-4">
            <div class="card">
                <img src="/Image/watch2.webp" class="card-img-top" alt="Watch">
                <div class="card-body">
                    <h3 class="card-title">Berani & Bergaya</h3>
                    <p class="card-text">Dengan penuh keberanian, koleksi ini dirancang...</p>
                    <p class="card-text"><strong>Testimoni:</strong> "Setiap kali saya memakai jam tangan ini..."</p>
                </div>
            </div>
        </div>
    </div>
</div>


</body>
</html>
