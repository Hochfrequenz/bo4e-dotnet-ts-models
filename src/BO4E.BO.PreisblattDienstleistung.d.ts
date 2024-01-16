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
  sigmoidparameter?: Sigmoidparameter1;
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
  zu_abschlaege?: PositionsAufAbschlag1;
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
  verarbeitungszeitraum?: Zeitraum11;
  artikelId?: string | null;
  [k: string]: unknown;
} | null;

export interface BO4EBOPreisblattDienstleistung {
  boTyp?: string | null;
  versionStruktur?: string | null;
  timestamp?: string | null;
  externeReferenzen?: ExterneReferenz[] | null;
  guid?: string | null;
  dienstleistungsdetails:
    | "DATENBEREITSTELLUNG_TAEGLICH"
    | "DATENBEREITSTELLUNG_WOECHENTLICH"
    | "DATENBEREITSTELLUNG_MONATLICH"
    | "DATENBEREITSTELLUNG_JAEHRLICH"
    | "DATENBEREITSTELLUNG_HISTORISCHE_LG"
    | "DATENBEREITSTELLUNG_STUENDLICH"
    | "DATENBEREITSTELLUNG_VIERTELJAEHRLICH"
    | "DATENBEREITSTELLUNG_HALBJAEHRLICH"
    | "DATENBEREITSTELLUNG_MONATLICH_ZUSAETZLICH"
    | "DATENBEREITSTELLUNG_EINMALIG"
    | "AUSLESUNG_2X_TAEGLICH_FERNAUSLESUNG"
    | "AUSLESUNG_TAEGLICH_FERNAUSLESUNG"
    | "AUSLESUNG_LGK_MANUELL_MSB"
    | "AUSLESUNG_MONATLICH_SLP_FERNAUSLESUNG"
    | "AUSLESUNG_JAEHRLICH_SLP_FERNAUSLESUNG"
    | "AUSLESUNG_MDE_SLP"
    | "ABLESUNG_MONATLICH_SLP"
    | "ABLESUNG_VIERTELJAEHRLICH_SLP"
    | "ABLESUNG_HALBJAEHRLICH_SLP"
    | "ABLESUNG_JAEHRLICH_SLP"
    | "AUSLESUNG_SLP_FERNAUSLESUNG"
    | "ABLESUNG_SLP_ZUSAETZLICH_MSB"
    | "ABLESUNG_SLP_ZUSAETZLICH_KUNDE"
    | "AUSLESUNG_LGK_FERNAUSLESUNG_ZUSAETZLICH_MSB"
    | "AUSLESUNG_MOATLICH_FERNAUSLESUNG"
    | "AUSLESUNG_STUENDLICH_FERNAUSLESUNG"
    | "ABLESUNG_MONATLICH_LGK"
    | "AUSLESUNG_TEMERATURMENGENUMWERTER"
    | "AUSLESUNG_ZUSTANDSMENGENUMWERTER"
    | "AUSLESUNG_SYSTEMMENGENUMWERTER"
    | "AUSLESUNG_VORGANG_SLP"
    | "AUSLESUUNG_KOMPAKTMENGENUMWERTER"
    | "AUSLESUNG_MDE_LGK"
    | "SPERRUNG_SLP"
    | "ENTSPERRUNG_SLP"
    | "SPERRUNG_RLM"
    | "ENTSPERRUNG_RLM"
    | "MAHNKOSTEN"
    | "INKASSOKOSTEN";
  geraetedetails?: null | "RLM" | "SLP" | "TLP_GEMEINSAM" | "TLP_GETRENNT" | "PAUSCHAL" | "IMS";
  herausgeber: Marktteilnehmer;
  bezeichnung: string;
  gueltigkeit: Zeitraum;
  preispositionen: Preisposition[];
  preisstatus?: null | "VORLAEUFIG" | "ENDGUELTIG";
  sparte?: null | "STROM" | "GAS" | "FERNWAERME" | "NAHWAERME" | "WASSER" | "ABWASSER";
  [k: string]: unknown;
}
export interface Marktteilnehmer {
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
