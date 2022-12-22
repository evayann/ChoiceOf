import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPrompt } from '@models/prompt';
import { PromptsService } from 'src/app/services/prompts.service';

@Component({
  selector: 'app-choice-page',
  templateUrl: './choice-page.component.html',
  styleUrls: ['./choice-page.component.scss'],
})
export class ChoicePageComponent implements OnInit {
  prompt!: IPrompt;

  constructor(
    private route: ActivatedRoute,
    private promptsService: PromptsService
  ) {}

  ngOnInit(): void {
    const leftName: string | null = this.route.snapshot.paramMap.get('left');
    const rightName: string | null = this.route.snapshot.paramMap.get('right');

    if (leftName !== null && rightName !== null) {
      const prompt = this.promptsService.getPrompt(leftName, rightName);
      this.prompt = prompt || this.promptsService.random;
    } else {
      this.prompt = this.promptsService.random;
    }
  }
}
