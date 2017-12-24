import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  isActive = true;
  title = 'list of courses';
  courses;
  course = {
    title: 'The complete angular course',
    student : 30123,
    price : 190.92,
    rating : 4.9123723,
    releaseDate: new Date(2016, 3, 1)
  };

  text = 'lorem ipsum vonta grande istopio la moro kanishpe milde isaakilebueno imardhe. Ino imestolio isgrafitiyano';

  email= 'me@gmail.com';
  imgUrl = 'http://lorempixel.com/100/25/sports';

  constructor(service: CourseService) {
    this.courses = service.getArray();
  }

  onClick($event) {
    // $event.stopPropogation(); prevents event from bubbling to parent
    console.log($event);
  }

  onKeyUp() {
    console.log(this.email);
  }

  ngOnInit() {
  }

}
