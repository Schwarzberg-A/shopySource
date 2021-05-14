import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
public get<T>(url:string): Observable<T> {
  return this.http.get<T>(url)
 }

// public get(url:string) {
//   return this.http.get(url).toPromise()
//  }

 public post(url:string, data) {
  return this.http.get(url, data).toPromise()
 }


  constructor(private http: HttpClient) { }
}