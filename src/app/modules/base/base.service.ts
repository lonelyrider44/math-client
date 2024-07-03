import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";


export interface IBaseService{
}
@Injectable({
  providedIn: 'root'
})
export class BaseService<T> implements IBaseService{
    protected url_model:string = "";
    httpOptions = {
        headers: new HttpHeaders({
          'Content': 'application/json'
        })
      }
      constructor(protected httpClient: HttpClient) { }
    
      datatable(dtParams:any): Observable<T[]> {
        return this.httpClient.post<T[]>(`${environment.api_url}/datatable/${this.url_model}`,dtParams)
      }
      all(): Observable<T[]> {
        return this.httpClient.get<T[]>(`${environment.api_url}/${this.url_model}`);
      }
      index(params:any):Observable<T[]>{
        return this.httpClient.post<T[]>(`${environment.api_url}/${this.url_model}`,params);
      }
      //testirati, zapoceto
      get(params:any): Observable<T[]> {
        return this.httpClient.post<T[]>(`${environment.api_url}/${this.url_model}/get`,params);
      }
      find(id:any): Observable<T> { 
        return this.httpClient.get<T>(`${environment.api_url}/${this.url_model}/${id}`)
      }
      store(data:any, stringify: boolean = true): Observable<T> {
        // return this.httpClient.post<T>(`${environment.api_url}/${this.url_model}`, JSON.stringify(data), this.httpOptions)
        return this.httpClient.post<T>(
          `${environment.api_url}/${this.url_model}`, 
            stringify?JSON.stringify(data):data, this.httpOptions)
        // return this.httpClient.post<T>(`${environment.api_url}/${this.url_model}`, JSON.stringify(data), this.httpOptions)
      }
      update(id:any, data:any, stringify: boolean = true): Observable<T> {
        return this.httpClient.put<T>(`${environment.api_url}/${this.url_model}/${id}`, stringify?JSON.stringify(data):data, this.httpOptions)
      }
      delete(id:any){
        return this.httpClient.delete<T>(`${environment.api_url}/${this.url_model}/${id}`, this.httpOptions)
      }
}