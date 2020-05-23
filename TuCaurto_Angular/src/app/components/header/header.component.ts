import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthenticationService } from '../../service/authentication.service';
import { PropertyService } from 'src/app/service/property.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(public basicAuth: AuthenticationService) {}
  user_role = sessionStorage.getItem('role');
  ngOnInit(): void {}
}
