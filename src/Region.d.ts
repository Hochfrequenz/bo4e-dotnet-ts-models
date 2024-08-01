/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type ExterneReferenz = {
  exRefName?: string | null;
  exRefWert?: string | null;
  timestamp?: string | null;
  guid?: string | null;
  [k: string]: unknown;
} & ExterneReferenz1;
export type ExterneReferenz1 = {
  exRefName?: string | null;
  exRefWert?: string | null;
  timestamp?: string | null;
  guid?: string | null;
  [k: string]: unknown;
} | null;
export type Regionskriterium = {
  gueltigkeitstyp: "NICHT_IN";
  sparte?: null | "STROM" | "GAS" | "FERNWAERME" | "NAHWAERME" | "WASSER" | "ABWASSER";
  mengenoperator: "KLEINER_ALS" | "GROESSER_ALS" | "GLEICH";
  regionskriteriumtyp:
    | "BUNDESLANDKENNZIFFER"
    | "BUNDESLAND_NAME"
    | "MARKTGEBIET_NUMMER"
    | "MARKTGEBIET_NAME"
    | "REGELGEBIET_NUMMER"
    | "REGELGEBIET_NAME"
    | "NETZBETREIBER_NUMMER"
    | "NETZBETREIBER_NAME"
    | "BILANZIERUNGS_GEBIET_NUMMER"
    | "MSB_NUMMER"
    | "MSB_NAME"
    | "VERSORGER_NUMMER"
    | "VERSORGER_NAME"
    | "GRUNDVERSORGER_NUMMER"
    | "GRUNDVERSORGER_NAME"
    | "KREIS_NAME"
    | "KREISKENNZIFFER"
    | "GEMEINDE_NAME"
    | "GEMEINDEKENNZIFFER"
    | "POSTLEITZAHL"
    | "ORT"
    | "EINWOHNERZAHL_GEMEINDE"
    | "EINWOHNERZAHL_ORT"
    | "KM_UMKREIS"
    | "BUNDESWEIT";
  wert: string;
  timestamp?: string | null;
  guid?: string | null;
  [k: string]: unknown;
} & Regionskriterium1;
export type Regionskriterium1 = {
  gueltigkeitstyp: "NICHT_IN";
  sparte?: null | "STROM" | "GAS" | "FERNWAERME" | "NAHWAERME" | "WASSER" | "ABWASSER";
  mengenoperator: "KLEINER_ALS" | "GROESSER_ALS" | "GLEICH";
  regionskriteriumtyp:
    | "BUNDESLANDKENNZIFFER"
    | "BUNDESLAND_NAME"
    | "MARKTGEBIET_NUMMER"
    | "MARKTGEBIET_NAME"
    | "REGELGEBIET_NUMMER"
    | "REGELGEBIET_NAME"
    | "NETZBETREIBER_NUMMER"
    | "NETZBETREIBER_NAME"
    | "BILANZIERUNGS_GEBIET_NUMMER"
    | "MSB_NUMMER"
    | "MSB_NAME"
    | "VERSORGER_NUMMER"
    | "VERSORGER_NAME"
    | "GRUNDVERSORGER_NUMMER"
    | "GRUNDVERSORGER_NAME"
    | "KREIS_NAME"
    | "KREISKENNZIFFER"
    | "GEMEINDE_NAME"
    | "GEMEINDEKENNZIFFER"
    | "POSTLEITZAHL"
    | "ORT"
    | "EINWOHNERZAHL_GEMEINDE"
    | "EINWOHNERZAHL_ORT"
    | "KM_UMKREIS"
    | "BUNDESWEIT";
  wert: string;
  timestamp?: string | null;
  guid?: string | null;
  [k: string]: unknown;
} | null;

export interface Region {
  boTyp?: string | null;
  versionStruktur?: string | null;
  timestamp?: string | null;
  bezeichnung: string;
  externeReferenzen?: ExterneReferenz[] | null;
  positivListe: Regionskriterium[];
  guid?: string | null;
  negativListe?: Regionskriterium[] | null;
  [k: string]: unknown;
}
