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
export type Menge = {
  timestamp?: string | null;
  guid?: string | null;
  wert: number;
  einheit?:
    | null
    | "ZERO"
    | "WH"
    | "KW"
    | "ANZAHL"
    | "KUBIKMETER"
    | "STUNDE"
    | "TAG"
    | "MONAT"
    | "VAR"
    | "VARH"
    | "KWHK"
    | "JAHR"
    | "KWH"
    | "MW"
    | "KVAR"
    | "KVARH"
    | "MWH";
  [k: string]: unknown;
} & Menge1;
export type Menge1 = {
  timestamp?: string | null;
  guid?: string | null;
  wert: number;
  einheit?:
    | null
    | "ZERO"
    | "WH"
    | "KW"
    | "ANZAHL"
    | "KUBIKMETER"
    | "STUNDE"
    | "TAG"
    | "MONAT"
    | "VAR"
    | "VARH"
    | "KWHK"
    | "JAHR"
    | "KWH"
    | "MW"
    | "KVAR"
    | "KVARH"
    | "MWH";
  [k: string]: unknown;
} | null;

export interface TechnischeRessource {
  boTyp?: string | null;
  versionStruktur?: string | null;
  timestamp?: string | null;
  externeReferenzen?: ExterneReferenz[] | null;
  guid?: string | null;
  technischeRessourceId?: string | null;
  vorgelagerteMesslokationsId?: string | null;
  zugeordneteMarktlokationsId?: string | null;
  zugeordneteSteuerbareRessourceId?: string | null;
  nennleistungAufnahme?: Menge;
  nennleistungAbgabe?: Menge;
  speicherkapazitaet?: Menge;
  technischeRessourceNutzung?: null | "STROMVERBRAUCHSART" | "STROMERZEUGUNGSART" | "SPEICHER";
  verbrauchsart?: null | "KRAFT_LICHT" | "WAERME" | "E_MOBILITAET" | "STRASSENBELEUCHTUNG";
  waermenutzung?: null | "SPEICHERHEIZUNG" | "WAERMEPUMPE" | "DIREKTHEIZUNG";
  emobilitaetsart?: null | "WALLBOX" | "E_MOBILITAETSLADESAEULE" | "LADEPARK";
  erzeugungsart?:
    | null
    | "KWK"
    | "WIND"
    | "SOLAR"
    | "KERNKRAFT"
    | "WASSER"
    | "GEOTHERMIE"
    | "BIOMASSE"
    | "KOHLE"
    | "GAS"
    | "SONSTIGE"
    | "SONSTIGE_EEG";
  speicherart?: null | "WASSERSTOFFSPEICHER" | "PUMPSPEICHER" | "BATTERIESPEICHER" | "SONSTIGE_SPEICHERART";
  lokationsbuendelObjektcode?: string | null;
  [k: string]: unknown;
}