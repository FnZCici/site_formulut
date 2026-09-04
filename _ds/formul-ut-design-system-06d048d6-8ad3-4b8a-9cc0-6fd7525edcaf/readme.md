# Formul'UT — Design System

Écurie de Formula Student de l'**Université de Technologie de Compiègne**. Association loi 1901,
entièrement étudiante : vingt membres conçoivent, fabriquent et pilotent leurs propres monoplaces
pour courir contre les autres écoles d'ingénieurs.

**Mission telle que formulée par l'écurie :** « construire une Formula Student pour aller courir
contre d'autres écoles d'ingénieurs. »

Ce design system sert à **refondre le site vitrine** de l'association, avec un objectif net :
mettre l'association en avant et donner aux entreprises comme aux particuliers un moyen simple de
la soutenir.

## Produits couverts

| Surface | État | Où |
|---|---|---|
| Site vitrine — 6 pages | Recréé, cliquable | `ui_kits/site-vitrine/` |
| Page « Nous soutenir » | Écran le plus travaillé du kit | `ui_kits/site-vitrine/SoutenirScreen.jsx` |

L'écurie n'a ni application mobile, ni espace membre, ni newsletter : le site vitrine est la seule
surface numérique, et donc le seul kit UI.

## Sources utilisées

- **Dépôt GitHub** : `github.com/lysandrelamy-commits/site_asso_fs` (branche `main`) — site en ligne
  sur `https://lysandrelamy-commits.github.io/site_asso_fs/`. Lu pour les couleurs, les valeurs
  d'espacement, les rayons, les composants existants et la copie.
- **Codebase local** attaché : dossier `site_asso_fs` (même contenu que le dépôt).
- **Charte typographique** fournie par l'écurie : `assets/brand/hierarchie-typographique.png`
  (Ethnocentric / Horizon / Montserrat SemiBold / Montserrat Regular).
- **Fichiers de police** fournis par l'écurie : Ethnocentric-Regular.otf, Horizon.otf,
  Montserrat-Regular.otf, Montserrat-SemiBold.otf → `assets/fonts/`.
- **Logos Formul'UT** (cinq versions) et **logos partenaires** fournis par l'écurie → `assets/logos/`,
  `assets/partenaires/`.
- **Photos** fournies par l'écurie (monoplace en piste, équipe, roulage à Valéo) → `assets/photos/`.
- **Dossier de partenariat P26** (PDF) → `assets/dossier-partenariat-P26.pdf`.
- **Palette confirmée par l'écurie** : `#00062E`, `#FFFEF6`, `#F6B600`, `#C80000`.
- **Décisions de cadrage** prises avec l'écurie : voir « Arbitrages » en fin de document.

Le lecteur de ce document n'a pas nécessairement accès à ces sources ; tout ce qui compte a été
recopié dans le projet.

---

# CONTENT FUNDAMENTALS

## Le ton : sobre et factuel

Choix explicite de l'écurie. On annonce des faits vérifiables, on ne vend pas du rêve. La marque ne
dit jamais « une aventure humaine extraordinaire » ; elle dit « 117 ch, 15 000 tr/min, six rapports ».

**On écrit :** « Notre monoplace de course, en piste. Moteur de Honda CBR600RR, châssis tubulaire acier. »
**On n'écrit pas :** « Plongez au cœur d'une aventure technologique unique ! »

## Nous / vous

- L'écurie parle à la **première personne du pluriel** : « nous concevons », « on conçoit, on fabrique, on court ».
- Le lecteur est **vouvoyé** : « votre logo », « vous nous écrivez », « dites-nous ce que vous cherchez ».
- Jamais de « je ». Jamais de tutoiement, même sur la page recrutement.
- Le titre de la page soutien tient en quatre mots et pose les deux parties face à face :
  **« Votre logo. Notre piste. »**

## Casse

- **Ethnocentric et Horizon sont toujours en capitales** : ce sont des polices de titrage larges,
  dessinées pour ça. Titres, libellés de bouton, intitulés de champ, surtitres.
- **Montserrat est toujours en casse normale** : chapeaux, paragraphes, légendes, dates.
- Pas de capitales pour insister dans un paragraphe. L'accent se met par la couleur (jaune) ou par
  le passage en Horizon, jamais par une majuscule sauvage.

