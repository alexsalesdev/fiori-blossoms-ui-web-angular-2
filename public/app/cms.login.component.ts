import {Component} from 'angular2/core';
import {ProductForm} from './cms/product-form'
import {ProductList} from './cms/product-list'
import {Router, ROUTER_DIRECTIVES, RouterLink} from 'angular2/router';
import {AccountService} from './service/account-service'

@Component({
    selector: 'cms-product',
    template: `
        <form (ngSubmit)="login()">
             <div>
                <label for="username">Username: </label><input id="username" [(ngModel)]="username" type="text" required>
             </div>

            <div>
                <label for="password">Password: </label><input id="password" [(ngModel)]="password" type="text" required>
            </div>
            <button>Login</button>
        </form>
    `,
    directives: [ProductList, RouterLink, ROUTER_DIRECTIVES]
})
export class CmsLogin {
    username:string = "";
    password:string = "";

    constructor(public _accountService: AccountService, public router: Router) {
    }

    login() {
        console.log("login clicked.");
        this._accountService.login(this.username, this.password).subscribe(
            result => {
                console.log("login result: " + result)
                this._accountService.token = result;
                this.router.navigate(["CmsProduct"]);
            },
            err => { alert("Invalid login."); }
        );
    }

}
