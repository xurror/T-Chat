import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'create-join',
    loadChildren: () => import('./create-join/create-join.module').then( m => m.CreateJoinPageModule)
  },
  {
    path: 'create-team',
    loadChildren: () => import('./create-team/create-team.module').then( m => m.CreateTeamPageModule)
  },
  {
    path: 'join-team',
    loadChildren: () => import('./join-team/join-team.module').then( m => m.JoinTeamPageModule)
  },
  {
    path: 'conversations',
    loadChildren: () => import('./conversations/conversations.module').then( m => m.ConversationsPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
