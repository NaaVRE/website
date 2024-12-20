---
sidebar_position: 1
title: Vol2bird virtual lab
---
### Easy processing of weather radar data to vertical profiles of birds.

**Conceptual description:** The Vol2bird virtual lab streamlines the extraction of bird migration data from weather radar data. 
By automatically importing data from an API and converting it into a suitable format, the lab feeds the Vol2bird algorithm. 
This algorithm then generates detailed vertical profiles of bird migration and other biological scatterers. 
The virtual lab simplifies the use of Vol2bird by providing a user-friendly interface, making advanced bird migration research accessible to a wider audience.

#### Keywords 
  - Bird migration
  - Radar ontology
  - Weather radar
  - Altitude profile

#### Features
- Easy KNMI data retrieval
- Vol2bird algorithm
- Mapping to Vol2bird input format

![ images/Vol2bird_overview_image.drawio.png not found](images/Vol2bird_overview_image.drawio.png)

**License:** Apache-2.0

#### Publication(s) 
[Bird migration flight altitudes studied by a network of operational weather radars](https://doi.org/10.1098/rsif.2010.0116)  
Dokter AM, Liechti F, Stark H, Delobbe L, Tabary P, Holleman I, J. R. Soc.  
Interface, 8, 30–43, 2011, DOI 10.1098/rsif.2010.0116

#### Related virtual labs
None

#### Related projects
None

#### Documentation
A user guide and tutorial is available in [the virtual lab](https://naavre.lifewatch.dev/vreapp/vlabs/vol2bird).

#### Point of contact
Berend-Christiaan Wijers  
IBED - University of Amsterdam   
[Email](koen.greuell@lifewatch.eu)

#### Possible applications
- Select a date range to create a vertical profiles of bird migration.
- Write your own pre-processor to map other weather radar data to a format readable by vol2bird.

#### Recommended prior knowledge
Picking custom dates to study bird migration using KNMI weather radar data is possible by only setting parameters.  
Preprocessing other weather radar data to the vol2bird input format requires some experience in handling APIs and data in Python.

### Viewpoints
#### Mathematical description.
*ToDo: A mathematical description of the workflow.*

#### Computational description.
*ToDo: How is the algorithm converted into computational methods?*

#### Engineering implementation / Architecture
*ToDo: Description of the software architecture of the virtual lab.*

### Standards
*ToDo: description of the standards used for data exchange with application programming interfaces and databases.*