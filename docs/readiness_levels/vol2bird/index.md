---
sidebar_position: 1
title: "RAVRE: Easy processing of weather radar data to vertical profiles of bird migration."
---
**Conceptual description:** The airspace is becoming increasingly crowded. High-rises, wind farms and airports all contribute to conflict with aerial organisms. Information about the movements of organisms in the air is required to identify stop-over sites, migratory routes, and patterns. This can inform mitigation of conflicts by, for example, wind-turbine curtailments or early warning systems for aviation. Weather radars, that continuously monitor the sky across continents, can be used to study movements of birds, bats, and insects. However, for continental scale analysis, large volumes of data are required to be processed and analyzed, which often rely on institute-specific tools and computational resources. This severely hampers collaborative efforts because of the initial investment of time and resources to gain access to existing computing infrastructure. Here we show a Radar Aeroecology Virtual Research Environment (RAVRE) which uses the Lifewatch ERIC infrastructure to facilitate collaboration and re-use of infrastructure and tools. By providing RAVRE, we aim to facilitate collaboration between ornithological institutes. 

This Virtual Lab (VL) will reduce the initial investment of acquiring access and expertise to computational resources and provide immediate access to tools built by domain experts. These tools are then run in the cloud leveraging the performance and flexibility of cloud computing.

The VL is shipped with the data management plan used by the University of Amsterdam's Animal Movement Ecology group (UvA IBED-TCE AME) to provide an out of the box solution for managing large datasets. 

RAVRE is currently capable of accessing, processing, managing and visualizing data from the The Royal Netherlands Meteorological Institute's (RNMI) open Radar Data repository. The VL has multi-language support, and has well known libraries such as bioRad in R and xradar in Python installed.  Furthermore, it uses vol2bird for processing biological echoes found in Polar Volume files to Vertical Profiles. 

#### Keywords 
  - Bird migration
  - Radar ontology
  - Weather radar
  - Altitude profile

#### Features
- Vol2bird algorithm
- Mapping to Vol2bird input format
- Easy KNMI data retrieval

![ images/Vol2bird_overview_image.drawio.png not found](images/Vol2bird_overview_image.drawio.png)

**License:** Apache-2.0

#### Publication(s)
Dokter AM, Liechti F, Stark H, Delobbe L, Tabary P, Holleman I, J. R. Soc.  
**Bird migration flight altitudes studied by a network of operational weather radars**  
Interface, 8, 30–43, 2011, [DOI 10.1098/rsif.2010.0116](https://doi.org/10.1098/rsif.2010.0116)

#### Related virtual labs
ToDo

#### Related projects
ToDo

#### Documentation
See [the documentation page](documentation). Additionally, a user guide and tutorial is available in [the virtual lab](https://naavre.lifewatch.dev/vreapp/vlabs/vol2bird).

#### Point of contact
Berend-Christiaan Wijers  
IBED - University of Amsterdam   
[Email](koen.greuell@lifewatch.eu)

#### Possible applications
- Select a date range to create a vertical profiles of bird migration.
- Write your own pre-processor to map weather radar data from sources other than KNMI to a format readable by vol2bird.

#### Recommended prior knowledge
Picking custom dates to study bird migration using KNMI weather radar data is possible by only setting parameters.  
Preprocessing other weather radar data to the vol2bird input format requires some experience in handling APIs and data in Python.

### Standards
*ToDo: description of the standards used for data exchange with application programming interfaces and databases.*