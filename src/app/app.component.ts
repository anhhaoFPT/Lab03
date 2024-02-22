import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ProductlistComponent } from './components/productlist/productlist.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StarComponent } from './components/star/star.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,ProductlistComponent,FontAwesomeModule,StarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Lab03';
}
