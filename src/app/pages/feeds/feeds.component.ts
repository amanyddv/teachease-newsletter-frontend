import { Component } from '@angular/core';
import { ServiceService } from 'src/app/appservice/service.service';
@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.css']
})
export class FeedsComponent {
  constructor(private service:ServiceService){}

  newsletterItems:any
  loading = true;

  ngOnInit(): void {
    this.service.newsletterfeeds().subscribe((res)=>{
      this.newsletterItems=res
    
    })

    setTimeout(() => {
      this.loading = false;
    }, 2000); 
  }

  
}
