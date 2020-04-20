import {Component, OnInit} from '@angular/core';
import {FooService} from './foo.service';
@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.css']
})
export class FooComponent implements OnInit {
  message: string;
  constructor(private fooService: FooService) {
  }

  ngOnInit(): void {
    this.fooService.getMessage().subscribe(data => {
      this.message = data;
    });

    console.log(this.message);
  }

}
