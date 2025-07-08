import { Component } from '@angular/core';
import { MathObjectService } from '../math-object.service';
import { MathObject } from '../math-object';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MathjaxModule } from 'mathjax-angular';

@Component({
  selector: 'app-math-object-index',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MathjaxModule
  ],
  templateUrl: './math-object-index.component.html',
  styleUrl: './math-object-index.component.scss'
})
export class MathObjectIndexComponent {

  public mathObjects:MathObject[] = [];

  public constructor(public mathObjectService: MathObjectService){

  }

  ngOnInit(){
    this.mathObjectService.all().subscribe(res => {
      this.mathObjects = res;
    });
  }

  random(mo:MathObject){
    this.mathObjectService.random(mo).subscribe(res => mo.values = res);
  }
}
