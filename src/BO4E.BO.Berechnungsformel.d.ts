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
export type Rechenschritt = {
  rechenschrittBestandteilId: number;
  referenzRechenschrittID: number;
  timestamp?: string | null;
  guid?: string | null;
  operation: "ADDITION" | "SUBTRAKTION" | "MULTIPLIKATION" | "DIVISION" | "DIVIDEND" | "POSITIVWERT";
  verlustfaktorTrafo?: number | null;
  verlustfaktorLeitung?: number | null;
  messlokationId?: string | null;
  energieflussrichtung?: null | "VERBRAUCH" | "ERZEUGUNG";
  weitererRechenschritt?: Rechenschritt;
  aufteilungsfaktorEnergiemenge?: number | null;
  [k: string]: unknown;
} & Rechenschritt1;
export type Rechenschritt1 = {
  rechenschrittBestandteilId: number;
  referenzRechenschrittID: number;
  timestamp?: string | null;
  guid?: string | null;
  operation: "ADDITION" | "SUBTRAKTION" | "MULTIPLIKATION" | "DIVISION" | "DIVIDEND" | "POSITIVWERT";
  verlustfaktorTrafo?: number | null;
  verlustfaktorLeitung?: number | null;
  messlokationId?: string | null;
  energieflussrichtung?: null | "VERBRAUCH" | "ERZEUGUNG";
  weitererRechenschritt?: Rechenschritt;
  aufteilungsfaktorEnergiemenge?: number | null;
  [k: string]: unknown;
} | null;

export interface BO4EBOBerechnungsformel {
  boTyp?: string | null;
  versionStruktur?: string | null;
  timestamp?: string | null;
  externeReferenzen?: ExterneReferenz[] | null;
  beginndatum: string;
  guid?: string | null;
  notwendigkeit:
    | "BERECHNUNGSFORMEL_NOTWENDIG"
    | "BERECHNUNGSFORMEL_MUSS_ANGEFRAGT_WERDEN"
    | "BERECHNUNGSFORMEL_TRIVIAL"
    | "BERECHNUNGSFORMEL_NICHT_NOTWENDIG";
  rechenschrittId?: number | null;
  verwendungszweck: Verwendungszweck;
  rechenschritt?: Rechenschritt;
  [k: string]: unknown;
}
export interface Verwendungszweck {
  marktrolle:
    | "NB"
    | "LF"
    | "MSB"
    | "MDL"
    | "DL"
    | "BKV"
    | "BIKO"
    | "UENB"
    | "KUNDE_SELBST_NN"
    | "MGV"
    | "EIV"
    | "RB"
    | "KUNDE"
    | "INTERESSENT"
    | "GMSB"
    | "AMSB";
  zweck?:
    | (
        | "NETZNUTZUNGSABRECHNUNG"
        | "BILANZKREISABRECHNUNG"
        | "MEHRMINDERMENGENABRECHNUNG"
        | "MEHRMINDERMBENGENABRECHNUNG"
        | "ENDKUNDENABRECHNUNG"
        | "BLINDARBEITABRECHNUNG_BETRIEBSFUEHRUNG"
        | "UEBERMITTLUNG_AN_DAS_HKNR"
        | "ERMITTLUNG_AUSGEGLICHENHEIT_BILANZKREIS"
      )[]
    | null;
  timestamp?: string | null;
  guid?: string | null;
  [k: string]: unknown;
}
