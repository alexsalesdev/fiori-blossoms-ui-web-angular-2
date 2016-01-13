System.register(['angular2/core', './cms/product-form', 'angular2/router', "./service/account-service"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, product_form_1, router_1, account_service_1;
    var CmsAddProduct;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (product_form_1_1) {
                product_form_1 = product_form_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (account_service_1_1) {
                account_service_1 = account_service_1_1;
            }],
        execute: function() {
            CmsAddProduct = (function () {
                function CmsAddProduct(_accountService) {
                    var _this = this;
                    this._accountService = _accountService;
                    _accountService.authenticate().subscribe(function (result) {
                        console.log("result: " + result);
                    }, function (err) {
                        console.log("err: " + JSON.stringify(err));
                        _this.router.navigate(["CmsLogin"]);
                    });
                }
                CmsAddProduct = __decorate([
                    core_1.Component({
                        selector: 'cms-product',
                        template: "\n        <product-form></product-form>\n    ",
                        directives: [product_form_1.ProductForm, router_1.RouterLink]
                    }), 
                    __metadata('design:paramtypes', [account_service_1.AccountService])
                ], CmsAddProduct);
                return CmsAddProduct;
            })();
            exports_1("CmsAddProduct", CmsAddProduct);
        }
    }
});
//# sourceMappingURL=cms.add-product.component.js.map