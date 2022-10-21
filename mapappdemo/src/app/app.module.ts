import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { LeafletModule } from '@mapappdemo/ngx-leaflet';

import { AppComponent } from './app.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { MapComponent } from './map/map.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    MapComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
    // LeafletModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
