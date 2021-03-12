import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  baseUrl = 'https://pokewiboo.herokuapp.com/';

  constructor(private http: HttpClient) { }

  getPokemons(index: string): Observable<any>{
    return this.http.get<any>(`${this.baseUrl + index}`);
  }
}

