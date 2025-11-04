# 🚀 ScrolUp - Application Mobile

## 📱 Description

**ScrolUp** est la première plateforme qui combine le **Google de la publicité** avec le **TikTok du partage payant**. Elle centralise toutes les publicités du monde et permet aux utilisateurs de gagner de l'argent réel en interagissant avec elles.

### 💡 Concept

- **Pour les utilisateurs**: Regardez, likez, partagez des pubs et gagnez des **ScrolCoins** convertibles en argent réel
- **Pour les marques**: Créez des campagnes et payez uniquement pour les résultats (vues, partages, ventes)
- **Pour l'IA**: Collecte et organise automatiquement 11.8M+ publicités de toutes les plateformes (Instagram, TikTok, YouTube, TV, etc.)

## 🎨 Design

- **Identité visuelle**: Gradient orange (#FF6A00 → #FFC04D)
- **Typographie**: Poppins (titres) + Inter (corps)
- **Style**: Minimaliste, moderne, avec animations fluides
- **Thèmes**: Light Mode + Dark Mode complet

## 📱 Écrans implémentés (17 au total)

### 🔐 Authentification
1. **Splash Screen** - Écran de démarrage avec logo et animation
2. **Onboarding** - 3 slides d'introduction
3. **Login/Signup** - Connexion et inscription

### 🏠 Écrans principaux
4. **Home Feed** - Feed vertical style TikTok avec:
   - Barre de recherche
   - Badge niveau utilisateur
   - ScrolCoins visibles par pub
   - Scroll infini

5. **Explore** - Découverte par catégories:
   - Recherche avancée
   - Filtres (Mode, Tech, Beauté, Auto, Food, etc.)
   - Grid avec aperçu des gains

6. **Wallet** - Portefeuille ScrolCoins:
   - Solde total
   - Graphique d'évolution
   - Historique transactions
   - Conversion en euros

7. **Messages** - Chat et Stories:
   - Conversations
   - Stories temporaires
   - Chat temps réel

8. **Profile** - Profil utilisateur:
   - Stats (pubs, likes, partages)
   - Grille de contenu
   - Accès rapide aux fonctionnalités

### 💰 Monétisation
9. **Monetization Screen** - Gagnez en partageant:
   - Campagnes à partager
   - Tableau "Mes partages"
   - Classement top 10

10. **Ad Detail Screen** - Vue immersive d'une pub:
    - Plein écran style TikTok
    - Actions (like, share, buy)
    - Gains ScrolCoins affichés

### 🏢 Espace Marques
11. **Brand Dashboard** - Pour les commerçants:
    - Création de campagnes
    - Upload média
    - Définition récompenses
    - Analytics temps réel
    - Gestion budget

### 🤖 Intelligence Artificielle
12. **AI Visualization** - Cerveau IA:
    - Globe avec connexions
    - 5 catégories analysées
    - 6 plateformes connectées
    - 11.8M+ pubs collectées

13. **User Flow Diagram** - Parcours:
    - Flux commerçant
    - Flux utilisateur
    - Écosystème ScrolUp

### ⚙️ Paramètres
14. **Create Screen** - Création de contenu
15. **Notifications** - Alertes et notifications
16. **Settings** - Paramètres avec Dark Mode
17. **Chat Screen** - Messages individuels

## 🛠️ Technologies

- **Framework**: React 18 + TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Motion/React (Framer Motion)
- **Charts**: Recharts
- **Icons**: Lucide React
- **Build**: Vite
- **Deploy**: Vercel

## 📦 Installation

```bash
# Installer les dépendances
npm install

# Lancer en développement
npm run dev

# Build pour production
npm run build

# Preview du build
npm run preview
```

## 🚀 Démarrage rapide

1. L'app démarre sur **Splash Screen**
2. Passez l'**Onboarding** (3 slides)
3. **Connectez-vous** ou créez un compte
4. Découvrez le **Home Feed** avec pubs infinies
5. Naviguez via la **barre en bas**:
   - 🏠 Home
   - 🧭 Explore
   - 💰 Wallet
   - 💬 Messages
   - 👤 Profile

## 💎 Fonctionnalités clés

### Système de récompenses
- **+0.03 SC** par vue de pub
- **+5 SC** par partage de pub
- **+15 SC** par achat via l'app
- **1 SC = 0.10€** (taux de conversion)

### Gamification
- Niveaux utilisateurs (Bronze, Argent, Or, Platine)
- Badges de progression
- Classements hebdomadaires
- Défis quotidiens

### Pour les marques
- Paiement à la performance uniquement
- Analytics détaillées
- Budget flexible
- ROI mesurable

## 📊 Données Mock

- **11.8M** publicités collectées
- **450K** marques inscrites
- **2.5M** utilisateurs actifs
- **6 plateformes** connectées (Instagram, TikTok, YouTube, Facebook, TV, LinkedIn)

## 🎯 Prochaines étapes

### Phase 1: Backend
- [ ] Intégration Supabase
- [ ] Authentification réelle
- [ ] Base de données publicités
- [ ] Système de paiement

### Phase 2: Fonctionnalités
- [ ] Partage social réel
- [ ] Notifications push
- [ ] Système de parrainage
- [ ] Programme d'affiliation

### Phase 3: Optimisation
- [ ] Lazy loading images
- [ ] Cache intelligent
- [ ] Analytics avancées
- [ ] Tests A/B

## 📝 Structure du projet

```
scrolup/
├── components/
│   ├── screens/          # 17 écrans
│   ├── ui/              # Components UI réutilisables
│   ├── AdCard.tsx       # Carte publicitaire
│   ├── GradientButton.tsx
│   ├── InputField.tsx
│   └── NavigationBar.tsx
├── contexts/
│   └── ThemeContext.tsx # Gestion Light/Dark mode
├── styles/
│   └── globals.css      # Styles globaux + tokens
├── App.tsx              # Point d'entrée principal
└── main.tsx             # Initialisation React

```

## 🎨 Design tokens

```css
/* Couleurs principales */
--orange-start: #FF6A00;
--orange-end: #FFC04D;

/* Dark Mode */
--dark-bg: #0D0D0D;
--dark-surface: #1E1E1E;
--dark-border: #2A2A2A;
--dark-text-secondary: #B3B3B3;

/* Light Mode */
--light-bg: #FFFFFF;
--light-surface: #F5F5F5;
--light-border: #E5E5E5;
```

## 📱 Responsive

L'app est optimisée pour mobile avec un frame de **390x844px** (iPhone 14 Pro).
Tous les écrans sont responsive et s'adaptent au Dark Mode.

## 🤝 Contribution

Ce projet est un prototype complet de l'application ScrolUp. 

## 📄 Licence

Propriétaire - ScrolUp © 2025

## 🔗 Liens utiles

- [Guide de navigation](./NAVIGATION_GUIDE.md)
- [Liste des fonctionnalités](./SCROLUP_FEATURES.md)
- [Documentation Figma Make](./guidelines/Guidelines.md)

---

**Fait avec ❤️ et ☕ pour révolutionner la publicité digitale**
