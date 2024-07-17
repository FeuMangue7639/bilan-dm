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
}

