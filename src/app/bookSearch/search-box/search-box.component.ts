import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  keyword='java';

  constructor() { }

  ngOnInit(): void {
  }
  setKeyword(keyword:string):void{
    this.keyword=keyword;
  }

}
