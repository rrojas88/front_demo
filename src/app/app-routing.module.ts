
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DepartmentComponent } from "./departments/pages/department/department.component";

import { LoginComponent } from "./login/pages/login/login.component";
import { WelcomeComponent } from "./welcome/pages/welcome/welcome.component";

const routes: Routes = [
	{
		path: '',
		component: WelcomeComponent,
		pathMatch: 'full'
	},
	{
		path: 'login',
		component: LoginComponent
	},
	{
		path: 'departments',
		component: DepartmentComponent
	},
	{
		path: '**',
		//component: Error404,
		redirectTo: ''
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot( routes )
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule {}