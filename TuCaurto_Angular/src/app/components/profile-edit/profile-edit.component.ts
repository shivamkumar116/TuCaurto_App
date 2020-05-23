import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { User } from '../../common/User';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css'],
})
export class ProfileEditComponent implements OnInit {
  user: User;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.user = new User();
    this.userService.getProfile(sessionStorage.getItem('username')).subscribe(
      (data) => {
        this.user = data;
      },
      (error) => console.log(error)
    );
  }
  updateUser() {
    this.userService
      .updateProfile(sessionStorage.getItem('username'), this.user)
      .subscribe(
        (data) => {
          console.log(data);
          swal.fire(
            'Success',
            'Your profile has beedn successfully updated',
            'success'
          );
          this.user = new User();
          this.gotoIndex();
        },
        (error) => console.log(error)
      );
  }

  onSubmit() {
    this.updateUser();
  }

  gotoIndex() {
    this.router.navigate(['/index']);
  }
}
