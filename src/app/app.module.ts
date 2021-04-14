import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms" ; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { LoggerService } from './services/logger/logger.service';
import { ElipsePipe } from './pipes/elipse/elipse.pipe';
import { ReusableComponentComponent } from './reusable-component/reusable-component/reusable-component.component';
import { InputFormatDirective } from './directives/input-format.directive';
import { FormComponent } from './components/form/form.component';

@NgModule({
  declarations: [ // this array is where to include components and custom pipes
    AppComponent,
    DemoComponent,
    ElipsePipe,
    ReusableComponentComponent , 
    InputFormatDirective, FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule , 
    FormsModule

  ],
  providers: [LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
