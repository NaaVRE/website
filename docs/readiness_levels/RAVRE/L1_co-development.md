#### Co-development milestones

Two milestones should be reached during co-development:

-   [ ] The publication of the metadata.
    -   *Koen started making a draft of the metadata.*
-   [X] A demonstration of a running the workflow in the virtual lab.
    -   *Done at the VLIC all hands on 20 december 2024*

### Exit conditions
The lab transitions from co-development to the validation phase, when the technical development has been finished and
 the lab is ready to conduct the scientific experiments on the required scale.
For this, at least the following criteria should be checked:

* Documentation
  - [ ] The virtual lab metadata is available outside the virtual lab.
    - *ToDo Koen. Potentially this should also include the overview page on NaaVRE.io*
    - [ ] Metadata is tracked by version control.
* Security
  - [X] Personal tokens are not tracked by version control.
* Versioning
  - [ ] Versions of used software and libraries are pinned.
    - *ToDo Koen*
* Data
  - [X] The data is ready for scientific experiments.
  - [X] Data, which is only read by the virtual lab, is stored in an external catalogue.
* Codebase
  - [X] The code executes without errors: The code can be executed without errors.
Currently, you can verify this by manually executing all cells in the notebook on a machine on which the code was not developed (to ensure no references are made to local resources).
  - [ ] The responsibility of each cell in the notebook is clear and can be described in a single sentence.
  - [ ] The coding style is consistent and follows a style guide e.g. For Python [PEP 8](https://peps.python.org/pep-0008/).
  - [ ] Parallel processing is applied where suitable.
  - [ ] There are clear errors when expected files and objects are not found.
    - *ToDo Koen: Check if this is the case*
  - [ ] External code use, such as command-line interface tools, are clearly labeled.
* Containerization
  - [X] The notebook cells can be containerized.
* Workflow execution
  - [X] The containerized cells can run without any modifications.
  - [X] It is possible to give a demonstration of the virtual lab.

