import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() show: EventEmitter<void> = new EventEmitter<void>()

  sidebarVisible3: boolean = false;

  showCart() {
    this.show.emit()
  }
}


