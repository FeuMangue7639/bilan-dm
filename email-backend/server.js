const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors'); // Ajoutez ceci

const app = express();
const port = 3000;

// Middleware
app.use(cors()); // Utilisez cors ici
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configure Nodemailer transport
const transporter = nodemailer.createTransport({
  host: 'localhost',
  port: 1025,
  secure: false,
  auth: {
    user: '', // Laissez vide pour MailDev
    pass: ''  // Laissez vide pour MailDev
  }
});

// Route pour envoyer les e-mails
app.post('/send-email', (req, res) => {
  const { name, email, subject, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'coelhohugo2003@gmail.com', // Remplacez par votre adresse e-mail
    subject: subject,
    text: `Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send('Erreur lors de l\'envoi de l\'e-mail');
    }
    res.status(200).send('E-mail envoyé avec succès');
  });
});

app.listen(port, () => {
  console.log(`Serveur en écoute sur http://localhost:${port}`);
});


