import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Output';

  onomatopoeias: string[] = [];

  onReceiveNewOnomatopia($event: string) {
    this.onomatopoeias.push($event)
    console.log("bonjour");
  }


}

