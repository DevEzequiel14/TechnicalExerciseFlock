import { Observable } from 'rxjs';
import { RequestService } from './../../core/services/request.service';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProvinceService {
  private baseUrl = environment.api;

  constructor(private requestService:RequestService) { }

  getProvinces(province: string): Observable<any>{
    return this.requestService.get(this.baseUrl + province)
  }
}
