# ScrolUp - Application Mobile Complète

## 🎯 Concept Global
ScrolUp est "le Google de la publicité + le TikTok du partage payant" - une plateforme qui centralise toutes les publicités du monde et permet aux utilisateurs de gagner de l'argent en interagissant avec elles.

## 📱 Écrans Implémentés

### 1️⃣ **Home Feed** (Écran Principal)
- ✅ Barre de recherche: "Rechercher une publicité, une marque ou un produit…"
- ✅ Badge utilisateur: "Niveau 2 • Créateur Bronze"
- ✅ Cartes publicitaires scrollables verticalement (style TikTok)
- ✅ Compteurs ScrolCoins visibles sur chaque pub (+0.5 SC, +1.2 SC, etc.)
- ✅ Navigation vers détail de pub en cliquant sur une carte

### 2️⃣ **Monetization Page** (Partagez et gagnez)
- ✅ Section "Campagnes à partager" avec:
  - Logo de marque
  - Récompense par partage
  - Bouton "Partager maintenant"
- ✅ Section "Mes partages" avec tableau:
  - Campagne, vues, gains, statut
- ✅ Section "Classement hebdo":
  - Top 10 utilisateurs
  - Avatars, noms, trophées
  - Gains en ScrolCoins

### 3️⃣ **Wallet Page** (ScrolCoins)
- ✅ Solde total en ScrolCoins (1245.80 SC)
- ✅ Graphique d'évolution hebdomadaire des gains
- ✅ Historique des transactions détaillé
- ✅ Boutons:
  - "Convertir en argent réel"
  - "Utiliser mes ScrolCoins"

### 4️⃣ **Ad Detail Page** (Vue plein écran)
- ✅ Affichage plein écran style TikTok
- ✅ Informations:
  - Nom de marque
  - Description
  - Catégorie
  - Prix
- ✅ Actions:
  - Like, Partager, Sauvegarder
  - Bouton "Acheter maintenant et gagner +X SC"
- ✅ Badge utilisateur et ScrolCoins gagnés visibles

### 5️⃣ **Brand Dashboard** (Espace Commerçant)
- ✅ Formulaire de création de campagne:
  - Upload image/vidéo
  - Titre et description
  - Récompenses par vue/partage/vente
  - Budget total
- ✅ Dashboard analytics:
  - Vues, partages, conversions
  - Graphique de performance
  - Budget dépensé
- ✅ Liste des campagnes actives/en pause

### 6️⃣ **IA ScrolUp Visualization** (Cerveau IA)
- ✅ Visualisation globe avec connexions neurales
- ✅ Catégories analysées:
  - Mode, Automobile, Immobilier, Restauration, Technologie
  - Avec icônes et nombre de sources
- ✅ Section "Comment ça marche":
  - Collecte automatique
  - Classification intelligente
  - Recommandation personnalisée
- ✅ Plateformes connectées:
  - Instagram (2.4M ads)
  - TikTok (3.8M ads)
  - YouTube (1.9M ads)
  - Facebook, TV, LinkedIn
- ✅ Stats: 11.8M+ publicités collectées

### 7️⃣ **User Flow Diagram** (Parcours utilisateur)
- ✅ Flux commerçant:
  1. Inscription
  2. Ajout produit
  3. Création pub
  4. Paiement par performance
- ✅ Flux utilisateur:
  1. Recherche pub
  2. Visionnage/partage
  3. Gain ScrolCoins
- ✅ Centre ScrolUp avec stats (11.8M pubs, 450K marques, 2.5M users)
- ✅ Proposition de valeur claire

### 8️⃣ **Profile Screen** (Mis à jour)
- ✅ Accès rapide aux nouvelles fonctionnalités:
  - Bouton "Wallet" (ScrolCoins)
  - Bouton "Gains" (Monetization)
  - Lien "Espace Marque" (Brand Dashboard)
  - Lien "IA ScrolUp" (AI Visualization)
  - Lien "Parcours utilisateur" (User Flow)

### 9️⃣ **Navigation Bar** (Mise à jour)
- ✅ Nouveau menu avec icône Wallet (pièces)
- ✅ 5 items: Home, Explore, Wallet, Messages, Profile

## 🎨 Design System

### Couleurs
- **Gradient principal**: #FF6A00 → #FFC04D
- **Mode Light**:
  - Background: #FFFFFF
  - Surfaces: #F5F5F5
  - Texte: #000000
- **Mode Dark**:
  - Background: #0D0D0D
  - Surfaces: #1E1E1E
  - Bordures: #2A2A2A
  - Texte: #FFFFFF
  - Texte secondaire: #B3B3B3

### Typographie
- **Titres**: Poppins (bold)
- **Corps de texte**: Inter (regular/medium)

### Style
- Coins arrondis: 16px-32px
- Ombres douces
- Icônes minimales (Lucide React)
- Animations fluides (Motion/React)

## 🔄 Navigation entre écrans

```
Splash → Onboarding → Login → Home
                                  ↓
                    ┌─────────────┴─────────────┐
                    ↓                           ↓
                 Home Feed                   Profile
                    ↓                           ↓
            ┌───────┴───────┐         ┌────────┴────────┐
            ↓               ↓         ↓                 ↓
       Ad Detail     Monetization  Wallet      Brand Dashboard
                                              ↓                 ↓
                                        AI Visual      User Flow
```

## 📊 Données Mock

### ScrolCoins
- Solde: 1245.80 SC
- Gains hebdo: +141.9 SC
- Taux de conversion: 1 SC = 0.10€

### Campagnes
- Nike: +5 SC par partage
- Apple: +8 SC par partage
- Tesla: +6 SC par partage

### Utilisateurs Top 10
- #1: Sarah M. (1245.50 SC)
- #2: Marc D. (987.30 SC)
- #3: Julie P. (856.20 SC)

## 🚀 Prochaines étapes suggérées

1. **Backend Supabase**:
   - Authentification utilisateurs
   - Base de données publicités
   - Système de paiement ScrolCoins

2. **Fonctionnalités avancées**:
   - Notifications push
   - Partage réel sur réseaux sociaux
   - Système de parrainage
   - Niveaux et badges gamifiés

3. **Optimisations**:
   - Lazy loading images
   - Pagination publicités
   - Cache des données
   - Analytics temps réel

## 📝 Notes techniques

- Framework: React + TypeScript
- Styling: Tailwind CSS v4
- Animations: Motion/React (Framer Motion)
- Charts: Recharts
- Icons: Lucide React
- Responsive: Mobile-first (390x844px)
