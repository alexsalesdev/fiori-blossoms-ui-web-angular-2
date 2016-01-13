import {Component} from "angular2/core";
import {Product} from "../model/product";
import {ProductService} from "../service/product-service";
import {Config} from "../service/config";
import {Router, ROUTER_DIRECTIVES, RouteParams} from 'angular2/router';

@Component({
    selector: "product-form",
    directives: [ROUTER_DIRECTIVES],
    templateUrl: "app/cms/partial/product-form.html"
})

export class ProductForm {
    currencyOptions: string[] = ["PHP", "USD", "SGD"];

    constructor(private _productService: ProductService, params: RouteParams, public router: Router) {
        //if (params.get('id')) {
        //     this._productService.getById(params.get('id')).subscribe(data => this._productService.product = data);
        //}
    }

    submitProduct(e) {
        console.log("submitProduct: " + JSON.stringify(this._productService.product));

        if (this._productService.product.id == null) {
            this._productService.insert(this._productService.product).subscribe(
                    data => {
                        console.log(data);
                        this._productService.getAll();
                        this.router.navigate(["CmsProduct"]);
                    },
                    err => {
                        this.logError(err)
                        this.router.navigate(["CmsLogin"])

                    },
                () => console.log("Submit product complete!")
            );
        } else {
            this._productService.update(this._productService.product).subscribe(
                    data => {
                        console.log(data);
                        this.router.navigate(["CmsProduct"]);
                    },
                    err => {
                        this.logError(err)
                        this.router.navigate(["CmsLogin"])
                    },
                () => console.log("Update product complete!")
            );
        }

        this.clear();
    }

    clear() {
        this._productService.product = new Product();
    }

    logError(err) {
        console.log("Error!", err);
    }

}

