export interface Sudoku {
    
    cells: SudokuCell[];
    square: any[];
}

export interface SudokuCell {
    value?: number;
    candidates?: any[];
    notes?: any[];
}
export interface SudokuSquare {
}