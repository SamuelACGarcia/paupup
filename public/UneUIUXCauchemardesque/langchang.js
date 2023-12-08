function changerLanguage(langue) {
    const elementsTraduction = {
        'fr': {
            'summary': 'Sommaire',
            'introlist': 'Introduction',
            'titleone': '<a href="#titre-partie1" >Situations et tendances actuelles</a>',
            'titletwo': '<a href="#titre-partie2" >Changement climatique futur, risques, et solutions sur le long terme</a>',
            'titlethree': '<a href="#titre-partie3" >Solutions sur le court terme</a>',
            'intro':'Introduction',
            'cquoigiec': 'Qu\'est-ce que le GIEC ?',
            'groupexp': 'Groupe d\'experts intergouvernemental sur l\'évolution du climat, il est un organisme intergouvernemental chargé d\'évaluer l\'ampleur, les causes et les conséquences du changement climatique. Ils sont la références pour savoir quelles sont les meilleures solutions pour s\'assurer le meilleur avenir possible, avec suffisamment de ressources pour toute notre génération et les générations futures.',
            'maisle': 'Mais le GIEC n\'est que quelques scientifiques, pourquoi les écouter eux ?',
            'septhuitsept': '<b>Ils sont 787 </b> auteurs pour le rapport de 2023, issus de divers domaines scientifiques, dont la climatologie, la météorologie, la biologie, la physique, et bien d\'autres. Ces experts travaillent de manière collaborative pour évaluer les données scientifiques disponibles, examiner les recherches récentes et synthétiser les connaissances sur le changement climatique. <br/> Les rapports du GIEC sont le résultat d\'un processus exhaustif d\'examen par les pairs, garantissant la crédibilité et la fiabilité des informations qu\'ils fournissent. Les conclusions du GIEC sont largement acceptées par la communauté scientifique internationale. Il est crucial de prendre en compte ces rapports car ils représentent le consensus scientifique mondial sur le changement climatique, offrant une base solide pour comprendre ses causes, ses impacts et les actions nécessaires pour atténuer ses effets. Ignorer ces conclusions pourrait compromettre notre capacité à faire face aux défis du changement climatique de manière informée et efficace. <br/>',
            'cependant': 'Cependant, il est vrai que tout le monde n\'a pas le temps de lire un rapport avec autant de page. Nous allons donc vous aider à en comprendre les principes en déconstruisant les idées reçues sur l\'environnement.', 
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
            'introlist': 'Ornorkuna',
            'titleone': '<a href="#titre-partie1" > N\'u Kesuitan vil Carkaru </a> ',
            'titletwo': '<a href="#titre-partie2" > Ohsorsi V\'enisa Xairjan, Rehnan, vil Jorhi- Calnera Ko\'ya  </a>',
            'titlethree': '<a href="#titre-partie3" > Si\'ort- Calnera Ko\'ya </a>',

            'intro':'Ornorkuna',
            'cquoigiec': ' Qa ohk ji IPCC?',
            'groupexp': ' Intergovernmental Ornikliga kue V\'enisa Xairjan ohk a intergovernmental volka milirsan cinhi ji turnk, ehan vil kanya bo v\'enisa xairjan. Korjin ohk ji a\'uka toe ktan qa ohk ji ji t\'al loo ko\'ya ar palsehan ji ji t\'al loo omr ohsorsi, bo kuces norsa ro toe gei cuk maralitea vil ohsorsi maralitea.',
            'maisle': 'Kay ji IPCC ohk gue a si\'nu\'sil kteartu\'a, qato ayhnu\'k ar korjin? ',
            'septhuitsept': '<b>Hao ohsid 787 aysoe </b> toe ji 2023 fiyao ro, or beyalhi ktearti vinka, ordic climatology, sasaolo\'ohan, leo\'ohan, nebes, vil su\'sa a\'an. Ceu vonkasarsur jimoe collaboratively ar cinhan behkoramr ktearti bisuh, dey ro goc kalwan ro, vil kersaban ktan yelniyo v\'enisa xairjan.  <br/>  IPCC nih ohk ji kanya bo a ank\'and gomar dey ro renay, palsehan ji vlakerkatoo vil rahkorkau ro bo ji ercolna korjin tloyeban. Ji vorn\'uy bo ji IPCC ohk mliry antaksan tae ji ersalritan ktearti vonurunie. Eti ohk valri ar tlaran ceu nih oo rinorsa ceir vo korjin tlabark ro ji cusnory ktearti consensus kue v\'enisa xairjan, tloyeban a amersu nurkinark ar ksilan kub jei ehan, jei clica vil ji tlotahan gatad ar sokalet jei ocanseyet. Gaomhalyan ceu vorn\'uy toyid vonklonek gei jalsata ar debis ji ar bo v\'enisa xairjan ootay a sireala ercolnan vil oceni.  <br/>',
            'cependant': ` Cinao, eti ohk ni'hi cea go yeu fic ji canka ar jat a fiyao ro bo ceoh bi tis. Gan cahsinark cei fa'kan dan ksilan kub ji tlertem tae deconstructing mliyakejan arsian eko yelniyo ji sakea.`, 

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