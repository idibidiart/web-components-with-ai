import { NgModule } from '@angular/core'

import { ElementModule } from './element.module'
import { AppComponent } from './app.component'

@NgModule({
  imports: [ElementModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
