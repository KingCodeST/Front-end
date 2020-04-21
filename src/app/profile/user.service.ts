import {Http, Response, RequestOptions, Headers } from '@angular/common/';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../shuttle/user.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'


@Injectable()
export class UserService{
constructor(private _httpService: Http){}

getall(): Observable<User[]>{
  return this._httpService.get("http://localhost:8080/user")
    .map((response:Response)=> response.json())
    .catch(this.handlerError);
}

private handlerError(error: Response)
{
    return Observable.throw(error);
    
}

}