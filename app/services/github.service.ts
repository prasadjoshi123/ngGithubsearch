import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
    private username='prasadjoshi123';
    private client_id='b2565c3185674c4657f5';
    private client_secret='bf2cdf89c858c6619452d53e85d230ea6fdda90e';
    constructor(private _http: Http){
        console.log("Github service Started....");
     }

    getuser(){
        return this._http.get('https://api.github.com/users/'+ this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
        .map(res=> res.json());
    }

    getRepos(){
        return this._http.get('https://api.github.com/users/'+ this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
        .map(res=> res.json());
    }

    updateUsername(username: any){
        this.username=username;
    }
}