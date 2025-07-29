---
sidebar_position: 3
---

import CustomDetails from "@site/src/components/CustomDetails";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Modify Route/BoM

Add/Delete routes and BoMs to/from your work orders.

## Flow Diagram

```mermaid

    stateDiagram-v2

    state "Select Work Order" as wo
    state "Select Operation Type" as optype
    state "Add Route" as addroute
    state "Delete Route" as deleteroute
    state "Add Material" as addmaterial
    state "Delete Material" as deletematerial

    state optype_choices <<choice>>

    [*] --> wo
    wo --> optype
    optype --> optype_choices
    optype_choices --> addroute
    optype_choices --> deleteroute
    optype_choices --> addmaterial
    optype_choices --> deletematerial
    addroute --> [*]
    deleteroute --> [*]
    addmaterial --> [*]
    deletematerial --> [*]

```

## Screens

### Work Order Assembly Selection

On this screen you need to select the **work order position/assembly** you want add/delete routes and BoMs to/from.

![Work Order Assembly Selection screen](./img-modify-route-bom/woa_selection_screen.png)

Click the <IIcon icon='iconamoon:search-bold' width='17' height='17' /> button to open the **Work Order Assembly Search** modal.

<CustomDetails summary='Work Order Assembly Search Modal'>

On this modal you need to select one of the **work order assemblies** listed.

![Work Order Assembly search modal](./img-modify-route-bom/woa_search_modal.png)

You can select any item by clicking on it, which will close the modal and take you to the [Operation Type Selection](./modify-route-bom.md#operation-type-selection) screen with that **work order assembly** already set.

You can filter the list of **work order assemblies** using the search box.

If you want to close the modal without making any changes, click the <IIcon icon='zondicons:close-solid' width='17' height='17'/> button.

</CustomDetails>

### Operation Type Selection

![Operation Type Selection screen](./img-modify-route-bom/op_type_selection_screen.png)

<CustomDetails summary='Operation Type Dropdown'>

![Operation Type dropdown subscreen](./img-modify-route-bom/op_type_dropdown_subscreen.png)

</CustomDetails>

### Add Route

![Add Route screen](./img-modify-route-bom/add_route_screen.png)

<CustomDetails summary="Mandatory/Optional Fields">
  | Column | Mandatory |
  | --- | --- |
  | Type | Yes |
  | Operation | Yes |
  | Resource | Yes |
  | Production time | Yes |
  | Setup time | Yes |
  | Quantity per time | Yes |
  | Time type | Yes |
  | Position | Yes |
  | Description | No |
</CustomDetails>

<CustomDetails summary='Route Type Search Modal'>

On this modal you need to select one of the **route types** listed.

![Route type search modal](./img-modify-route-bom/route_type_search_modal.png)

You can select any item by clicking on it, which will close the modal and take you back with that **route type** already set.

You can filter the list of **route types** using the search box.

If you want to close the modal without making any changes, click the <IIcon icon='zondicons:close-solid' width='17' height='17'/> button.

</CustomDetails>

<CustomDetails summary='Operation Search Modal'>

On this modal you need to select one of the **operations** listed.

![Operation search modal](./img-modify-route-bom/op_search_modal.png)

You can select any item by clicking on it, which will close the modal and take you back with that **operation** already set.

You can filter the list of **operations** using the search box.

If you want to close the modal without making any changes, click the <IIcon icon='zondicons:close-solid' width='17' height='17'/> button.

</CustomDetails>

<CustomDetails summary='Resource Search Modal'>

On this modal you need to select one of the **resources** listed.

![Resource search modal](./img-modify-route-bom/resource_search_modal.png)

You can select any item by clicking on it, which will close the modal and take you back with that **resource** already set.

You can filter the list of **resources** using the search box.

If you want to close the modal without making any changes, click the <IIcon icon='zondicons:close-solid' width='17' height='17'/> button.

</CustomDetails>

### Delete Route

![Delete Route screen](./img-modify-route-bom/delete_route_screen.png)

<CustomDetails summary="Table Reference">
  | Column | Description |
  | --- | --- |
  |  | Action button for selecting operations/routes for deletion. |
  | Position | Operation/Route position. |
  | Resource | Operation/Route resource. |
  | Description | Operation/Route description. |
</CustomDetails>

### Add Material

![Add Material screen](./img-modify-route-bom/add_material_screen.png)

<CustomDetails summary="Mandatory/Optional Fields">
  | Column | Mandatory |
  | --- | --- |
  | Position | Yes |
  | ItemCode | Yes |
  | ItemName | No |
  | I-Version | No |
  | Quantity | Yes |
  | Production UoM of Item | No |
  | Warehouse | Yes |
  | Bin Location | No |
  | Routing Postion | No |
  | Additional Text | No |
</CustomDetails>

<CustomDetails summary='Item Search Modal'>

On this modal you need to select one of the **items** listed.

![Item search modal](./img-modify-route-bom/item_search_modal.png)

You can select any item by clicking on it, which will close the modal and take you back with that **item** already set.

You can filter the list of **items** using the search box.

If you want to close the modal without making any changes, click the <IIcon icon='zondicons:close-solid' width='17' height='17'/> button.

</CustomDetails>

<CustomDetails summary='I-Version Search Modal'>

On this modal you need to select one of the **i-versions** listed.

![I-Version search modal](./img-modify-route-bom/iversion_search_modal.png)

You can select any item by clicking on it, which will close the modal and take you back with that **i-version** already set.

You can filter the list of **i-versions** using the search box.

If you want to close the modal without making any changes, click the <IIcon icon='zondicons:close-solid' width='17' height='17'/> button.

</CustomDetails>

<CustomDetails summary='Warehouse Search Modal'>

On this modal you need to select one of the **warehouses** listed.

![Warehouse search modal](./img-modify-route-bom/warehouse_search_modal.png)

You can select any item by clicking on it, which will close the modal and take you back with that **warehouse** already set.

You can filter the list of **warehouses** using the search box.

If you want to close the modal without making any changes, click the <IIcon icon='zondicons:close-solid' width='17' height='17'/> button.

</CustomDetails>

<CustomDetails summary='Bin Location Search Modal'>

On this modal you need to select one of the **bin locations** listed.

![Bin Location search modal](./img-modify-route-bom/bin_search_modal.png)

You can select any item by clicking on it, which will close the modal and take you back with that **bin location** already set.

You can filter the list of **bin locations** using the search box.

If you want to close the modal without making any changes, click the <IIcon icon='zondicons:close-solid' width='17' height='17'/> button.

</CustomDetails>

<CustomDetails summary='Routing Position Search Modal'>

On this modal you need to select one of the **routing positions** listed.

![Routing positiionn search modal](./img-modify-route-bom/route_search_modal.png)

You can select any item by clicking on it, which will close the modal and take you back with that **routing position** already set.

You can filter the list of **routing positions** using the search box.

If you want to close the modal without making any changes, click the <IIcon icon='zondicons:close-solid' width='17' height='17'/> button.

</CustomDetails>

### Delete Material

![Delete Material screen](./img-modify-route-bom/delete_material_screen.png)

<CustomDetails summary="Table Reference">
  | Column | Description |
  | --- | --- |
  |  | Action button for selecting BoMs for deletion. |
  | Position | BoM position. |
  | Item Code | BoM item code. |
  | Item Name | BoM item name. |
</CustomDetails>