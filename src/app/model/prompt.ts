import { IChoice } from './choice';

export interface IPrompt {
  left: IChoice;
  right: IChoice;
  for: string;
}
