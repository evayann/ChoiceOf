import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IChoice } from '@models/choice';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChoiceComponent {
  @Input() personTarget!: string;
  @Input() leftChoice!: IChoice;
  @Input() rightChoice!: IChoice;

  hover: boolean = false;
  transition: boolean = false;

  get isFixed(): boolean {
    return !this.hover && !this.transition;
  }

  hoverState(isHover: boolean): void {
    this.hover = isHover;
  }

  transitionState(isTransition: boolean): void {
    this.transition = isTransition;
  }
}
