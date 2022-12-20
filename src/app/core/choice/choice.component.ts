import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IChoice } from '@models/choice';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChoiceComponent {
  @Input() for!: string;
  @Input() leftChoice!: IChoice;
  @Input() rightChoice!: IChoice;

  hover: boolean = false;
  transition: boolean = false;
  displayNext: boolean = false;
  leftIsSelected?: boolean;

  constructor(private route: ActivatedRoute) {
    console.log(this.route.snapshot.paramMap.get('left'));
  }

  get isFixed(): boolean {
    return !this.hover && !this.transition;
  }

  get leftStyle(): { [key: string]: any } {
    return this.getStyle('left');
  }

  get rightStyle(): { [key: string]: any } {
    return this.getStyle('right');
  }

  next(): void {
    console.log('toto');
  }

  select(choice: 'left' | 'right'): void {
    this.leftIsSelected = choice === 'left';
    this.displayNext = true;
  }

  hoverState(isHover: boolean): void {
    this.hover = isHover;
  }

  transitionState(isTransition: boolean): void {
    this.transition = isTransition;
  }

  private getStyle(side: 'left' | 'right'): { [key: string]: any } {
    if (this.leftIsSelected === undefined) return {};

    const bool = side === 'left' ? !this.leftIsSelected : this.leftIsSelected;
    return bool
      ? {
          width: 0,
          flexGrow: 0,
          overflow: 'hidden',
        }
      : {};
  }
}
