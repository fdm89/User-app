import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/model/User';

@Component({
  selector: 'user-app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
@Input() Users!:User[]
@Output() showDetail = new EventEmitter <User> ()
  constructor() { }



  ngOnInit(): void {
  }

}
