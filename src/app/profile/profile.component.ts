import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public changeColorClass ="txtClass";
  public headerColor ="hcolor";
  public bodyColor ="bcolor";
  public footecolor="fcolor";

}
