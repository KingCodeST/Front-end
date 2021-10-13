import { Component, OnInit } from '@angular/core';
import {User} from './user.model';

  

@Component({
  selector: 'app-shuttle',
  templateUrl: './shuttle.component.html',
  styleUrls: ['./shuttle.component.scss']
})


export class ShuttleComponent implements OnInit {

  constructor() { }

  public changeColorClass ="txtClass";
  public headerColor ="hcolor";
  public bodyColor ="bcolor";
  public footecolor="fcolor";

  ngOnInit(): void {
  }


}


