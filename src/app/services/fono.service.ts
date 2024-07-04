import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FonoService {

  private baseUrl = 'http://localhost:3302/';

  constructor(private http: HttpClient) { }

  saveFono(fono: any): Observable<any> {
    return this.http.post(`${this.baseUrl}cadastrofono`, fono);
  }

  savePaciente(paciente: any): Observable<any> {
    return this.http.post(`${this.baseUrl}cadastropaciente`, paciente);
  }

  login(cpf: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}login`, { cpf, password });
  }

   getFonos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}`);
  }

  getFonoById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  updateFono(id: number, fono: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, fono);
  }

  deleteFono(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  updatePictro(id: number, pictro: any): Observable<any> {
    return this.http.put(`${this.baseUrl}pictograms/${id}`, pictro);
  }

  updateAlimento(id: number, alimento: any): Observable<any> {
    return this.http.put(`${this.baseUrl}alimentos/${id}`, alimento);
  }

  updateBrincar(id: number, brincar: any): Observable<any> {
    return this.http.put(`${this.baseUrl}brincar/${id}`, brincar);
  }

  deletePictro(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}pictograms/${id}`);
  }

  deleteAlimento(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}alimentos/${id}`);
  }

  deleteBrincar(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}brincar/${id}`);
  }

  createPictro( pictro: any): Observable<any> {
    return this.http.post(`${this.baseUrl}pictograms`, pictro);
  }

  createAlimento(alimento: any): Observable<any> {
    return this.http.post(`${this.baseUrl}alimentos`, alimento);
  }

  createBrincar(brincar: any): Observable<any> {
    return this.http.post(`${this.baseUrl}brincar`, brincar);
  }

  
}