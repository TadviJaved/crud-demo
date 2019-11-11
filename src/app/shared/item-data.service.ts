import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemDataService {

  constructor(private http:HttpClient) { }
  url : string = 'http://localhost:3000/posts';

  public getListing(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }
}
