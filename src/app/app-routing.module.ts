import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchComponent } from './components/search/search.component';
import { UserComponent } from './components/user/user.component';
import { ScoreGuard } from './guards/score.guard';

const routes: Routes = [
	{ path: 'search', component: SearchComponent },
	{ path: 'user/:login/:score', component: UserComponent, canActivate: [ScoreGuard] },
	{ path: '', redirectTo: '/search', pathMatch: 'full' },
	{ path: '**', redirectTo: '/search' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
