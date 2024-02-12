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
export type Konfigurationsprodukt = {
  timestamp?: string | null;
  produktcode?: string | null;
  guid?: string | null;
  leistungskurvendefinition?: string | null;
  schaltzeitdefinition?: string | null;
  marktpartner?: Marktteilnehmer;
  [k: string]: unknown;
} & Konfigurationsprodukt1;
export type Marktteilnehmer = {
  boTyp?: string | null;
  versionStruktur?: string | null;
  timestamp?: string | null;
  externeReferenzen?: ExterneReferenz1[] | null;
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
    | "GMSB";
  rollencodenummer: string;
  rollencodetyp: "ZERO" | "GLN" | "BDEW" | "DVGW";
  makoadresse?: string | null;
  ansprechpartner?: Ansprechpartner;
  [k: string]: unknown;
} & Marktteilnehmer1;
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
export type Ansprechpartner = {
  boTyp?: string | null;
  versionStruktur?: string | null;
  timestamp?: string | null;
  externeReferenzen?: ExterneReferenz1[] | null;
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
  inviduelleAnrede?: string | null;
  titel?: null | "DR" | "PROF" | "PROF_DR";
  vorname?: string | null;
  nachname?: string | null;
  eMailAdresse?: string | null;
  kommentar?: string | null;
  geschaeftspartner?: Geschaeftspartner;
  adresse?: Adresse1;
  rufnummern?: Rufnummer[] | null;
  zustaendigkeit?: Zustaendigkeit[] | null;
  [k: string]: unknown;
} & Ansprechpartner1;
export type Geschaeftspartner = {
  boTyp?: string | null;
  versionStruktur?: string | null;
  timestamp?: string | null;
  externeReferenzen?: ExterneReferenz1[] | null;
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
  partneradresse?: Adresse1;
  grundlageZurVerringerungDerUmlagenNachEnfg?:
    | null
    | "KUNDE_ERFUELLT_VORAUSSETZUNG"
    | "KUNDE_ERFUELLT_VORAUSSETZUNG_NICHT"
    | "KEINE_ANGABE";
  [k: string]: unknown;
} & Geschaeftspartner1;
export type Geschaeftspartner1 = {
  boTyp?: string | null;
  versionStruktur?: string | null;
  timestamp?: string | null;
  externeReferenzen?: ExterneReferenz1[] | null;
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
  partneradresse?: Adresse1;
  grundlageZurVerringerungDerUmlagenNachEnfg?:
    | null
    | "KUNDE_ERFUELLT_VORAUSSETZUNG"
    | "KUNDE_ERFUELLT_VORAUSSETZUNG_NICHT"
    | "KEINE_ANGABE";
  [k: string]: unknown;
} | null;
export type Rufnummer = {
  nummerntyp:
    | "RUF_ZENTRALE"
    | "FAX_ZENTRALE"
    | "SAMMELRUF"
    | "SAMMELFAX"
    | "ABTEILUNGRUF"
    | "ABTEILUNGFAX"
    | "RUF_DURCHWAHL"
    | "FAX_DURCHWAHL"
    | "MOBIL_NUMMER";
  rufnummer: string;
  timestamp?: string | null;
  guid?: string | null;
  [k: string]: unknown;
} & Rufnummer1;
export type Rufnummer1 = {
  nummerntyp:
    | "RUF_ZENTRALE"
    | "FAX_ZENTRALE"
    | "SAMMELRUF"
    | "SAMMELFAX"
    | "ABTEILUNGRUF"
    | "ABTEILUNGFAX"
    | "RUF_DURCHWAHL"
    | "FAX_DURCHWAHL"
    | "MOBIL_NUMMER";
  rufnummer: string;
  timestamp?: string | null;
  guid?: string | null;
  [k: string]: unknown;
} | null;
export type Zustaendigkeit = {
  jobtitel?: string | null;
  abteilung?: string | null;
  themengebiet?: string | null;
  timestamp?: string | null;
  guid?: string | null;
  [k: string]: unknown;
} & Zustaendigkeit1;
export type Zustaendigkeit1 = {
  jobtitel?: string | null;
  abteilung?: string | null;
  themengebiet?: string | null;
  timestamp?: string | null;
  guid?: string | null;
  [k: string]: unknown;
} | null;
export type Ansprechpartner1 = {
  boTyp?: string | null;
  versionStruktur?: string | null;
  timestamp?: string | null;
  externeReferenzen?: ExterneReferenz1[] | null;
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
  inviduelleAnrede?: string | null;
  titel?: null | "DR" | "PROF" | "PROF_DR";
  vorname?: string | null;
  nachname?: string | null;
  eMailAdresse?: string | null;
  kommentar?: string | null;
  geschaeftspartner?: Geschaeftspartner1;
  adresse?: Adresse1;
  rufnummern?: Rufnummer[] | null;
  zustaendigkeit?: Zustaendigkeit[] | null;
  [k: string]: unknown;
} | null;
export type Marktteilnehmer1 = {
  boTyp?: string | null;
  versionStruktur?: string | null;
  timestamp?: string | null;
  externeReferenzen?: ExterneReferenz1[] | null;
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
  partneradresse?: Adresse1;
  grundlageZurVerringerungDerUmlagenNachEnfg?:
    | null
    | "KUNDE_ERFUELLT_VORAUSSETZUNG"
    | "KUNDE_ERFUELLT_VORAUSSETZUNG_NICHT"
    | "KEINE_ANGABE";
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
    | "GMSB";
  rollencodenummer: string;
  rollencodetyp: "ZERO" | "GLN" | "BDEW" | "DVGW";
  makoadresse?: string | null;
  ansprechpartner?: Ansprechpartner1;
  [k: string]: unknown;
} | null;
export type Konfigurationsprodukt1 = {
  timestamp?: string | null;
  produktcode?: string | null;
  guid?: string | null;
  leistungskurvendefinition?: string | null;
  schaltzeitdefinition?: string | null;
  marktpartner?: Marktteilnehmer1;
  [k: string]: unknown;
} | null;

export interface BO4EBOSteuerbareRessource {
  boTyp?: string | null;
  versionStruktur?: string | null;
  timestamp?: string | null;
  externeReferenzen?: ExterneReferenz[] | null;
  guid?: string | null;
  steuerbareRessourceId: string;
  steuerkanalsLeistungsbeschreibung?: null | "AN_AUS" | "GESTUFT";
  zugeordnetMSBCodeNr?: string | null;
  konfigurationsprodukte?: Konfigurationsprodukt[] | null;
  [k: string]: unknown;
}
