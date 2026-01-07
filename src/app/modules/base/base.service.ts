import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";
import { ApiConfigService } from "../shared/api-config.service";


export interface IBaseService{
}
@Injectable({
  providedIn: 'root'
})
export class BaseService<T> implements IBaseService{
    protected url_model:string = "";
    protected api_url:string = "";
    httpOptions = {
        headers: new HttpHeaders({
          'Content': 'application/json'
        })
      }
      constructor(protected httpClient: HttpClient, public apiConfigService: ApiConfigService) {
        this.api_url = this.apiConfigService.apiBaseUrl;
        console.log("API URL:", this.api_url);
      }
    
      datatable(dtParams:any): Observable<T[]> {
        return this.httpClient.post<T[]>(`${environment.api_url}/datatable/${this.url_model}`,dtParams)
      }
      all(): Observable<T[]> {
        // return this.httpClient.get<T[]>(`${environment.api_url}/${this.url_model}`);
        return this.httpClient.get<T[]>(`${this.api_url}/${this.url_model}`);
        // return this.httpClient.get<T[]>(`${environment.api_url}/${this.url_model}`);
      }
      index(params:any):Observable<T[]>{
        return this.httpClient.post<T[]>(`${this.api_url}/${this.url_model}`,params);
        // return this.httpClient.post<T[]>(`${environment.api_url}/${this.url_model}`,params);
      }
      search(params:any):Observable<T[]>{
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
      mass_update(ids:number[], data:any, stringify: boolean = true): Observable<T> {
        data.ids = ids;
        return this.httpClient.put<T>(`${environment.api_url}/${this.url_model}/mass_update`, stringify?JSON.stringify(data):data, this.httpOptions)
      }
      delete(id:any){
        return this.httpClient.delete<T>(`${environment.api_url}/${this.url_model}/${id}`, this.httpOptions)
      }
}