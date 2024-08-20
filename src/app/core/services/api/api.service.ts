import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private http = inject(HttpClient);

  /**
   * Faz uma requisição GET genérica para o endpoint especificado.
   * @param baseUrl A URL base para a requisição.
   * @param endpoint O endpoint relativo a ser acessado.
   * @param queryParams (Opcional) Parâmetros de consulta a serem incluídos na requisição.
   * @returns Um Observable com a resposta da requisição.
   */
  get<T>(
    baseUrl: string,
    endpoint: string,
    queryParams?: { [key: string]: any }
  ): Observable<T> {
    let params = new HttpParams();

    if (queryParams) {
      for (const key of Object.keys(queryParams)) {
        params = params.set(key, queryParams[key]);
      }
    }

    console.log(baseUrl, endpoint, queryParams);

    return this.http.get<T>(`${baseUrl}/${endpoint}`, { params });
  }
}
