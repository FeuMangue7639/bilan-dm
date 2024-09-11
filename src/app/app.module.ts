import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ArtisansComponent } from './artisans/artisans.component';
import { AboutComponent } from './about/about.component';

import { FormsModule } from '@angular/forms';
import { AlimentationComponent } from './alimentation/alimentation.component';
import { BatimentComponent } from './batiment/batiment.component';
import { FabricationComponent } from './fabrication/fabrication.component';
import { ServicesComponent } from './services/services.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { HttpClientModule } from '@angular/common/http'; 
import { ContactFormComponent } from './contact-form/contact-form.component'; 


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ArtisansComponent,
    AboutComponent,
    AlimentationComponent,
    BatimentComponent,
    FabricationComponent,
    ServicesComponent,
    NotFoundComponent,
    ContactFormComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
