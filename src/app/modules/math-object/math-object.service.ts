import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';
import { MathObject } from './math-object';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiConfigService } from '../shared/api-config.service';

@Injectable({
  providedIn: 'root'
})
export class MathObjectService extends BaseService<MathObject> {

  constructor(httpClient: HttpClient, apiConfigService: ApiConfigService) {
    super(httpClient, apiConfigService);
    this.url_model = "math-objects";
  }

  random(mo: MathObject): Observable<any[]> {
    return this.httpClient.post<any[]>(`${environment.api_url}/${this.url_model}/random`, { math_object_id: mo.id });
  }
}
