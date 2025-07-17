---
sidebar_position: 2
---

import CustomDetails from "@site/src/components/CustomDetails";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Reservations

Make reservations of the materials you need for your work orders.

## Flow Diagram

```mermaid

    stateDiagram-v2

    hehexd
```

## Screens

### Work Order Selection

On this screen you need to select the **work order position/assembly** you want to make reservations for.

![Work Order Selection screen](./img-reservations/wo_selection_screen.png)

Type in the barcode for the work order assembly or click the <IIcon icon="iconamoon:search-bold" width="17" height="17" /> button to open the **Work Order Position Search** modal.

<CustomDetails summary="Work Order Position Search Modal">

On this screen you need to select one of the **work order positions** listed.

![Work Order Position Search Modal](./img-reservations/wo_pos_search_modal.png)

You can select any item by clicking on it, which will close the modal with that **work order position** already set.

You can filter the list of **work order positions** using the search box.

If you want to close the modal without making any changes, click the <IIcon icon="zondicons:close-solid" width="17" height="17"/> button.

</CustomDetails>

Once you input or select a work order position, you will be taken to the [BoM Reservation Summary](./reservations.md#bom-reservation-summary) screen.

### BoM Reservation Summary

On this screen you will see the **list of BoMs** associated with the work order assembly selected, and their current reservations.

<Tabs>
  <TabItem value="collapsed" label="Collapsed" default>
    ![BoM Reservation Summary screen](./img-reservations/bom_reservations_summary_screen.png)
  </TabItem>
  <TabItem value="expanded" label="Expanded">
    ![BoM Reservation Summary expanded screen](./img-reservations/bom_reservations_summary_expanded_screen.png)
  </TabItem>
</Tabs>

<CustomDetails summary="BoM Table Reference">
  | Column | Description |
  | --- | --- |
  |  | Action button for expanding the row/BoM to see its reservations. |
  | Pos | ID of the BoM. |
  | Item | ID of the item. |
  | Qty | Currently reserved quantity / Planned quantity. |
  | Location | Location to take the material from, according to the BoM. |
</CustomDetails>

<CustomDetails summary="Reservation Table Reference">
  | Column | Description |
  | --- | --- |
  | Details | Serial number (Serial), batch (Batch), - (non-managed item). |
  | Location | Location where the item is located. |
  | Reserved Qty | Actual reserved quantity for that batch/serial. |
  | Action | Action button for deleting/cancelling the reservation. |
</CustomDetails>

At the top you will see a summary of what you are working with.

You can **search** for a specific BoM using the search field.

You can **sort** the BoMs by clicking the headers on any of the columns.

If you want to see what reservations are **currently active** on a BoM, click the left-most column for it to expand the row and see the reservations (see the Expanded tab).

If you want to **delete/cancel** a reservation, expand the BoM row and click the <IIcon icon="ic:baseline-delete" width="17" height="17" /> button on that reservations and confirm.

If you want to make **new reservations** for a BoM, click any of the other columns for it to go to the [Make Reservation](./reservations.md#make-reservation) screen.

Once you have the reservations you need ready, click **Next** to go to the [BOM Allocation](./reservations.md#bom-allocation) screen.

:::note[INFO]
The **Next** button behavior is affected by the **Allows the user to make a reservation transfer** setting in the [Configuration](./reservations.md#configuration).
:::

### Make Reservation

![Make Reservation screen](./img-reservations/make_reservations_screen.png)

### BoM Allocation

![BoM Allocation screen](./img-reservations/bom_allocation_screen.png)

![Location selection modal](./img-reservations/location_selection_modal.png)

## Configuration

:::note[INFO]
Only administrators can access the configuration for a web app.
:::

On this screen you can set the settings that will apply to this web app.

![Configuration screen](./img-reservations/configuration_screen.png)


| Name | Description |
| :--- | :--- |
| Allows the user to make a reservation transfer | If true, the [BoM Allocation](./reservations.md#bom-allocation) screen will not be available to the user to transfer reservations. Otherwise, said screen will not be shown and the user will be taken to the home screen instead. |
| Suggested warehouse and binlocation | If true, on the [BoM Allocation](./reservations.md#bom-allocation) screen the location by default for allocations will be the one in the BOM. Otherwise, no location will be suggested and thus the user will have to choose manually. |