import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SignInComponent } from './signin/signin.component';
import { VMessageComponent } from '../shared/components/vMessage/vmessage.component';
import { VMessageModule } from '../shared/components/vMessage/vmessage.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VMessageModule
  ],
  declarations: [ SignInComponent ]
})
export class HomeModule { }
