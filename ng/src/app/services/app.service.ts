import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Entry } from '../models/entry.model';

@Injectable({
    providedIn: 'root'
  })
  export class AppService {
    constructor (private http: HttpClient) {}

    getEntries() {
      return this.http.get('/api/entries');
    }

    // getEntries(): Observable<Entry[]> {
    //   return this.http.get('/api/entries');
    // }
  }
