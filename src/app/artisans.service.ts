import { Injectable } from '@angular/core';

export interface Artisan {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class ArtisansService {
  private artisans: Artisan[] = [
    { id: 1, name: 'Asterix et Obelix', description: 'Figurine de dix cm, Asterix et Obelix en dispute', price: 10, image: 'https://www.bdfugue.com/media/catalog/product/cache/0d950bd4d3aaddc02a824ea154d9c41e/A/S/ASTST01301.webp' },
    { id: 2, name: 'Abraracourcix', description: 'Figurine du personnage Abraracourcix de quinze cm', price: 20, image: 'https://www.bdaddik.com/21028-large_default/figurine-de-collection-en-resine-plastoy-atlas-asterix-abraracourcix-2000.jpg' },
    { id: 3, name: 'Obelix', description: 'Figurine de quinze cm, Obelix avec un baril', price: 15, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKC_qrfaPdXugnI5MwTjFPr4PrtX-_JzvL670dyUd1cLnDVC21GhTfZbqs91pKG6Y-t34&usqp=CAU' },
    { id: 4, name: 'Soldats', description: 'Figurine de trente cm, édition limitée avec Asterix et Obelix en tenue de soldat', price: 60, image: 'https://www.bullesenboite.com/3034-large_default/asterix-et-obelix-en-legionnaires.jpg' },
    { id: 5, name: 'Asterix à table', description: 'Figurine de dix cm, Asterix et Obelix jouant aux échecs', price: 30, image: 'https://bdi.dlpdomain.com/ecommerce/principal/3521320023724/1/M600x600/figurine-pixi-asterix-obelix-et-panoramix-la-partie-d-echecs.jpg' },
    { id: 6, name: 'Abraracourcix en action', description: 'Figurine de quinze cm, Abraracourcix en action', price: 5, image: 'https://www.raiarox-passion.com/p/ec/3/abraracourcix-leblon.1.jpg' },
    // Ajoutez plus d'artisans ici
  ];

  getArtisans(): Artisan[] {
    return this.artisans;
  }

  getArtisan(id: number): Artisan | undefined {
    return this.artisans.find(a => a.id === id);
  }
}

