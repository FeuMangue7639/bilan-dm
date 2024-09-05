import { Component } from '@angular/core';
import { ContactService } from '../contact.service'; // Assurez-vous que le chemin est correct

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  contact = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  successMessage: string = '';
  errorMessage: string = '';

  constructor(private contactService: ContactService) {}

  onSubmit() {
    if (this.contact.name && this.contact.email && this.contact.subject && this.contact.message) {
      this.contactService.sendEmail(this.contact).subscribe(response => {
        console.log('Message envoyé avec succès', response);
        
        // Afficher le message de succès
        this.successMessage = 'Votre message a été envoyé avec succès !';
        this.errorMessage = ''; // Clear any previous error
        
        // Réinitialiser le formulaire après l'envoi
        this.contact = {
          name: '',
          email: '',
          subject: '',
          message: ''
        };
      }, error => {
        console.error('Erreur lors de l\'envoi du message', error);
        
        // Afficher le message d'erreur
        this.errorMessage = 'Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer.';
        this.successMessage = ''; // Clear any previous success message
      });
    } else {
      this.errorMessage = 'Veuillez remplir tous les champs du formulaire.';
      this.successMessage = ''; // Clear any previous success message
    }
  }
}




