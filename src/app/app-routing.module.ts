import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'add-contact', loadChildren: './add-contact/add-contact.module#AddContactPageModule' },
  { path: 'contact-detail', loadChildren: './contact-detail/contact-detail.module#ContactDetailPageModule' },
  { path: 'content-modal/:content', loadChildren: './content-modal/content-modal.module#ContentModalPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
