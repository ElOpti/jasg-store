import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';


import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppModule } from './app.module';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
