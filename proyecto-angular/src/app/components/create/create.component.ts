import { Component } from '@angular/core';
import { Project } from "../../models/project";
import { ProjectService } from "../../services/project.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProjectService]
})
export class CreateComponent {

  public title: string;
  public project: Project;
  public status: string = '';

  constructor(
    private _projectService: ProjectService
  ) {
    this.title = "Crear proyecto";
    this.project = new Project('', '', '', '', 2023, '', '');
  }

  onSubmit(form: any) {
    this._projectService.saveProject(this.project).subscribe({
      next: (response) => {
        if (response.project) {
          this.status = 'success';
          form.reset();
        }
        else {
          this.status = 'failed';
        }
      },
      error: (err) => {
        console.log(<any> err);
      }
    });
  }
}
