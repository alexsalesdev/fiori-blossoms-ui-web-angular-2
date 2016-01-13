import {Component} from 'angular2/core';
import {ProductForm} from './cms/product-form'
import { RouterLink } from 'angular2/router';
import {AccountService} from "./service/account-service";

@Component({
    selector: 'cms-product',
    template: `
        <product-form></product-form>
    `,
    directives: [ProductForm, RouterLink]
})
export class CmsAddProduct {
    constructor(private _accountService: AccountService) {
        _accountService.authenticate().subscribe(
                result => {
                console.log("result: " + result);
            },
                err => {
                console.log("err: " + JSON.stringify(err));
                this.router.navigate(["CmsLogin"]);
            }
        );
    }
}
