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
export type Preisposition = {
  timestamp?: string | null;
  guid?: string | null;
  berechnungsmethode:
    | "KEINE"
    | "STAFFELN"
    | "ZONEN"
    | "VORZONEN_GP"
    | "SIGMOID"
    | "BLINDARBEIT_GT_50_PROZENT"
    | "BLINDARBEIT_GT_40_PROZENT"
    | "AP_GP_ZONEN"
    | "LP_INSTALL_LEISTUNG"
    | "AP_TRANSPORT_ODER_VERTEILNETZ"
    | "AP_TRANSPORT_ODER_VERTEILNETZ_ORTSVERTEILNETZ_SIGMOID"
    | "LP_JAHRESVERBRAUCH"
    | "LP_TRANSPORT_ODER_VERTEILNETZ"
    | "LP_TRANSPORT_ODER_VERTEILNETZ_ORTSVERTEILNETZ_SIGMOID"
    | "FUNKTIONEN"
    | "VERBRAUCH_UEBER_SLP_GRENZE_FUNKTIONSBEZOGEN_WEITERE_BERECHNUNG_ALS_LGK";
  leistungstyp:
    | "ARBEITSPREIS_WIRKARBEIT"
    | "LEISTUNGSPREIS_WIRKLEISTUNG"
    | "ARBEITSPREIS_BLINDARBEIT_IND"
    | "ARBEITSPREIS_BLINDARBEIT_KAP"
    | "GRUNDPREIS"
    | "MEHRMINDERMENGE"
    | "MESSSTELLENBETRIEB"
    | "MESSDIENSTLEISTUNG"
    | "MESSDIENSTLEISTUNG_INKL_MESSUNG"
    | "ABRECHNUNG"
    | "KONZESSIONS_ABGABE"
    | "KWK_UMLAGE"
    | "OFFSHORE_UMLAGE"
    | "ABLAV_UMLAGE"
    | "REGELENERGIE_UMLAGE"
    | "BILANZIERUNG_UMLAGE"
    | "AUSLESUNG_ZUSAETZLICH"
    | "ABLESUNG_ZUSAETZLICH"
    | "ABRECHNUNG_ZUSAETZLICH"
    | "SPERRUNG"
    | "ENTSPERRUNG"
    | "MAHNKOSTEN"
    | "INKASSOKOSTEN";
  leistungsbezeichnung: string;
  preiseinheit: "EUR" | "CT";
  bezugsgroesse?:
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
  zeitbasis?:
    | null
    | "SEKUNDE"
    | "MINUTE"
    | "STUNDE"
    | "VIERTEL_STUNDE"
    | "TAG"
    | "WOCHE"
    | "MONAT"
    | "QUARTAL"
    | "HALBJAHR"
    | "JAHR";
  tarifzeit?: null | "TZ_STANDARD" | "TZ_HT" | "TZ_NT";
  bdewArtikelnummer?:
    | null
    | "LEISTUNG"
    | "LEISTUNG_PAUSCHAL"
    | "GRUNDPREIS"
    | "REGELENERGIE_ARBEIT"
    | "REGELENERGIE_LEISTUNG"
    | "NOTSTROMLIEFERUNG_ARBEIT"
    | "NOTSTROMLIEFERUNG_LEISTUNG"
    | "RESERVENETZKAPAZITAET"
    | "RESERVELEISTUNG"
    | "ZUSAETZLICHE_ABLESUNG"
    | "PRUEFGEBUEHREN_AUSSERPLANMAESSIG"
    | "WIRKARBEIT"
    | "SINGULAER_GENUTZTE_BETRIEBSMITTEL"
    | "ABGABE_KWKG"
    | "ABSCHLAG"
    | "KONZESSIONSABGABE"
    | "ENTGELT_FERNAUSLESUNG"
    | "UNTERMESSUNG"
    | "BLINDMEHRARBEIT"
    | "ENTGELT_ABRECHNUNG"
    | "SPERRKOSTEN"
    | "ENTSPERRKOSTEN"
    | "MAHNKOSTEN"
    | "MEHR_MINDERMENGEN"
    | "INKASSOKOSTEN"
    | "BLINDMEHRLEISTUNG"
    | "ENTGELT_MESSUNG_ABLESUNG"
    | "ENTGELT_EINBAU_BETRIEB_WARTUNG_MESSTECHNIK"
    | "AUSGLEICHSENERGIE"
    | "AUSGLEICHSENERGIE_UNTERDECKUNG"
    | "ZAEHLEINRICHTUNG"
    | "WANDLER_MENGENUMWERTER"
    | "KOMMUNIKATIONSEINRICHTUNG"
    | "TECHNISCHE_STEUEREINRICHTUNG"
    | "PARAGRAF_19_STROM_NEV_UMLAGE"
    | "BEFESTIGUNGSEINRICHTUNG"
    | "OFFSHORE_HAFTUNGSUMLAGE"
    | "FIXE_ARBEITSENTGELTKOMPONENTE"
    | "FIXE_LEISTUNGSENTGELTKOMPONENTE"
    | "UMLAGE_ABSCHALTBARE_LASTEN"
    | "MEHRMENGE"
    | "MINDERMENGE"
    | "ENERGIESTEUER"
    | "SMARTMETER_GATEWAY"
    | "STEUERBOX"
    | "MSB_INKL_MESSUNG"
    | "ZUSATZDIENSTLEISTUNG_PARAGRAPH_35_2_1_MSBG"
    | "ZUSATZDIENSTLEISTUNG_PARAGRAPH_35_2_2_MSBG"
    | "ZUSATZDIENSTLEISTUNG_PARAGRAPH_35_2_3_MSBG"
    | "ZUSATZDIENSTLEISTUNG_PARAGRAPH_35_2_4_MSBG"
    | "ZUSATZDIENSTLEISTUNG_PARAGRAPH_35_2_5_MSBG"
    | "ZUSATZDIENSTLEISTUNG_PARAGRAPH_35_3_MSBG";
  zonungsgroesse?:
    | null
    | "WIRKARBEIT_EL"
    | "LEISTUNG_EL"
    | "BLINDARBEIT_KAP"
    | "BLINDARBEIT_IND"
    | "BLINDLEISTUNG_KAP"
    | "BLINDLEISTUNG_IND"
    | "WIRKARBEIT_TH"
    | "LEISTUNG_TH"
    | "VOLUMEN"
    | "VOLUMENSTROM"
    | "BENUTZUNGSDAUER"
    | "ANZAHL";
  zu_abschlaege?: PositionsAufAbschlag;
  preisstaffeln: Preisstaffel[];
  preisschluesselstamm?: string | null;
  positionsnummer?: number | null;
  messebene?:
    | null
    | "NSP"
    | "MSP"
    | "HSP"
    | "HSS"
    | "MSP_NSP_UMSP"
    | "HSP_MSP_UMSP"
    | "HSS_HSP_UMSP"
    | "HD"
    | "MD"
    | "ND";
  beschreibung?: string | null;
  verarbeitungszeitraum?: Zeitraum1;
  artikelId?: string | null;
  [k: string]: unknown;
} & Preisposition1;
export type PositionsAufAbschlag = {
  bezeichnung: string;
  beschreibung: string;
  aufAbschlagstyp: "RELATIV" | "ABSOLUT";
  aufAbschlagswert: number;
  aufAbschlagswaehrung: "EUR" | "CT";
  timestamp?: string | null;
  guid?: string | null;
  [k: string]: unknown;
} & PositionsAufAbschlag1;
export type PositionsAufAbschlag1 = {
  bezeichnung: string;
  beschreibung: string;
  aufAbschlagstyp: "RELATIV" | "ABSOLUT";
  aufAbschlagswert: number;
  aufAbschlagswaehrung: "EUR" | "CT";
  timestamp?: string | null;
  guid?: string | null;
  [k: string]: unknown;
} | null;
export type Preisstaffel = {
  einheitspreis: number;
  staffelgrenzeVon: number;
  staffelgrenzeBis: number;
  sigmoidparameter?: Sigmoidparameter;
  timestamp?: string | null;
  guid?: string | null;
  [k: string]: unknown;
} & Preisstaffel1;
export type Sigmoidparameter = {
  A: number;
  B: number;
  C: number;
  D: number;
  timestamp?: string | null;
  guid?: string | null;
  [k: string]: unknown;
} & Sigmoidparameter1;
export type Sigmoidparameter1 = {
  A: number;
  B: number;
  C: number;
  D: number;
  timestamp?: string | null;
  guid?: string | null;
  [k: string]: unknown;
} | null;
export type Preisstaffel1 = {
  einheitspreis: number;
  staffelgrenzeVon: number;
  staffelgrenzeBis: number;
  sigmoidparameter?: Sigmoidparameter;
  timestamp?: string | null;
  guid?: string | null;
  [k: string]: unknown;
} | null;
export type Zeitraum1 = {
  einheit?:
    | null
    | "SEKUNDE"
    | "MINUTE"
    | "STUNDE"
    | "VIERTEL_STUNDE"
    | "TAG"
    | "WOCHE"
    | "MONAT"
    | "QUARTAL"
    | "HALBJAHR"
    | "JAHR";
  dauer?: number | null;
  startdatum?: string | null;
  enddatum?: string | null;
  startzeitpunkt: string | null;
  endzeitpunkt: string | null;
  timestamp?: string | null;
  guid?: string | null;
  [k: string]: unknown;
} & Zeitraum11;
export type Zeitraum11 = {
  einheit?:
    | null
    | "SEKUNDE"
    | "MINUTE"
    | "STUNDE"
    | "VIERTEL_STUNDE"
    | "TAG"
    | "WOCHE"
    | "MONAT"
    | "QUARTAL"
    | "HALBJAHR"
    | "JAHR";
  dauer?: number | null;
  startdatum?: string | null;
  enddatum?: string | null;
  startzeitpunkt: string | null;
  endzeitpunkt: string | null;
  timestamp?: string | null;
  guid?: string | null;
  [k: string]: unknown;
} | null;
export type Preisposition1 = {
  timestamp?: string | null;
  guid?: string | null;
  berechnungsmethode:
    | "KEINE"
    | "STAFFELN"
    | "ZONEN"
    | "VORZONEN_GP"
    | "SIGMOID"
    | "BLINDARBEIT_GT_50_PROZENT"
    | "BLINDARBEIT_GT_40_PROZENT"
    | "AP_GP_ZONEN"
    | "LP_INSTALL_LEISTUNG"
    | "AP_TRANSPORT_ODER_VERTEILNETZ"
    | "AP_TRANSPORT_ODER_VERTEILNETZ_ORTSVERTEILNETZ_SIGMOID"
    | "LP_JAHRESVERBRAUCH"
    | "LP_TRANSPORT_ODER_VERTEILNETZ"
    | "LP_TRANSPORT_ODER_VERTEILNETZ_ORTSVERTEILNETZ_SIGMOID"
    | "FUNKTIONEN"
    | "VERBRAUCH_UEBER_SLP_GRENZE_FUNKTIONSBEZOGEN_WEITERE_BERECHNUNG_ALS_LGK";
  leistungstyp:
    | "ARBEITSPREIS_WIRKARBEIT"
    | "LEISTUNGSPREIS_WIRKLEISTUNG"
    | "ARBEITSPREIS_BLINDARBEIT_IND"
    | "ARBEITSPREIS_BLINDARBEIT_KAP"
    | "GRUNDPREIS"
    | "MEHRMINDERMENGE"
    | "MESSSTELLENBETRIEB"
    | "MESSDIENSTLEISTUNG"
    | "MESSDIENSTLEISTUNG_INKL_MESSUNG"
    | "ABRECHNUNG"
    | "KONZESSIONS_ABGABE"
    | "KWK_UMLAGE"
    | "OFFSHORE_UMLAGE"
    | "ABLAV_UMLAGE"
    | "REGELENERGIE_UMLAGE"
    | "BILANZIERUNG_UMLAGE"
    | "AUSLESUNG_ZUSAETZLICH"
    | "ABLESUNG_ZUSAETZLICH"
    | "ABRECHNUNG_ZUSAETZLICH"
    | "SPERRUNG"
    | "ENTSPERRUNG"
    | "MAHNKOSTEN"
    | "INKASSOKOSTEN";
  leistungsbezeichnung: string;
  preiseinheit: "EUR" | "CT";
  bezugsgroesse?:
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
  zeitbasis?:
    | null
    | "SEKUNDE"
    | "MINUTE"
    | "STUNDE"
    | "VIERTEL_STUNDE"
    | "TAG"
    | "WOCHE"
    | "MONAT"
    | "QUARTAL"
    | "HALBJAHR"
    | "JAHR";
  tarifzeit?: null | "TZ_STANDARD" | "TZ_HT" | "TZ_NT";
  bdewArtikelnummer?:
    | null
    | "LEISTUNG"
    | "LEISTUNG_PAUSCHAL"
    | "GRUNDPREIS"
    | "REGELENERGIE_ARBEIT"
    | "REGELENERGIE_LEISTUNG"
    | "NOTSTROMLIEFERUNG_ARBEIT"
    | "NOTSTROMLIEFERUNG_LEISTUNG"
    | "RESERVENETZKAPAZITAET"
    | "RESERVELEISTUNG"
    | "ZUSAETZLICHE_ABLESUNG"
    | "PRUEFGEBUEHREN_AUSSERPLANMAESSIG"
    | "WIRKARBEIT"
    | "SINGULAER_GENUTZTE_BETRIEBSMITTEL"
    | "ABGABE_KWKG"
    | "ABSCHLAG"
    | "KONZESSIONSABGABE"
    | "ENTGELT_FERNAUSLESUNG"
    | "UNTERMESSUNG"
    | "BLINDMEHRARBEIT"
    | "ENTGELT_ABRECHNUNG"
    | "SPERRKOSTEN"
    | "ENTSPERRKOSTEN"
    | "MAHNKOSTEN"
    | "MEHR_MINDERMENGEN"
    | "INKASSOKOSTEN"
    | "BLINDMEHRLEISTUNG"
    | "ENTGELT_MESSUNG_ABLESUNG"
    | "ENTGELT_EINBAU_BETRIEB_WARTUNG_MESSTECHNIK"
    | "AUSGLEICHSENERGIE"
    | "AUSGLEICHSENERGIE_UNTERDECKUNG"
    | "ZAEHLEINRICHTUNG"
    | "WANDLER_MENGENUMWERTER"
    | "KOMMUNIKATIONSEINRICHTUNG"
    | "TECHNISCHE_STEUEREINRICHTUNG"
    | "PARAGRAF_19_STROM_NEV_UMLAGE"
    | "BEFESTIGUNGSEINRICHTUNG"
    | "OFFSHORE_HAFTUNGSUMLAGE"
    | "FIXE_ARBEITSENTGELTKOMPONENTE"
    | "FIXE_LEISTUNGSENTGELTKOMPONENTE"
    | "UMLAGE_ABSCHALTBARE_LASTEN"
    | "MEHRMENGE"
    | "MINDERMENGE"
    | "ENERGIESTEUER"
    | "SMARTMETER_GATEWAY"
    | "STEUERBOX"
    | "MSB_INKL_MESSUNG"
    | "ZUSATZDIENSTLEISTUNG_PARAGRAPH_35_2_1_MSBG"
    | "ZUSATZDIENSTLEISTUNG_PARAGRAPH_35_2_2_MSBG"
    | "ZUSATZDIENSTLEISTUNG_PARAGRAPH_35_2_3_MSBG"
    | "ZUSATZDIENSTLEISTUNG_PARAGRAPH_35_2_4_MSBG"
    | "ZUSATZDIENSTLEISTUNG_PARAGRAPH_35_2_5_MSBG"
    | "ZUSATZDIENSTLEISTUNG_PARAGRAPH_35_3_MSBG";
  zonungsgroesse?:
    | null
    | "WIRKARBEIT_EL"
    | "LEISTUNG_EL"
    | "BLINDARBEIT_KAP"
    | "BLINDARBEIT_IND"
    | "BLINDLEISTUNG_KAP"
    | "BLINDLEISTUNG_IND"
    | "WIRKARBEIT_TH"
    | "LEISTUNG_TH"
    | "VOLUMEN"
    | "VOLUMENSTROM"
    | "BENUTZUNGSDAUER"
    | "ANZAHL";
  zu_abschlaege?: PositionsAufAbschlag;
  preisstaffeln: Preisstaffel[];
  preisschluesselstamm?: string | null;
  positionsnummer?: number | null;
  messebene?:
    | null
    | "NSP"
    | "MSP"
    | "HSP"
    | "HSS"
    | "MSP_NSP_UMSP"
    | "HSP_MSP_UMSP"
    | "HSS_HSP_UMSP"
    | "HD"
    | "MD"
    | "ND";
  beschreibung?: string | null;
  verarbeitungszeitraum?: Zeitraum1;
  artikelId?: string | null;
  [k: string]: unknown;
} | null;

