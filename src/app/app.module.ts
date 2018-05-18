import { NgModule } from '@angular/core'

import { ChatModule } from './chat/chat.module'
import { AppComponent } from './app.component'

@NgModule({
  imports: [ChatModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
