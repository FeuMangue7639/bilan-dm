import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtisansService, Artisan } from '../artisans.service';

@Component({
  selector: 'app-artisans',
  templateUrl: './artisans.component.html',
  styleUrls: ['./artisans.component.scss']
})
export class ArtisansComponent implements OnInit {
  artisan: Artisan | undefined;

  constructor(private route: ActivatedRoute, private artisansService: ArtisansService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.artisan = this.artisansService.getArtisan(id);
  }

  getStars(note: number) {
    const fullStars = Math.floor(note);
    const halfStar = note % 1 >= 0.5;
    const totalStars = 5;
    const stars = [];

    for (let i = 0; i < totalStars; i++) {
      if (i < fullStars) {
        stars.push({ type: 'full' });
      } else if (i === fullStars && halfStar) {
        stars.push({ type: 'half' });
      } else {
        stars.push({ type: 'empty' });
      }
    }

    return stars;
  }
}