## Ponctuation et typographie française

- Espace insécable avant `:` `;` `!` `?` et à l'intérieur des guillemets « … ».
- Apostrophe typographique : `l'écurie`, `d'ingénieurs` — jamais `l'ecurie`.
- Unités séparées du nombre : `117 ch`, `15 000 tr/min`, `66 Nm`, `48 h`.
- Millésimes et dates en clair : « Février 2026 — Magny-Cours », pas « 02/26 ».

## Longueur

Phrases courtes, souvent nominales. Trois lignes maximum dans une carte, six dans un chapeau.
Le site d'origine avait des paragraphes de dix lignes : ils ont été resserrés.

## Emoji : non

Le site d'origine en utilisait beaucoup (🏁 🏎 ⚡ 🔧 🌿). **Ils sont retirés partout** — décision de
l'écurie, cohérente avec le ton sobre. Les icônes Lucide les remplacent une à une (voir ICONOGRAPHIE).
Aucun emoji dans l'interface, les titres, les libellés, les publications.

## Vocabulaire de la maison

| On dit | On ne dit pas |
|---|---|
| l'écurie | l'équipe de foot, la team |
| la monoplace, la voiture | le bolide, le véhicule |
| un pôle | un département, une squad |
| un roulage | une sortie, un essai |
| nous soutenir | nous aider, donner |
| partenaire | sponsor (à l'écrit public) |
| FS01, FS02 | la thermique, l'élec (en titre) |

**Sigles à toujours développer à la première occurrence :** LAS (Liaison Au Sol), GMP (Groupe
MotoPropulseur), UTC (Université de Technologie de Compiègne), CVEC (Contribution de Vie Étudiante
et de Campus).

## Le discours partenaire

Point le plus délicat du site. L'écurie **n'a plus de paliers chiffrés** : l'emplacement et la taille
du logo sur la monoplace suivent l'engagement, et cela se discute. La copie doit donc :

- **ne jamais afficher de grille tarifaire** ni de nom de palier (Bronze / Argent / Or) ;
- dire que **les dons de tous les niveaux sont bienvenus** ;
- accepter explicitement l'**apport en nature** (pièces, matériaux, logiciels, usinage) au même titre
  que l'argent ;
- promettre une **réponse sous 48 h** et rien de plus.

Formulation de référence, telle qu'elle figure dans le kit :

> « Il n'y a pas de grille tarifaire. L'emplacement et la taille de votre logo sur la monoplace sont
> fonction de votre engagement — on en discute ensemble. »

## Langues

FR + EN. Le français est la langue de référence ; l'anglais sert aux partenaires et aux compétitions
internationales. Les composants acceptent des libellés dans les deux langues sans casser
(les capitales Horizon supportent mal les mots anglais très longs : prévoir 20 caractères max par
libellé de bouton).

## Ce qu'on n'écrit jamais

- Un chiffre non vérifié. Mieux vaut retirer la carte de statistique que d'annoncer un classement
  approximatif. Les mentions « à compléter » du kit sont là pour ça, assumées.
- Une promesse de contrepartie non validée par le bureau.
- Un superlatif sur l'écurie (« la meilleure », « la plus innovante »).

---

# VISUAL FOUNDATIONS

## Le parti pris

**Ivoire dominant, bleu nuit en ponctuation.** Le site alterne franchement les deux fonds, section par
section : l'ivoire porte la lecture (chiffres, fiches techniques, actualités, arguments partenaires,
mur des partenaires), le bleu nuit marque les moments forts — bandeaux de tête, monoplaces, pôles
techniques, appels à l'action, formulaire, pied de page.

Le bleu nuit est la couleur mère du logo, donc l'ancrage de la marque ; l'ivoire rend le site lisible
sur la longueur.

Deux fonds seulement dans tout le système : `--ivory` et `--navy-900`. `--navy-800` n'est pas un
troisième fond, c'est la surface des cartes sur bleu nuit (et celle du bandeau d'appel à l'action).

