import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiConfigService {

  private config: any;


  constructor(private http: HttpClient) { }

  load(): Promise<void> {
    return firstValueFrom(this.http.get<{ apiUrl: string }>('/assets/config.json'))
      .then(cfg => {
        this.config = cfg;
      });
  }
  get apiBaseUrl(): string{
    return this.config.apiUrl;
  }
}
