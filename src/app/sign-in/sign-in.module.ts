import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxErrorModule } from '../ngx-error/ngx-error.module';
import { PasswordMatchDirective } from './diretives/password-match.directive';



@NgModule({
  declarations: [PasswordMatchDirective],
  imports: [
    CommonModule,
    NgxErrorModule
  ]
})
export class SignInModule { }
