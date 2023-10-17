import { Component, OnInit } from '@angular/core';
import { Project } from "../../models/project";
import { ProjectService } from "../../services/project.service";
import { GLOBAL } from 'src/app/services/global';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [ProjectService]
})
export class ProjectsComponent {

  public url: string;
  public projects: Project[] = [];

  constructor(
    private _projectService: ProjectService
  ) {
    this.url = GLOBAL.url;
  }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects() {
    this._projectService.getProjects().subscribe({ //Me suscribo al observable que devuelve el servicio
      next: (response) => {
        if (response.projects) {
          this.projects = response.projects;
        } else {
          console.log('Error al obtener proyectos');
        }
      },
      error: (err) => {
        console.log(<any> err);
      }
    });
  }
}
