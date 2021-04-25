import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnChanges {
  @Input() maxItemsPerPage: number;
  @Input() totalItems: number;
  @Output() selectedPageChaged = new EventEmitter();

  pages: number;
  selectedPage = 0;

  constructor() { }

  ngOnChanges(changes:any){
    if(changes){
      this.selectedPage = 0;
      if(this.maxItemsPerPage>0){
        this.pages = Math.floor(this.totalItems/this.maxItemsPerPage) + (this.totalItems%this.maxItemsPerPage ? 1 : 0);
      }
    }
  }

  selectPage(page: number){
    if(page>=0 && page<this.pages){
      this.selectedPage = page;
      this.selectedPageChaged.emit(page);
    }
  }
}
