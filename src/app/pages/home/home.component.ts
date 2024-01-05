import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';
dataFake;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  photoCover: string = '';
  contentTitle: string = '';
  contentDescription: string = '';
  articles: any[] = [''];

  constructor(private route: ActivatedRoute) {}
  private id: any = '0';
  ngOnInit(): void {  
    for (let i = 1; i < dataFake.length; i++) {           
      this.articles = dataFake.filter(article => article.id > 1);
    }
  }
}
