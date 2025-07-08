import { Component, Input } from '@angular/core';
import { Question, copyQuestion } from '../question';
import { QuestionService } from '../question.service';

@Component({
    selector: 'randomize-question',
    // standalone: true,
    // imports: [],
    templateUrl: './randomize-question.component.html',
    styleUrl: './randomize-question.component.scss',
    standalone: false
})
export class RandomizeQuestionComponent {
  @Input() question: Question|undefined = undefined;
  question_pattern: string = '';
  index:number = 1;
  vars: string[] = [];
  values: number[] = [];
  pattern_data:any[] = [];

  constructor(public questionService: QuestionService){
  }
  ngOnInit(){
    console.log(this.question?.pattern)
    console.log(this.question?.pattern_data)

    this.question_pattern = this.question?.pattern ?? '';
    this.pattern_data = this.question?.pattern_data ?? [];
    // this.findAllNumbers(this.question?.text ?? '');
    // this.question_pattern = this.replaceNumbersWithIndices(this.question?.text ?? '')
  }
  // findAllNumbers(str: string): number[] {
  //   const regex = /\d+/g; // Matches one or more digits
  //   const matches = str.match(regex); // Returns an array of strings or null
  //   console.log(matches)
  //   return matches ? matches.map(Number) : [];
  // }
  // replaceNumbersWithIndices(input: string): string {
  //   // let index = 1; // Start with index 1
  //   return input.replace(/\d+/g, (x) => {
  //     let y = `num_${this.index++}`;
  //     this.vars[this.index] = y;
  //     this.values[x];
  //     return `{${y}}`;

  //   });
  // }

  generate(){

    
    this.question_pattern = this.question?.pattern ?? '';

    for(let p of this.pattern_data){
      p.value = Math.round(Math.random()*100);
      this.question_pattern = this.question_pattern.replace(`{${p.name}}`,p.value);
    }



  }

  updatePattern(patternName: string, $event:any){
    console.log(patternName);
    console.log($event.target.value);

    // this.pattern_data = this.question?.pattern_data ?? [];
    this.question_pattern = this.question?.pattern ?? '';

    for(let p of this.pattern_data){
      p.value = (p.name == patternName)?$event.target.value:p.value;
      this.question_pattern = this.question_pattern.replace(`{${p.name}}`,p.value);
    }
  }
  updatePatternData(){
  }
  save(){
    
    if(!this.question) return;

    let question_copy = copyQuestion(this.question);
    question_copy.text = this.question_pattern;


    this.questionService.store(question_copy,false).subscribe(res => {
      this.question_pattern = this.question?.pattern ?? '';
    })
  }
}
