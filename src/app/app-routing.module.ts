import { NgModule } from '@angular/core';
import { RouterModule, Routes, UrlSegment } from '@angular/router';
import { ChoiceComponent } from './core/choice/choice.component';

const routes: Routes = [
  {
    matcher: (url: UrlSegment[]) => {
      return url.length === 1 && url[0].path.match('^[0-9]*$')
        ? {
            consumed: url,
            posParams: {
              left: new UrlSegment('toto', {}),
            },
          }
        : null;
    },
    component: ChoiceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
