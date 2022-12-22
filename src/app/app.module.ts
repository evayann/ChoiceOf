import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChoiceComponent } from './core/choice/choice.component';
import { ChoicePageComponent } from './pages/choice-page/choice-page.component';

@NgModule({
  declarations: [AppComponent, ChoiceComponent, ChoicePageComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
