import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-onomatopia',
  templateUrl: './create-onomatopia.component.html',
  styleUrls: ['./create-onomatopia.component.scss']
})
export class CreateOnomatopiaComponent implements OnInit {

 public newOnomatopia: string = "";

  @Output()
  sendOnomatopiaToParent:EventEmitter<any> = new EventEmitter();

  createOnomatopia(): void {
    this.sendOnomatopiaToParent.emit(this.newOnomatopia)
    console.log("salut");

  }

  constructor() { }

  ngOnInit(): void {
  }

  }
