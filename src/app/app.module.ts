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
import { CategoriesComponent } from './categories/categories.component';

import { HttpClientModule } from '@angular/common/http'; // Pour les requêtes HTTP
import { ContactFormComponent } from './contact-form/contact-form.component'; // Assurez-vous que le chemin est correct


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
    CategoriesComponent,
    ContactFormComponent // Assurez-vous que le composant est déclaré ici
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
