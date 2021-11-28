import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstGameComponent } from './first-game.component';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';

@NgModule({
  imports: [
    CommonModule, BrowserModule
  ],
  declarations: [FirstGameComponent]
})
export class FirstGameModule implements DoBootstrap {
  constructor(private injector: Injector) { }

  ngDoBootstrap(): void {
    const el = createCustomElement(FirstGameComponent, {
      injector: this.injector,
    });

    customElements.define('first-game', el);
  }
}
