import { Component } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent {
  // courses = [
  //   { id: 1, name: 'courses1' },
  //   { id: 2, name: 'courses2' },
  //   { id: 3, name: 'courses3' },
  // ];
  // onAdd() {
  //   this.courses.push({ id: 4, name: 'courses4' });
  // }
  // onRemove(course: { id: number; name: string; }) {
  //   let index = this.courses.indexOf(course);
  //   this.courses.splice(index, 1);
  // }
  // onChange(course: any) {
  //   course.name = 'UPDATED';
  // }
  courses: any;
  
  loadCourses() { 
    this.courses = [
    { id: 1, name: 'courses1' },
    { id: 2, name: 'courses2' },
    { id: 3, name: 'courses3' },
  ];
  }

  trackCourse(index: any, course: { id: any; }) {
    return course ? course.id : undefined;
  }

  constructor() { }

}
