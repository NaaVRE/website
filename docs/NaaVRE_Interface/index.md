---
sidebar_position: 3
---

# The NaaVRE Interface

The Notebook as a Virtual Research Environment (NaaVRE) is a set of tools to allow users to containerize cells, compose
workflows and execute them on a workflow engine.

![NaaVRE_interface](images/n-a-a-vre_interface_1.png)

## Component Containerizer

![Component Containerizer](images/component_containerizer_1.png)
The 'Cell Preview' panel shows a preview of the cell that is currently selected including its name, inputs and outputs.
Under the 'Cell Preview' panel there a list of the inputs and outputs of the cell and their types. The types are needed
to be filled in by the user when containerizing a cell. Currently, the supported types are:
* String
* Integer
* Float
* List

Under the 'Inputs' and 'Outputs' there is the 'Base Image' selection. This is the base image that will be used to build
the container. The default base image is 'miniconda3'. The user can select a different base image from the drop down.


### Special Variables

The user can use two special variables in the cell code:
* `param_`: This variable is used to pass input parameters to the cell. These parameters are passed to the cell during
  execution and are requested by the user every time a workflow is executed that contains the cell with the parameters.
[Param_example.webm](https://github.com/QCDIS/vre_documetation/assets/9680609/fea3d96b-97d3-43cd-b009-b5bd4537de5a)



* `conf_`: This variable is used to pass configuration parameters to all cells. `conf_` variables once deca-lied are visible
 by all cells of the workflow. They can be thought of as 'global' variables therefore, they do not require to set their type
 like other variables.
[Conf_example.webm](https://github.com/QCDIS/vre_documetation/assets/9680609/f7020f7f-69d9-4916-bb56-83ed64cb98a8)

![Component Containerizer](images/component_containerizer_conf_1.png)

Notice in the image above that the `conf_b` variable is declared in the first cell and used in the second and third cell.
However, the `conf_b` is not showing up as input in the second and third cell.

### Overriding definition of cell inputs and outputs

:::warning
This feature can result in broken containerized cells. Use it with caution.
:::

In normal circumstances, the component containerizer automatically determines the cell variables (inputs, outputs,
params, confs) and dependencies by analyzing the source code.

This can be overridden by adding a special comment to the cell. The comment contains a YAML document, beginning with
`---` and ending with `...`.

Example:

```
# My cell name
# ---
# NaaVRE:
#  cell:
#   inputs:
#    - my_input: String
#    - my_other_input: Integer
#   outputs:
#    - my_output: List
#    - my_other_output: List
#   params:
#    - param_something:
#       type: String
#       default_value: "my default value"
#   confs:
#    - conf_something_else:
#       assignation: "conf_something_else = 'my other value'"
#   dependencies:
#    - name: yaml
#    - name: numpy
#      asname: np
#    - name: signal
#      module: scipy
# ...

(my cell code)
```

If an entry (e.g. `params:`) is omitted from the comment, the containerizer will try to determine the appropriate values from the source code.
This makes it possible to override some variable types, while using the code analysis for others.
In this example, the input and output are manually specified, while the dependencies, confs and params are determined from the source code (note how we specify that the cell has no outputs):

```
# My cell with partial override
# ---
# NaaVRE:
#  cell:
#   inputs:
#    - my_input: String
#   outputs: []
# ...

print(my_input, param_my_param)
```

For the full syntax, see the [YAML document schema](https://github.com/QCDIS/NaaVRE/blob/main/jupyterlab_vre/services/extractor/cell_header.schema.json).

## Experiment Manager

In the 'Experiment Manager' page you can compose and execute workflows. To compose a workflow click on the '+' button in
the bottom right corner of the page and select the 'Cells Catalog' option.

![Experiment Manager](images/experimenter_manager_7.png)

After you have selected the cells you want to compose a workflow with, click on the 'Add to Workspace' button.

### Special Components

In the 'Experiment Manager' page you can compose workflows using special components. These components are:
* Splitter: This component is used to split an output array from a call into its elements and feed each element to the
  next cell. That way the next cell will be executed in parallel as many times as the number of elements in the array.
* Merger: This component is used to merge the outputs of multiple cells into a single array.

### Cells Catalog
The cells catalog contains all the cells that have been containerized.

![Cells Catalog](images/cells_catalog_1.png)

### Re-containerizing cells used in a workflow

When re-containerizing a cell used in a workflow, you might need to update the
workflow itself:


- If you only updated the cell's source code or dependencies: the workflow automatically uses the new version of the
  cell.
- If you changed the cell’s inputs, outputs or parameters: the workflow needs to be updated. Remove the cell from the
  workflow, and add the new version from the catalogue.
- If you changed the cell’s title: a new cell is created in the catalogue. Both the old and new cell can be used.
  Workflows using the old cell don’t need to be updated.

### Managing files in workflows

To transfer files between containerized cells when running the workflow, they need to be placed in the `/tmp/data/` repository. Files outside of this repository are not preserved from one containerized cell to the other.

The best practice for exchanging files between cells is to save the file in `/tmp/data/`, and pass the filename between the cells. Example:

```python
# Write file
filename = '/tmp/data/my_file.csv'
with open(filename, 'w') as f:
    f.write('file content')
```

```python
# Read file
with open(filename, 'r') as f:
    data = f.read()
```

![Files workflow example](images/files_workflow_example.png)

## Notebook Search

In the 'Notebook Search' page you can search for notebooks relevant to your research. To search for notebooks click on
the icon in the middle left of the page. There you can search for notebooks.

![Notebook Search](images/notebook_search_1.png)

The results will be displayed in the left panel. If you clik on a result you will be shown some relevant information
such its title, link, summary etc. If you click on the 'More' button you will be redirected to the notebook where you
can download it.

![Notebook Search](images/notebook_search_2.png)

![Notebook Search](images/notebook_search_3.png)


## Jupyterlab-git

In all VLs there is a Git integration with jupyterlab-git.
To clone and push to a repository you can follow the instructions from here: [jupyterlab-git](https://pypi.org/project/jupyterlab-git/).
