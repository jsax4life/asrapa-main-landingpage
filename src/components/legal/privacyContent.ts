// Privacy policy text, French and English. Facts come from the company
// registration (SATCHAPROD SARL U) and from what the AsraPa backend stores.

export const PRIVACY_CONTACT = "debora@satchaprod.com";

export type PrivacySection = {
  id: string;
  title: string;
  paragraphs?: string[];
  items?: string[];
  /** Show the list before the paragraphs. */
  itemsFirst?: boolean;
};

export type PrivacyContent = {
  lang: "fr" | "en";
  path: string;
  otherPath: string;
  otherLabel: string;
  homeLabel: string;
  eyebrow: string;
  title: string;
  updated: string;
  intro: string;
  contactLabel: string;
  sections: PrivacySection[];
  footer: string;
};

export const privacyFr: PrivacyContent = {
  lang: "fr",
  path: "/confidentialite",
  otherPath: "/privacy",
  otherLabel: "English version",
  homeLabel: "Retour à l'accueil",
  eyebrow: "Mentions légales",
  title: "Politique de confidentialité",
  updated: "Dernière mise à jour : 27 octobre 2026",
  intro:
    "Cette politique explique quelles données personnelles AsraPa collecte, pourquoi, avec qui elles sont partagées et comment vous pouvez les consulter ou les supprimer. Elle s'applique à l'application AsraPa (Android et iOS), au site asrapa.com et à l'espace artistes artists.asrapa.com.",
  contactLabel: "Contact données personnelles",
  sections: [
    {
      id: "editeur",
      title: "1. Qui est responsable de vos données",
      paragraphs: [
        "AsraPa est éditée par SATCHAPROD SARL U, société à responsabilité limitée unipersonnelle au capital de 5 000 000 F CFA, dont le siège est à Abidjan, commune de Bingerville, carrefour CIE, lot 1050, îlot 125, Côte d'Ivoire, immatriculée au registre du commerce et du crédit mobilier d'Abidjan sous le numéro CI-ABJ-03-2026-B13-12268. Site officiel : www.satchaprod.com.",
        `Pour toute question sur vos données personnelles : ${PRIVACY_CONTACT}.`,
      ],
    },
    {
      id: "donnees",
      title: "2. Les données que nous collectons",
      items: [
        "Votre compte : nom d'utilisateur, adresse e-mail, numéro de téléphone, date de naissance, ville, photo de profil et mot de passe (enregistré sous forme chiffrée, jamais en clair).",
        "Si vous vous connectez avec Google ou Facebook : l'identifiant de ce compte et l'adresse e-mail associée. Si vous liez Instagram ou TikTok à votre profil : l'identifiant et le nom d'utilisateur de ce compte.",
        "Votre utilisation : les titres écoutés et la date d'écoute, vos recherches récentes, playlists, mentions J'aime, téléchargements, Shorts publiés, commentaires, partages et sessions d'écoute en groupe.",
        "Vos paiements : la formule choisie, le montant, la devise et le statut du paiement. Pour le mobile money, le numéro de téléphone utilisé et les références de l'opérateur. Les paiements par carte sont traités par Stripe : AsraPa ne voit pas et ne conserve pas votre numéro de carte.",
        "Vos préférences de notification (notifications, e-mails, offres).",
        "Pour les artistes : nom complet, nom de scène, e-mail, biographie, ville, pays, date de naissance, liens vers vos réseaux sociaux, ainsi que les contenus que vous envoyez (musique, pochettes, vidéos).",
        "Des informations techniques nécessaires au fonctionnement et à la sécurité du service, comme l'adresse IP et les journaux d'erreurs.",
      ],
    },
    {
      id: "usages",
      itemsFirst: true,
      title: "3. Pourquoi nous les utilisons",
      items: [
        "Fournir le service : créer votre compte, vous permettre d'écouter, de publier et de retrouver vos contenus.",
        "Gérer les abonnements, les paiements et les forfaits des artistes.",
        "Établir les statistiques d'écoute et rémunérer les artistes.",
        "Vous proposer des recommandations, comme les Découvertes de la semaine.",
        "Vous envoyer des notifications et des e-mails, selon les préférences que vous avez choisies.",
        "Protéger le service contre la fraude et les abus.",
        "Respecter nos obligations légales, notamment comptables.",
      ],
      paragraphs: [
        "Ces traitements reposent sur l'exécution du contrat qui nous lie à vous, sur votre consentement (offres et notifications facultatives), sur notre intérêt légitime à sécuriser le service et sur nos obligations légales.",
      ],
    },
    {
      id: "partage",
      title: "4. Avec qui nous partageons vos données",
      paragraphs: [
        "AsraPa ne vend pas vos données personnelles. Elles sont partagées uniquement avec les prestataires qui nous aident à faire fonctionner le service, et seulement pour cela :",
      ],
      items: [
        "Amazon Web Services : hébergement du serveur et stockage des fichiers (musique, images, vidéos).",
        "MongoDB Atlas : hébergement de la base de données.",
        "Stripe : paiements par carte bancaire.",
        "SmobilPay et les opérateurs Airtel Money et Moov Money : paiements par mobile money.",
        "Mailgun : envoi des e-mails.",
        "Cloudinary : stockage de certaines images.",
        "Google, Facebook, Instagram et TikTok : uniquement si vous choisissez de vous connecter ou de lier votre compte avec eux.",
        "Les agents de paiement AsraPa : si un agent vous inscrit ou active votre abonnement, il voit les informations nécessaires à cette opération (nom, téléphone, formule).",
        "Les autorités : lorsque la loi nous y oblige.",
      ],
    },
    {
      id: "transferts",
      title: "5. Où sont hébergées vos données",
      paragraphs: [
        "Nos prestataires peuvent héberger vos données en dehors du Tchad et de la Côte d'Ivoire, notamment en Europe et aux États-Unis. Nous choisissons des prestataires qui appliquent des mesures de sécurité reconnues.",
      ],
    },
    {
      id: "duree",
      title: "6. Combien de temps nous les gardons",
      items: [
        "Les données de votre compte sont conservées tant que votre compte est actif.",
        "Les données de paiement sont conservées pendant la durée imposée par la loi comptable.",
        "Les statistiques d'écoute peuvent être conservées sous une forme qui ne permet plus de vous identifier.",
      ],
    },
    {
      id: "suppression",
      title: "7. Supprimer votre compte",
      paragraphs: [
        "Vous pouvez supprimer votre compte depuis les paramètres de l'application, en confirmant votre mot de passe. Votre compte est alors désactivé et votre adresse e-mail, votre numéro de téléphone et votre nom d'utilisateur sont remplacés par des valeurs anonymes.",
        `Vous pouvez aussi demander la suppression de votre compte, ou l'effacement complet des autres données (photo, date de naissance, ville, historique d'écoute), en écrivant à ${PRIVACY_CONTACT} depuis l'adresse e-mail de votre compte. Nous répondons dans un délai de 30 jours.`,
      ],
    },
    {
      id: "droits",
      title: "8. Vos droits",
      paragraphs: [
        `Vous pouvez à tout moment demander à accéder à vos données, les corriger, les effacer, vous opposer à certains traitements ou retirer votre consentement. Écrivez à ${PRIVACY_CONTACT}. Nous pourrons vous demander de confirmer votre identité.`,
        "Si vous estimez que vos droits ne sont pas respectés, vous pouvez saisir l'autorité de protection des données personnelles de votre pays. En Côte d'Ivoire, il s'agit de l'ARTCI.",
      ],
    },
    {
      id: "securite",
      title: "9. Sécurité",
      paragraphs: [
        "Les échanges entre l'application et nos serveurs sont chiffrés (HTTPS), les mots de passe sont enregistrés sous forme chiffrée et l'accès aux données est limité aux personnes qui en ont besoin pour leur travail.",
      ],
    },
    {
      id: "enfants",
      title: "10. Enfants",
      paragraphs: [
        "AsraPa ne s'adresse pas aux enfants de moins de [âge minimum à fixer] ans. Si vous pensez qu'un enfant nous a transmis des données, écrivez-nous et nous les supprimerons.",
      ],
    },
    {
      id: "modifications",
      title: "11. Modifications de cette politique",
      paragraphs: [
        "Nous pouvons modifier cette politique. La date de mise à jour figure en haut de la page. En cas de changement important, nous vous prévenons dans l'application ou par e-mail.",
      ],
    },
  ],
  footer: "SATCHAPROD SARL U · RCCM CI-ABJ-03-2026-B13-12268",
};

