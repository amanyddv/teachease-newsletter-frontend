import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sphere',
  templateUrl: './sphere.component.html',
  styleUrls: ['./sphere.component.css']
})
export class SphereComponent {
  constructor(private router: Router) {}

  spheres = [
    { title: 'Git & Github', description: 'lorem' ,logo:"github.png"},
    { title: 'Machine Leaning', description: 'lorem' ,logo:"machineLearning.jpg"},
    { title: 'Angular',description: 'lorem' ,logo:"angular.png"},
    {title:'React',description:"lorem",logo:"react.png"},
    {title:'System Design' , description:"lorem",logo:"system_design.jpeg"},
    {title:'Javascript' , description:"lorem",logo:"javascript.png"},
    {title:'HTML' , description:"lorem",logo:"html.png"},
    {title:'C++' , description:"lorem",logo:"cpp.png"},
    {title:'CSS' , description:"lorem",logo:"css.png"},
    {title:'Mongodb' , description:"lorem",logo:"mongodb.png"},
    {title:'SQL',description:"lorem",logo:"sql.jpeg"},
    {title:'TypeScript',description:"lorem",logo:"ts.png"},



  ];


  navigateToPage2(title: string) {
    console.log(title)
    // Add navigation logic here, for example:
    this.router.navigate(['/subscribeSphere', title]);
  }
}
