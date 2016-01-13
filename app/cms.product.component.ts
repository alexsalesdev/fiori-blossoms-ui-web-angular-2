import {Component} from 'angular2/core';
import {ProductForm} from './cms/product-form'
import {ProductList} from './cms/product-list'
import {Router, ROUTER_DIRECTIVES, RouterLink} from 'angular2/router';
import {AccountService} from './service/account-service'
import {ProductService} from './service/product-service'
import {Product} from './model/product'
import {Config} from './service/config'

@Component({
    selector: 'cms-product',
    template: `
        <button type="button" (click)="addProduct()">Add Product</button>
        <product-list></product-list>
    `,
    directives: [ProductList, RouterLink, ROUTER_DIRECTIVES]
})
export class CmsProduct {
    constructor(private _accountService:AccountService, private _productService:ProductService, public router:Router) {
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

    addProduct() {
        console.log("addProduct");
        this._productService.product = new Product();
        this.router.navigate(["CmsAddProduct"])
    }

}
