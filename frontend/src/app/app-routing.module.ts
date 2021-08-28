import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterStudentComponent } from './home/register-student/register-student.component';
import { RegisterTeacherComponent } from './home/register-teacher/register-teacher.component';
import { RegisterMatterComponent } from './home/register-matter/register-matter.component';
import { RegisterCourseComponent } from './home/register-course/register-course.component';
import { LoginComponent } from './home/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'registerStudent',
    component: RegisterStudentComponent,
  },
  {
    path: 'registerTeacher',
    component: RegisterTeacherComponent,
  },
  {
    path: 'registerMatter',
    component: RegisterMatterComponent,
  },
  {
    path: 'registerCourse',
    component: RegisterCourseComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
