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
export type Geschaeftspartner = {
  boTyp?: string | null;
  versionStruktur?: string | null;
  timestamp?: string | null;
  externeReferenzen?: ExterneReferenz[] | null;
  guid?: string | null;
  anrede?:
    | null
    | "HERR"
    | "FRAU"
    | "EHELEUTE"
    | "FIRMA"
    | "INDIVIDUELL"
    | "FAMILIE"
    | "ERBENGEMEINSCHAFT"
    | "WOHNGEMEINSCHAFT"
    | "GRUNDSTUECKGEMEINSCHAFT"
    | "DR";
  title?: string | null;
  name1?: string | null;
  name2?: string | null;
  name3?: string | null;
  gewerbekennzeichnung: boolean;
  hrnummer?: string | null;
  amtsgericht?: string | null;
  kontaktweg?: ("ANSCHREIBEN" | "TELEFONAT" | "FAX" | "E_MAIL" | "SMS")[] | null;
  umsatzsteuerId?: string | null;
  glaeubigerId?: string | null;
  eMailAdresse?: string | null;
  website?: string | null;
  geschaeftspartnerrolle?: ("LIEFERANT" | "DIENSTLEISTER" | "KUNDE" | "INTERESSENT" | "MARKTPARTNER")[] | null;
  partneradresse?: Adresse;
  grundlageZurVerringerungDerUmlagenNachEnfg?:
    | null
    | "KUNDE_ERFUELLT_VORAUSSETZUNG"
    | "KUNDE_ERFUELLT_VORAUSSETZUNG_NICHT"
    | "KEINE_ANGABE";
  grundDerPrivilegierungNachEnFG?:
    | null
    | "STROMSPEICHER_UND_VERLUSTENERGIE"
    | "ELEKTRISCH_ANGETRIEBENE_WAERMEPUMPEN"
    | "UMLAGEERHEBUNG_BEI_ANLAGEN_ZUR_VERSTROMUNG_VON_KUPPELGASEN"
    | "HERSTELLUNG_VON_GRUENEN_WASSERSTOFF"
    | "STROMKOSTENINTENSIVE_UNTERNEHMEN"
    | "HERSTELLUNG_VON_WASSERSTOFF_IN_STROMKOSTENINTENSIVEN_UNTERNEHMEN"
    | "SCHIENENBAHNEN"
    | "ELEKTRISCHE_BETRIEBENE_BUSSEN_IM_LINIENVERKEHR"
    | "LANDSTROMANLAGEN";
  bankverbindung?: Bankverbindung;
  steuernummer?: string | null;
  erreichbarkeit?: Erreichbarkeit;
  [k: string]: unknown;
} & Geschaeftspartner1;
export type Adresse = {
  timestamp?: string | null;
  guid?: string | null;
  postleitzahl: string;
  ort: string;
  strasse?: string | null;
  hausnummer?: string | null;
  postfach?: string | null;
  adresszusatz?: string | null;
  coErgaenzung?: string | null;
  landescode?:
    | null
    | "AC"
    | "AD"
    | "AE"
    | "AF"
    | "AG"
    | "AI"
    | "AL"
    | "AM"
    | "AN"
    | "AO"
    | "AQ"
    | "AR"
    | "AS"
    | "AT"
    | "AU"
    | "AW"
    | "AX"
    | "AZ"
    | "BA"
    | "BB"
    | "BD"
    | "BE"
    | "BF"
    | "BG"
    | "BH"
    | "BI"
    | "BJ"
    | "BL"
    | "BM"
    | "BN"
    | "BO"
    | "BQ"
    | "BR"
    | "BS"
    | "BT"
    | "BU"
    | "BV"
    | "BW"
    | "BY"
    | "BZ"
    | "CA"
    | "CC"
    | "CD"
    | "CF"
    | "CG"
    | "CH"
    | "CI"
    | "CK"
    | "CL"
    | "CM"
    | "CN"
    | "CO"
    | "CP"
    | "CR"
    | "CS"
    | "CU"
    | "CV"
    | "CW"
    | "CX"
    | "CY"
    | "CZ"
    | "DE"
    | "DG"
    | "DJ"
    | "DK"
    | "DM"
    | "DO"
    | "DZ"
    | "EA"
    | "EC"
    | "EE"
    | "EG"
    | "EH"
    | "ER"
    | "ES"
    | "ET"
    | "EU"
    | "FI"
    | "FJ"
    | "FK"
    | "FM"
    | "FO"
    | "FR"
    | "FX"
    | "GA"
    | "GB"
    | "GD"
    | "GE"
    | "GF"
    | "GG"
    | "GH"
    | "GI"
    | "GL"
    | "GM"
    | "GN"
    | "GP"
    | "GQ"
    | "GR"
    | "GS"
    | "GT"
    | "GU"
    | "GW"
    | "GY"
    | "HK"
    | "HM"
    | "HN"
    | "HR"
    | "HT"
    | "HU"
    | "IC"
    | "ID"
    | "IE"
    | "IL"
    | "IM"
    | "IN"
    | "IO"
    | "IQ"
    | "IR"
    | "IS"
    | "IT"
    | "JE"
    | "JM"
    | "JO"
    | "JP"
    | "KE"
    | "KG"
    | "KH"
    | "KI"
    | "KM"
    | "KN"
    | "KP"
    | "KR"
    | "KW"
    | "KY"
    | "KZ"
    | "LA"
    | "LB"
    | "LC"
    | "LI"
    | "LK"
    | "LR"
    | "LS"
    | "LT"
    | "LU"
    | "LV"
    | "LY"
    | "MA"
    | "MC"
    | "MD"
    | "ME"
    | "MF"
    | "MG"
    | "MH"
    | "MK"
    | "ML"
    | "MM"
    | "MN"
    | "MO"
    | "MP"
    | "MQ"
    | "MR"
    | "MS"
    | "MT"
    | "MU"
    | "MV"
    | "MW"
    | "MX"
    | "MY"
    | "MZ"
    | "NA"
    | "NC"
    | "NE"
    | "NF"
    | "NG"
    | "NI"
    | "NL"
    | "NO"
    | "NP"
    | "NR"
    | "NT"
    | "NU"
    | "NZ"
    | "OM"
    | "PA"
    | "PE"
    | "PF"
    | "PG"
    | "PH"
    | "PK"
    | "PL"
    | "PM"
    | "PN"
    | "PR"
    | "PS"
    | "PT"
    | "PW"
    | "PY"
    | "QA"
    | "RE"
    | "RO"
    | "RS"
    | "RU"
    | "RW"
    | "SA"
    | "SB"
    | "SC"
    | "SD"
    | "SE"
    | "SF"
    | "SG"
    | "SH"
    | "SI"
    | "SJ"
    | "SK"
    | "SL"
    | "SM"
    | "SN"
    | "SO"
    | "SR"
    | "SS"
    | "ST"
    | "SU"
    | "SV"
    | "SX"
    | "SY"
    | "SZ"
    | "TA"
    | "TC"
    | "TD"
    | "TF"
    | "TG"
    | "TJ"
    | "TK"
    | "TL"
    | "TM"
    | "TN"
    | "TO"
    | "TP"
    | "TR"
    | "TT"
    | "TV"
    | "TW"
    | "TZ"
    | "UA"
    | "UG"
    | "UK"
    | "UM"
    | "US"
    | "UY"
    | "UZ"
    | "VA"
    | "VC"
    | "VE"
    | "VG"
    | "VI"
    | "VN"
    | "VU"
    | "WF"
    | "WS"
    | "XK"
    | "YE"
    | "YT"
    | "YU"
    | "ZA"
    | "ZM"
    | "ZR"
    | "ZW";
  ortsteil?: string | null;
  [k: string]: unknown;
} & Adresse1;
export type Adresse1 = {
  timestamp?: string | null;
  guid?: string | null;
  postleitzahl: string;
  ort: string;
  strasse?: string | null;
  hausnummer?: string | null;
  postfach?: string | null;
  adresszusatz?: string | null;
  coErgaenzung?: string | null;
  landescode?:
    | null
    | "AC"
    | "AD"
    | "AE"
    | "AF"
    | "AG"
    | "AI"
    | "AL"
    | "AM"
    | "AN"
    | "AO"
    | "AQ"
    | "AR"
    | "AS"
    | "AT"
    | "AU"
    | "AW"
    | "AX"
    | "AZ"
    | "BA"
    | "BB"
    | "BD"
    | "BE"
    | "BF"
    | "BG"
    | "BH"
    | "BI"
    | "BJ"
    | "BL"
    | "BM"
    | "BN"
    | "BO"
    | "BQ"
    | "BR"
    | "BS"
    | "BT"
    | "BU"
    | "BV"
    | "BW"
    | "BY"
    | "BZ"
    | "CA"
    | "CC"
    | "CD"
    | "CF"
    | "CG"
    | "CH"
    | "CI"
    | "CK"
    | "CL"
    | "CM"
    | "CN"
    | "CO"
    | "CP"
    | "CR"
    | "CS"
    | "CU"
    | "CV"
    | "CW"
    | "CX"
    | "CY"
    | "CZ"
    | "DE"
    | "DG"
    | "DJ"
    | "DK"
    | "DM"
    | "DO"
    | "DZ"
    | "EA"
    | "EC"
    | "EE"
    | "EG"
    | "EH"
    | "ER"
    | "ES"
    | "ET"
    | "EU"
    | "FI"
    | "FJ"
    | "FK"
    | "FM"
    | "FO"
    | "FR"
    | "FX"
    | "GA"
    | "GB"
    | "GD"
    | "GE"
    | "GF"
    | "GG"
    | "GH"
    | "GI"
    | "GL"
    | "GM"
    | "GN"
    | "GP"
    | "GQ"
    | "GR"
    | "GS"
    | "GT"
    | "GU"
    | "GW"
    | "GY"
    | "HK"
    | "HM"
    | "HN"
    | "HR"
    | "HT"
    | "HU"
    | "IC"
    | "ID"
    | "IE"
    | "IL"
    | "IM"
    | "IN"
    | "IO"
    | "IQ"
    | "IR"
    | "IS"
    | "IT"
    | "JE"
    | "JM"
    | "JO"
    | "JP"
    | "KE"
    | "KG"
    | "KH"
    | "KI"
    | "KM"
    | "KN"
    | "KP"
    | "KR"
    | "KW"
    | "KY"
    | "KZ"
    | "LA"
    | "LB"
    | "LC"
    | "LI"
    | "LK"
    | "LR"
    | "LS"
    | "LT"
    | "LU"
    | "LV"
    | "LY"
    | "MA"
    | "MC"
    | "MD"
    | "ME"
    | "MF"
    | "MG"
    | "MH"
    | "MK"
    | "ML"
    | "MM"
    | "MN"
    | "MO"
    | "MP"
    | "MQ"
    | "MR"
    | "MS"
    | "MT"
    | "MU"
    | "MV"
    | "MW"
    | "MX"
    | "MY"
    | "MZ"
    | "NA"
    | "NC"
    | "NE"
    | "NF"
    | "NG"
    | "NI"
    | "NL"
    | "NO"
    | "NP"
    | "NR"
    | "NT"
    | "NU"
    | "NZ"
    | "OM"
    | "PA"
    | "PE"
    | "PF"
    | "PG"
    | "PH"
    | "PK"
    | "PL"
    | "PM"
    | "PN"
    | "PR"
    | "PS"
    | "PT"
    | "PW"
    | "PY"
    | "QA"
    | "RE"
    | "RO"
    | "RS"
    | "RU"
    | "RW"
    | "SA"
    | "SB"
    | "SC"
    | "SD"
    | "SE"
    | "SF"
    | "SG"
    | "SH"
    | "SI"
    | "SJ"
    | "SK"
    | "SL"
    | "SM"
    | "SN"
    | "SO"
    | "SR"
    | "SS"
    | "ST"
    | "SU"
    | "SV"
    | "SX"
    | "SY"
    | "SZ"
    | "TA"
    | "TC"
    | "TD"
    | "TF"
    | "TG"
    | "TJ"
    | "TK"
    | "TL"
    | "TM"
    | "TN"
    | "TO"
    | "TP"
    | "TR"
    | "TT"
    | "TV"
    | "TW"
    | "TZ"
    | "UA"
    | "UG"
    | "UK"
    | "UM"
    | "US"
    | "UY"
    | "UZ"
    | "VA"
    | "VC"
    | "VE"
    | "VG"
    | "VI"
    | "VN"
    | "VU"
    | "WF"
    | "WS"
    | "XK"
    | "YE"
    | "YT"
    | "YU"
    | "ZA"
    | "ZM"
    | "ZR"
    | "ZW";
  ortsteil?: string | null;
  [k: string]: unknown;
} | null;
export type Bankverbindung = {
  timestamp?: string | null;
  guid?: string | null;
  iban?: string | null;
  kontoinhaber?: string | null;
  bankkennung?: string | null;
  bankname?: string | null;
  [k: string]: unknown;
} & Bankverbindung1;
export type Bankverbindung1 = {
  timestamp?: string | null;
  guid?: string | null;
  iban?: string | null;
  kontoinhaber?: string | null;
  bankkennung?: string | null;
  bankname?: string | null;
  [k: string]: unknown;
} | null;
export type Erreichbarkeit = {
  timestamp?: string | null;
  guid?: string | null;
  montagErreichbarkeit?: Zeitfenster;
  dienstagErreichbarkeit?: Zeitfenster;
  mittwochErreichbarkeit?: Zeitfenster;
  donnerstagErreichbarkeit?: Zeitfenster;
  freitagErreichbarkeit?: Zeitfenster;
  mittagspause?: Zeitfenster;
  [k: string]: unknown;
} & Erreichbarkeit1;
export type Zeitfenster = {
  timestamp?: string | null;
  guid?: string | null;
  startzeit?: string | null;
  endzeit?: string | null;
  [k: string]: unknown;
} & Zeitfenster1;
export type Zeitfenster1 = {
  timestamp?: string | null;
  guid?: string | null;
  startzeit?: string | null;
  endzeit?: string | null;
  [k: string]: unknown;
} | null;
export type Erreichbarkeit1 = {
  timestamp?: string | null;
  guid?: string | null;
  montagErreichbarkeit?: Zeitfenster;
  dienstagErreichbarkeit?: Zeitfenster;
  mittwochErreichbarkeit?: Zeitfenster;
  donnerstagErreichbarkeit?: Zeitfenster;
  freitagErreichbarkeit?: Zeitfenster;
  mittagspause?: Zeitfenster;
  [k: string]: unknown;
} | null;
export type Geschaeftspartner1 = {
  boTyp?: string | null;
  versionStruktur?: string | null;
  timestamp?: string | null;
  externeReferenzen?: ExterneReferenz[] | null;
  guid?: string | null;
  anrede?:
    | null
    | "HERR"
    | "FRAU"
    | "EHELEUTE"
    | "FIRMA"
    | "INDIVIDUELL"
    | "FAMILIE"
    | "ERBENGEMEINSCHAFT"
    | "WOHNGEMEINSCHAFT"
    | "GRUNDSTUECKGEMEINSCHAFT"
    | "DR";
  title?: string | null;
  name1?: string | null;
  name2?: string | null;
  name3?: string | null;
  gewerbekennzeichnung: boolean;
  hrnummer?: string | null;
  amtsgericht?: string | null;
  kontaktweg?: ("ANSCHREIBEN" | "TELEFONAT" | "FAX" | "E_MAIL" | "SMS")[] | null;
  umsatzsteuerId?: string | null;
  glaeubigerId?: string | null;
  eMailAdresse?: string | null;
  website?: string | null;
  geschaeftspartnerrolle?: ("LIEFERANT" | "DIENSTLEISTER" | "KUNDE" | "INTERESSENT" | "MARKTPARTNER")[] | null;
  partneradresse?: Adresse;
  grundlageZurVerringerungDerUmlagenNachEnfg?:
    | null
    | "KUNDE_ERFUELLT_VORAUSSETZUNG"
    | "KUNDE_ERFUELLT_VORAUSSETZUNG_NICHT"
    | "KEINE_ANGABE";
  grundDerPrivilegierungNachEnFG?:
    | null
    | "STROMSPEICHER_UND_VERLUSTENERGIE"
    | "ELEKTRISCH_ANGETRIEBENE_WAERMEPUMPEN"
    | "UMLAGEERHEBUNG_BEI_ANLAGEN_ZUR_VERSTROMUNG_VON_KUPPELGASEN"
    | "HERSTELLUNG_VON_GRUENEN_WASSERSTOFF"
    | "STROMKOSTENINTENSIVE_UNTERNEHMEN"
    | "HERSTELLUNG_VON_WASSERSTOFF_IN_STROMKOSTENINTENSIVEN_UNTERNEHMEN"
    | "SCHIENENBAHNEN"
    | "ELEKTRISCHE_BETRIEBENE_BUSSEN_IM_LINIENVERKEHR"
    | "LANDSTROMANLAGEN";
  bankverbindung?: Bankverbindung;
  steuernummer?: string | null;
  erreichbarkeit?: Erreichbarkeit;
  [k: string]: unknown;
} | null;
export type Unterschrift = {
  ort?: string | null;
  datum?: string | null;
  name: string;
  timestamp?: string | null;
  guid?: string | null;
  [k: string]: unknown;
} & Unterschrift1;
export type Unterschrift1 = {
  ort?: string | null;
  datum?: string | null;
  name: string;
  timestamp?: string | null;
  guid?: string | null;
  [k: string]: unknown;
} | null;
export type Vertragskonditionen = {
  timestamp?: string | null;
  guid?: string | null;
  beschreibung?: string | null;
  anzahlAbschlaege?: number | null;
  vertragslaufzeit?: Zeitraum;
  kuendigungsfrist?: Zeitraum;
  vertragsverlaengerung?: Zeitraum;
  abschlagszyklus?: Zeitraum;
  startAbrechnungsjahr?: string | null;
  geplanteTurnusablesung?: Zeitraum;
  turnusablesungIntervall?: number | null;
  netznutzungsabrechnung?: Zeitraum;
  netznutzungsabrechnungIntervall?: number | null;
  haushaltskunde?: boolean | null;
  netznutzungsvertrag?: null | "KUNDEN_NB" | "LIEFERANTEN_NB";
  netznutzungszahler?: null | "KUNDE" | "LIEFERANT";
  netznutzungsabrechnungsvariante?: null | "ARBEITSPREIS_GRUNDPREIS" | "ARBEITSPREIS_LEISTUNGSPREIS";
  netznutzungsabrechnungsgrundlage?: null | "LIEFERSCHEIN" | "ABWEICHENDE_GRUNDLAGE";
  beinhaltetSingulaerGenutzteBetriebsmittel?: boolean | null;
  [k: string]: unknown;
} & Vertragskonditionen1;
export type Zeitraum = {
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
} & Zeitraum1;
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
} | null;
export type Vertragskonditionen1 = {
  timestamp?: string | null;
  guid?: string | null;
  beschreibung?: string | null;
  anzahlAbschlaege?: number | null;
  vertragslaufzeit?: Zeitraum;
  kuendigungsfrist?: Zeitraum;
  vertragsverlaengerung?: Zeitraum;
  abschlagszyklus?: Zeitraum;
  startAbrechnungsjahr?: string | null;
  geplanteTurnusablesung?: Zeitraum;
  turnusablesungIntervall?: number | null;
  netznutzungsabrechnung?: Zeitraum;
  netznutzungsabrechnungIntervall?: number | null;
  haushaltskunde?: boolean | null;
  netznutzungsvertrag?: null | "KUNDEN_NB" | "LIEFERANTEN_NB";
  netznutzungszahler?: null | "KUNDE" | "LIEFERANT";
  netznutzungsabrechnungsvariante?: null | "ARBEITSPREIS_GRUNDPREIS" | "ARBEITSPREIS_LEISTUNGSPREIS";
  netznutzungsabrechnungsgrundlage?: null | "LIEFERSCHEIN" | "ABWEICHENDE_GRUNDLAGE";
  beinhaltetSingulaerGenutzteBetriebsmittel?: boolean | null;
  [k: string]: unknown;
} | null;
export type Vertragsteil = {
  vertragsteilbeginn?: string | null;
  vertragsteilende?: string | null;
  lokation?: string | null;
  vertraglichFixierteMenge?: Menge;
  minimaleAbnahmemenge?: Menge;
  maximaleAbnahmemenge?: Menge;
  jahresverbrauchsprognose?: Menge;
  kundenwert?: Menge;
  verbrauchsaufteilung?: string | null;
  timestamp?: string | null;
  guid?: string | null;
  [k: string]: unknown;
} & Vertragsteil1;
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
export type Vertragsteil1 = {
  vertragsteilbeginn?: string | null;
  vertragsteilende?: string | null;
  lokation?: string | null;
  vertraglichFixierteMenge?: Menge;
  minimaleAbnahmemenge?: Menge;
  maximaleAbnahmemenge?: Menge;
  jahresverbrauchsprognose?: Menge;
  kundenwert?: Menge;
  verbrauchsaufteilung?: string | null;
  timestamp?: string | null;
  guid?: string | null;
  [k: string]: unknown;
} | null;

