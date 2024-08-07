/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

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
export type Preis = {
  wert: number;
  einheit?: null | "EUR" | "CT";
  bezugswert?:
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
  status?: null | "VORLAEUFIG" | "ENDGUELTIG";
  timestamp?: string | null;
  guid?: string | null;
  [k: string]: unknown;
} & Preis1;
export type Preis1 = {
  wert: number;
  einheit?: null | "EUR" | "CT";
  bezugswert?:
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
  status?: null | "VORLAEUFIG" | "ENDGUELTIG";
  timestamp?: string | null;
  guid?: string | null;
  [k: string]: unknown;
} | null;

export interface Sperrauftrag {
  sperrauftragsart: "SPERREN" | "ENTSPERREN";
  sperrauftragsstatus?: null | "GESCHEITERT" | "ERFOLGREICH" | "GEPLANT" | "ZUGESTIMMT" | "WIDERSPROCHEN" | "ABGELEHNT";
  sperrauftragsablehngrund?:
    | null
    | "DUPLIKAT"
    | "FALSCHER_MSB"
    | "FALSCHE_SPANNUNGSEBENE"
    | "WEITERE_MALO_BETROFFEN"
    | "ANDERER_ABLEHNGRUND"
    | "FRISTVERLETZUNG_TERMINGEBUNDEN"
    | "FRISTVERLETZUNG_NICHT_TERMINGEBUNDEN"
    | "ANDERER_FEHLER"
    | "LIEGT_BEREITS_VOR"
    | "ANDERER_ZUKUENFTIGER_LIEFERANT"
    | "BESTAETIGTER_LIEFERBEGINN";
  sperrauftragsverhinderungsgrund?:
    | null
    | "RECHTLICHER_GRUND_FEHLT"
    | "AKTIVE_ZUTRITTSVERWEIGERUNG"
    | "PASSIVE_ZUTRITTSVERWEIGERUNG"
    | "ANDERER_VERHINDERUNGSGRUND"
    | "TATSAECHLICHER_VERHINDERUNGSGRUND"
    | "TECHNISCHER_VERHINDERUNGSGRUND"
    | "ANSCHLUSSNUTZER_WURDE_NICHT_ANGETROFFEN";
  zaehlernummer?: string | null;
  istVomGerichtsvollzieherAngeordnet: boolean;
  ausfuehrungsdatum?: string | null;
  boTyp?: string | null;
  fertigstellungsdatum?: string | null;
  versionStruktur?: string | null;
  sparte?: null | "STROM" | "GAS" | "FERNWAERME" | "NAHWAERME" | "WASSER" | "ABWASSER";
  timestamp?: string | null;
  lieferanschrift?: Adresse;
  externeReferenzen?: ExterneReferenz[] | null;
  marktlokationsId: string;
  guid?: string | null;
  bemerkungen?: (string | null)[] | null;
  mindestpreis?: Preis;
  hoechstpreis?: Preis;
  [k: string]: unknown;
}
