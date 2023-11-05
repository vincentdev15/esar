const facets = [
	{
		'code': 'A',
		'name': 'Types de jeux',
		'skillGroups': [
			{
				'code': 'A100',
				'name': 'Jeu d’exercice',
				'skills': [
					{
						'code': 'A101',
						'name': 'Jeu sensoriel sonore',
					},
					{
						'code': 'A102',
						'name': 'Jeu sensoriel visuel',
					},
					{
						'code': 'A103',
						'name': 'Jeu sensoriel tactile',
					},
					{
						'code': 'A104',
						'name': 'Jeu sensoriel olfactif',
					},
					{
						'code': 'A105',
						'name': 'Jeu sensoriel gustatif',
					},
					{
						'code': 'A106',
						'name': 'Jeu moteur',
					},
					{
						'code': 'A107',
						'name': 'Jeu de manipulation',
					},
					{
						'code': 'A108',
						'name': 'Jeu d’action-réaction virtuel',
					},
				],
			},
			{
				'code': 'A200',
				'name': 'Jeu symbolique',
				'skills': [
					{
						'code': 'A201',
						'name': 'Jeu de rôle',
					},
					{
						'code': 'A202',
						'name': 'Jeu de mise en scène',
					},
					{
						'code': 'A203',
						'name': 'Jeu de production graphique à deux dimensions',
					},
					{
						'code': 'A204',
						'name': 'Jeu de production à trois dimensions',
					},
					{
						'code': 'A205',
						'name': 'Jeu de simulation virtuel',
					},
				],
			},
			{
				'code': 'A300',
				'name': 'Jeu d’assemblage',
				'skills': [
					{
						'code': 'A301',
						'name': 'Jeu de construction à trois dimensions',
					},
					{
						'code': 'A302',
						'name': 'Jeu d’agencement à deux dimensions',
					},
					{
						'code': 'A303',
						'name': 'Jeu de montage scientifique',
					},
					{
						'code': 'A304',
						'name': 'Jeu de montage virtuel',
					},
				],
			},
			{
				'code': 'A400',
				'name': 'Jeu de règles',
				'skills': [
					{
						'code': 'A401',
						'name': 'Jeu d’association',
					},
					{
						'code': 'A402',
						'name': 'Jeu de séquence',
					},
					{
						'code': 'A403',
						'name': 'Jeu de circuit et de parcours',
					},
					{
						'code': 'A404',
						'name': 'Jeu d’adresse',
					},
					{
						'code': 'A405',
						'name': 'Jeu sportif et moteur',
					},
					{
						'code': 'A406',
						'name': 'Jeu de stratégie',
					},
					{
						'code': 'A407',
						'name': 'Jeu de hasard',
					},
					{
						'code': 'A408',
						'name': 'Jeu questionnaire',
					},
					{
						'code': 'A409',
						'name': 'Jeu mathématique',
					},
					{
						'code': 'A410',
						'name': 'Jeu de langage et d’expression',
					},
					{
						'code': 'A411',
						'name': 'Jeu d’énigme',
					},
					{
						'code': 'A412',
						'name': 'Jeu de règles virtuel',
					},
				],
			},
		],
	},
	{
		'code': 'B',
		'name': 'Habiletés cognitives',
		'skillGroups': [
			{
				'code': 'B100',
				'name': 'Conduite sensori-motrice',
				'skills': [
					{
						'code': 'B101',
						'name': 'Répétition par essais et erreurs',
					},
					{
						'code': 'B102',
						'name': 'Causalité sensori-motrice',
					},
					{
						'code': 'B103',
						'name': 'Permanence de l’objet',
					},
					{
						'code': 'B104',
						'name': 'Raisonnement pratique',
					},
				],
			},
			{
				'code': 'B200',
				'name': 'Conduite représentative',
				'skills': [
					{
						'code': 'B201',
						'name': 'Imitation différée',
					},
					{
						'code': 'B202',
						'name': 'Images mentales',
					},
					{
						'code': 'B203',
						'name': 'Pensée représentative',
					},
				],
			},
			{
				'code': 'B300',
				'name': 'Conduite intuitive',
				'skills': [
					{
						'code': 'B301',
						'name': 'Triage',
					},
					{
						'code': 'B302',
						'name': 'Appariement',
					},
					{
						'code': 'B303',
						'name': 'Différenciation de couleurs',
					},
					{
						'code': 'B304',
						'name': 'Différenciation de dimensions',
					},
					{
						'code': 'B305',
						'name': 'Différenciation de formes',
					},
					{
						'code': 'B306',
						'name': 'Différenciation de textures',
					},
					{
						'code': 'B307',
						'name': 'Différenciation temporelle',
					},
					{
						'code': 'B308',
						'name': 'Différenciation spatiale',
					},
					{
						'code': 'B309',
						'name': 'Association d’idées',
					},
					{
						'code': 'B310',
						'name': 'Raisonnement intuitif',
					},
				],
			},
			{
				'code': 'B400',
				'name': 'Conduite opératoire concrète',
				'skills': [
					{
						'code': 'B401',
						'name': 'Classification',
					},
					{
						'code': 'B402',
						'name': 'Sériation',
					},
					{
						'code': 'B403',
						'name': 'Relations de causalité',
					},
					{
						'code': 'B404',
						'name': 'Réversibilité',
					},
					{
						'code': 'B405',
						'name': 'Dénombrement',
					},
					{
						'code': 'B406',
						'name': 'Opérations numériques',
					},
					{
						'code': 'B407',
						'name': 'Conservation des quantités',
					},
					{
						'code': 'B408',
						'name': 'Relations spatiales',
					},
					{
						'code': 'B409',
						'name': 'Relations temporelles',
					},
					{
						'code': 'B410',
						'name': 'Coordonnées simples',
					},
					{
						'code': 'B411',
						'name': 'Raisonnement concret',
					},
				],
			},
			{
				'code': 'B500',
				'name': 'Conduite opératoire formelle',
				'skills': [
					{
						'code': 'B501',
						'name': 'Raisonnement hypothético-déductif',
					},
					{
						'code': 'B502',
						'name': 'Raisonnement inductif',
					},
					{
						'code': 'B503',
						'name': 'Raisonnement analogique',
					},
					{
						'code': 'B504',
						'name': 'Raisonnement combinatoire',
					},
					{
						'code': 'B505',
						'name': 'Système de représentations complexes',
					},
					{
						'code': 'B506',
						'name': 'Système de coordonnées complexes',
					},
				],
			},
		],
	},
	{
		'code': 'C',
		'name': 'Habiletés fonctionnelles et motrices',
		'skillGroups': [
			{
				'code': 'C100',
				'name': 'Exploration',
				'skills': [
					{
						'code': 'C101',
						'name': 'Perception auditive',
					},
					{
						'code': 'C102',
						'name': 'Perception visuelle',
					},
					{
						'code': 'C103',
						'name': 'Perception tactile',
					},
					{
						'code': 'C104',
						'name': 'Perception olfactive',
					},
					{
						'code': 'C105',
						'name': 'Perception gustative',
					},
					{
						'code': 'C106',
						'name': 'Préhension',
					},
					{
						'code': 'C107',
						'name': 'Déplacement',
					},
					{
						'code': 'C108',
						'name': 'Mouvement dynamique dans l’espace',
					},
				],
			},
			{
				'code': 'C200',
				'name': 'Reproduction',
				'skills': [
					{
						'code': 'C201',
						'name': 'Reproduction de modèles',
					},
					{
						'code': 'C202',
						'name': 'Reproduction de rôles',
					},
					{
						'code': 'C203',
						'name': 'Reproduction d’événements',
					},
					{
						'code': 'C204',
						'name': 'Créativité expressive',
					},
				],
			},
			{
				'code': 'C300',
				'name': 'Compétence',
				'skills': [
					{
						'code': 'C301',
						'name': 'Discrimination auditive',
					},
					{
						'code': 'C302',
						'name': 'Discrimination visuelle',
					},
					{
						'code': 'C303',
						'name': 'Discrimination tactile',
					},
					{
						'code': 'C304',
						'name': 'Discrimination olfactive',
					},
					{
						'code': 'C305',
						'name': 'Discrimination gustative',
					},
					{
						'code': 'C306',
						'name': 'Mémoire auditive',
					},
					{
						'code': 'C307',
						'name': 'Mémoire visuelle',
					},
					{
						'code': 'C308',
						'name': 'Mémoire tactile',
					},
					{
						'code': 'C309',
						'name': 'Mémoire olfactive',
					},
					{
						'code': 'C310',
						'name': 'Mémoire gustative',
					},
					{
						'code': 'C311',
						'name': 'Coordination oeil-main',
					},
					{
						'code': 'C312',
						'name': 'Coordination oeil-pied',
					},
					{
						'code': 'C313',
						'name': 'Latéralité',
					},
					{
						'code': 'C314',
						'name': 'Orientation sonore',
					},
					{
						'code': 'C315',
						'name': 'Orientation spatiale',
					},
					{
						'code': 'C316',
						'name': 'Orientation temporelle',
					},
					{
						'code': 'C317',
						'name': 'Créativité productive',
					},
				],
			},
			{
				'code': 'C400',
				'name': 'Performance',
				'skills': [
					{
						'code': 'C401',
						'name': 'Acuité auditive',
					},
					{
						'code': 'C402',
						'name': 'Acuité visuelle',
					},
					{
						'code': 'C403',
						'name': 'Dextérité',
					},
					{
						'code': 'C404',
						'name': 'Souplesse',
					},
					{
						'code': 'C405',
						'name': 'Agilité',
					},
					{
						'code': 'C406',
						'name': 'Endurance',
					},
					{
						'code': 'C407',
						'name': 'Force',
					},
					{
						'code': 'C408',
						'name': 'Rapidité',
					},
					{
						'code': 'C409',
						'name': 'Précision',
					},
					{
						'code': 'C410',
						'name': 'Patience',
					},
					{
						'code': 'C411',
						'name': 'Concentration',
					},
					{
						'code': 'C412',
						'name': 'Mémoire logique',
					},
					{
						'code': 'C413',
						'name': 'Equilibre',
					},
					{
						'code': 'C414',
						'name': 'Créativité inventive',
					},
				],
			},
		],
	},
	{
		'code': 'D',
		'name': 'Types d’activités sociales',
		'skillGroups': [
			{
				'code': 'D100',
				'name': 'Activité individuelle',
				'skills': [
					{
						'code': 'D101',
						'name': 'Jeu individuel',
					},
					{
						'code': 'D102',
						'name': 'Jeu individuel et associatif',
					},
					{
						'code': 'D103',
						'name': 'Jeu individuel et compétitif',
					},
					{
						'code': 'D104',
						'name': 'Jeu individuel et coopératif',
					},
				],
			},
			{
				'code': 'D200',
				'name': 'Activité associative',
				'skills': [
					{
						'code': 'D201',
						'name': 'Jeu associatif',
					},
					{
						'code': 'D202',
						'name': 'Jeu associatif et compétitif',
					},
					{
						'code': 'D203',
						'name': 'Jeu associatif et coopératif',
					},
				],
			},
			{
				'code': 'D300',
				'name': 'Activité compétitive',
				'skills': [
					{
						'code': 'D301',
						'name': 'Jeu compétitif',
					},
					{
						'code': 'D302',
						'name': 'Jeu compétitif et coopératif',
					},
					{
						'code': 'D303',
						'name': 'Jeu compétitif ou coopératif',
					},
				],
			},
			{
				'code': 'D400',
				'name': 'Activité coopérative',
				'skills': [
					{
						'code': 'D401',
						'name': 'Jeu coopératif',
					},
					{
						'code': 'D402',
						'name': 'Jeu coopératif et compétitif',
					},
					{
						'code': 'D403',
						'name': 'Jeu coopératif ou compétitif',
					},
				],
			},
		],
	},
	{
		'code': 'E',
		'name': 'Habiletés langagières',
		'skillGroups': [
			{
				'code': 'E100',
				'name': 'Langage réceptif oral',
				'skills': [
					{
						'code': 'E101',
						'name': 'Discrimination verbale',
					},
					{
						'code': 'E102',
						'name': 'Pairage verbal',
					},
					{
						'code': 'E103',
						'name': 'Décodage verbal',
					},
				],
			},
			{
				'code': 'E200',
				'name': 'Langage productif oral',
				'skills': [
					{
						'code': 'E201',
						'name': 'Expression préverbale',
					},
					{
						'code': 'E202',
						'name': 'Reproduction verbale de sens',
					},
					{
						'code': 'E203',
						'name': 'Appellation verbale',
					},
					{
						'code': 'E204',
						'name': 'Séquence verbale',
					},
					{
						'code': 'E205',
						'name': 'Expression verbale',
					},
					{
						'code': 'E206',
						'name': 'Mémoire phonétique',
					},
					{
						'code': 'E207',
						'name': 'Mémoire sémantique',
					},
					{
						'code': 'E208',
						'name': 'Mémoire lexicale',
					},
					{
						'code': 'E209',
						'name': 'Conscience du langage oral',
					},
					{
						'code': 'E210',
						'name': 'Réflexion sur la langue orale',
					},
				],
			},
			{
				'code': 'E300',
				'name': 'Langage réceptif écrit',
				'skills': [
					{
						'code': 'E301',
						'name': 'Discrimination des lettres',
					},
					{
						'code': 'E302',
						'name': 'Correspondance lettres-sons',
					},
					{
						'code': 'E303',
						'name': 'Décodage syllabique',
					},
					{
						'code': 'E304',
						'name': 'Décodage de mots',
					},
					{
						'code': 'E305',
						'name': 'Décodage de phrases',
					},
					{
						'code': 'E306',
						'name': 'Décodage de messages',
					},
				],
			},
			{
				'code': 'E400',
				'name': 'Langage productif écrit',
				'skills': [
					{
						'code': 'E401',
						'name': 'Mémoire orthographique',
					},
					{
						'code': 'E402',
						'name': 'Mémoire graphique',
					},
					{
						'code': 'E403',
						'name': 'Mémoire grammaticale',
					},
					{
						'code': 'E404',
						'name': 'Mémoire syntaxique',
					},
					{
						'code': 'E405',
						'name': 'Expression écrite',
					},
					{
						'code': 'E406',
						'name': 'Réflexion sur la langue écrite',
					},
				],
			},
		],
	},
	{
		'code': 'F',
		'name': 'Conduites affectives',
		'skillGroups': [
			{
				'code': 'F100',
				'name': 'Confiance',
				'skills': [
					{
						'code': 'F101',
						'name': 'Différenciation moi/non-moi',
					},
					{
						'code': 'F102',
						'name': 'Sourire comme réponse sociale',
					},
					{
						'code': 'F103',
						'name': 'Attachement à un objet transitionnel',
					},
					{
						'code': 'F104',
						'name': 'Réaction face à l’étranger',
					},
				],
			},
			{
				'code': 'F200',
				'name': 'Autonomie',
				'skills': [
					{
						'code': 'F201',
						'name': 'Maîtrise du non',
					},
					{
						'code': 'F202',
						'name': 'Maîtrise du corps',
					},
					{
						'code': 'F203',
						'name': 'Reconnaissance de soi',
					},
				],
			},
			{
				'code': 'F300',
				'name': 'Initiative',
				'skills': [
					{
						'code': 'F301',
						'name': 'Identification sexuelle',
					},
					{
						'code': 'F302',
						'name': 'Identification parentale',
					},
					{
						'code': 'F303',
						'name': 'Identification sociale',
					},
				],
			},
			{
				'code': 'F400',
				'name': 'Travail',
				'skills': [
					{
						'code': 'F401',
						'name': 'Connaissance personnelle',
					},
					{
						'code': 'F402',
						'name': 'Reconnaissance sociale',
					},
				],
			},
			{
				'code': 'F500',
				'name': 'Identité',
				'skills': [
					{
						'code': 'F501',
						'name': 'Recherche d’une personnalité',
					},
					{
						'code': 'F502',
						'name': 'Apprentissage de modes d’organisation sociale',
					},
				],
			},
		],
	},
];

export default facets;
