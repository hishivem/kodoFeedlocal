import { Component, OnInit } from '@angular/core';
import * as data from '../../../mocks/mock_data.json'

@Component({
  selector: 'app-search-sort',
  templateUrl: './search-sort.component.html',
  styleUrls: ['./search-sort.component.css']
})
export class SearchSortComponent implements OnInit {
  activePage:number = 0; 
  feedFilterData= [];
  mockData: [];
  feedData: [];


  constructor() {  }

  ngOnInit() {
    this.mockData = data.default;
    this.feedData = data.default;
  }

  handleSorting(data){
    console.log(data)
    if(data == "title"){
      this.feedData.sort(function(a, b) {
          var titleA = a.name.toLowerCase(), titleB = b.name.toLowerCase();
          if (titleA < titleB) return -1;
          if (titleA > titleB) return 1;
          return 0;
      });
      console.log(this.feedData)
    }else if( data == "date"){
       this.feedData.sort((a, b) => {
        return <any>new Date(b.dateLastEdited) - <any>new Date(a.dateLastEdited);
      });
      console.log(this.feedData)
    }else{
      this.feedData = this.mockData;
    }
    this.displayActivePage(this.activePage)
  }

  displayActivePage(activePageNumber:number, size = 3){
      this.activePage = activePageNumber;
      this.feedFilterData = this.mockData.slice().splice((activePageNumber-1)*size,size);
  }  

}
