import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IChoice } from '@models/choice';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChoiceComponent {
  @Input() leftChoice!: IChoice;
  @Input() rightChoice!: IChoice;

  hoverOrSelected: boolean = false;

  hoverState(isHover: boolean): void {
    this.hoverOrSelected = isHover;
  }
}
