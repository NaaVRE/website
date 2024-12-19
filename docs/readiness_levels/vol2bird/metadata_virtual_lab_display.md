---
sidebar_position: 1
title: Vol2bird virtual lab
---
**Short summary:** The Vol2bird virtual lab preprocesses KNMI weather radar data, and applies the Vol2bird algorithm to calculate vertical profiles of birds and other biological scatters. 

**Concept description** The virtual lab imports weather radar data from an API, maps it to a format readable by the vol2bird algorithm, 
which produces a vertical profile of bird migration.  
This virtual lab makes use of the existing algorithm Vol2bird, which is wrapped in this virtual lab to make it easy to use.

#### Keywords 
  - Bird migration
  - Radar ontology
  - Weather radar
  - Altitude profile

**Virtual lab type:** Data processing  

**License:** Apache License 2.0

#### Publication: 
[Bird migration flight altitudes studied by a network of operational weather radars](https://doi.org/10.1098/rsif.2010.0116)  
Dokter AM, Liechti F, Stark H, Delobbe L, Tabary P, Holleman I, J. R. Soc.  
Interface, 8, 30–43, 2011, DOI 10.1098/rsif.2010.0116

#### Point of contact:
IBED - University of Amsterdam  
Berend-Christiaan Wijers  
[Email](koen.greuell@lifewatch.eu)

#### Services list for metadata catalogue lifewatch?

![ images/Vol2bird_overview_image.drawio.png not found](images/Vol2bird_overview_image.drawio.png)

### Use cases
In this virtual lab, you can:
- Select a date range to create a vertical profiles of bird migration.
- Write your own pre-processor to map other weather radar data to a format readable by vol2bird.

### Viewpoints
#### Conceptual viewpoint. 
*There is an intuitive description of what happens.* 

#### Mathematical viewpoint.
*Mathematical description of the workflow.*

#### Computational viewpoint.
*How the algorithm is converted into computational methods is explained.*

#### Engineering viewpoint
*There is a description of the software architecture of the virtual lab.*

### Parameters
    * It is clear what the ecological meaning of the parameter is.
    * It is clear how to change these parameters.


The following guidelines can be used to determine the completeness of a user manual.


* There is a description of the standards used for data exchange with application programming interfaces and databases.
* The intended audience is described. Recommended prior knowledge is listed.
* Storage location
  * Store the user manual for the virtual lab in the same git repository as the virtual lab assets.
  * The user manual will be made available on [NaaVRE.net](https://naavre.net/) and should be separated from the codebase.
  * Instructions on how to use a single notebook can be stored in the markdown of that notebook.