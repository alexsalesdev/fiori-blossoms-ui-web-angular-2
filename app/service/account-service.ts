import {Http, Headers} from 'angular2/http';
import { Injectable } from 'angular2/core';
import {Config} from "./config";
import 'rxjs/add/operator/map';

@Injectable()
export class AccountService {
    public token: string = null
    constructor(public http: Http, private _config: Config) { }

    login(username: string, password: string) {
        console.log("login: " + username);
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.post(
            this._config.SERVER_URL + 'login',
            JSON.stringify({"username": username, "password": password}),
            {headers: headers})

            .map(res => res.text());
    }

    authenticate() {
        console.log("authenticate");

        var headers = new Headers();
        headers.append('X-Auth-Token', this.token);

        return this.http.get(this._config.SERVER_URL + 'authenticate', {headers: headers})
            .map(res => res.text());
    }
}

