import { CommonModule } from '@angular/common';
import { Component, OnInit, Input, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-star',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './star.component.html',
  styleUrl: './star.component.css'
})
export class StarComponent implements OnInit {
  @Input() rating:number;
  starWidth:number;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>(); 
  constructor() { 
    this.rating = 0;
    this.starWidth =this.rating*90/5;
  }

  onClick(): void {
    this.ratingClicked.emit(`Đánh giá của sản phẩm là ${this.rating} sao!`);
  }
  
  ngOnChanges(): void {
    this.starWidth = this.rating*90/5;
  }
  
  ngOnInit(): void {
  }
   
}
