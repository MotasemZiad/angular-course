import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  data = {
    title: 'Angular-Course'
  }


  onRocketClicked() {
    alert("You clicked the rocket!")
  }

  onKeyUp(newTitle: string) {
    this.data.title = newTitle
  }
}
