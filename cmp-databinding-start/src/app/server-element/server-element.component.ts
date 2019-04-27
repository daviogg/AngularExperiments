import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements 
OnInit, 
OnChanges, 
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy{
  

  @Input('srvElement') element: { type: string, name: string, content: string };
  @Input() name : string;
 
  constructor() {
    console.log("Constructor Log!");
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log("OnInit Log!");
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log("OnChanges Log!");
  }

  ngDoCheck(){
    console.log("DoCheck Log!");
    
  }

  ngAfterContentInit(){
    console.log("ngAfterContentInit Log!");
    
  }

  ngAfterContentChecked(){
    console.log("ngAfterContentChecked Log!");
    
  }

  ngAfterViewInit(){
    console.log("ngAfterViewInit Log!");

  }
  ngAfterViewChecked(){
    console.log("ngAfterViewChecked Log!");
    
  }

  ngOnDestroy(){
    console.log("ngOnDestroy Log!");
    
  }

}
