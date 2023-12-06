import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class PerguntasService {
    private apiUrl = 'https://localhost:7012';


    constructor(private http: HttpClient) { }

    getPerguntas(): Observable<any[]> {
        return this.http.get<any[]>(`${this.apiUrl}/api/perguntas`);
    }

}