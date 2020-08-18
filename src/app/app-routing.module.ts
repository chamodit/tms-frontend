import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TagsComponent } from './components/dashboard/tags/tags.component';
import { ManageTComponent } from './components/dashboard/tags/manage-t/manage-t.component';
import { LocationComponent } from './components/dashboard/location/location.component';
import { AddLocationComponent } from './components/dashboard/location/add-location/add-location.component';
import { LecturersComponent } from './components/dashboard/lecturers/lecturers.component';
import { AddLecComponent } from './components/dashboard/lecturers/add-lec/add-lec.component';
import { ManageLecComponent } from './components/dashboard/lecturers/manage-lec/manage-lec.component';
import { StudentsComponent } from './components/dashboard/students/students.component';
import { YearSemsComponent } from './components/dashboard/students/year-sems/year-sems.component';
import { ProgrammesComponent } from './components/dashboard/students/programmes/programmes.component';
import { GroupsComponent } from './components/dashboard/students/groups/groups.component';
import { SubGroupsComponent } from './components/dashboard/students/sub-groups/sub-groups.component';
import { GenerateBComponent } from './components/dashboard/students/generate-b/generate-b.component';

const routes: Routes = [
  {
    path: "", component: DashboardComponent,
    children: [
      {
        path: 'tags',
        component: TagsComponent,
        children: [
          {
            path: 'manage', component: ManageTComponent
          }
        ]
      },
      { path: 'lecturers',
        component: LecturersComponent,
        children: [
          { path: 'add', component: AddLecComponent },
          { path: 'manage', component: ManageLecComponent}
          
        ] 
      },
      {
        path: 'students',
        component: StudentsComponent,
        children: [
          { path: 'yearsems', component: YearSemsComponent },
          { path: 'programmes', component: ProgrammesComponent },
          { path: 'groups', component: GroupsComponent },
          { path: 'subgroups', component: SubGroupsComponent },
          { path: 'generate', component: GenerateBComponent }
        ]
      },
      //set path here

      {
        path: 'locations', component: LocationComponent,
        children: [
          { path: 'add', component: AddLocationComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
