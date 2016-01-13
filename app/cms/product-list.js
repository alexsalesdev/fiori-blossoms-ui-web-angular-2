System.register(["angular2/core", "../service/product-service", 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, product_service_1, router_1;
    var ProductList;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (product_service_1_1) {
                product_service_1 = product_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            ProductList = (function () {
                function ProductList(_productService, router) {
                    this._productService = _productService;
                    this.router = router;
                    this.getProducts();
                }
                ProductList.prototype.editProduct = function (product) {
                    console.log("editProduct");
                    this._productService.product = product;
                    this.router.navigate(["CmsAddProduct"]);
                };
                ProductList.prototype.getProducts = function () {
                    this._productService.getAll();
                };
                ProductList.prototype.delete = function (product) {
                    var _this = this;
                    console.log("delete:" + product.title);
                    this._productService.delete(product).subscribe(function () {
                        _this.getProducts();
                    }, function (err) { return _this.router.navigate(["CmsLogin"]); });
                };
                ProductList.prototype.logError = function (err) {
                    console.log("Error!", err);
                };
                ProductList = __decorate([
                    core_1.Component({
                        selector: "product-list",
                        directives: [router_1.RouterLink, router_1.ROUTER_DIRECTIVES],
                        templateUrl: "app/cms/partial/product-list.html"
                    }), 
                    __metadata('design:paramtypes', [product_service_1.ProductService, router_1.Router])
                ], ProductList);
                return ProductList;
            })();
            exports_1("ProductList", ProductList);
        }
    }
});
//# sourceMappingURL=product-list.js.map