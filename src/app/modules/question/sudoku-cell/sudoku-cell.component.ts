import { CommonModule } from '@angular/common';
import { Component,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sudoku-cell',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sudoku-cell.component.html',
  styleUrl: './sudoku-cell.component.scss'
})
export class SudokuCellComponent {
  @Input() row:number = 0;
  @Input() col:number = 0;
  @Input() value: number|undefined;
  @Input() notes: boolean=false;
  @Input() sudoku: any[] = [];
  @Input() editNotes: boolean = false;
  
  @Output() sudoku_updated = new EventEmitter<any[]>(); 
  @Output() notes_updated = new EventEmitter<any[]>();

  @Output() cell_change = new EventEmitter<any>();

  public candidates:any[] = this.resetCandidates();

  ngOnChanges(){
    console.log('on changes');
    console.table(this.sudoku)
    this.value = this.sudoku[this.row-1][this.col-1];
    this.updateCandidates();

    if(!this.value && !this.candidates.filter((c) => c.candidate).length){
      alert('Game over')
    }
  }
  resetCandidates(){
    return [
      {value: 1, candidate: true},
      {value: 2, candidate: true},
      {value: 3, candidate: true},
      {value: 4, candidate: true},
      {value: 5, candidate: true},
      {value: 6, candidate: true},
      {value: 7, candidate: true},
      {value: 8, candidate: true},
      {value: 9, candidate: true},
    ];
    // ret  urn [1,2,3,4,5,6,7,8,9];
  }
  updateCandidates(){

    this.candidates = this.candidates.map((c) => {
      for(let i=0; i<9; i++){
        if(this.sudoku[i][this.col-1]==c.value){
          c.candidate = false;
        }
      }
      for(let i=0; i<9; i++){
        if(this.sudoku[this.row-1][i]==c.value){
          c.candidate = false;
        }
      }

      let square_i = Math.floor((this.row-1)/3)*3;
      let square_j = Math.floor((this.col-1)/3)*3;
      for(let i=square_i; i<square_i+3; i++){
        for(let j=square_j; j<square_j+3; j++){
          if(this.sudoku[i][j]==c.value){
            c.candidate = false;
          }
        }
      }
      return c;
    })

    console.table(this.candidates);
    
  }

  updateSudoku(value:number){
    if(this.editNotes){
      this.candidates = this.candidates.map((c)=>{
        if(c.value==value){
          c.candidate = false;
        }
        return c;
      })
    }else{
      // this.value = value;
      this.sudoku[this.row-1][this.col-1] = this.value = value;
      this.sudoku_updated.emit(this.sudoku);

    }
  }
}
