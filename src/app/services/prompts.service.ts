import { Injectable } from '@angular/core';
import { IPrompt } from '@models/prompt';
import prompts from '@assets/prompts.json';

@Injectable({
  providedIn: 'root',
})
export class PromptsService {
  get random(): IPrompt {
    return this.rdm(prompts);
  }

  randomExcept(excludePrompt?: IPrompt): IPrompt {
    return this.rdm(prompts.filter((prompt) => prompt !== excludePrompt));
  }

  getPrompt(left: string, right: string): IPrompt | undefined {
    return prompts.find(
      (prompt: IPrompt) =>
        prompt.left.name === left && prompt.right.name === right
    );
  }

  private rdm(prompts: IPrompt[]): IPrompt {
    return prompts[Math.floor(Math.random() * prompts.length)];
  }
}
