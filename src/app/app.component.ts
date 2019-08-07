import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-shipments-table';
  menuBtnClass = 'fa-angle-left';
  containerClass = 'container';
  menuClass = 'menu-opened';
  menuOpened = true;

  toggleMenu(){
    if(this.menuOpened){
      this.menuBtnClass = 'fa-angle-right';
      this.menuClass = 'menu-closed';
      this.containerClass = 'wide-container';
      this.menuOpened = false;
    }else{
      this.menuBtnClass = 'fa-angle-left';
      this.menuClass = 'menu-opened';
      this.containerClass = 'container';
      this.menuOpened = true;
    }
  }
}
