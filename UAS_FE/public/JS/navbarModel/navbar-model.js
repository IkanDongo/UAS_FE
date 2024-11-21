angular.module('myApp', [])
        .component('navbarModel', {
            template: `
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark navbar-shhadow sticky-top">
                    <div class="container">
                        <a class="navbar-brand title-size" href="#" draggable="false">WebStyle</a>
                
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="nav navbar-nav ms-auto">
                                <li class="nav-item">
                                    <a class="nav-link nav-text-size" aria-current="page" href="#" draggable="false" title="Homepage">Home Page</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link nav-text-size" href="#" draggable="false" title="Aboutpage">About Page</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link nav-text-size" href="#" draggable="false" title="Cartpage">Cart Page</a>
                                </li>
                                <li class="nav-item m-0 p-0">
                                    <a class="nav-link nav-text-size" href="#" draggable="false"><i class="icon-size fa-regular fa-user color-white" draggable="false" title="Profile"></i></a>
                                </li>
                                <li class="nav-item m-0 p-0">
                                    <a class="nav-link nav-text-size" href="#" draggable="false"><i class="icon-size fa-solid fa-right-to-bracket color-white" draggable="false" title="Login"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            `
        });