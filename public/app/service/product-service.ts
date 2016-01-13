import {Http, Headers} from 'angular2/http';
import { Injectable } from 'angular2/core';
import {Config} from "./config";
import {AccountService} from "./account-service";
import {Product} from "../model/product";
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {
    public product: Product = new Product();
    public products: Product[] = [];

    constructor(public http: Http, private _config: Config, private _accountService: AccountService) { }

    getById(id) {
        console.log("getById: " + id);

        return this.http.get(this._config.SERVER_URL + 'products/' + id)
            .map(res => res.json());
    }

    getAll() {
        console.log("getAll");

        return this.http.get(this._config.SERVER_URL + 'products')
            .map(res => res.json()).subscribe(
                data =>  {
                console.log(JSON.stringify(data));
                this.products = data;
            },
                err => this.logError(err),
            () => console.log("Get products")
        );
    }

    insert(product: Product) {
        console.log("insert: " + JSON.stringify(product));
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('X-Auth-Token', this._accountService.token);

        return this.http.post(this._config.SERVER_URL + 'products', JSON.stringify(product), {headers: headers})
            .map(res => res.json());
    }

    update(product: Product) {
        console.log("update: " + JSON.stringify(product));
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('X-Auth-Token', this._accountService.token);

        return this.http.put(this._config.SERVER_URL + 'products/' + product.id, JSON.stringify(product), {headers: headers})
            .map(res => res.json());
    }

    delete(product: Product) {
        console.log("delete: " + JSON.stringify(product));

        var headers = new Headers();
        headers.append('X-Auth-Token', this._accountService.token);

        return this.http.delete(this._config.SERVER_URL + 'products/' + product.id,  {headers, headers})
            .map(res => res.json());
    }
}

