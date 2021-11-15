import { GoogleSpreadsheet } from "google-spreadsheet";

const { private_key } = require("../key.json");

const doc = new GoogleSpreadsheet(
  "1lp5hCX-C4BJSBDiXRcpzycA-4wa9YYUVFeqU9_TBZPc"
);
const auth = {
  client_email: process.env.GOOGLE_CLIENT_EMAIL,
  private_key, // ENV variable doesn't work, \n issue probably
};

export const addOrder = async (order) => {
  await doc.useServiceAccountAuth(auth);
  await doc.loadInfo();

  const sheet = doc.sheetsByIndex[4]; // or use doc.sheetsById[id] or doc.sheetsByTitle[title]

  const a = await sheet.addRow(order);
};

export const findOrder = async (id) => {
  await doc.useServiceAccountAuth(auth);
  await doc.loadInfo();
  const sheet = doc.sheetsByIndex[4]; // or use doc.sheetsById[id] or doc.sheetsByTitle[title]

  const rows = await sheet.getRows();
  const result = rows.filter((row) => row.id === id);

  return result;
};
