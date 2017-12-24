import { Component } from '@angular/core';
import { FavouriteEventDataArgs } from './favourite/favourite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses = [1, 2];
  title = 'app';
  post = {
    isFavourite : true,
    name : 'nancy'
  };

  onFavChanged(eventArgs: FavouriteEventDataArgs) {
    console.log(eventArgs.newValue);
  }
}
