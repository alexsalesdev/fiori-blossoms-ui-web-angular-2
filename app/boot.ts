import {bootstrap}    from 'angular2/platform/browser';
import {AppComponent} from './app.component';
import {HTTP_PROVIDERS} from 'angular2/http';
import { bind } from 'angular2/core';
import { FORM_PROVIDERS } from "angular2/common";
import { ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy } from 'angular2/router';
import {AccountService} from './service/account-service'
import {ProductService} from './service/product-service'
import {Config} from './service/config'

bootstrap(AppComponent,
    [HTTP_PROVIDERS,
    FORM_PROVIDERS,
    ROUTER_PROVIDERS,
    bind(LocationStrategy).toClass(HashLocationStrategy),
    AccountService,
        ProductService,
        Config
    ]);
