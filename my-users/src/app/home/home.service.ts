import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class HomeService {
  formData: any;
  private dataUrl: string = "https://randomuser.me/api/0.8/?results=";

  constructor(private httpClient: HttpClient) {

  }

  getAllNamesList(pageSize) {
    return this.httpClient.post(this.dataUrl+pageSize, {
      
    }).pipe(map((response: Response) => {
      return response.json();
    }))

  }

 
}
