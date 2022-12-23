import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
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
  @Output() nextPrompt: EventEmitter<void> = new EventEmitter();

  hover: boolean = false;
  transition: boolean = false;
  displayNext: boolean = false;
  leftIsSelected?: boolean;

  get isFixed(): boolean {
    return !this.hover && !this.transition;
  }

  get leftClass(): string {
    return this.getDynamicClass('left');
  }

  get rightClass(): string {
    return this.getDynamicClass('right');
  }

  next(): void {
    this.nextPrompt.emit();
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

  private getDynamicClass(side: 'left' | 'right'): string {
    if (this.leftIsSelected === undefined) return '';

    const bool = side === 'left' ? !this.leftIsSelected : this.leftIsSelected;
    return bool ? 'hidden' : '';
    // return bool
    //   ? {
    //       width: 0,
    //       flexGrow: 0,
    //       overflow: 'hidden',
    //     }
    //   : {};
  }
}
