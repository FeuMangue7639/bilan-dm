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
    { id: 1, name: 'Artisan 1', description: 'Artisan en alimentation', price: 10, image: '#' },
    { id: 2, name: 'Artisan 1', description: 'Artisan en alimentation', price: 10, image: '#' },
    { id: 3, name: 'Artisan 1', description: 'Artisan en alimentation', price: 10, image: '#' },
    { id: 4, name: 'Artisan 1', description: 'Artisan en alimentation', price: 10, image: '#' },
    { id: 5, name: 'Artisan 1', description: 'Artisan en alimentation', price: 10, image: '#' },
    { id: 6, name: 'Artisan 1', description: 'Artisan en alimentation', price: 10, image: '#' }
    
    // Ajoutez plus d'artisans ici
  ];

  getArtisans(): Artisan[] {
    return this.artisans;
  }

  getArtisan(id: number): Artisan | undefined {
    return this.artisans.find(a => a.id === id);
  }
}

