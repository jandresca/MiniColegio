import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Router } from '@angular/router';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.css'],
})
export class RegisterStudentComponent implements OnInit {
  public registerData: any;
  public message: string;
  public horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  public verticalPosition: MatSnackBarVerticalPosition = 'top';
  durationInSeconds: number = 2;

  constructor(
    private _userService: StudentService,
    private _router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.registerData = {};
    this.message = '';
  }

  ngOnInit(): void {}

  registerStudent() {
    if (
      !this.registerData.name ||
      !this.registerData.gender ||
      !this.registerData.dateBirth ||
      !this.registerData.code ||
      !this.registerData.email ||
      !this.registerData.password ||
      !this.registerData.mobilePhone ||
      !this.registerData.direction
    ) {
      console.log('Failed process: Incomplete data');
      this.message = 'Failed process: Incomplete data';
      this.openSnackBarError();
      this.registerData = {};
    }else {
      this._userService.registerStudent(this.registerData).subscribe(
        (res) => {
          console.log(res);
          localStorage.setItem('token', res.jwtToken);
          this._router.navigate(['/registerStudent']);
          this.message = 'Succesfull user registration';
          this.openSnackBarSuccesfull();
          this.registerData = {};
        },
        (err) => {
          console.log(err);
          this.message = err.error;
          this.openSnackBarError();
        }
      )
    }
  }

  openSnackBarSuccesfull() {
    this._snackBar.open(this.message, 'X', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSeconds * 1000,
      panelClass: ['style-snackBarTrue'],
    });
  }

  openSnackBarError() {
    this._snackBar.open(this.message, 'X', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSeconds * 1000,
      panelClass: ['style-snackBarFalse'],
    });
  }
}

