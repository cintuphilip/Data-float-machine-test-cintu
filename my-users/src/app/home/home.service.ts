import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class HomeService {
  formData: any;
  private dataUrl: string = "https://randomuser.me/api/0.8/?results=";

  constructor(private httpClient: HttpClient) {

  }

  getAllNamesList(pageSize) {
    const config = {headers :  {

      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
      'Content-Type': 'application/json',
      'mode': 'no-cors'

    }
  };
    return this.httpClient.post(this.dataUrl+pageSize, config).pipe(map((response: Response) => {
      return response.json();
    }))

  }

 
}
