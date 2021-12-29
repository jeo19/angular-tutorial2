import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-box',
  templateUrl: './detail-box.component.html',
  styleUrls: ['./detail-box.component.css']
})
export class DetailBoxComponent implements OnInit {

  book={
    btitle:'Head First Design Patterns:Deep Dive Angular',
    bauthor:'Frymon and 3 other',
    bprice:28000,
    bdate:'2009/12/3',
    bisbn:'89-7914-340-0',
    bimgurl:'http://image.hanbit.co.kr/cover/_m_1340m.gif'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
