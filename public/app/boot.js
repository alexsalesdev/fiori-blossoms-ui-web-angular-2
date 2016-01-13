System.register(['angular2/platform/browser', './app.component', 'angular2/http', 'angular2/core', "angular2/common", 'angular2/router', './service/account-service', './service/product-service', './service/config'], function(exports_1) {
    var browser_1, app_component_1, http_1, core_1, common_1, router_1, account_service_1, product_service_1, config_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
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
            function (config_1_1) {
                config_1 = config_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [http_1.HTTP_PROVIDERS,
                common_1.FORM_PROVIDERS,
                router_1.ROUTER_PROVIDERS,
                core_1.bind(router_1.LocationStrategy).toClass(router_1.HashLocationStrategy),
                account_service_1.AccountService,
                product_service_1.ProductService,
                config_1.Config
            ]);
        }
    }
});
//# sourceMappingURL=boot.js.map