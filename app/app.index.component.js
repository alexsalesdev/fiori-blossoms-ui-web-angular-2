System.register(['angular2/core', 'angular2/router', './service/product-service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, product_service_1;
    var Index;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (product_service_1_1) {
                product_service_1 = product_service_1_1;
            }],
        execute: function() {
            Index = (function () {
                function Index(_productService) {
                    this._productService = _productService;
                    _productService.getAll();
                }
                Index.prototype.ngAfterViewInit = function () {
                    $('.toggle-nav').click(function (e) {
                        $(this).toggleClass('active');
                        $('.menu ul').toggleClass('active');
                        e.preventDefault();
                    });
                    $('.bxslider').bxSlider({
                        auto: true
                    });
                    //// Set the correct [touchscreen] body class
                    //$('body').removeClass('no-touch').addClass('touch');
                    // Add the touch toggle to show text when tapped
                    $('div.boxInner').click(function () {
                        $(this).closest('.boxInner').toggleClass('touchFocus');
                    });
                };
                Index.prototype.imageClicked = function (elem) {
                    console.log(elem);
                };
                Index = __decorate([
                    core_1.Component({
                        selector: 'index',
                        templateUrl: "app/partial/app.index.html",
                        directives: [router_1.RouterLink]
                    }), 
                    __metadata('design:paramtypes', [product_service_1.ProductService])
                ], Index);
                return Index;
            })();
            exports_1("Index", Index);
        }
    }
});
//# sourceMappingURL=app.index.component.js.map