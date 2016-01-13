System.register(['angular2/http', 'angular2/core', "./config", "./account-service", "../model/product", 'rxjs/add/operator/map'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var http_1, core_1, config_1, account_service_1, product_1;
    var ProductService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (config_1_1) {
                config_1 = config_1_1;
            },
            function (account_service_1_1) {
                account_service_1 = account_service_1_1;
            },
            function (product_1_1) {
                product_1 = product_1_1;
            },
            function (_1) {}],
        execute: function() {
            ProductService = (function () {
                function ProductService(http, _config, _accountService) {
                    this.http = http;
                    this._config = _config;
                    this._accountService = _accountService;
                    this.product = new product_1.Product();
                    this.products = [];
                }
                ProductService.prototype.getById = function (id) {
                    console.log("getById: " + id);
                    return this.http.get(this._config.SERVER_URL + 'products/' + id)
                        .map(function (res) { return res.json(); });
                };
                ProductService.prototype.getAll = function () {
                    var _this = this;
                    console.log("getAll");
                    return this.http.get(this._config.SERVER_URL + 'products')
                        .map(function (res) { return res.json(); }).subscribe(function (data) {
                        console.log(JSON.stringify(data));
                        _this.products = data;
                    }, function (err) { return _this.logError(err); }, function () { return console.log("Get products"); });
                };
                ProductService.prototype.insert = function (product) {
                    console.log("insert: " + JSON.stringify(product));
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    headers.append('X-Auth-Token', this._accountService.token);
                    return this.http.post(this._config.SERVER_URL + 'products', JSON.stringify(product), { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                ProductService.prototype.update = function (product) {
                    console.log("update: " + JSON.stringify(product));
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    headers.append('X-Auth-Token', this._accountService.token);
                    return this.http.put(this._config.SERVER_URL + 'products/' + product.id, JSON.stringify(product), { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                ProductService.prototype.delete = function (product) {
                    console.log("delete: " + JSON.stringify(product));
                    var headers = new http_1.Headers();
                    headers.append('X-Auth-Token', this._accountService.token);
                    return this.http.delete(this._config.SERVER_URL + 'products/' + product.id, { headers: headers, headers: headers })
                        .map(function (res) { return res.json(); });
                };
                ProductService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, config_1.Config, account_service_1.AccountService])
                ], ProductService);
                return ProductService;
            })();
            exports_1("ProductService", ProductService);
        }
    }
});
//# sourceMappingURL=product-service.js.map