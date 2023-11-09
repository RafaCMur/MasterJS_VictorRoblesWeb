import { Component, OnInit } from '@angular/core';
import { Project } from "../../models/project";
import { ProjectService } from "../../services/project.service";
import { GLOBAL } from 'src/app/services/global';
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {

  public url: string;
  public project: Project;

  constructor(
    private _projectService: ProjectService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.url = GLOBAL.url;
    this.project = new Project('', '', '', '', 2023, '', '');
  }

  getProject(id: string) {
    this._projectService.getProject(id).subscribe({
      next: (response) => {
        this.project = response.project;
      },
      error: (err) => {
        console.log(<any> err);
      }
    });
  }
}
