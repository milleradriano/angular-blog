import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake'
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @Input()
  photoCover:string = ''
  @Input()
  contentTitle:string = ''
  @Input()
  contentDescription:string = ''
private id : any = '0'
  constructor(private route: ActivatedRoute) { 
    
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id')
      this.setValuesToComponent(this.id)
     
    })
  }
setValuesToComponent(id:string){

  const result = dataFake.filter(article => article.id.toString() == id)[0]
  console.log(result)
  if(!result) return
  this.photoCover = result.photo
  this.contentTitle = result.title
  this.contentDescription = result.description
}
}
