import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { SidebarModule } from 'primeng/sidebar';
import { ToastModule } from 'primeng/toast';



const misModulos: any =[
  ButtonModule,
  CardModule,
  SidebarModule,
  ToastModule
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    misModulos
  ],
  exports: [
    misModulos
  ]
})
export class ModprimengModule { }
