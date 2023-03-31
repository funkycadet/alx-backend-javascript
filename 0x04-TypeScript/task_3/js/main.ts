/// <reference types="./crud.js" />

import { RowID, RowElement } from "./interface";
import CRUD from "./crud";

const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};

const newRowID: RowID = CRUD.insertRow(row);
row.age = 23;
const updatedRow: RowElement = row;

CRUD.updatedRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
