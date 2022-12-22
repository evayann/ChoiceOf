import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
  UrlMatchResult,
  UrlSegment,
} from '@angular/router';
import { ChoicePageComponent } from './pages/choice-page/choice-page.component';

const choiceMatcher = (url: UrlSegment[]): UrlMatchResult | null => {
  if (url.length !== 1) return null;

  const match = url[0].path.match('^.*-vs-.*$');

  if (match) {
    const [left, right] = match[0].split('-vs-');
    return {
      consumed: url,
      posParams: {
        left: new UrlSegment(left, {}),
        right: new UrlSegment(right, {}),
      },
    };
  }

  return null;
};

const routes: Routes = [
  {
    matcher: choiceMatcher,
    component: ChoicePageComponent,
  },
  {
    path: '**',
    component: ChoicePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
