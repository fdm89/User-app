import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/model/User';

@Component({
  selector: 'user-app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
@Input() selectedUser!:User | null
@Output() closeDetail = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

}
