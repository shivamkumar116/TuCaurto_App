import { Component, OnInit } from '@angular/core';
import { PropertyService } from 'src/app/service/property.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Property } from 'src/app/common/Property';
import { MailService } from 'src/app/service/mail.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-property-view',
  templateUrl: './property-view.component.html',
  styleUrls: ['./property-view.component.css'],
})
export class PropertyViewComponent implements OnInit {
  property: Property;
  submitted = false;

  id: number;
  constructor(
    private propertyService: PropertyService,
    private route: ActivatedRoute,
    private router: Router,
    private mailService: MailService
  ) {}

  ngOnInit(): void {
    this.getProperty();
  }

  getProperty() {
    this.property = new Property();
    this.id = this.route.snapshot.params['id'];
    this.propertyService.getSelectedProperty(this.id).subscribe((data) => {
      this.property = data;
    });
  }

  shareDetails() {
    this.submitted = true;
    let username = sessionStorage.getItem('username');
    let email = this.property.user.email;
    let name = this.property.name;
    let address = this.property.address;

    this.mailService
      .sendShareDetail({ email, username, name, address })
      .subscribe(
        (data) => {
          swal.fire(
            'Success',
            'Your details has been shared with owner',
            'success'
          );
          console.log(data);
          this.submitted = false;
        },
        (error) => {
          console.log('something went wrong!');
          swal.fire('Error', 'Something went wrong .Try Again', 'error');
        }
      );
  }

  list() {
    this.router.navigate(['/index']);
  }
}
