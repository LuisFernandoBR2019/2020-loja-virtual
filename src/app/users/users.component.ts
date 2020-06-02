import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { UsersModel } from 'src/app/models/users.model';

@Component({
  selector: 'fai-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private userService: UsersService ) { }

  ngOnInit() {
    this.getUsers()
  }

  users: UsersModel[] = []

  getUsers(){
    this.userService.getUsers().subscribe((users:UsersModel[])=>{
      this.users = users
      
    })
  }

}
