import {Component} from 'angular2/core';
import { Index } from './app.index.component';
import { CmsLogin } from './cms.login.component';
import {CmsProduct} from './cms.product.component';
import {CmsAddProduct} from './cms.add-product.component';
import { ROUTER_DIRECTIVES, RouteConfig } from 'angular2/router';

@Component({
    selector: 'my-app',
    template: `
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: '/', as: 'Index', component: Index, useAsDefault: true },
    { path: '/login', as: 'CmsLogin', component: CmsLogin },
    { path: '/product/view', as: 'CmsProduct', component: CmsProduct },
    { path: '/product/add', as: 'CmsAddProduct', component: CmsAddProduct }
])
export class AppComponent {
}
