import { Component, OnInit } from '@angular/core';
import {AdminService} from "../../service/admin.service";
import { Property } from "../../common/Property";
import { User } from "../../common/User";
import {FeedbackService} from "../../service/feedback.service";
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})

export class AdminDashboardComponent implements OnInit {

  feedCount: number=0;
  userCount: number=0;
  propCount: number=0;
  properties: Property[];
  users: User[];
  constructor(private adminService: AdminService,
              private feedbackService: FeedbackService) { }

  ngOnInit(): void {
    this.getUserCount();
    this.getPropCount();
    this.getProps();
    this.getUsers();
    this.getFeedCount();
  }
  getUserCount()
  {
    this.adminService.getUserCount().subscribe((data)=>{
      this.userCount=data;
    });
  }
  getPropCount()
  {
    this.adminService.getPropCount().subscribe((data)=>{
      this.propCount=data;
    });

  }
  getFeedCount()
  {
    this.feedbackService.getFeedCount().subscribe(data=>{
      this.feedCount=data;
    });
  }
  getUsers()
  {
    this.adminService.listAllUsers().subscribe((data)=>{
      this.users=data;
    })
  }
  getProps()
  {
    this.adminService.listAllProps().subscribe((data)=>{
      this.properties=data;
    })
  }
}
