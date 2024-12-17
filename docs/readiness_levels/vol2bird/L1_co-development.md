#### Co-development milestones

Two milestones should be reached during co-development:

-   [ ] The publication of the metadata.
    -   *Koen can make a start in collecting the metadata this week and
        give a proposal of where to publish the metadata*
-   [ ] A demonstration of a running the workflow in the virtual lab.
    -   *VLIC all hands 20 december?*

### From co-development to the validation phase

To transition from co-development to the validation phase, a usability
study should be done. The usability study should consider at least the
following criteria:

-   Documentation
    -   [ ] The virtual lab metadata is available outside the virtual
        lab.
        -   [ ] Metadata is tracked by version control.
-   Security
    -   [ ] Personal tokens are not tracked by version control.
-   Versioning
    -   [ ] Versions of used software and libraries are pinned.
-   Codebase
    -   [x] The code executes without errors: The code can be executed
        without errors. Currently, you can verify this by manually
        executing all cells in the notebook on a machine on which the
        code was not developed (to ensure no references are made to
        local resources).
    -   [ ] The responsibility of each cell in the notebook is clear and
        can be described in a single sentence.
    -   [ ] The coding style is consistent and follows a style guide
        e.g. For Python [PEP 8](https://peps.python.org/pep-0008/).
    -   [ ] Parallel processing is applied where suitable.
        -   *Should we prioritize other things to get a working demo?*
-   Containerization
    -   [x] The notebook cells can be containerized.
-   Workflow execution
    -   [x] The containerized cells can run without any modifications.
