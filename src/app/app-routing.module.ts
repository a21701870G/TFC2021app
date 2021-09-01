import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },

  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },


  {
    path: 'sporting',
    loadChildren: () => import('./sporting/sporting.module').then( m => m.SportingPageModule)
  },
  {
    path: 'topic',
    loadChildren: () => import('./topic/topic.module').then( m => m.TopicPageModule)
  },
  {
    path: 'change',
    loadChildren: () => import('./change/change.module').then( m => m.ChangePageModule)
  },
  {
    path: 'pagina-apostas',
    loadChildren: () => import('./pagina-apostas/pagina-apostas.module').then( m => m.PaginaApostasPageModule)
  },
  {
    path: 'change',
    loadChildren: () => import('./change/change.module').then( m => m.ChangePageModule)
  },
  {
    path: 'topic-forum',
    loadChildren: () => import('./topic-forum/topic-forum.module').then( m => m.TopicForumPageModule)
  },
  {
    path: 'bet365',
    loadChildren: () => import('./bet365/bet365.module').then( m => m.Bet365PageModule)
  },
  {
    path: 'betclick',
    loadChildren: () => import('./betclick/betclick.module').then( m => m.BetclickPageModule)
  },
  {
    path: 'betpt',
    loadChildren: () => import('./betpt/betpt.module').then( m => m.BetptPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'finish',
    loadChildren: () => import('./finish/finish.module').then( m => m.FinishPageModule)
  },

  {
    path: 'alteraremail',
    loadChildren: () => import('./alteraremail/alteraremail.module').then( m => m.AlteraremailPageModule)
  },
  {
    path: 'controlo',
    loadChildren: () => import('./controlo/controlo.module').then( m => m.ControloPageModule)
  },
  {
    path: 'ranking',
    loadChildren: () => import('./ranking/ranking.module').then( m => m.RankingPageModule)
  },
  {
    path: 'novo',
    loadChildren: () => import('./novo/novo.module').then( m => m.NovoPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
