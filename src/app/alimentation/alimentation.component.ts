import { Component } from '@angular/core';

@Component({
  selector: 'app-alimentation',
  templateUrl: './alimentation.component.html',
  styleUrls: ['./alimentation.component.scss']
})
export class AlimentationComponent {
  searchTerm: string = '';
  sortDirection: 'asc' | 'desc' = 'asc';

  artisans = [
    { id: 1, name: 'Artisan 1', price: 30, image: 'path/to/artisan1.jpg' },
    { id: 2, name: 'Artisan 2', price: 20, image: 'path/to/artisan2.jpg' },
    { id: 3, name: 'Artisan 3', price: 25, image: 'path/to/artisan3.jpg' },
    { id: 4, name: 'Artisan 4', price: 40, image: 'path/to/artisan4.jpg' },
    { id: 5, name: 'Artisan 5', price: 35, image: 'path/to/artisan5.jpg' },
    { id: 6, name: 'Artisan 6', price: 45, image: 'path/to/artisan6.jpg' }
  ];

  filteredArtisans() {
    let filtered = this.artisans.filter(artisan => 
      artisan.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );

    filtered = filtered.sort((a, b) => {
      if (this.sortDirection === 'asc') {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });

    return filtered.slice(-3); // Return the last three artisans
  }

  sortByPrice(direction: 'asc' | 'desc') {
    this.sortDirection = direction;
  }
}

