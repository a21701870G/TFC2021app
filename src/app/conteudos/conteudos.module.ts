
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import {ConteudosPage} from "./conteudos.page";



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: 'conteudos',
        component: ConteudosPage,
        children: [
          {
            path: 'popular',
            loadChildren: () => import('./popular/popular.module').then(m => m.PopularPageModule)
          },
          {
            path: 'novo',
            loadChildren: () => import('./novo/novo.module').then(m => m.NovoPageModule)
          },
          {
            path: 'guardado',
            loadChildren: () => import('./guardado/guardado.module').then(m => m.GuardadoPageModule)
          },
          {
            path: 'topo',
            loadChildren: () => import('./topo/topo.module').then(m => m.TopoPageModule)
          },
          {
            path: '',
            redirectTo: '/conteudos/popular',
            pathMatch: 'full'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/conteudos/popular',
        pathMatch: 'full'
      }
    ])
  ],
  declarations: [ConteudosPage]
})
export class ConteudosModule {}
