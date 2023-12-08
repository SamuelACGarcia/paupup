function changerLanguage(langue) {
    const elementsTraduction = {
        'fr': {
            'summary': 'Sommaire',
            'titleone': '<a href="#titre-partie1" >Situations et tendances actuelles</a>',
            'titletwo': '<a href="#titre-partie2" >Changement climatique futur, risques, et solutions sur le long terme</a>',
            'titlethree': '<a href="#titre-partie3" >Solutions sur le court terme</a>',
            'titre-partie1': 'Situations et tendances actuelles',
            'changementclim': 'Le changement climatique, ce nest pas de notre faute',
            'humanorigin': '<b>SI !</b> L\'humain est à l\'origine du changement climatique, surtout à cause de ses émissions de gaz à effet de serres.',
            'allscientist': 'Tous les scientifiques ne sont pas d\'accord',
            'alors': '<b>ALORS</b>, effectivement, 3% des articles scientifiques parlant du changement climatique disent qu\'ils n\'existe pas, qu\'il ne fait pas de mal ou qu\'il n\'est pas dû aux actions de l\'humain. Outre leur nombre faible, plusieurs scientifiques ont cherché à étudier ces articles et ont systématiquement trouvé une erreur de raisonnement.',
            'laterre': 'La terre a déjà atteint cette température avant',
            'ouimais': '<b>OUI MAIS</b> jamais aussi vite. Comme on le voit sur le graphique ci-après, la température de la Terre a bien évolué mais cette évolution se faisait sur plusieurs milliers voire plusieurs millions d\'années. À la fin, on remarque que l\'augmentation est forte alors que nous étions dans une période où c\'était stable. <br> <img src="../index_media/Temperature_sur_la_Terre_depuis_500_Millions_dannees.png" width="80%" height="80%">',
            'onedegree': '1°C en plus, c\'est rien',
            'titre-partie2': 'Changement climatique futur, risques, et solutions sur le long terme',
            'si': '<b>SI</b>, ça arrive bien trop vite !',
            'energie': 'Les énergies renouvelables ne sont pas assez efficaces',
            'titre-partie3': 'Solutions sur le court terme',
            'cenest': 'Ce n\'est pas à nous d\'agir, c\'est aux autres de le faire',
            'sices': '<b>SI !</b> C\'est un effort collectif. Nous vous conseillons de faire le test pour connaître votre emprunte carbone. Il sensibilise sur ce qui impacte le plus.',
            'aquoi': 'A quoi ça sert si personne d\'autre ne fait l\'effort ?',
            'dautres': '<b>D\'autres font l\'effort</b>, même si on n\'est toujours pas assez nombreux. De plus, tout le monde ne peut pas faire les mêmes efforts, par manque d\'argent en général. L\'État et les sociétés privées doivent aussi faire leur part !',
            'lestechno': '<b>la technologie nous sauvera</b>',
            'ilsuffit': 'Il suffit de planter des plantes',
            'Attention': '<b>Attention</b> ! Pas n\'importe quelle plante n\'importe où, planter des fleurs exotiques, ça pollue aussi.',
            'plusdinfos': 'Plus d\'infos sur <a href="https://www.ipcc.ch/report/ar6/syr/downloads/report/IPCC_AR6_SYR_SPM.pdf">le rapport du GIEC</a>',
            'co2': 'Le CO2 est le seul gaz à craindre',
            'methane': '<b>Le Méthane</b> est sous-estimé mais participe grandement au réchauffement climatique. Il est principalement émis par l\'agriculture et la production des hydrocarbures. Bien que sa durée de vie dans l\'atmosphère soit plus faible, le GIEC estime son pouvoir contributeur entre 86 et 90 fois supérieur sur 20 ans.',
            'peutpas': 'Ne peut-on pas éliminier les gaz à effet de serre de l\'atmosphère ?',
            'simais': '<b>SI MAIS</b> le GIEC craint leurs effets secondaires dans sur la disponibilité et la qualité de l\'eau, sur la production alimentaire et sur la biodiversité. '
        },
        'tk': {
            'summary': 'rahuh',
            'titleone': '<a href="#titre-partie1" > N\'u Kesuitan vil Carkaru </a> ',
            'titletwo': '<a href="#titre-partie2" > Ohsorsi V\'enisa Xairjan, Rehnan, vil Jorhi- Calnera Ko\'ya  </a>',
            'titlethree': '<a href="#titre-partie3" > Si\'ort- Calnera Ko\'ya </a>',
            'titre-partie1': 'N\'u Kesuitan vil Carkaru',
            'changementclim': ' V\'enisa xairjan ohk go gei vu\'ka ',
            'humanorigin': '<b>KA! </b> Foh ohk milirsan v\'enisa xairjan, kkateir bayek ar e\'an dilnava mid emissions.',
            'allscientist': 'Go vahs kteartu\'a vorhark ',
            'alors': ' <b>CEI</b>, ba, 3% bo ktearti vonaltiga kue v\'enisa xairjan bee eti nilid go onbehsan, nilid koa si\'user, aan ohk go bayek ar foh tlotahan. Cinao e\'an l\'anan gunae, behet kteartu\'a fic kalwan ar jalran ceu vonaltiga vil fic urucolh cloyan a raboo olila. ',
            'laterre': 'The earth has reached this temperature before',
            'ouimais': ' <b>KA, KAY</b> garei cea y rikey. Veo dey ootay ji graph kub, ji Cae aan cankalisula fic oyo\'u, kay cea y oyo\'utan iniban kukae behet ver aan os se\'eora bo hie. Ootay ji neo, gan dey cea ji vlahnes ohk rikey tenii gan ohk ootay a yayi\'al taleoka <br> <img src="../index_media/Temperature_sur_la_Terre_depuis_500_Millions_dannees.png" width="80%" height="80%">',
            'onedegree': ' 1°C t\'u ohk garea ',
            'titre-partie2': 'Ohsorsi V\'enisa Xairjan, Rehnan, vil Jorhi- Calnera Ko\'ya',
            'si': '<b>KA </b>, eti iniban su\'si cla rikey! ',
            'energie': 'Raroyeham\'i oralhea go ohsi oceni kuces ',
            'titre-partie3': 'Si\'ort- Calnera Ko\'ya',
            'cenest': 'Eti aan go xeed geo ar ahan, eti aan xeed a\'an ar nie eti ',
            'sices': '<b> KA! </b> Eti aan a iki tao. Gan jiykan ro tlaran ji tloyan ar ktan dei vilmora teakhehra. Eti jac vorhtea bo qa clica ji t\'o. ',
            'aquoi': ' qa ohk ji turnk ko gareu a\'an nie a tao? ',
            'dautres': ' <b>A\'an nie ji tao </b>, os ko gan ohk karnoyi go su\'si kuces. T\'an, go yeu toyid nie ji kih tao, bayek ar a laboo bo soo ootay xearalir. Ji bee vil tleyisi vonkiran sohsa arnian nie e\'an tilsa! ',
            'lestechno': '<b> Canro\'ohan cahsinark vla geo </b> ',
            'ilsuffit': ' Huhsi t\'irk va\'ni t\'irk ',
            'Attention': '<b> Ayalk! </b> Go huhsi ei t\'irk eo, t\'irk a\'e\'iry aola arnian si\'kulehan. .',
            'plusdinfos': ' T\'u ercolna kue <a href="https://www.ipcc.ch/report/ar6/syr/downloads/report/IPCC_AR6_SYR_SPM.pdf"> ji IPCC fiyao ro </a>',
            'co2': 'CO2 ohk ji gue mid ar ceh ',
            'methane': ' <b>Sasio ohk</b> cinhika kub kay vorslemuan mliry ar cusnory dilnehan. Eti ohk yap emitted tae calnu\'sue vil hydrocarbon tlokunk. Vyirnih jei lifespan ootay ji asnohcala ohk si\'ort, ji IPCC cinhika jei vorslemuan toc ersae 86 vil giyko canka mliry kukae bukas hie.',
            'peutpas': ' Toyid gan go o\'nak dilnava gases or ji asnohcala?',
            'simais': ' Ka, Kay ji IPCC ceh e\'an n\'irs ocanseyet kue ji behkoreme\'eki vil ota bo oola, kue gusliga tlokunk vil kue biodiversity.  '
        }
    };

    // Change la langue de chaque élément selon la langue sélectionnée
    Object.keys(elementsTraduction[langue]).forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.innerHTML = elementsTraduction[langue][id];
        }
    });
}