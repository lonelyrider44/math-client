import { Component } from '@angular/core';
import { Question } from '../question';
import { QuestionService } from '../question.service';
import { QuestionComponent } from '../question/question.component';
import { QuestionModule } from '../question.module';
import { Subject } from '../../subject/subject';
import { Chapter } from '../../chapter/chapter';
import { SubjectService } from '../../subject/subject.service';
import { ChapterService } from '../../chapter/chapter.service';

@Component({
  selector: 'app-selected-questions',
  // standalone: true,
  // imports: [QuestionModule],
  templateUrl: './selected-questions.component.html',
  styleUrl: './selected-questions.component.scss'
})
export class SelectedQuestionsComponent {
    questions: Question[] = [];

    public subjects: Subject[] | undefined;
    public chapters: Chapter[] | undefined;
    public subject_id: number | undefined;
    public chapter_id: number | undefined;

    constructor(
      public subjectService: SubjectService,
      public chapterService: ChapterService,
      public questionService: QuestionService
    ){

    }

    ngOnInit(){
      let question_ids= JSON.parse(localStorage.getItem('selected_questions') ?? '[]');

      this.subjectService.all().subscribe({
        next: (res) => {
          this.subjects = res 
          this.subjectChanged({});
        }
      })
      this.questionService.get({id: question_ids}).subscribe(res => {
        this.questions = res
        console.log(this.questions);
      });
    }

    subjectChanged($event: any) {
      this.subject_id = $event.value;
      //     console.log($event.value);
      // console.log(this.question.subject_id);
      this.chapterService.index({ subject_id: this.subject_id ?? -1 }).subscribe(res => {
        this.chapters = res;
      })
    }

    updateSubjectChapter(){
      console.log(this.chapter_id);
      this.questionService.mass_update(this.questions.map( q => q.id??-1),{
        subject_id: this.subject_id,
        chapter_id: this.chapter_id
      },false).subscribe(res => {
        alert('test');
      })
    }
}
