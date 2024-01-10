import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { User } from '../../models/users';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {


    constructor(private userService:UserService,    private router: Router
      ) {   
      }

  ngOnInit(): void {


  }

 

}
