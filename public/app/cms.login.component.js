System.register(['angular2/core', './cms/product-list', 'angular2/router', './service/account-service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, product_list_1, router_1, account_service_1;
    var CmsLogin;
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
            }],
        execute: function() {
            CmsLogin = (function () {
                function CmsLogin(_accountService, router) {
                    this._accountService = _accountService;
                    this.router = router;
                    this.username = "";
                    this.password = "";
                }
                CmsLogin.prototype.login = function () {
                    var _this = this;
                    console.log("login clicked.");
                    this._accountService.login(this.username, this.password).subscribe(function (result) {
                        console.log("login result: " + result);
                        _this._accountService.token = result;
                        _this.router.navigate(["CmsProduct"]);
                    }, function (err) { alert("Invalid login."); });
                };
                CmsLogin = __decorate([
                    core_1.Component({
                        selector: 'cms-product',
                        template: "\n        <form (ngSubmit)=\"login()\">\n             <div>\n                <label for=\"username\">Username: </label><input id=\"username\" [(ngModel)]=\"username\" type=\"text\" required>\n             </div>\n\n            <div>\n                <label for=\"password\">Password: </label><input id=\"password\" [(ngModel)]=\"password\" type=\"text\" required>\n            </div>\n            <button>Login</button>\n        </form>\n    ",
                        directives: [product_list_1.ProductList, router_1.RouterLink, router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [account_service_1.AccountService, router_1.Router])
                ], CmsLogin);
                return CmsLogin;
            })();
            exports_1("CmsLogin", CmsLogin);
        }
    }
});
//# sourceMappingURL=cms.login.component.js.map