export interface Vertrag {
  boTyp?: string | null;
  versionStruktur?: string | null;
  timestamp?: string | null;
  externeReferenzen?: ExterneReferenz[] | null;
  guid?: string | null;
  vertragsnummer?: string | null;
  beschreibung?: string | null;
  vertragsart?:
    | null
    | "ENERGIELIEFERVERTRAG"
    | "NETZNUTZUNGSVERTRAG"
    | "BILANZIERUNGSVERTRAG"
    | "MESSSTELLENBETRIEBSVERTRAG"
    | "BUENDELVERTRAG";
  vertragstatus?:
    | null
    | "IN_ARBEIT"
    | "UEBERMITTELT"
    | "ANGENOMMEN"
    | "AKTIV"
    | "ABGELEHNT"
    | "WIDERRUFEN"
    | "STORNIERT"
    | "GEKUENDIGT"
    | "BEENDET";
  sparte: "STROM" | "GAS" | "FERNWAERME" | "NAHWAERME" | "WASSER" | "ABWASSER";
  vertragsbeginn: string;
  vertragsende?: string | null;
  vertragspartner1?: Geschaeftspartner;
  vertragspartner2?: Geschaeftspartner;
  unterzeichnervp1?: Unterschrift[] | null;
  unterzeichnervp2?: Unterschrift[] | null;
  vertragskonditionen?: Vertragskonditionen;
  vertragsteile?: Vertragsteil[] | null;
  gemeinderabatt?: number | null;
  korrespondenzpartner?: Geschaeftspartner;
  [k: string]: unknown;
}
