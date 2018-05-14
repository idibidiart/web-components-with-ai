import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { Injector, NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http';

import { createCustomElement } from '@angular/elements'

import { ChatModule } from './chat/chat.module'

import { ChatWidgetComponent} from './chat/chat-widget/chat-widget.component'
import { ChatConfigComponent } from './chat/chat-config/chat-config.component'

@NgModule({
  imports: [BrowserModule, HttpClientModule, BrowserAnimationsModule, ChatModule],
  exports: [ChatModule]
})
export class ElementModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const chatConfig = <any>createCustomElement(ChatConfigComponent, {
      injector: this.injector,
    })
    const chatWidget = <any>createCustomElement(ChatWidgetComponent, {
      injector: this.injector,
    })
    window.customElements.define('chat-config', chatConfig)
    window.customElements.define('chat-widget', chatWidget)
  }
}
