import { Component, OnInit } from '@angular/core';
import { ArtisansService, Artisan } from '../artisans.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  artisans: Artisan[] = [];
  searchTerm: string = '';
  sortDirection: string = 'asc';

  constructor(private artisansService: ArtisansService) {}

  ngOnInit(): void {
    this.artisans = this.artisansService.getArtisans();
  }

  filteredArtisans(): Artisan[] {
    let filtered = this.artisans.filter(artisan =>
      artisan.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    return filtered.sort((a, b) => this.sortDirection === 'asc' ? a.price - b.price : b.price - a.price);
  }

  sortByPrice(direction: string): void {
    this.sortDirection = direction;
  }
}

