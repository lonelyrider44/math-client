import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SudokuCellComponent } from '../sudoku-cell/sudoku-cell.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-sudoku',
  standalone: true,
  imports: [CommonModule, SudokuCellComponent, MatButtonModule],
  templateUrl: './sudoku.component.html',
  styleUrl: './sudoku.component.scss'
})
export class SudokuComponent {
  public matrix =  this.resetSudoku();
  public candidates: any[] = [];
  
  public editNotes: boolean = false;

  ngOnInit(){
    // this.newSudoku();
  }
  newSudoku2(){
    this.matrix = [
      [0, 0, 4, 2, 0, 0, 0, 0, 8],
      [9, 0, 0, 0, 1, 0, 3, 0, 0],
      [0, 0, 0, 0, 0, 5, 7, 0, 0],
      [6, 0, 0, 0, 0, 0, 9, 0, 0],
      [3, 0, 0, 8, 0, 7, 0, 0, 2],
      [0, 0, 1, 0, 0, 0, 0, 0, 4],
      [0, 0, 5, 6, 0, 0, 0, 0, 0],
      [0, 0, 2, 0, 9, 0, 0, 0, 7],
      [8, 0, 0, 0, 0, 3, 1, 0, 0],
    ];

    this.matrix[4][7] = 1;
    
  }
  newSudoku() {
    this.matrix = [
      [0, 0, 0, 2, 0, 0, 0, 0, 7],
      [0, 0, 4, 0, 0, 8, 1, 0, 0],
      [6, 0, 0, 3, 0, 0, 5, 9, 0],
      [0, 5, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 8, 0, 0, 0, 4, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 3, 0],
      [0, 9, 1, 0, 0, 7, 0, 0, 2],
      [0, 0, 3, 4, 0, 0, 8, 0, 0],
      [2, 0, 0, 0, 0, 5, 0, 0, 0],
    ];
    
    this.matrix[1][7] = 2;
    this.matrix[0][2] = 5;
    this.matrix[7][0] = 5;
    this.matrix[6][7] = 5;

    this.newSudoku2();
  }

  resetSudoku(){
    return [
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];
  }
  updateSudoku($event: any[]){
    console.log('sudoku should be updated')
    // this.matrix = $event;
    this.matrix = {...$event};

    console.table(this.matrix);
  }
}
