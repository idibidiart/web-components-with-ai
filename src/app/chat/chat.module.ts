import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http';
import { ChatAvatarComponent } from './chat-avatar/chat-avatar.component'
import { ChatWidgetComponent } from './chat-widget/chat-widget.component'
import { ChatInputComponent } from './chat-input/chat-input.component'
import { ChatConfigComponent } from './chat-config/chat-config.component'

// exports needed for use in AppComponent's template
// entryComponents needed for use as Custom Elements 
@NgModule({
  imports: [CommonModule, BrowserModule, BrowserAnimationsModule, HttpClientModule],
  declarations: [ChatAvatarComponent, ChatWidgetComponent, ChatInputComponent, ChatConfigComponent],
  exports: [ChatWidgetComponent, ChatConfigComponent],
  entryComponents: [ChatWidgetComponent, ChatConfigComponent],
})
export class ChatModule {}
