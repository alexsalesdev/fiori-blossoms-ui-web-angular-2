System.register(['angular2/core', './cms/product-list', 'angular2/router', './service/account-service', './service/product-service', './model/product'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, product_list_1, router_1, account_service_1, product_service_1, product_1;
    var CmsProduct;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (product_list_1_1) {
                product_list_1 = product_list_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (account_service_1_1) {
                account_service_1 = account_service_1_1;
            },
            function (product_service_1_1) {
                product_service_1 = product_service_1_1;
            },
            function (product_1_1) {
                product_1 = product_1_1;
            }],
        execute: function() {
            CmsProduct = (function () {
                function CmsProduct(_accountService, _productService, router) {
                    var _this = this;
                    this._accountService = _accountService;
                    this._productService = _productService;
                    this.router = router;
                    _accountService.authenticate().subscribe(function (result) {
                        console.log("result: " + result);
                    }, function (err) {
                        console.log("err: " + JSON.stringify(err));
                        _this.router.navigate(["CmsLogin"]);
                    });
                }
                CmsProduct.prototype.addProduct = function () {
                    console.log("addProduct");
                    this._productService.product = new product_1.Product();
                    this.router.navigate(["CmsAddProduct"]);
                };
                CmsProduct = __decorate([
                    core_1.Component({
                        selector: 'cms-product',
                        template: "\n        <button type=\"button\" (click)=\"addProduct()\">Add Product</button>\n        <product-list></product-list>\n    ",
                        directives: [product_list_1.ProductList, router_1.RouterLink, router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [account_service_1.AccountService, product_service_1.ProductService, router_1.Router])
                ], CmsProduct);
                return CmsProduct;
            })();
            exports_1("CmsProduct", CmsProduct);
        }
    }
});
//# sourceMappingURL=cms.product.component.js.map