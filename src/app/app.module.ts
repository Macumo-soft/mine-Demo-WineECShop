import { NgModule } from "@angular/core";
import { BrowserModule, DomSanitizer } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MatIconModule, MatIconRegistry } from "@angular/material/icon";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { HeaderComponent } from "./layout/header/header.component";
import { WineMenuComponent } from "./layout/wine-menu/wine-menu.component";
import { HomeComponent } from "./pages/home/home.component";
import { BannerComponent } from "./components/banner/banner.component";
import { WineListComponent } from './components/wine-list/wine-list.component';
import { FooterComponent } from './layout/footer/footer.component';
import { WineCardComponent } from './components/wine-card/wine-card.component';
import { RatingComponent } from './components/rating/rating.component';
import { RangePipePipe } from './pipe/range-pipe.pipe';
import { ButtonComponent } from './components/button/button.component';
import { SnsIconsComponent } from './components/sns-icons/sns-icons.component';
import { HeaderMenuComponent } from './components/header-menu/header-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WineMenuComponent,
    HomeComponent,
    BannerComponent,
    WineListComponent,
    FooterComponent,
    WineCardComponent,
    RatingComponent,
    RangePipePipe,
    ButtonComponent,
    SnsIconsComponent,
    HeaderMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
    matIconRegistry.addSvgIconSet(
      domSanitizer.bypassSecurityTrustResourceUrl("./assets/mdi.svg")
    );
  }
}
