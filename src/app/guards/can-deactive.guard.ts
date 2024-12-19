import { Injectable } from '@angular/core';
import {  CanDeactivate } from '@angular/router';

export interface CanComponentDeactivate {
  // dirty: boolean;
  canDeactivate: () => boolean;
}

@Injectable({
  providedIn: 'root'
})


export class CanDeactiveService implements CanDeactivate<CanComponentDeactivate> {

  canDeactivate(component: CanComponentDeactivate): boolean {
    return component.canDeactivate ? component.canDeactivate(): true
  }
}
