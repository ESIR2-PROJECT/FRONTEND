import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

const routes: Routes = [];

@NgModule({
  // other module options
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
