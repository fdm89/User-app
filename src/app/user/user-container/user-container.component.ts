import { Component, Input, OnInit } from '@angular/core';
import { users } from 'src/app/model/Mock';
import { User } from 'src/app/model/User';

@Component({
  selector: 'user-app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.css']
})
export class UserContainerComponent implements OnInit {
Users:User[] = users
selectedUser!:User | null
  constructor() { }

show(user:User){
this.selectedUser = user
}

close(){
  this.selectedUser = null
}
  ngOnInit(): void {
  }

}
