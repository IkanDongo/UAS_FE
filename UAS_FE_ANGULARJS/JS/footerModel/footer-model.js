angular.module('myApp', [])
        .component('footerModel', {
            template: `
                <footer class="bg-dark text-white pt-4">
                    <div class="container">
                        <div class="row py-3">
                            <div class="col-md-3 mb-4">
                                <h5>About Us</h5>
                                <p>
                                    We are a passionate community dedicated to delivering high-quality content and services. Join us and
                                    be part of something amazing.
                                </p>
                            </div>
                            <div class="col-md-3 mb-4">
                                <h5>Quick Links</h5>
                                <ul class="list-unstyled">
                                    <li><a routerLink="/" class="text-white text-decoration-none">Home</a></li>
                                    <li><a routerLink="/services" class="text-white text-decoration-none">Services</a></li>
                                    <li><a routerLink="/contact" class="text-white text-decoration-none">Contact</a></li>
                                    <li><a routerLink="/privacy-policy" class="text-white text-decoration-none">Privacy Policy</a></li>
                                </ul>
                            </div>
                            <div class="col-md-3 mb-4">
                                <h5>Contact Us</h5>
                                <ul class="list-unstyled">
                                    <li><i class="fas fa-map-marker-alt me-2"></i>123 Main Street, City, Country</li>
                                    <li><i class="fas fa-phone-alt me-2"></i>(+123) 456-7890</li>
                                    <li><i class="fas fa-envelope me-2"></i>info@example.com</li>
                                </ul>
                            </div>
                            <div class="col-md-3 mb-4">
                               <h5>Follow Us</h5>
                            <a href="https://facebook.com" target="_blank" class="text-white me-3"><i class="fab fa-facebook-f"></i></a>
                            <a href="https://twitter.com" target="_blank" class="text-white me-3"><i class="fab fa-twitter"></i></a>
                            <a href="https://instagram.com" target="_blank" class="text-white me-3"><i class="fab fa-instagram"></i></a>
                            <a href="https://linkedin.com" target="_blank" class="text-white"><i class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <hr class="bg-light">
                        <div class="text-center py-3">
                            <p class="mb-0">© 2024 Your Company. All Rights Reserved.</p>
                        </div>
                    </div>
                </footer>
            `
        });