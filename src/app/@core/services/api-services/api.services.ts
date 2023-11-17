import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:8005/ticket'

  constructor(private http: HttpClient) { }
  createProject(payload: any){
    return this.http.post(`${this.baseUrl}/project/create`, payload);
  }
  getProjects(){
    return this.http.get(`${this.baseUrl}/getAllProjects`);
  }
  deleteProject(id: any){
    return this.http.delete(`${this.baseUrl}/project/delete/${id}`);
  }
  updateProject(id: any, payload: any){
    return this.http.put(`${this.baseUrl}/updateproject/${id}`, payload);
  }
  searchProject(val: string){
    return this.http.get(`${this.baseUrl}project/search`);
  }
}
