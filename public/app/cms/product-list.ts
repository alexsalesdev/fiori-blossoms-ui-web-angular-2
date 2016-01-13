import {Component} from "angular2/core";
import {Product} from "../model/product";
import {ProductService} from "../service/product-service";
import {Config} from "../service/config";
import { RouterLink, ROUTER_DIRECTIVES, Router } from 'angular2/router';

@Component({
    selector: "product-list",
    directives: [RouterLink, ROUTER_DIRECTIVES],
    templateUrl: "app/cms/partial/product-list.html"
})

export class ProductList {

    constructor(private _productService: ProductService, public router: Router) {
        this.getProducts();
    }

    editProduct(product: Product) {
        console.log("editProduct");
        this._productService.product = product;
        this.router.navigate(["CmsAddProduct"])
    }

    getProducts() {
        this._productService.getAll();
    }


    delete(product: Product) {
        console.log("delete:" + product.title);
        this._productService.delete(product).subscribe(() => {
            this.getProducts();
        },
        err =>  this.router.navigate(["CmsLogin"]) );

    }

    logError(err) {
        console.log("Error!", err);
    }

}