**Règle d'alternance :** jamais plus de deux sections consécutives du même fond, et chaque page se
ferme sur un bloc bleu nuit (appel à l'action + pied de page). Les composants qui vivent dans les deux
contextes prennent un `onLight` — `StatCard`, `NewsCard`, `IconCard`, `Timeline`, `SpecList`,
`StepList`, `MemberCard`, `PerkPill`, `Tag`, `SectionHeader`, `FilterBar`, `SponsorLogoCard`. Ceux qui
n'existent qu'en bleu nuit (`MonoplaceCard`, `PoleAccordion`, `Field`, `FormStatus`) imposent le fond
de leur section.

## Couleurs

Quatre couleurs de charte, et rien d'autre :

- **`#00062E` bleu nuit** — fonds de ponctuation (bandeaux de tête, murs de partenaires, appels à
  l'action, pied de page) et encre sur ivoire. Décliné en neuf valeurs
  (`--navy-900` → `--navy-100`) pour les cartes, les bordures et les textes secondaires.
- **`#FFFEF6` ivoire** — **fond de lecture principal**, et texte sur bleu nuit. Ce n'est pas du blanc :
  il est chaud, et cette chaleur est visible. Le blanc pur `#FFFFFF` est réservé aux cartes posées sur
  ivoire.
- **`#F6B600` jaune** — **accent unique**. Action principale, chiffres clés, surtitres, liens sur
  fond sombre, filets. Une seule action jaune par écran.
- **`#C80000` rouge** — **décoratif uniquement** : filets, bandes de piste, numéros de course.
  Décision de l'écurie. Il ne porte pas d'état d'erreur à lui seul (voir `FormStatus` : l'erreur se
  signale par l'icône, le texte et un filet rouge — jamais par un fond rouge plein).

Les catégories du site d'origine étaient orange et verte : **hors charte, supprimées**. Elles sont
traduites en jaune (thermique) et ivoire (électrique) dans `Tag`.

## Typographie

Quatre niveaux, exactement ceux de la charte fournie :

| Niveau | Police | Emploi |
|---|---|---|
| Grand titre | **Ethnocentric** 400 | Le titre principal d'une page, rien d'autre |
| Titres | **Horizon** 400 | Titres de section, boutons, intitulés, surtitres |
| Sous-titres | **Montserrat** 600 | Chapeaux, accroches, texte mis en avant |
| Précisions | **Montserrat** 400 | Corps de texte, légendes, dates, mentions |

- Ethnocentric et Horizon sont **larges par construction** : interlettrage à `0` et `0.01em`, jamais
  élargi. Interligne serré (1.06 en display).
- Montserrat n'a que **deux graisses** dans les fichiers fournis (Regular, SemiBold) : il n'existe pas
  de gras dans ce système. Ne jamais demander un 700.
- Les intitulés (`--tracking-label`, `0.14em`) et les surtitres (`0.1em`) sont les deux seuls endroits
  où l'interlettrage s'ouvre.
- Interligne de lecture : `1.7`. C'est généreux, et c'est voulu — le texte est dense en information.

## Espacement

Échelle reprise **telle quelle du site existant**, sans la snapper sur une grille 4/8 :
4 · 6 · 8 · 10 · 12 · 14 · 16 · 20 · 24 · 28 · 32 · 40 · 48 · 56 · 64 · 72 · 80 · 96 · 120 px.

- Respiration verticale d'une section : **96 px** (`--section-y`), 80 en version resserrée, 120 pour
  une section de conviction.
- Gouttière : **28 px**. Largeur utile : **1160 px**. Hauteur de barre de navigation : **72 px**.
- Densités de carte : 20 / 28 / 32 px de padding selon la taille.

## Fonds

- **Aplats**, jamais de dégradé décoratif. Deux exceptions, toutes deux fonctionnelles : le voile
  bleu nuit sous une photo (`--scrim-navy`, pour poser du texte) et un halo radial jaune très dilué
  (14 % d'opacité) en coin de bandeau de tête, qui donne de la profondeur sans se voir.
- **Pas de motif répété, pas de texture de fond, pas d'illustration dessinée.** L'écurie a de vraies
  photos : elles occupent cette place.
- Les photos vont **pleine largeur** dans le bandeau d'accueil (ratio 21/9), en cadre arrondi partout
  ailleurs.

## Imagerie

- **Traitement maison** : contraste `1.12`, saturation `1.06`, luminosité `0.97`, plus un **grain fin**
  en superposition (`--photo-grain`, bruit fractal à 16 %, mode `overlay`). Ambiance sportive, sans
  filtre de couleur : les photos fournies sont déjà bleu/jaune, la palette est native.
- Toute photo publiée passe par `PhotoFrame`. Rayon 48 px (`--radius-xl`) en grand, 28 px en carte.
- **Trou photo assumé** : sans `src`, le cadre affiche l'intitulé du plan attendu (« Rendu 3D ou photo
  d'atelier à fournir »). C'est la bonne façon de laisser une place vide — jamais une image générique,
  jamais un dégradé de remplissage.
- Les logos partenaires sont rendus **sans aucun filtre de couleur**, sur une tuile blanche qui garantit
  le contraste quelle que soit leur couleur. **Une marque partenaire ne se recolore pas.**

## Rayons

8 · 16 · 28 · 48 px · capsule. Les cartes standard sont à **28 px**, les grandes cartes (monoplace,
actualité) à **48 px**, les boutons et pastilles en **capsule**. Rien n'est à angle vif sauf les
filets de piste pleine largeur.

## Cartes

Trois familles, cohérentes entre elles :

- **Sur bleu nuit** : fond `--navy-800`, filet 1,5 px `ivoire 12 %`, pas d'ombre au repos.
  Au survol : bordure jaune 40 % ou décollement de 4-5 px, ombre profonde bleu nuit.
- **Sur ivoire** : fond blanc pur, filet 1,5 px `encre 6 %`, ombre douce au repos (`--shadow-sm`),
  ombre moyenne au survol. C'est la carte la plus fréquente du site.
- **Emplacement libre** : bordure **pointillée** jaune 40 %, fond transparent. Un seul emploi —
  la case « + votre logo » du mur des partenaires.

Jamais de carte à bordure gauche colorée. Jamais de carte à fond dégradé.

## Bordures

**Le filet de 1,5 px est la signature du système.** Pas 1 px (trop fin sur bleu nuit), pas 2 px
(réservé au contour des boutons). Quatre valeurs :
`hairline` (ivoire 12 %), `strong` (ivoire 35 %), `accent` (jaune), `pointillé` (jaune 40 %).

## Ombres

Toujours **teintées bleu nuit**, jamais noires :
`0 2px 8px rgba(0,6,46,.08)` · `0 8px 32px rgba(0,6,46,.12)` · `0 24px 64px rgba(0,6,46,.16)` ·
`0 32px 80px rgba(0,6,46,.45)` sur fond sombre.
Une seule ombre colorée : `0 12px 32px rgba(246,182,0,.35)` sous le bouton principal au survol.
Pas d'ombre interne, sauf le liseré `inset 0 0 0 1.5px` en option.

## Survol

- **Boutons** : décollement de **3 px** vers le haut + assombrissement du fond (jaune → `#D19C00`)
  + ombre jaune. Jamais d'opacité.
- **Cartes** : décollement de **4-5 px** + bordure jaune 40 % + ombre.
- **Liens de navigation** : passage au jaune, sans soulignement.
- **Logos partenaires** : opacité 82 % → 100 %, bordure jaune.
- **Champs** : bordure jaune au focus, pas au survol.

## Appui

**Enfoncement, pas de changement de couleur** : `translateY(0) scale(0.98)` sur les boutons. La
couleur du survol reste. C'est un système qui bouge, pas qui clignote.

## Animation

- Durées : **200 ms** (micro), **250 ms** (défaut), **350 ms** (carte), **650 ms** (apparition).
- Deux courbes seulement : `cubic-bezier(.2,.6,.2,1)` pour les couleurs et les ombres,
  `cubic-bezier(.34,1.56,.64,1)` — léger rebond — pour les transformations de bouton.
- **Une seule animation autonome dans tout le système** : le compteur de `StatCard`, qui monte une
  fois à l'entrée dans l'écran (1600 ms, `easeOutCubic`). Pas de carrousel automatique, pas de
  parallaxe, pas d'apparition au défilement généralisée.
- `prefers-reduced-motion` coupe tout à 1 ms.

## Transparence et flou

Employés à deux endroits précis, et nulle part ailleurs :

1. **Barre de navigation** au défilement : `rgba(0,6,46,.88)` + `blur(20px) saturate(180%)`.
   Transparente tant qu'on est en haut de page.
2. **Barre de filtres** collante de la page Actualités : `rgba(0,6,46,.9)` + même flou.

Les transparences d'ivoire (4 / 8 / 12 / 35 / 55 / 70 %) servent aux textes et bordures sur bleu nuit,
pas à des effets de verre.

## Voile ou capsule ?

Texte sur photo → **voile** (`--scrim-navy`, dégradé du bas vers le haut, 92 % → 0 %).
Information structurée sur photo → **capsule** : cartouche `--navy-900` à filet, posée en bas du
cadre (`PhotoFrame badge`). Le bandeau photo de l'accueil utilise les deux.

## Éléments fixes

- Barre de navigation : `position: fixed`, 72 px, toujours présente, `z-index 1000`.
- Barre de filtres des actualités : `position: sticky` sous la barre de navigation, `z-index 100`.
- Rien d'autre n'est fixe : pas de bouton flottant, pas de bandeau de cookies dessiné, pas de widget
  de chat.

## Le motif « piste »

Dosage **discret**, décidé avec l'écurie : des **filets fins**, pas de bande de circuit ni de gros
numéro en fond.

- Filet **bicolore jaune/rouge** de 3 px : sous un titre de page, en tête du pied de page, en tête de
  la section formulaire. **Un seul par bloc.**
- Filet **jaune** de 6 px : en haut d'une carte monoplace.
- Filet **neutre** 1,5 px : séparation de contenu.

Le numéro de course `#86` s'écrit en texte (Ethnocentric), il n'est pas un élément graphique.

---

# ICONOGRAPHY

## Ce que l'écurie possède

**Aucun jeu d'icônes.** Le site d'origine reposait entièrement sur des **emoji** (🏁 🏎 ⚡ 🔧 🌿 🎯 👥)
et n'embarquait ni police d'icônes, ni sprite SVG, ni PNG d'icônes. Il n'y avait donc rien à copier.

## Ce que le système utilise — substitution assumée

**Lucide** (licence ISC), trait de **1,75 px**, extrémités et jointures arrondies, grille 24 px.
Choisi pour son tracé fin et géométrique, qui s'accorde au dessin du logo. **29 glyphes** seulement,
copiés dans le projet — pas de CDN, pas de dépendance réseau :

`assets/icons/lucide/` · licence incluse (`LICENSE`).

Correspondance avec les emoji remplacés :

| Emoji d'origine | Icône Lucide | Emploi |
|---|---|---|
| 🏁 | `flag` | Compétition, saison |
| 🏎 | `gauge` | Monoplace, performance |
| ⚡ | `battery-charging` / `zap` | GMP électrique |
| 🔧 | `wrench` | Fabrication, atelier |
| 🌬 | `wind` | Aéro |
| 🔥 | `flame` | GMP thermique |
| 📦 | `box` | Châssis |
| 🖥 | `cpu` | ELEC |
| ⚙️ | `circle-dot` | LAS (liaison au sol) |
| 👥 | `users` | Équipe |
| 🤝 | `handshake` | Partenariat |
| 🎯 | `target` | Visibilité |
| ✉️ | `mail` | Contact |
| 📄 | `file-text` / `download` | Dossier de partenariat |
| 📅 | `calendar` | Actualités |
| 🏆 | `trophy` | Résultats |

**Cette substitution est à valider par l'écurie.** Si Formul'UT dispose d'un jeu d'icônes propre
(planche Illustrator, SVG de la charte), il remplace Lucide directement dans `assets/icons/` et le
composant `Icon` n'a pas à changer.

## Règles d'emploi

- **Toujours par le composant `Icon`** : `<Icon name="flag" size={20} />`. Il porte le `viewBox`,
  l'épaisseur de trait et le rôle d'accessibilité.
- Tailles : **14-16 px** en ligne de texte, **20-22 px** dans une pastille carrée, jamais au-delà de 24 px.
- `strokeWidth` reste à **1,75**. C'est ce qui accorde les icônes au logo ; le changer casse l'accord.
- Couleur : `currentColor` par défaut, jaune dans une pastille (`--yellow-a15` + bordure `--yellow-a40`),
  `--navy-400` en icône de service.
- Une icône **décorative** n'a pas de `label` (elle est `aria-hidden`) ; une icône **porteuse de sens**
  en a un.
- **Jamais d'emoji.** **Jamais de caractère unicode en guise d'icône** (pas de `→` ni de `✓` typographique :
  `arrow-right` et `check` existent).
- **Jamais de SVG dessiné à la main** pour compléter le jeu. S'il manque un glyphe, on prend celui de
  Lucide le plus proche ou on demande à l'écurie.

## Logos

Cinq versions fournies par l'écurie, dans `assets/logos/` :

| Fichier | Fond prévu |
|---|---|
| `formulut-ivory-on-transparent.png` | **Version d'en-tête et de pied de page** — détourée, ivoire, format large 2,25:1 |
| `formulut-navy-on-transparent.png` | Détourée, bleu nuit — en-tête transparent sur fond ivoire |
| `formulut-ivory-on-navy.png` | Bleu nuit, bloc quasi carré — grands formats |
| `formulut-navy-on-ivory.png` | Ivoire, bloc quasi carré — grands formats |
| `formulut-navy-on-yellow.png` | Jaune |
| `formulut-white-on-black.png` | Noir |

`formulut-ivory-on-transparent.png` est **dérivée du fichier détouré fourni** : seuls les pixels bleu
nuit ont été recolorés en ivoire, les accents jaunes sont intacts. Elle a donc **exactement la même
géométrie** que la version bleu nuit — c'est ce qui permet à l'en-tête de basculer entre fond ivoire et
fond bleu nuit sans changement de taille apparent. Les versions `-on-navy` / `-on-ivory` fournies sont
des blocs quasi carrés : ne **jamais** les employer à 40 px de haut, elles y sont illisibles et deux
fois plus petites à l'œil.

Hauteur : **40 px** en barre de navigation, **48 px** en pied de page. Le logo n'est **jamais**
redessiné ni déformé, et la seule recoloration autorisée est celle décrite ci-dessus (bleu nuit ↔
ivoire, deux couleurs de charte déjà appariées dans les fichiers officiels). Les fichiers fournis sont
en PNG ; **un SVG serait préférable** pour les grands formats et l'impression — à demander à l'écurie.

## Logos partenaires

Sept logos fournis dans `assets/partenaires/` : SKF, Poclain Hydraulics, Société Générale, norelem,
Honda, Dassault Systèmes, CVEC. Quatre d'entre eux (SKF — fourni en JPEG — norelem, Poclain et CVEC)
étaient opaques sur fond blanc : ils ont été **détourés par remplissage depuis les bords** (seuls les
pixels clairs connectés au bord deviennent transparents, les blancs intérieurs sont préservés). Les
sept sont désormais à fond transparent.

`SponsorLogoCard` les pose sur une **tuile blanche**, sans filtre, hauteur maximale **44 px**,
largeur maximale **150 px**, `object-fit: contain`. La tuile garantit le contraste quelle que soit la
couleur du logo, sur ivoire comme sur bleu nuit. **Ne jamais recolorer un logo partenaire.**

Si l'écurie peut fournir les **versions vectorielles** de ces logos, elles remplaceront les PNG
détourés — le détourage automatique laisse un léger crénelage visible au-delà de 150 px de large.

La grille du mur des partenaires **finit toujours par la case pointillée « + votre logo »** : c'est
l'invitation la plus efficace de la page soutien.

---

# Arbitrages pris avec l'écurie

Décisions actées pendant la conception, à connaître avant toute modification :

1. **Emoji supprimés**, remplacés par Lucide (voir ICONOGRAPHY).
2. **Pas de paliers de partenariat.** Ils n'existent plus : l'emplacement du logo sur la voiture suit
   l'engagement. Aucune grille tarifaire nulle part.
3. **Rouge décoratif seulement.**
4. **Alternance ivoire / bleu nuit équilibrée**, l'ivoire portant la lecture et le bleu nuit les
   moments forts.
5. **Photos en contraste renforcé + grain fin.**
6. **Motif « piste » discret** : filets fins uniquement.
7. **Bouton principal : « Nous soutenir »**, présent en barre de navigation et en bas de chaque page.
8. **Accueil : titre centré sur ivoire, photo pleine largeur dessous.** Les pages intérieures utilisent
   `PageHero` (fond bleu nuit) — l'accueil a son propre traitement, ne pas les confondre.
9. **Six pages** : Accueil · L'association · L'équipe · La monoplace · Actualités · Nous soutenir.
10. **FR + EN**, français en référence.

# Ce qui manque

À obtenir de l'écurie pour finir le site :

- **Noms et photos du bureau** (`ui_kits/site-vitrine/data.js`, tableau `bureau` — quatre « à compléter »).
- **Fiche technique complète de la FS01** : masse, type de châssis.
- **Fiche de la FS02** : motorisation, pack batterie, et une image (rendu 3D ou photo d'atelier).
- **Logo Formul'UT en SVG.**
- **Confirmation du jeu d'icônes** (Lucide ou planche propre).
- **Versions vectorielles des logos partenaires** — les quatre fichiers opaques (SKF, norelem, Poclain,
  CVEC) ont été détourés automatiquement, ce qui laisse un léger crénelage aux grandes tailles.
- Éventuellement un **lien de don en ligne** (HelloAsso ou équivalent) : la page soutien est
  aujourd'hui construite autour du formulaire de contact et du dossier PDF, conformément au cadrage.

# Additions intentionnelles

Le site d'origine ne définissait pas de bibliothèque de composants : les primitives ci-dessous ont
donc été **déduites de ses écrans** et non inventées. Trois exceptions, ajoutées pour une raison
précise :

- **`Icon`** — enveloppe du jeu Lucide, nécessaire dès lors que les emoji sont retirés.
- **`TrackRule`** — formalise le filet décoratif présent à l'état diffus dans le site d'origine, et
  cantonne le rouge à cet emploi.
- **`IconCard`** — fusionne les trois variantes de carte à icône du site (`.why-card`, `.valeur-card`,
  `.direct-card`), identiques au style près.

---

# Index du projet

**Racine**
- `styles.css` — point d'entrée unique des consommateurs (liste d'`@import`).
- `readme.md` — ce document.
- `SKILL.md` — mode d'emploi pour un agent (compatible Agent Skills).
- `thumbnail.html` — vignette du design system.

**`tokens/`** — `fonts.css` (@font-face) · `colors.css` · `typography.css` · `spacing.css` ·
`effects.css` (rayons, ombres, mouvement, traitement photo) · `base.css` (reset et défauts).

**`assets/`** — `fonts/` (4 .otf) · `logos/` (5 versions fournies + la déclinaison ivoire détourée) ·
`partenaires/` (7 logos détourés) ·
`photos/` (8 photos) · `icons/lucide/` (29 SVG + licence) · `brand/hierarchie-typographique.png` ·
`dossier-partenariat-P26.pdf`.

**`components/`** — 23 primitives, chacune avec `.jsx`, `.d.ts` et `.prompt.md` :

| Groupe | Composants |
|---|---|
| `core/` | `Icon` · `Button` · `Tag` · `Eyebrow` · `TrackRule` · `SectionHeader` · `StatCard` · `PhotoFrame` · `PageHero` |
| `navigation/` | `SiteHeader` · `SiteFooter` · `FilterBar` |
| `content/` | `MonoplaceCard` · `NewsCard` · `Timeline` · `MemberCard` · `PoleAccordion` · `IconCard` · `SponsorLogoCard` · `PerkPill` · `SpecList` · `StepList` |
| `forms/` | `Field` · `FormStatus` |

**`ui_kits/site-vitrine/`** — recréation cliquable du site en six écrans :
`index.html` (point d'entrée) · `data.js` (contenus réels) · `Layout.jsx` (Container, Section, Grid,
CtaBand) · `HomeScreen` · `AssociationScreen` · `EquipeScreen` · `MonoplaceScreen` ·
`ActualitesScreen` · `SoutenirScreen` · `README.md`.

**`guidelines/`** — 23 cartes de spécimens, groupées dans l'onglet Design System :
Couleurs (7) · Typographie (6) · Espacement (4) · Marque (6).
