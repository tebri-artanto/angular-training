import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrl: './detail-user.component.css',
  standalone: false
})
export class DetailUserComponent implements OnInit{

  userData: any;
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userData = this.userService.getUserData();
  }

  ngAfterViewChecked(){}





}
