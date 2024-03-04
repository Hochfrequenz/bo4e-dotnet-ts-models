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
export type Zeitreihenprodukt = {
  timestamp?: string | null;
  guid?: string | null;
  identifikation?: string | null;
  korrekturfaktor?: number | null;
  verbrauch?: Verbrauch;
  [k: string]: unknown;
} & Zeitreihenprodukt1;
export type Verbrauch = {
  startdatum?: string | null;
  enddatum?: string | null;
  type?: null | "ARBEITLEISTUNGTAGESPARAMETERABHMALO" | "VERANSCHLAGTEJAHRESMENGE" | "TUMKUNDENWERT";
  tarifstufe?:
    | null
    | "TARIFSTUFE_0"
    | "TARIFSTUFE_1"
    | "TARIFSTUFE_2"
    | "TARIFSTUFE_3"
    | "TARIFSTUFE_4"
    | "TARIFSTUFE_5"
    | "TARIFSTUFE_6"
    | "TARIFSTUFE_7"
    | "TARIFSTUFE_8"
    | "TARIFSTUFE_9";
  timestamp?: string | null;
  guid?: string | null;
  wertermittlungsverfahren?: null | "PROGNOSE" | "MESSUNG";
  messwertstatus?:
    | null
    | "ABGELESEN"
    | "ERSATZWERT"
    | "VOLAEUFIGERWERT"
    | "ANGABE_FUER_LIEFERSCHEIN"
    | "VORSCHLAGSWERT"
    | "NICHT_VERWENDBAR"
    | "PROGNOSEWERT"
    | "ENERGIEMENGESUMMIERT"
    | "FEHLT";
  statuszusatzinformationen?: StatusZusatzInformation[] | null;
  obiskennzahl: string;
  wert: number;
  einheit:
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
  nutzungszeitpunkt?: string | null;
  ausfuehrungszeitpunkt?: string | null;
  [k: string]: unknown;
} & Verbrauch1;
export type StatusZusatzInformation = {
  timestamp?: string | null;
  art?:
    | null
    | "VERTRAG"
    | "MESSWERTQUALITAET"
    | "MESSKLASSIFIZIERUNG"
    | "PLAUSIBILISIERUNGSHINWEIS"
    | "ERSATZWERTBILDUNGSVERFAHREN"
    | "GRUND_ERSATZWERTBILDUNGSVERFAHREN"
    | "KORREKTURGRUND"
    | "GASQUALITAET";
  guid?: string | null;
  status?:
    | null
    | "TARIF_1"
    | "TARIF_2"
    | "TARIF_3"
    | "TARIF_4"
    | "TARIF_5"
    | "TARIF_6"
    | "TARIF_7"
    | "TARIF_8"
    | "TARIF_9"
    | "ZAEHLERSTAND_ZUM_BEGINN_DER_ANGEGEBENEN_ENERGIEMENGE_VORHANDEN_UND_KOMMUNIZIERT"
    | "ZAEHLERSTAND_ZUM_ENDE_DER_ANGEGEBENEN_ENERGIEMENGE_VORHANDEN_UND_KOMMUNIZIERT"
    | "ZAEHLERSTAND_ZUM_BEGINN_DER_ANGEGEBENEN_ENERGIEMENGE_NICHT_VORHANDEN_DA_MENGENABGRENZUNG"
    | "ZAEHLERSTAND_ZUM_ENDE_DER_ANGEGEBENEN_ENERGIEMENGE_NICHT_VORHANDEN_DA_MENGENABGRENZUNG"
    | "KEIN_ZUGANG"
    | "KOMMUNIKATIONSSTOERUNG"
    | "NETZAUSFALL"
    | "SPANNUNGSAUSFALL"
    | "STATUS_GERAETEWECHSEL"
    | "KALIBRIERUNG"
    | "GERAET_ARBEITET_AUSSERHALB_DER_BETRIEBSBEDINGUNGEN"
    | "MESSEINRICHTUNG_GESTOERT_DEFEKT"
    | "UNSICHERHEIT_MESSUNG"
    | "KUNDENSELBSTABLESUNG"
    | "LEERSTAND"
    | "REALER_ZAEHLERUEBERLAUF_GEPRUEFT"
    | "PLAUSIBEL_WG_KONTROLLABLESUNG"
    | "PLAUSIBEL_WG_KUNDENHINWEIS"
    | "VERGLEICHSMESSUNG_GEEICHT"
    | "VERGLEICHSMESSUNG_NICHT_GEEICHT"
    | "MESSWERTNACHBILDUNG_AUS_GEEICHTEN_WERTEN"
    | "MESSWERTNACHBILDUNG_AUS_NICHT_GEEICHTEN_WERTEN"
    | "INTERPOLATION"
    | "HALTEWERT"
    | "BILANZIERUNG_NETZABSCHNITT"
    | "HISTORISCHE_MESSWERTE"
    | "BERUECKSICHTIGUNG_STOERMENGENZAEHLWERK"
    | "MENGENUMWERTUNG_VOLLSTAENDIG"
    | "UHRZEIT_GESTELLT_SYNCHRONISATION"
    | "MESSWERT_UNPLAUSIBEL"
    | "FALSCHER_WANDLERFAKTOR"
    | "FEHLERHAFTE_ABLESUNG"
    | "AENDERUNG_DER_BERECHNUNG"
    | "UMBAU_DER_MESSLOKATION"
    | "DATENBEARBEITUNGSFEHLER"
    | "BRENNWERTKORREKTUR"
    | "Z_ZAHL_KORREKTUR"
    | "STOERUNG_DEFEKT_MESSEINRICHTUNG"
    | "AENDERUNG_TARIFSCHALTZEITEN"
    | "TARIFSCHALTGERAET_DEFEKT"
    | "AUSTAUSCH_DES_ERSATZWERTES"
    | "IMPULSWERTIGKEIT_NICHT_AUSREICHEND"
    | "UMSTELLUNG_GASQUALITAET"
    | "STATISTISCHE_METHODE"
    | "ENERGIEMENGE_IN_UNGEMESSENEM_ZEITINTERVALL"
    | "ENERGIEMENGE_AUS_DEM_UNGEPAIRTEN_ZEITINTERVALL"
    | "AUFTEILUNG"
    | "VERWENDUNG_VON_WERTEN_DES_STOERMENGENZAEHLWERKS"
    | "UMGANGS_UND_KORREKTURMENGEN"
    | "WARTUNGSARBEITEN_AN_GEEICHTEM_MESSGERAET"
    | "GESTOERTE_WERTE"
    | "WARTUNGSARBEITEN_AN_EICHRECHTSKONFORMEN_MESSGERAETEN"
    | "KONSISTENZ_UND_SYNCHRONPRUEFUNG"
    | "RECHENWERT"
    | "ANGABEN_MESSLOKATION"
    | "BASIS_MME"
    | "GRUND_ANGABEN_MESSLOKATION"
    | "ANFORDERUNG_IN_DIE_VERGANGENHEIT_ZUM_ANGEFORDERTEN_ZEITPUNKT_LIEGT_KEIN_WERT_VOR";
  [k: string]: unknown;
} & StatusZusatzInformation1;
export type StatusZusatzInformation1 = {
  timestamp?: string | null;
  art?:
    | null
    | "VERTRAG"
    | "MESSWERTQUALITAET"
    | "MESSKLASSIFIZIERUNG"
    | "PLAUSIBILISIERUNGSHINWEIS"
    | "ERSATZWERTBILDUNGSVERFAHREN"
    | "GRUND_ERSATZWERTBILDUNGSVERFAHREN"
    | "KORREKTURGRUND"
    | "GASQUALITAET";
  guid?: string | null;
  status?:
    | null
    | "TARIF_1"
    | "TARIF_2"
    | "TARIF_3"
    | "TARIF_4"
    | "TARIF_5"
    | "TARIF_6"
    | "TARIF_7"
    | "TARIF_8"
    | "TARIF_9"
    | "ZAEHLERSTAND_ZUM_BEGINN_DER_ANGEGEBENEN_ENERGIEMENGE_VORHANDEN_UND_KOMMUNIZIERT"
    | "ZAEHLERSTAND_ZUM_ENDE_DER_ANGEGEBENEN_ENERGIEMENGE_VORHANDEN_UND_KOMMUNIZIERT"
    | "ZAEHLERSTAND_ZUM_BEGINN_DER_ANGEGEBENEN_ENERGIEMENGE_NICHT_VORHANDEN_DA_MENGENABGRENZUNG"
    | "ZAEHLERSTAND_ZUM_ENDE_DER_ANGEGEBENEN_ENERGIEMENGE_NICHT_VORHANDEN_DA_MENGENABGRENZUNG"
    | "KEIN_ZUGANG"
    | "KOMMUNIKATIONSSTOERUNG"
    | "NETZAUSFALL"
    | "SPANNUNGSAUSFALL"
    | "STATUS_GERAETEWECHSEL"
    | "KALIBRIERUNG"
    | "GERAET_ARBEITET_AUSSERHALB_DER_BETRIEBSBEDINGUNGEN"
    | "MESSEINRICHTUNG_GESTOERT_DEFEKT"
    | "UNSICHERHEIT_MESSUNG"
    | "KUNDENSELBSTABLESUNG"
    | "LEERSTAND"
    | "REALER_ZAEHLERUEBERLAUF_GEPRUEFT"
    | "PLAUSIBEL_WG_KONTROLLABLESUNG"
    | "PLAUSIBEL_WG_KUNDENHINWEIS"
    | "VERGLEICHSMESSUNG_GEEICHT"
    | "VERGLEICHSMESSUNG_NICHT_GEEICHT"
    | "MESSWERTNACHBILDUNG_AUS_GEEICHTEN_WERTEN"
    | "MESSWERTNACHBILDUNG_AUS_NICHT_GEEICHTEN_WERTEN"
    | "INTERPOLATION"
    | "HALTEWERT"
    | "BILANZIERUNG_NETZABSCHNITT"
    | "HISTORISCHE_MESSWERTE"
    | "BERUECKSICHTIGUNG_STOERMENGENZAEHLWERK"
    | "MENGENUMWERTUNG_VOLLSTAENDIG"
    | "UHRZEIT_GESTELLT_SYNCHRONISATION"
    | "MESSWERT_UNPLAUSIBEL"
    | "FALSCHER_WANDLERFAKTOR"
    | "FEHLERHAFTE_ABLESUNG"
    | "AENDERUNG_DER_BERECHNUNG"
    | "UMBAU_DER_MESSLOKATION"
    | "DATENBEARBEITUNGSFEHLER"
    | "BRENNWERTKORREKTUR"
    | "Z_ZAHL_KORREKTUR"
    | "STOERUNG_DEFEKT_MESSEINRICHTUNG"
    | "AENDERUNG_TARIFSCHALTZEITEN"
    | "TARIFSCHALTGERAET_DEFEKT"
    | "AUSTAUSCH_DES_ERSATZWERTES"
    | "IMPULSWERTIGKEIT_NICHT_AUSREICHEND"
    | "UMSTELLUNG_GASQUALITAET"
    | "STATISTISCHE_METHODE"
    | "ENERGIEMENGE_IN_UNGEMESSENEM_ZEITINTERVALL"
    | "ENERGIEMENGE_AUS_DEM_UNGEPAIRTEN_ZEITINTERVALL"
    | "AUFTEILUNG"
    | "VERWENDUNG_VON_WERTEN_DES_STOERMENGENZAEHLWERKS"
    | "UMGANGS_UND_KORREKTURMENGEN"
    | "WARTUNGSARBEITEN_AN_GEEICHTEM_MESSGERAET"
    | "GESTOERTE_WERTE"
    | "WARTUNGSARBEITEN_AN_EICHRECHTSKONFORMEN_MESSGERAETEN"
    | "KONSISTENZ_UND_SYNCHRONPRUEFUNG"
    | "RECHENWERT"
    | "ANGABEN_MESSLOKATION"
    | "BASIS_MME"
    | "GRUND_ANGABEN_MESSLOKATION"
    | "ANFORDERUNG_IN_DIE_VERGANGENHEIT_ZUM_ANGEFORDERTEN_ZEITPUNKT_LIEGT_KEIN_WERT_VOR";
  [k: string]: unknown;
} | null;
export type Verbrauch1 = {
  startdatum?: string | null;
  enddatum?: string | null;
  type?: null | "ARBEITLEISTUNGTAGESPARAMETERABHMALO" | "VERANSCHLAGTEJAHRESMENGE" | "TUMKUNDENWERT";
  tarifstufe?:
    | null
    | "TARIFSTUFE_0"
    | "TARIFSTUFE_1"
    | "TARIFSTUFE_2"
    | "TARIFSTUFE_3"
    | "TARIFSTUFE_4"
    | "TARIFSTUFE_5"
    | "TARIFSTUFE_6"
    | "TARIFSTUFE_7"
    | "TARIFSTUFE_8"
    | "TARIFSTUFE_9";
  timestamp?: string | null;
  guid?: string | null;
  wertermittlungsverfahren?: null | "PROGNOSE" | "MESSUNG";
  messwertstatus?:
    | null
    | "ABGELESEN"
    | "ERSATZWERT"
    | "VOLAEUFIGERWERT"
    | "ANGABE_FUER_LIEFERSCHEIN"
    | "VORSCHLAGSWERT"
    | "NICHT_VERWENDBAR"
    | "PROGNOSEWERT"
    | "ENERGIEMENGESUMMIERT"
    | "FEHLT";
  statuszusatzinformationen?: StatusZusatzInformation[] | null;
  obiskennzahl: string;
  wert: number;
  einheit:
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
  nutzungszeitpunkt?: string | null;
  ausfuehrungszeitpunkt?: string | null;
  [k: string]: unknown;
} | null;
export type Zeitreihenprodukt1 = {
  timestamp?: string | null;
  guid?: string | null;
  identifikation?: string | null;
  korrekturfaktor?: number | null;
  verbrauch?: Verbrauch1;
  [k: string]: unknown;
} | null;

export interface BO4EBOSummenzeitreihe {
  boTyp?: string | null;
  versionStruktur?: string | null;
  timestamp?: string | null;
  externeReferenzen?: ExterneReferenz[] | null;
  guid?: string | null;
  zaehlpunktId?: string | null;
  bilanzierungsbeginn?: string | null;
  bilanzierungsende?: string | null;
  bilanzkreis?: string | null;
  bilanzierungsgebiet?: string | null;
  regelzone?: string | null;
  bezeichnung?:
    | null
    | "BG_SZR_B"
    | "BG_SZR_C"
    | "BK_SZR_A"
    | "BK_SZR_B_RZ"
    | "BK_SZR_B_BG"
    | "BK_SZR_C"
    | "LF_SZR_A"
    | "LF_SZR_B_RZ"
    | "LF_SZR_B_BG"
    | "DZUE"
    | "NZR"
    | "ASZR";
  bezugszeitraum?:
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
  zeitreihentyp?: null | "EGS" | "LGS" | "NZR" | "SES" | "SLS" | "TES" | "TLS" | "SLS_TLS" | "SES_TES";
  marktrolle?:
    | null
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
  spannungsebene?:
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
  produkte?: Zeitreihenprodukt[] | null;
  [k: string]: unknown;
}
