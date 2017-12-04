import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  title = 'list of courses';
  courses;
  imgUrl = 'http://lorempixel.com/100/25/sports';

  constructor(service: CourseService) {
    this.courses = service.getArray();
  }

  ngOnInit() {
  }

}