export interface PreisblattKonzessionsabgabe {
  boTyp?: string | null;
  versionStruktur?: string | null;
  timestamp?: string | null;
  externeReferenzen?: ExterneReferenz[] | null;
  guid?: string | null;
  kundengruppeKA:
    | "S_TARIF_25000"
    | "S_TARIF_100000"
    | "S_TARIF_500000"
    | "S_TARIF_G_500000"
    | "S_SONDERKUNDE"
    | "G_KOWA_25000"
    | "G_KOWA_100000"
    | "G_KOWA_500000"
    | "G_KOWA_G_500000"
    | "G_TARIF_25000"
    | "G_TARIF_100000"
    | "G_TARIF_500000"
    | "G_TARIF_G_500000"
    | "G_SONDERKUNDE"
    | "SONDER_KAS"
    | "SONDER_SAS"
    | "SONDER_TAS"
    | "SONDER_TKS"
    | "SONDER_TSS";
  bezeichnung: string;
  gueltigkeit: Zeitraum;
  preispositionen: Preisposition[];
  preisstatus?: null | "VORLAEUFIG" | "ENDGUELTIG";
  sparte?: null | "STROM" | "GAS" | "FERNWAERME" | "NAHWAERME" | "WASSER" | "ABWASSER";
  [k: string]: unknown;
}
export interface Zeitraum {
  einheit?:
    | null
    | "SEKUNDE"
    | "MINUTE"
    | "STUNDE"
    | "VIERTEL_STUNDE"
    | "TAG"
    | "WOCHE"
    | "MONAT"
    | "QUARTAL"
    | "HALBJAHR"
    | "JAHR";
  dauer?: number | null;
  startdatum?: string | null;
  enddatum?: string | null;
  startzeitpunkt: string | null;
  endzeitpunkt: string | null;
  timestamp?: string | null;
  guid?: string | null;
  [k: string]: unknown;
}
