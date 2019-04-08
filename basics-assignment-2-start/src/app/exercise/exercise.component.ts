import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent implements OnInit {

  username : string = '';
  isEmpty : boolean = false;

  constructor() { }

  ngOnInit() {
  }

  public resetUsr() : any {
    this.username = '';
  }

  public isEmptyUsr() : boolean{
   return  this.username ? false : true; 
  }

}
