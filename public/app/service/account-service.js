System.register(['angular2/http', 'angular2/core', "./config", 'rxjs/add/operator/map'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var http_1, core_1, config_1;
    var AccountService;
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
            function (_1) {}],
        execute: function() {
            AccountService = (function () {
                function AccountService(http, _config) {
                    this.http = http;
                    this._config = _config;
                    this.token = null;
                }
                AccountService.prototype.login = function (username, password) {
                    console.log("login: " + username);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    return this.http.post(this._config.SERVER_URL + 'login', JSON.stringify({ "username": username, "password": password }), { headers: headers })
                        .map(function (res) { return res.text(); });
                };
                AccountService.prototype.authenticate = function () {
                    console.log("authenticate");
                    var headers = new http_1.Headers();
                    headers.append('X-Auth-Token', this.token);
                    return this.http.get(this._config.SERVER_URL + 'authenticate', { headers: headers })
                        .map(function (res) { return res.text(); });
                };
                AccountService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, config_1.Config])
                ], AccountService);
                return AccountService;
            })();
            exports_1("AccountService", AccountService);
        }
    }
});
//# sourceMappingURL=account-service.js.map