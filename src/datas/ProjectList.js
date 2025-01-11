import github from '../assets/GitHub.png'
import web from '../assets/Web.jpg'
import unity from '../assets/Unity.jpg'
import brez from '../assets/Brez.svg'
import diarbenn from '../assets/Diarbenn.png'
import miguel from '../assets/Miguel.png'
import p4 from '../assets/Puissance 4.png'
import quoiMaGeule from '../assets/moi.jpg'
import mint from '../assets/mint.jpg'
import cavale from '../assets/Vaush2.png'
import Semaphore from '../assets/Proj-semaphore.jpg'

export const projectList = [
	{
		id: '1',
		cover: miguel,
		name: "Bouh",
		date: "Juin 2023",
		desc: "Voici mon tout premier jeu vidéo. Bouh est un jeu d'horreur où vous incarnez un étudiant du crous de Lannion en pleine insomnie qui va rencontrer des phénomènes étranges en essayant de trouver un truc a manger. Étant mon tout premier jeu, je ne vous garantis pas une expérience à couper le souffle, mais j'espère pouvoir vous faire Peur/Rire. Le jeu est réalisé avec Unity et toutes les musiques sont libres de droits. Amusez-vous bien.",
		learnt: "Implémenter des conceptions simples, Elaborer des conceptions simples, Faire des essais et évaluer les résultats en regard des spécifiactions et développer des interfaces utilisateurs",
		languages: "C#, Unity",
		link: "https://play.unity.com/u/Tripotausaure",
		linkimg: unity,
		category: 'Personnel'
	},
	{
		id: '2',
		cover: p4,
		name: "Puissance 4",
		date: "Décembre 2022",
		desc: "Lors de la SAE 1.01 et 1.02 de ma première année de BUT Informatique, j'ai été amené à développer un puissance 4 en C qui fonctionnait dans le terminal. Le joueur pouvait jouer au choix contre un autre joueur ou un algorithme réalisé.",
		learnt: "Implémenter des conceptions simples, Faire des essais et évaluer leurs résultats en regard des spécifications, Analyser le problème avec méthode, Comparer des algorithmes pour des problèmes classiques",
		languages: "C",
		link: "https://github.com/Tripotausaure/Progs_test/tree/main/Puissance%204%20Solo",
		linkimg: github,
		category: 'IUT'
	},
	{
		id: '3',
		cover: quoiMaGeule,
		name: "Portfolio",
		date: "Janvier 2024",
		desc: "Suite à l'apprentissage de React, j'ai décidé de faire une refonte complète de mon portfolio. Cette nouvelle version le rend un peu plus présentable et me permet d'ajouter de nouveaux projets sans toucher au code",
		learnt: "Appliquer des principes d’accessibilité et d’ergonomie, Adopter de bonnes pratiques de conception et de programmation, Vérifier et valider la qualité de l’application par les tests",
		languages: "HTML, CSS, JS, React",
		category: 'Personnel',
	},
	{
		id: '4',
		cover: mint,
		name: "La Maison Jungle",
		date: "Janvier 2024",
		desc: "Site Web réalisé en suivant la formation réact de OpenClassrooms. Ce site est un site de vente de plantes en ligne. Il permet de voir les plantes disponibles et de les ajouter au panier.",
		learnt: "Suivre une formation en ligne, Utiliser React pour créer des applications web",
		languages: "HTML, CSS, JS, React",
		link: "https://timothe-picot.github.io/La-Maison-Jungle/",
		linkimg: web,
		category: 'Personnel'
	},
	{
		id: '5',
		cover: cavale,
		name: "Le parcours du Cavalier",
		date: "Avril 2023",
		desc: "Durant la SAE 2.02 du BUT Informatique, nous avions pour projet de réaliser un programme qui permettait de trouver un chemin hamiltonien, pour un cavalier sur un échiquier de taille n*n. Cela consistait à le faire passer par toutes les cases sans repasser deux fois sur la même.",
		learnt: "Analyser le problème avec méthode",
		languages: "Python",
		link: "https://github.com/Tripotausaure/Progs_test/tree/main/Probl%C3%A8me%20du%20cavalier",
		linkimg: github,
		category: 'IUT'
	},
	{
		id: '6',
		cover: Semaphore,
		name: "Mini-Projet Semaphore",
		date: "Fevrier 2024",
		desc: "Dans le cadre d'un mini-projet pour une entreprise, j'ai développé une application permettant de visualiser une liste de sémaphores sur une carte interactive. L'objectif était de déterminer si un sémaphore avait été récemment visité ou non, offrant ainsi une vue claire de leur statut de visite.",
		learnt: "Appliquer des principes d’accessibilité et d’ergonomie, Adopter de bonnes pratiques de conception et de programmation, Vérifier et valider la qualité de l’application par les tests",
		languages: "HTML CSS JS W2UI Leaflet",
		link: "https://timothe-picot.github.io/Mini-Projet-S-maphores-/",
		linkimg: web,
		category: 'Personnel'
	},
	{
		id:"7",
		cover:brez,
		name:"Alaiz-Breiz",
		date:"Septembre 2023 - Avril 2024",
		desc:"Dans le cadre d'un projet de groupe à l'IUT, nous avons réalisé une application de réservation de logements style Air BNB. dans ce projet j'ai surtout travaillé sur la partie Front ca étant en équipe de 7 nous avions réparti le travail par préférences",
		learnt:"Partir des éxigences et aller jusqu'à une application complète, Optimiser une base de donnéés, appliquer une démarche de suivi de projet en fonction des besoins métiers des clients et des utilisateurs, Situer son rôle et ses missions au sein d'une équipe informatique",
		languages:"HTML CSS JS PHP PostgreSQL",
		category:"IUT"
	},
	{
		id:"8",
		cover:diarbenn,
		name:"Diarbenn",
		date:"2024",
		desc:"Lors de mon alternance au sein du Laboratoire Numérique CECLANT pour la marine nationale, j'ai travaillésur le projet DIARBENN. Ce projet consistait à faire l'inventaire de tout les batiment de l'ile longue pour déterter les zones à risque afin de prévenir les incendies.",
		learnt:"Choisir et implémenter les architectures adaptées, Faire évoluer une application existante, Intégrer des solutions dans un environnement de production",
		languages:"TypeScript Angular W2UI NodeJS Sequelise",
		category:"Pro"}
]