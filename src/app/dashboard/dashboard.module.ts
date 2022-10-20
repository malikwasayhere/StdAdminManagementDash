import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { ChildrenOutletContexts, RouterModule, Routes } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatTreeModule } from '@angular/material/tree';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { CrtadmissionComponent } from './dashboard/components/crtadmission/crtadmission.component';
import { OnlineadmissionComponent } from './dashboard/components/onlineadmission/onlineadmission.component';
import { CategoryComponent } from './dashboard/components/category/category.component';
import { MultipleimportComponent } from './dashboard/components/multipleimport/multipleimport.component';
import { StudentlistComponent } from './dashboard/components/studentlist/studentlist.component';
import { LogindeactiveComponent } from './dashboard/components/logindeactive/logindeactive.component';
import { ParentlistComponent } from './dashboard/components/parentlist/parentlist.component';
import { AddparentComponent } from './dashboard/components/addparent/addparent.component';
import { ParentlogdeactComponent } from './dashboard/components/parentlogdeact/parentlogdeact.component';
import { EmployeelistComponent } from './dashboard/components/employeelist/employeelist.component';
import { AdddepartmentComponent } from './dashboard/components/adddepartment/adddepartment.component';
import { AdddesignationComponent } from './dashboard/components/adddesignation/adddesignation.component';
import { AddemployeeComponent } from './dashboard/components/addemployee/addemployee.component';
import { EmplogindeactiveComponent } from './dashboard/components/emplogindeactive/emplogindeactive.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { IdcardtemplateComponent } from './dashboard/components/idcardtemplate/idcardtemplate.component';
import { StudentidcardComponent } from './dashboard/components/studentidcard/studentidcard.component';
import { EmployeeidcardComponent } from './dashboard/components/employeeidcard/employeeidcard.component';
import { AdmitcardtemplateComponent } from './dashboard/components/admitcardtemplate/admitcardtemplate.component';
import { GenerateadmitcardComponent } from './dashboard/components/generateadmitcard/generateadmitcard.component';
import { CertificatetemplateComponent } from './dashboard/components/certificatetemplate/certificatetemplate.component';
import { GeneratestudentComponent } from './dashboard/components/generatestudent/generatestudent.component';
import { GenerateemployeeComponent } from './dashboard/components/generateemployee/generateemployee.component';


const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
    children: [
      {
        path: "createadmission",
        component: CrtadmissionComponent,
      },
      {
        path: "onlineadmission",
        component: OnlineadmissionComponent,
      },
      {
        path: "categorypage",
        component: CategoryComponent,
      },
      {
        path: "multipleimport",
        component: MultipleimportComponent,
      },
      {
        path: "studentlist",
        component: StudentlistComponent,
      },
      {
        path: "logindeactive",
        component: LogindeactiveComponent,
      },
      {
        path: "parentslist",
        component: ParentlistComponent,
      },
      {
        path: "createparents",
        component: AddparentComponent,
      },
      {
        path: "parentlogindeactive",
        component: ParentlogdeactComponent,
      },
      {
        path: "employeelist",
        component: EmployeelistComponent,
      },
      {
        path: "adddep",
        component: AdddepartmentComponent,
      },
      {
        path: "adddesignation",
        component: AdddesignationComponent,
      },
      {
        path: "addemployee",
        component: AddemployeeComponent,
      },
      {
        path: "emplogdeactive",
        component: EmplogindeactiveComponent,
      },
      {
        path: "idcardtemp",
        component: IdcardtemplateComponent,
      },
      {
        path: "studentidcard",
        component: StudentidcardComponent,
      },
      {
        path: "employeeidcard",
        component: EmployeeidcardComponent,
      },
      {
        path: "admitcardtemplate",
        component: AdmitcardtemplateComponent,
      },
      {
        path: "generateadmitcard",
        component: GenerateadmitcardComponent,
      },
      {
        path: "certificatetemplate",
        component: CertificatetemplateComponent,
      },
      {
        path: "genstudentcertificate",
        component: GeneratestudentComponent,
      },
      {
        path: "genemployeecertificate",
        component: GenerateemployeeComponent,
      },
    ],
  },
]

@NgModule({
  declarations: [
    DashboardComponent,
    CrtadmissionComponent,
    HeaderComponent,
    OnlineadmissionComponent,
    CategoryComponent,
    MultipleimportComponent,
    StudentlistComponent,
    LogindeactiveComponent,
    ParentlistComponent,
    AddparentComponent,
    ParentlogdeactComponent,
    EmployeelistComponent,
    AdddepartmentComponent,
    AdddesignationComponent,
    AddemployeeComponent,
    EmplogindeactiveComponent,
    IdcardtemplateComponent,
    StudentidcardComponent,
    EmployeeidcardComponent,
    AdmitcardtemplateComponent,
    GenerateadmitcardComponent,
    CertificatetemplateComponent,
    GeneratestudentComponent,
    GenerateemployeeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes), MatToolbarModule, MatIconModule,
    MatButtonModule, MatSidenavModule, MatListModule, MatCardModule,
    MatInputModule, MatTableModule, MatSelectModule, MatTreeModule,
    MatMenuModule, MatTabsModule, MatDatepickerModule, MatNativeDateModule,
    MatBottomSheetModule, MatCheckboxModule
  ]
})
export class DashboardModule { }
