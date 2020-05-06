import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UIStateService {
  private state: UIState;

  constructor() {}

  setState(state: UIState) {
    this.state = state;
  }

  getState(): UIState {
    return this.state ? this.state : null;
  }
}

export interface UIState {
  id: string;
  name: string;
}
