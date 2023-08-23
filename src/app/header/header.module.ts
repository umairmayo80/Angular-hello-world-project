import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';


// One component can only be registered once in the declarations throughout the entire app
@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule
  ],
  exports : [HeaderComponent] //list of components that can be accessed outside the module
})
export class HeaderModule { }
