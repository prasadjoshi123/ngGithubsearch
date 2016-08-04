import { Component } from '@angular/core';
import {GithubService} from '../services/github.service';

@Component({
    moduleId: module.id,
    selector: 'github',
    templateUrl: 'github.component.html'
})
export class GithubComponent {
    user:any;
    repos:any;
    username:any;

    constructor(private _gitHubService: GithubService){
              this.user=false;
        /**      for default user
       // this._gitHubService.getuser().subscribe(user=> {
        //this.user = user;
        //});

        //this._gitHubService.getRepos().subscribe(repos=> {
        //this.repos = repos;        
        //});  */


    }

    search(){
        this._gitHubService.updateUsername(this.username)

         this._gitHubService.getuser().subscribe(user=> {
        this.user = user;
        });

        this._gitHubService.getRepos().subscribe(repos=> {
        this.repos = repos;        
        });
    }
 }
