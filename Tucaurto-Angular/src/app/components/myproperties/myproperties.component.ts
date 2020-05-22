import { Component, OnInit } from '@angular/core';
import { Property } from 'src/app/common/Property';
import { UserService } from 'src/app/service/user.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-myproperties',
  templateUrl: './myproperties.component.html',
  styleUrls: ['./myproperties.component.css'],
})
export class MypropertiesComponent implements OnInit {
  properties: Property[];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getMyProperties();
  }

  getMyProperties() {
    return this.userService
      .getMyProperties(sessionStorage.getItem('username'))
      .subscribe((data) => {
        this.properties = data;
      });
  }
  deleteProperty(id: number) {
    swal
      .fire({
        title: 'Are you sure?',
        text: 'You will not be able to recover this property!',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, keep it',
      })
      .then((result) => {
        if (result.value) {
          this.userService
            .deleteProperty(id, sessionStorage.getItem('username'))
            .subscribe((data) => {
              console.log(data);
              swal.fire(
                'Deleted!',
                'Your property has been deleted.',
                'success'
              );
              this.ngOnInit();
            });
        } else if (result.dismiss === swal.DismissReason.cancel) {
          swal.fire('Cancelled', 'Your property is safe :)', 'info');
        }
      });
  }
}