export const privacyEn: PrivacyContent = {
  lang: "en",
  path: "/privacy",
  otherPath: "/confidentialite",
  otherLabel: "Version française",
  homeLabel: "Back to home",
  eyebrow: "Legal",
  title: "Privacy Policy",
  updated: "Last updated: October 27, 2026",
  intro:
    "This policy explains which personal data AsraPa collects, why, who it is shared with, and how you can access or delete it. It applies to the AsraPa app (Android and iOS), the asrapa.com website and the artists.asrapa.com artist portal.",
  contactLabel: "Personal data contact",
  sections: [
    {
      id: "publisher",
      title: "1. Who is responsible for your data",
      paragraphs: [
        "AsraPa is published by SATCHAPROD SARL U, a single-member limited liability company with a share capital of 5,000,000 CFA francs, registered office in Abidjan, Bingerville, carrefour CIE, lot 1050, block 125, Côte d'Ivoire, registered with the Abidjan trade and personal property register under number CI-ABJ-03-2026-B13-12268. Official website: www.satchaprod.com.",
        `For any question about your personal data: ${PRIVACY_CONTACT}.`,
      ],
    },
    {
      id: "data",
      title: "2. The data we collect",
      items: [
        "Your account: username, email address, phone number, date of birth, city, profile photo and password (stored encrypted, never in plain text).",
        "If you sign in with Google or Facebook: the ID of that account and its email address. If you link Instagram or TikTok to your profile: the ID and username of that account.",
        "Your use of the service: tracks played and when, recent searches, playlists, likes, downloads, Shorts you post, comments, shares and group listening sessions.",
        "Your payments: the plan chosen, the amount, the currency and the payment status. For mobile money, the phone number used and the operator's references. Card payments are processed by Stripe: AsraPa does not see or store your card number.",
        "Your notification preferences (notifications, emails, offers).",
        "For artists: full name, stage name, email, biography, city, country, date of birth, links to your social networks, and the content you upload (music, artwork, videos).",
        "Technical information needed to run and secure the service, such as IP address and error logs.",
      ],
    },
    {
      id: "uses",
      itemsFirst: true,
      title: "3. Why we use it",
      items: [
        "To provide the service: create your account, let you listen, publish and find your content.",
        "To manage subscriptions, payments and artist plans.",
        "To produce listening statistics and pay artists.",
        "To offer recommendations, such as Discover Weekly.",
        "To send you notifications and emails, according to the preferences you chose.",
        "To protect the service against fraud and abuse.",
        "To meet our legal obligations, including accounting.",
      ],
      paragraphs: [
        "This processing is based on the performance of our contract with you, on your consent (optional offers and notifications), on our legitimate interest in securing the service, and on our legal obligations.",
      ],
    },
    {
      id: "sharing",
      title: "4. Who we share it with",
      paragraphs: [
        "AsraPa does not sell your personal data. It is shared only with the providers that help us run the service, and only for that purpose:",
      ],
      items: [
        "Amazon Web Services: server hosting and file storage (music, images, videos).",
        "MongoDB Atlas: database hosting.",
        "Stripe: card payments.",
        "SmobilPay and the operators Airtel Money and Moov Money: mobile money payments.",
        "Mailgun: sending emails.",
        "Cloudinary: storage of some images.",
        "Google, Facebook, Instagram and TikTok: only if you choose to sign in or link your account with them.",
        "AsraPa payment agents: if an agent signs you up or activates your subscription, they see the information needed for that operation (name, phone, plan).",
        "Authorities: when the law requires it.",
      ],
    },
    {
      id: "transfers",
      title: "5. Where your data is stored",
      paragraphs: [
        "Our providers may store your data outside Chad and Côte d'Ivoire, notably in Europe and the United States. We choose providers that apply recognised security measures.",
      ],
    },
    {
      id: "retention",
      title: "6. How long we keep it",
      items: [
        "Account data is kept as long as your account is active.",
        "Payment data is kept for the period required by accounting law.",
        "Listening statistics may be kept in a form that no longer identifies you.",
      ],
    },
    {
      id: "deletion",
      title: "7. Deleting your account",
      paragraphs: [
        "You can delete your account from the app settings by confirming your password. Your account is then deactivated, and your email address, phone number and username are replaced with anonymous values.",
        `You can also request deletion of your account, or full erasure of your other data (photo, date of birth, city, listening history), by writing to ${PRIVACY_CONTACT} from your account's email address. We reply within 30 days.`,
      ],
    },
    {
      id: "rights",
      title: "8. Your rights",
      paragraphs: [
        `You can ask at any time to access, correct or erase your data, object to certain processing, or withdraw your consent. Write to ${PRIVACY_CONTACT}. We may ask you to confirm your identity.`,
        "If you believe your rights are not respected, you can contact the personal data protection authority of your country. In Côte d'Ivoire, this is ARTCI.",
      ],
    },
    {
      id: "security",
      title: "9. Security",
      paragraphs: [
        "Traffic between the app and our servers is encrypted (HTTPS), passwords are stored encrypted, and access to data is limited to the people who need it for their work.",
      ],
    },
    {
      id: "children",
      title: "10. Children",
      paragraphs: [
        "AsraPa is not intended for children under [minimum age to be set]. If you believe a child has given us personal data, write to us and we will delete it.",
      ],
    },
    {
      id: "changes",
      title: "11. Changes to this policy",
      paragraphs: [
        "We may update this policy. The date of the last update is shown at the top of the page. If we make a significant change, we will let you know in the app or by email.",
      ],
    },
  ],
  footer: "SATCHAPROD SARL U · RCCM CI-ABJ-03-2026-B13-12268",
};
