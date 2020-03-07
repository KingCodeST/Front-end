import {HttpClient, HttpResponse,HttpRequest,HttpHeaders  } from '@angular/common/http';
import {Injectable  } from '@angular/core';
import { User } from './user.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'
import { Observable } from 'rxjs';


@Injectable()
export class UserService{

    constructor(private _httpService: HttpClient){}

    // getAllUsers(): Observable<User[]>{
    //   return  this._httpService.get("http://localhost:8080/user/read/all")
    //     ._subscribe((Response: Response) => Response.json())
    //     .catch(this.handlerError);
    // }

    private handlerError(error: Response){
        return Observable.throw(error)
    }

}