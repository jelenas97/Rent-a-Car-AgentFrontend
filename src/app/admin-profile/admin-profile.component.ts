import { Component, OnInit } from '@angular/core';
import { CodeBook } from '../shared/model/codeBook';
import { CodebookService } from '../service/codebook.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {

  constructor(private _codebookService : CodebookService) { }
  codeBook : CodeBook;
  show = false;
  ngOnInit(): void {

    this._codebookService.getCodeBookInfo().subscribe(codeBook => {
    
      console.log("Code book" + codeBook);
      this.codeBook = codeBook;
      this.show = true;
      ;
    })
  }

}
