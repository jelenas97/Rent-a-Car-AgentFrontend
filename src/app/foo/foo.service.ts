import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class FooService {

  private readonly fooUrl: string;

  constructor(private httpClient: HttpClient) {
    this.fooUrl = 'http://localhost:8080/foo';
  }

  public getMessage() {
    return this.httpClient.get(this.fooUrl, {responseType: 'text'});
    // ovo je samo primer, ovaj responseType stoji zato sto vracam samo text,
    // a kad budemo koristili objekte ide klasicno get<TipObjekata>...
  }
}
