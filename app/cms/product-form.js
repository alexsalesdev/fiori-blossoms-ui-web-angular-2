System.register(["angular2/core", "../model/product", "../service/product-service", 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, product_1, product_service_1, router_1;
    var ProductForm;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (product_1_1) {
                product_1 = product_1_1;
            },
            function (product_service_1_1) {
                product_service_1 = product_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            ProductForm = (function () {
                function ProductForm(_productService, params, router) {
                    this._productService = _productService;
                    this.router = router;
                    this.currencyOptions = ["PHP", "USD", "SGD"];
                    //if (params.get('id')) {
                    //     this._productService.getById(params.get('id')).subscribe(data => this._productService.product = data);
                    //}
                }
                ProductForm.prototype.submitProduct = function (e) {
                    var _this = this;
                    console.log("submitProduct: " + JSON.stringify(this._productService.product));
                    if (this._productService.product.id == null) {
                        this._productService.insert(this._productService.product).subscribe(function (data) {
                            console.log(data);
                            _this._productService.getAll();
                            _this.router.navigate(["CmsProduct"]);
                        }, function (err) {
                            _this.logError(err);
                            _this.router.navigate(["CmsLogin"]);
                        }, function () { return console.log("Submit product complete!"); });
                    }
                    else {
                        this._productService.update(this._productService.product).subscribe(function (data) {
                            console.log(data);
                            _this.router.navigate(["CmsProduct"]);
                        }, function (err) {
                            _this.logError(err);
                            _this.router.navigate(["CmsLogin"]);
                        }, function () { return console.log("Update product complete!"); });
                    }
                    this.clear();
                };
                ProductForm.prototype.clear = function () {
                    this._productService.product = new product_1.Product();
                };
                ProductForm.prototype.logError = function (err) {
                    console.log("Error!", err);
                };
                ProductForm = __decorate([
                    core_1.Component({
                        selector: "product-form",
                        directives: [router_1.ROUTER_DIRECTIVES],
                        templateUrl: "app/cms/partial/product-form.html"
                    }), 
                    __metadata('design:paramtypes', [product_service_1.ProductService, router_1.RouteParams, router_1.Router])
                ], ProductForm);
                return ProductForm;
            })();
            exports_1("ProductForm", ProductForm);
        }
    }
});
//# sourceMappingURL=product-form.js.map