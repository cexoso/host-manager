import { Component } from '@angular/core';
import HostPage from './hostPage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  hostPages: HostPage[];
  current: HostPage;
  changeCurrent(hostPage: HostPage) {
    this.current = hostPage;
  }
  constructor() {
    this.hostPages = [{
      name: 'system',
      isSelected: true,
      text: '123'
    }, {
      name: 'page1',
      isSelected: false,
      text: '456'
    }];
    this.current = this.hostPages[0];
  }
}
