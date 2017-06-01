import { Injectable } from '@angular/core';
import { Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the PostServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PostServiceProvider {


  
  
  constructor(public http: Http) {

    
    console.log('Hello PostServiceProvider Provider');
  }


postData(){
  let headers = new Headers();
    headers.append('Content-Type','application/json');
    headers.append('Authorization','test');
    headers.append('Access-Control-Allow-Origin','*')
    let body = {
      msg:"Message from client"
    };
 return this.http.post('http://httpbin.org/post',JSON.stringify(body),{headers:headers}).map(res => res.json());
}
}
