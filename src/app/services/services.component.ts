import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
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

  searchTerm: string = '';
  sortDirection: 'asc' | 'desc' = 'asc';

  artisans = [
    { id: 1, name: 'Vallis Bellemare', specialty: 'Plombier', location: 'Vienne', note: 4 },
  { id: 2, name: 'Amitee Lécuyer', specialty: 'Couturier', location: 'Annecy', note: 4.5 },
  { id: 3, name: 'Leala Dennis', specialty: 'Coiffeur', location: 'Chambéry', note: 3.8 },
  { id: 4, name: 'Chocolaterie Labbé', specialty: 'Chocolatier', location: 'Grenoble', note: 4.9 },
  { id: 5, name: 'Claude Quinn', specialty: 'Bijoutier', location: 'Aix-les-bains', note: 4.2 },
  { id: 6, name: 'Valérie Laderoute', specialty: 'Toiletteur', location: 'Valence', note: 4.5 },
  { id: 7, name: 'Boutot & fils', specialty: 'Menuisier', location: 'Bourg-en-bresse', note: 4.7 },
  { id: 8, name: 'CM Graphisme', specialty: 'Webdesign', location: 'Valence', note: 4.4 },
  { id: 9, name: 'Orville Salmons', specialty: 'Chauffagiste', location: 'Evian', note: 5 },
  { id: 10, name: 'Au pain chaud', specialty: 'Boulanger', location: 'Montélimar', note: 4.8 },
  { id: 11, name: 'Boucherie Dumont', specialty: 'Boucher', location: 'Lyon', note: 4.5 },
  { id: 12, name: 'Mont Blanc Eléctricité', specialty: 'Electricien', location: 'Chamonix', note: 4.5 },
  { id: 13, name: 'Traiteur Truchon', specialty: 'Traiteur', location: 'Privas', note: 4.1 },
  { id: 14, name: 'Le monde des fleurs', specialty: 'Fleuriste', location: 'Annonay', note: 4.6 },
  { id: 15, name: 'Royden Charbonneau', specialty: 'Carrossier', location: 'Saint-Priest', note: 3.8 },
  { id: 16, name: 'Ernest Carignan', specialty: 'Ferronier', location: 'Le Puy-en-Velay', note: 5 },
  { id: 17, name: "C'est sup'hair", specialty: 'Coiffeur', location: 'Romans-sur-Isère', note: 4.1 }

  ];

  filteredArtisans() {
    
    let filtered = this.artisans.filter(artisan => [3, 6, 8, 14, 15, 17].includes(artisan.id));
  
    // Filtrer par le terme de recherche
    filtered = filtered.filter(artisan => 
      artisan.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  
    // Trier les artisans par note
    filtered = filtered.sort((a, b) => {
      if (this.sortDirection === 'asc') {
        return a.note - b.note;
      } else {
        return b.note - a.note;
      }
    });
  
    return filtered; // Retourne les artisans filtrés
  }
  
  sortByNote(direction: 'asc' | 'desc') {
    this.sortDirection = direction;
  }
}
