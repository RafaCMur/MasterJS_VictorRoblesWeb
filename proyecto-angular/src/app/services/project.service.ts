import { Injectable } from "@angular/core";
import { Project } from "../models/project";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { GLOBAL } from "./global";

@Injectable()
export class ProjectService {
  public url: string;

  constructor(private _http: HttpClient) {
    this.url = GLOBAL.url;
  }

  testService() {
    return "Probando el servicio de Angular";
  }

  saveProject(project: Project): Observable<any> {
    let params = JSON.stringify(project);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.post(this.url + 'save-project', params, {headers: headers});
  }

  getProjects(): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + 'projects', {headers: headers});
  }

  getProject(id: string): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + 'project/' + id, {headers: headers})
  }
}
