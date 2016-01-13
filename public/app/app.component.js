System.register(['angular2/core', './app.index.component', './cms.login.component', './cms.product.component', './cms.add-product.component', 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, app_index_component_1, cms_login_component_1, cms_product_component_1, cms_add_product_component_1, router_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (app_index_component_1_1) {
                app_index_component_1 = app_index_component_1_1;
            },
            function (cms_login_component_1_1) {
                cms_login_component_1 = cms_login_component_1_1;
            },
            function (cms_product_component_1_1) {
                cms_product_component_1 = cms_product_component_1_1;
            },
            function (cms_add_product_component_1_1) {
                cms_add_product_component_1 = cms_add_product_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <router-outlet></router-outlet>\n    ",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/', as: 'Index', component: app_index_component_1.Index, useAsDefault: true },
                        { path: '/login', as: 'CmsLogin', component: cms_login_component_1.CmsLogin },
                        { path: '/product/view', as: 'CmsProduct', component: cms_product_component_1.CmsProduct },
                        { path: '/product/add', as: 'CmsAddProduct', component: cms_add_product_component_1.CmsAddProduct }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map