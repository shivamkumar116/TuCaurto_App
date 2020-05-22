import { Component, OnInit } from '@angular/core';
import { Property } from 'src/app/common/Property';
import { PropertyService } from 'src/app/service/property.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-post-property',
  templateUrl: './post-property.component.html',
  styleUrls: ['./post-property.component.css'],
})
export class PostPropertyComponent implements OnInit {
  property: Property = new Property();

  constructor(
    private propertyService: PropertyService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit(type: number) {
    this.propertyService.postproperty(this.property, type).subscribe(
      (data) => {
        console.log(data);
        swal.fire('Success', 'property Successfully added!', 'success');
        this.property = new Property();
        this.goToList();
      },
      (error) => {
        console.log(error);
        swal.fire('Error', 'Cannot post property. Try again!', 'error');
      }
    );
  }

  goToList() {
    this.router.navigate(['/myproperties']);
  }
}
