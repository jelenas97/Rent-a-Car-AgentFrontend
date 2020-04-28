import { Component, OnInit, Input} from '@angular/core';
import { CodeBook } from 'src/app/shared/model/codeBook';

@Component({
  selector: 'app-code-book',
  templateUrl: './code-book.component.html',
  styleUrls: ['./code-book.component.css']
})
export class CodeBookComponent implements OnInit {
  @Input("codeBook") codeBook : CodeBook;
  constructor() { }

  ngOnInit(): void {
  }

}
