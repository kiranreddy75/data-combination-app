import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class DashBoardService {

  constructor(private http: HttpClient, private spinner: NgxSpinnerService) { }

  public getUserData(): Observable<any> {
    this.spinner.show();
    return this.http.get<any>('http://localhost:3333/api/users', { observe: 'body' }).pipe(map((result: HttpResponse<any>) => {
      this.spinner.hide();
      return result;
    }));
  }

  public deleteUserData(id: string): Observable<any> {
    const url = `http://localhost:3333/api/users/${id}`
    return this.http.delete<any>(url, { observe: 'body' }).pipe(map((result: string) => {
      return result;
    }));
  }

  public getPlatformData(): Observable<any> {
    this.spinner.show();
    return this.http.get<any>('http://localhost:3333/api/platforms', { observe: 'body' }).pipe(map((result: HttpResponse<any>) => {
      this.spinner.hide();
      return result;
    }));
  }
}
