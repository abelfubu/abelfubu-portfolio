import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { SidenavModule } from '@app/components/sidenav/sidenav.module'
import { SvgIconsModule } from '@shared/svg-icons/svg-icons.module'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HeaderComponent } from './components/header/header.component'
import { HomeModule } from './pages/home/home.module'
import { LayoutModule } from '@angular/cdk/layout'

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    HomeModule,
    LayoutModule,
    SidenavModule,
    BrowserModule,
    SvgIconsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
