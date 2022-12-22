import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPrompt } from '@models/prompt';
import { PromptsService } from 'src/app/services/prompts.service';

@Component({
  selector: 'app-choice-page',
  templateUrl: './choice-page.component.html',
  styleUrls: ['./choice-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChoicePageComponent implements OnInit {
  prompt?: IPrompt;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private promptsService: PromptsService
  ) {}

  ngOnInit(): void {
    const leftName: string | null = this.route.snapshot.paramMap.get('left');
    const rightName: string | null = this.route.snapshot.paramMap.get('right');

    if (leftName !== null && rightName !== null) {
      const prompt = this.promptsService.getPrompt(leftName, rightName);

      if (prompt === undefined) return this.routeToARandomPrompt();
      this.prompt = prompt;
    } else {
      this.routeToARandomPrompt();
    }
  }

  routeToARandomPrompt(): void {
    const randomPrompt = this.promptsService.randomExcept(this.prompt);
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([
        `/${randomPrompt.left.name}-vs-${randomPrompt.right.name}`,
      ]);
    });
  }
}
