import { Component, OnInit  } from '@angular/core';

import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import {
    HttpClient,
    HttpParams,
    HttpHeaders
} from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'app';
    private apiURL = "http://localhost:9795/api/para/";
   
    key: string;
    display: string;
  
    source: Array<any>;
    confirmed: Array<any>;
    paraIds= [];
    constructor(private http: Http)
    {
        this.key = 'paraId';
        this.display = 'paraText'; 
    }
    ngOnInit() {
        this.getLeft();
        this.getRight();

    }
    getParaLeft() {
        return this.http.get(this.apiURL).map((res: Response) => res.json());
    }
    getParaRight() {
        return this.http.get(this.apiURL + '/getAllParaRight').map((res: Response) => res.json());
    }

    getLeft() {
        this.getParaLeft().subscribe(data => {    
            this.source = data;          
        })
    }
    getRight() {
        this.getParaRight().subscribe(data => {
            this.confirmed = data;
        })
    }

    removeAllParaRight() {
        return this.http.get(this.apiURL + '/removeAllParaRight').map((res: Response) => res.json());
    }

    updateParaLeft() {
        return this.http.get(this.apiURL + '/updateParaLeft').map((res: Response) => res.json());
    }
      
    postParaRight(data) {               
        return this.http.post(this.apiURL + 'paraRight', data)            
            .map((data: any) => (data.data || data));           
    }

    autoSave(e) {

        // First Remove all para right
        //this.removeAllParaRight().subscribe(data => {
            
        //})
        
        if (this.confirmed.length > 0) {
            this.confirmed.forEach(Obj => {
                this.paraIds.push(Obj.paraId);
            })
            let postParaRight = {};
            postParaRight = {               
                paraText: "",
                paraIds: this.paraIds
            }
            this.postParaRight(postParaRight)
                .subscribe((res: any) => {
                    console.log(res);
                }, (err) => {
                    console.log(err);
                })

        } else {
             this.removeAllParaRight().subscribe(data => {
                 console.log(data);
            })  
            this.updateParaLeft().subscribe(data => {
                console.log(data);
            })

        }

      
        console.log(e);
        console.log(this.source);

    }
    //savedata() {
    //    console.log("save called");
    //    console.log(this.confirmed);
     
    //    let headers = new Headers({ 'Content-Type': 'application/json' });
    //    let options = new RequestOptions({ headers: headers });
    //    let body = JSON.stringify(this.confirmed);
      
    //    return this.http.post(this.apiURL, this.confirmed[0]).map((res: Response) => res.json());

    
          
    //}



}
export interface ParaRight {
    paraId: number;
    paraText: string;   
}
