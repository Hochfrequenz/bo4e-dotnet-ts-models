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
export type Geokoordinaten = {
  breitengrad: number;
  laengengrad: number;
  timestamp?: string | null;
  guid?: string | null;
  [k: string]: unknown;
} & Geokoordinaten1;
export type Geokoordinaten1 = {
  breitengrad: number;
  laengengrad: number;
  timestamp?: string | null;
  guid?: string | null;
  [k: string]: unknown;
} | null;
export type Katasteradresse = {
  gemarkung_flur: string;
  flurstueck: string;
  timestamp?: string | null;
  guid?: string | null;
  [k: string]: unknown;
} & Katasteradresse1;
export type Katasteradresse1 = {
  gemarkung_flur: string;
  flurstueck: string;
  timestamp?: string | null;
  guid?: string | null;
  [k: string]: unknown;
} | null;
export type Hardware = {
  geraetetyp?:
    | null
    | "WECHSELSTROMZAEHLER"
    | "DREHSTROMZAEHLER"
    | "ZWEIRICHTUNGSZAEHLER"
    | "RLM_ZAEHLER"
    | "IMS_ZAEHLER"
    | "BALGENGASZAEHLER"
    | "MAXIMUMZAEHLER"
    | "MULTIPLEXANLAGE"
    | "PAUSCHALANLAGE"
    | "VERSTAERKERANLAGE"
    | "SUMMATIONSGERAET"
    | "IMPULSGEBER"
    | "EDL_21_ZAEHLERAUFSATZ"
    | "VIER_QUADRANTEN_LASTGANGZAEHLER"
    | "MENGENUMWERTER"
    | "STROMWANDLER"
    | "SPANNUNGSWANDLER"
    | "DATENLOGGER"
    | "KOMMUNIKATIONSANSCHLUSS"
    | "MODEM"
    | "TELEKOMMUNIKATIONSEINRICHTUNG"
    | "DREHKOLBENGASZAEHLER"
    | "TURBINENRADGASZAEHLER"
    | "ULTRASCHALLZAEHLER"
    | "WIRBELGASZAEHLER"
    | "MODERNE_MESSEINRICHTUNG"
    | "ELEKTRONISCHER_HAUSHALTSZAEHLER"
    | "STEUEREINRICHTUNG"
    | "TECHNISCHESTEUEREINRICHTUNG"
    | "TARIFSCHALTGERAET"
    | "RUNDSTEUEREMPFAENGER"
    | "OPTIONALE_ZUS_ZAEHLEINRICHTUNG"
    | "MESSWANDLERSATZ_IMS_MME"
    | "KOMBIMESSWANDLER_IMS_MME"
    | "TARIFSCHALTGERAET_IMS_MME"
    | "RUNDSTEUEREMPFAENGER_IMS_MME"
    | "TEMPERATUR_KOMPENSATION"
    | "HOECHSTBELASTUNGS_ANZEIGER"
    | "SONSTIGES_GERAET"
    | "SMARTMETERGATEWAY"
    | "STEUERBOX"
    | "BLOCKSTROMWANDLER"
    | "KOMBIMESSWANDLER";
  bezeichnung: string;
  geraeteeigenschaften?: Geraeteeigenschaften;
  geraetenummer?: string | null;
  geraetereferenz?: string | null;
  timestamp?: string | null;
  guid?: string | null;
  [k: string]: unknown;
} & Hardware1;
export type Geraeteeigenschaften = {
  timestamp?: string | null;
  guid?: string | null;
  geraetetyp:
    | "WECHSELSTROMZAEHLER"
    | "DREHSTROMZAEHLER"
    | "ZWEIRICHTUNGSZAEHLER"
    | "RLM_ZAEHLER"
    | "IMS_ZAEHLER"
    | "BALGENGASZAEHLER"
    | "MAXIMUMZAEHLER"
    | "MULTIPLEXANLAGE"
    | "PAUSCHALANLAGE"
    | "VERSTAERKERANLAGE"
    | "SUMMATIONSGERAET"
    | "IMPULSGEBER"
    | "EDL_21_ZAEHLERAUFSATZ"
    | "VIER_QUADRANTEN_LASTGANGZAEHLER"
    | "MENGENUMWERTER"
    | "STROMWANDLER"
    | "SPANNUNGSWANDLER"
    | "DATENLOGGER"
    | "KOMMUNIKATIONSANSCHLUSS"
    | "MODEM"
    | "TELEKOMMUNIKATIONSEINRICHTUNG"
    | "DREHKOLBENGASZAEHLER"
    | "TURBINENRADGASZAEHLER"
    | "ULTRASCHALLZAEHLER"
    | "WIRBELGASZAEHLER"
    | "MODERNE_MESSEINRICHTUNG"
    | "ELEKTRONISCHER_HAUSHALTSZAEHLER"
    | "STEUEREINRICHTUNG"
    | "TECHNISCHESTEUEREINRICHTUNG"
    | "TARIFSCHALTGERAET"
    | "RUNDSTEUEREMPFAENGER"
    | "OPTIONALE_ZUS_ZAEHLEINRICHTUNG"
    | "MESSWANDLERSATZ_IMS_MME"
    | "KOMBIMESSWANDLER_IMS_MME"
    | "TARIFSCHALTGERAET_IMS_MME"
    | "RUNDSTEUEREMPFAENGER_IMS_MME"
    | "TEMPERATUR_KOMPENSATION"
    | "HOECHSTBELASTUNGS_ANZEIGER"
    | "SONSTIGES_GERAET"
    | "SMARTMETERGATEWAY"
    | "STEUERBOX"
    | "BLOCKSTROMWANDLER"
    | "KOMBIMESSWANDLER";
  geraetemerkmal?:
    | null
    | "EINTARIF"
    | "ZWEITARIF"
    | "MEHRTARIF"
    | "GAS_G2P5"
    | "GAS_G4"
    | "GAS_G6"
    | "GAS_G10"
    | "GAS_G16"
    | "GAS_G25"
    | "GAS_G40"
    | "GAS_G65"
    | "GAS_G100"
    | "GAS_G160"
    | "GAS_G250"
    | "GAS_G400"
    | "GAS_G650"
    | "GAS_G1000"
    | "GAS_G1600"
    | "GAS_G2500"
    | "IMPULSGEBER_G4_G100"
    | "IMPULSGEBER_G100"
    | "MODEM_GSM"
    | "MODEM_GPRS"
    | "MODEM_FUNK"
    | "MODEM_GSM_O_LG"
    | "MODEM_GSM_M_LG"
    | "MODEM_FESTNETZ"
    | "MODEM_GPRS_M_LG"
    | "PLC_COM"
    | "ETHERNET_KOM"
    | "DSL_KOM"
    | "LTE_KOM"
    | "RUNDSTEUEREMPFAENGER"
    | "TARIFSCHALTGERAET"
    | "ZUSTANDS_MU"
    | "TEMPERATUR_MU"
    | "KOMPAKT_MU"
    | "SYSTEM_MU"
    | "UNBESTIMMT"
    | "WASSER_MWZW"
    | "WASSER_WZWW"
    | "WASSER_WZ01"
    | "WASSER_WZ02"
    | "WASSER_WZ03"
    | "WASSER_WZ04"
    | "WASSER_WZ05"
    | "WASSER_WZ06"
    | "WASSER_WZ07"
    | "WASSER_WZ08"
    | "WASSER_WZ09"
    | "WASSER_WZ10"
    | "WASSER_VWZ04"
    | "WASSER_VWZ05"
    | "WASSER_VWZ06"
    | "WASSER_VWZ07"
    | "WASSER_VWZ10"
    | "GAS_G350"
    | "GAS_G4000"
    | "GAS_G6500"
    | "GAS_G10000"
    | "GAS_G12500"
    | "GAS_G16000";
  Parameter?: {
    [k: string]: string | null;
  } | null;
  [k: string]: unknown;
} & Geraeteeigenschaften1;
export type Geraeteeigenschaften1 = {
  timestamp?: string | null;
  guid?: string | null;
  geraetetyp:
    | "WECHSELSTROMZAEHLER"
    | "DREHSTROMZAEHLER"
    | "ZWEIRICHTUNGSZAEHLER"
    | "RLM_ZAEHLER"
    | "IMS_ZAEHLER"
    | "BALGENGASZAEHLER"
    | "MAXIMUMZAEHLER"
    | "MULTIPLEXANLAGE"
    | "PAUSCHALANLAGE"
    | "VERSTAERKERANLAGE"
    | "SUMMATIONSGERAET"
    | "IMPULSGEBER"
    | "EDL_21_ZAEHLERAUFSATZ"
    | "VIER_QUADRANTEN_LASTGANGZAEHLER"
    | "MENGENUMWERTER"
    | "STROMWANDLER"
    | "SPANNUNGSWANDLER"
    | "DATENLOGGER"
    | "KOMMUNIKATIONSANSCHLUSS"
    | "MODEM"
    | "TELEKOMMUNIKATIONSEINRICHTUNG"
    | "DREHKOLBENGASZAEHLER"
    | "TURBINENRADGASZAEHLER"
    | "ULTRASCHALLZAEHLER"
    | "WIRBELGASZAEHLER"
    | "MODERNE_MESSEINRICHTUNG"
    | "ELEKTRONISCHER_HAUSHALTSZAEHLER"
    | "STEUEREINRICHTUNG"
    | "TECHNISCHESTEUEREINRICHTUNG"
    | "TARIFSCHALTGERAET"
    | "RUNDSTEUEREMPFAENGER"
    | "OPTIONALE_ZUS_ZAEHLEINRICHTUNG"
    | "MESSWANDLERSATZ_IMS_MME"
    | "KOMBIMESSWANDLER_IMS_MME"
    | "TARIFSCHALTGERAET_IMS_MME"
    | "RUNDSTEUEREMPFAENGER_IMS_MME"
    | "TEMPERATUR_KOMPENSATION"
    | "HOECHSTBELASTUNGS_ANZEIGER"
    | "SONSTIGES_GERAET"
    | "SMARTMETERGATEWAY"
    | "STEUERBOX"
    | "BLOCKSTROMWANDLER"
    | "KOMBIMESSWANDLER";
  geraetemerkmal?:
    | null
    | "EINTARIF"
    | "ZWEITARIF"
    | "MEHRTARIF"
    | "GAS_G2P5"
    | "GAS_G4"
    | "GAS_G6"
    | "GAS_G10"
    | "GAS_G16"
    | "GAS_G25"
    | "GAS_G40"
    | "GAS_G65"
    | "GAS_G100"
    | "GAS_G160"
    | "GAS_G250"
    | "GAS_G400"
    | "GAS_G650"
    | "GAS_G1000"
    | "GAS_G1600"
    | "GAS_G2500"
    | "IMPULSGEBER_G4_G100"
    | "IMPULSGEBER_G100"
    | "MODEM_GSM"
    | "MODEM_GPRS"
    | "MODEM_FUNK"
    | "MODEM_GSM_O_LG"
    | "MODEM_GSM_M_LG"
    | "MODEM_FESTNETZ"
    | "MODEM_GPRS_M_LG"
    | "PLC_COM"
    | "ETHERNET_KOM"
    | "DSL_KOM"
    | "LTE_KOM"
    | "RUNDSTEUEREMPFAENGER"
    | "TARIFSCHALTGERAET"
    | "ZUSTANDS_MU"
    | "TEMPERATUR_MU"
    | "KOMPAKT_MU"
    | "SYSTEM_MU"
    | "UNBESTIMMT"
    | "WASSER_MWZW"
    | "WASSER_WZWW"
    | "WASSER_WZ01"
    | "WASSER_WZ02"
    | "WASSER_WZ03"
    | "WASSER_WZ04"
    | "WASSER_WZ05"
    | "WASSER_WZ06"
    | "WASSER_WZ07"
    | "WASSER_WZ08"
    | "WASSER_WZ09"
    | "WASSER_WZ10"
    | "WASSER_VWZ04"
    | "WASSER_VWZ05"
    | "WASSER_VWZ06"
    | "WASSER_VWZ07"
    | "WASSER_VWZ10"
    | "GAS_G350"
    | "GAS_G4000"
    | "GAS_G6500"
    | "GAS_G10000"
    | "GAS_G12500"
    | "GAS_G16000";
  Parameter?: {
    [k: string]: string | null;
  } | null;
  [k: string]: unknown;
} | null;
export type Hardware1 = {
  geraetetyp?:
    | null
    | "WECHSELSTROMZAEHLER"
    | "DREHSTROMZAEHLER"
    | "ZWEIRICHTUNGSZAEHLER"
    | "RLM_ZAEHLER"
    | "IMS_ZAEHLER"
    | "BALGENGASZAEHLER"
    | "MAXIMUMZAEHLER"
    | "MULTIPLEXANLAGE"
    | "PAUSCHALANLAGE"
    | "VERSTAERKERANLAGE"
    | "SUMMATIONSGERAET"
    | "IMPULSGEBER"
    | "EDL_21_ZAEHLERAUFSATZ"
    | "VIER_QUADRANTEN_LASTGANGZAEHLER"
    | "MENGENUMWERTER"
    | "STROMWANDLER"
    | "SPANNUNGSWANDLER"
    | "DATENLOGGER"
    | "KOMMUNIKATIONSANSCHLUSS"
    | "MODEM"
    | "TELEKOMMUNIKATIONSEINRICHTUNG"
    | "DREHKOLBENGASZAEHLER"
    | "TURBINENRADGASZAEHLER"
    | "ULTRASCHALLZAEHLER"
    | "WIRBELGASZAEHLER"
    | "MODERNE_MESSEINRICHTUNG"
    | "ELEKTRONISCHER_HAUSHALTSZAEHLER"
    | "STEUEREINRICHTUNG"
    | "TECHNISCHESTEUEREINRICHTUNG"
    | "TARIFSCHALTGERAET"
    | "RUNDSTEUEREMPFAENGER"
    | "OPTIONALE_ZUS_ZAEHLEINRICHTUNG"
    | "MESSWANDLERSATZ_IMS_MME"
    | "KOMBIMESSWANDLER_IMS_MME"
    | "TARIFSCHALTGERAET_IMS_MME"
    | "RUNDSTEUEREMPFAENGER_IMS_MME"
    | "TEMPERATUR_KOMPENSATION"
    | "HOECHSTBELASTUNGS_ANZEIGER"
    | "SONSTIGES_GERAET"
    | "SMARTMETERGATEWAY"
    | "STEUERBOX"
    | "BLOCKSTROMWANDLER"
    | "KOMBIMESSWANDLER";
  bezeichnung: string;
  geraeteeigenschaften?: Geraeteeigenschaften;
  geraetenummer?: string | null;
  geraetereferenz?: string | null;
  timestamp?: string | null;
  guid?: string | null;
  [k: string]: unknown;
} | null;
export type Dienstleistung = {
  dienstleistungstyp:
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
  bezeichnung: string;
  timestamp?: string | null;
  guid?: string | null;
  [k: string]: unknown;
} & Dienstleistung1;
export type Dienstleistung1 = {
  dienstleistungstyp:
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
  bezeichnung: string;
  timestamp?: string | null;
  guid?: string | null;
  [k: string]: unknown;
} | null;
export type Zaehler = {
  boTyp?: string | null;
  versionStruktur?: string | null;
  timestamp?: string | null;
  externeReferenzen?: ExterneReferenz[] | null;
  guid?: string | null;
  zaehlernummer: string;
  sparte: "STROM" | "GAS" | "FERNWAERME" | "NAHWAERME" | "WASSER" | "ABWASSER";
  zaehlerauspraegung?: null | "EINRICHTUNGSZAEHLER" | "ZWEIRICHTUNGSZAEHLER";
  zaehlertyp?:
    | null
    | "DREHSTROMZAEHLER"
    | "BALGENGASZAEHLER"
    | "DREHKOLBENZAEHLER"
    | "SMARTMETER"
    | "LEISTUNGSZAEHLER"
    | "MAXIMUMZAEHLER"
    | "TURBINENRADGASZAEHLER"
    | "ULTRASCHALLGASZAEHLER"
    | "WECHSELSTROMZAEHLER"
    | "WIRBELGASZAEHLER"
    | "MESSDATENREGISTRIERGERAET"
    | "ELEKTRONISCHERHAUSHALTSZAEHLER"
    | "SONDERAUSSTATTUNG"
    | "WASSERZAEHLER"
    | "MODERNEMESSEINRICHTUNG"
    | "NEUEMESSEINRICHTUNGGAS";
  tarifart?: null | "EINTARIF" | "ZWEITARIF" | "MEHRTARIF" | "SMART_METER" | "LEISTUNGSGEMESSEN";
  zaehlerkonstante?: number | null;
  eichungBis?: string | null;
  letzteEichung?: string | null;
  /**
   * @minItems 1
   */
  zaehlwerke?: [Zaehlwerk, ...Zaehlwerk[]] | null;
  zaehlerhersteller?: Geschaeftspartner;
  gateway?: string | null;
  fernschaltung?: null | "VORHANDEN" | "NICHT_VORHANDEN";
  messwerterfassung?: null | "FERNAUSLESBAR" | "MANUELL_AUSGELESENE";
  zaehlertypspezifikation?: null | "EDL40" | "EDL21" | "SONSTIGER_EHZ" | "MME_STANDARD" | "MME_MEDA";
  befestigungsart?: null | "STECKTECHNIK" | "DREIPUNKT" | "HUTSCHIENE" | "EINSTUTZEN" | "ZWEISTUTZEN";
  zaehlergroesse?:
    | null
    | "EINTARIF"
    | "ZWEITARIF"
    | "MEHRTARIF"
    | "GAS_G2P5"
    | "GAS_G4"
    | "GAS_G6"
    | "GAS_G10"
    | "GAS_G16"
    | "GAS_G25"
    | "GAS_G40"
    | "GAS_G65"
    | "GAS_G100"
    | "GAS_G160"
    | "GAS_G250"
    | "GAS_G400"
    | "GAS_G650"
    | "GAS_G1000"
    | "GAS_G1600"
    | "GAS_G2500"
    | "IMPULSGEBER_G4_G100"
    | "IMPULSGEBER_G100"
    | "MODEM_GSM"
    | "MODEM_GPRS"
    | "MODEM_FUNK"
    | "MODEM_GSM_O_LG"
    | "MODEM_GSM_M_LG"
    | "MODEM_FESTNETZ"
    | "MODEM_GPRS_M_LG"
    | "PLC_COM"
    | "ETHERNET_KOM"
    | "DSL_KOM"
    | "LTE_KOM"
    | "RUNDSTEUEREMPFAENGER"
    | "TARIFSCHALTGERAET"
    | "ZUSTANDS_MU"
    | "TEMPERATUR_MU"
    | "KOMPAKT_MU"
    | "SYSTEM_MU"
    | "UNBESTIMMT"
    | "WASSER_MWZW"
    | "WASSER_WZWW"
    | "WASSER_WZ01"
    | "WASSER_WZ02"
    | "WASSER_WZ03"
    | "WASSER_WZ04"
    | "WASSER_WZ05"
    | "WASSER_WZ06"
    | "WASSER_WZ07"
    | "WASSER_WZ08"
    | "WASSER_WZ09"
    | "WASSER_WZ10"
    | "WASSER_VWZ04"
    | "WASSER_VWZ05"
    | "WASSER_VWZ06"
    | "WASSER_VWZ07"
    | "WASSER_VWZ10"
    | "GAS_G350"
    | "GAS_G4000"
    | "GAS_G6500"
    | "GAS_G10000"
    | "GAS_G12500"
    | "GAS_G16000";
  geraete?: Geraet[] | null;
  [k: string]: unknown;
} & Zaehler1;
export type Zaehlwerk = {
  timestamp?: string | null;
  guid?: string | null;
  zaehlwerkId?: string | null;
  bezeichnung?: string | null;
  richtung?: null | "AUSSP" | "EINSP";
  obisKennzahl?: string | null;
  wandlerfaktor?: number | null;
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
  kennzahl?: string | null;
  schwachlastfaehig?: null | "NICHT_SCHWACHLASTFAEHIG" | "SCHWACHLASTFAEHIG";
  verwendungszwecke?: Verwendungszweck[] | null;
  verbrauchsart?: null | "KL" | "KLW" | "KLWS" | "W" | "WS";
  unterbrechbarkeit?: null | "UV" | "NUV";
  waermenutzung?: null | "SPEICHERHEIZUNG" | "WAERMEPUMPE" | "DIREKTHEIZUNG";
  konzessionsabgabe?: Konzessionsabgabe;
  steuerbefreit?: boolean | null;
  vorkommastelle?: number | null;
  nachkommastelle?: number | null;
  abrechnungsrelevant?: boolean | null;
  anzahlAblesungen?: number | null;
  zaehlzeiten?: Zaehlzeitregister;
  konfiguration?: string | null;
  emobilitaetsart?: null | "WALLBOX" | "E_MOBILITAETSLADESAEULE" | "LADEPARK";
  [k: string]: unknown;
} & Zaehlwerk1;
export type Verwendungszweck = {
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
} & Verwendungszweck1;
export type Verwendungszweck1 = {
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
} | null;
export type Konzessionsabgabe = {
  timestamp?: string | null;
  guid?: string | null;
  kosten?: number | null;
  kategorie?: string | null;
  satz: "KAS" | "SA" | "SAS" | "TA" | "TAS" | "TK" | "TKS" | "TS" | "TSS";
  [k: string]: unknown;
} & Konzessionsabgabe1;
export type Konzessionsabgabe1 = {
  timestamp?: string | null;
  guid?: string | null;
  kosten?: number | null;
  kategorie?: string | null;
  satz: "KAS" | "SA" | "SAS" | "TA" | "TAS" | "TK" | "TKS" | "TS" | "TSS";
  [k: string]: unknown;
} | null;
export type Zaehlzeitregister = {
  timestamp?: string | null;
  guid?: string | null;
  zaehlzeitDefinition?: string | null;
  register?: string | null;
  schwachlastfaehig?: null | "NICHT_SCHWACHLASTFAEHIG" | "SCHWACHLASTFAEHIG";
  [k: string]: unknown;
} & Zaehlzeitregister1;
export type Zaehlzeitregister1 = {
  timestamp?: string | null;
  guid?: string | null;
  zaehlzeitDefinition?: string | null;
  register?: string | null;
  schwachlastfaehig?: null | "NICHT_SCHWACHLASTFAEHIG" | "SCHWACHLASTFAEHIG";
  [k: string]: unknown;
} | null;
export type Zaehlwerk1 = {
  timestamp?: string | null;
  guid?: string | null;
  zaehlwerkId?: string | null;
  bezeichnung?: string | null;
  richtung?: null | "AUSSP" | "EINSP";
  obisKennzahl?: string | null;
  wandlerfaktor?: number | null;
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
  kennzahl?: string | null;
  schwachlastfaehig?: null | "NICHT_SCHWACHLASTFAEHIG" | "SCHWACHLASTFAEHIG";
  verwendungszwecke?: Verwendungszweck[] | null;
  verbrauchsart?: null | "KL" | "KLW" | "KLWS" | "W" | "WS";
  unterbrechbarkeit?: null | "UV" | "NUV";
  waermenutzung?: null | "SPEICHERHEIZUNG" | "WAERMEPUMPE" | "DIREKTHEIZUNG";
  konzessionsabgabe?: Konzessionsabgabe;
  steuerbefreit?: boolean | null;
  vorkommastelle?: number | null;
  nachkommastelle?: number | null;
  abrechnungsrelevant?: boolean | null;
  anzahlAblesungen?: number | null;
  zaehlzeiten?: Zaehlzeitregister;
  konfiguration?: string | null;
  emobilitaetsart?: null | "WALLBOX" | "E_MOBILITAETSLADESAEULE" | "LADEPARK";
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
export type Geraet = {
  timestamp?: string | null;
  guid?: string | null;
  geraetenummer?: string | null;
  geraeteeigenschaften?: Geraeteeigenschaften;
  geraeteart?:
    | null
    | "WANDLER"
    | "KOMMUNIKATIONSEINRICHTUNG"
    | "TECHNISCHE_STEUEREINRICHTUNG"
    | "MENGENUMWERTER"
    | "SMARTMETER_GATEWAY"
    | "STEUERBOX"
    | "ZAEHLEINRICHTUNG";
  [k: string]: unknown;
} & Geraet1;
export type Geraet1 = {
  timestamp?: string | null;
  guid?: string | null;
  geraetenummer?: string | null;
  geraeteeigenschaften?: Geraeteeigenschaften;
  geraeteart?:
    | null
    | "WANDLER"
    | "KOMMUNIKATIONSEINRICHTUNG"
    | "TECHNISCHE_STEUEREINRICHTUNG"
    | "MENGENUMWERTER"
    | "SMARTMETER_GATEWAY"
    | "STEUERBOX"
    | "ZAEHLEINRICHTUNG";
  [k: string]: unknown;
} | null;
export type Zaehler1 = {
  boTyp?: string | null;
  versionStruktur?: string | null;
  timestamp?: string | null;
  externeReferenzen?: ExterneReferenz[] | null;
  guid?: string | null;
  zaehlernummer: string;
  sparte: "STROM" | "GAS" | "FERNWAERME" | "NAHWAERME" | "WASSER" | "ABWASSER";
  zaehlerauspraegung?: null | "EINRICHTUNGSZAEHLER" | "ZWEIRICHTUNGSZAEHLER";
  zaehlertyp?:
    | null
    | "DREHSTROMZAEHLER"
    | "BALGENGASZAEHLER"
    | "DREHKOLBENZAEHLER"
    | "SMARTMETER"
    | "LEISTUNGSZAEHLER"
    | "MAXIMUMZAEHLER"
    | "TURBINENRADGASZAEHLER"
    | "ULTRASCHALLGASZAEHLER"
    | "WECHSELSTROMZAEHLER"
    | "WIRBELGASZAEHLER"
    | "MESSDATENREGISTRIERGERAET"
    | "ELEKTRONISCHERHAUSHALTSZAEHLER"
    | "SONDERAUSSTATTUNG"
    | "WASSERZAEHLER"
    | "MODERNEMESSEINRICHTUNG"
    | "NEUEMESSEINRICHTUNGGAS";
  tarifart?: null | "EINTARIF" | "ZWEITARIF" | "MEHRTARIF" | "SMART_METER" | "LEISTUNGSGEMESSEN";
  zaehlerkonstante?: number | null;
  eichungBis?: string | null;
  letzteEichung?: string | null;
  /**
   * @minItems 1
   */
  zaehlwerke?: [Zaehlwerk, ...Zaehlwerk[]] | null;
  zaehlerhersteller?: Geschaeftspartner;
  gateway?: string | null;
  fernschaltung?: null | "VORHANDEN" | "NICHT_VORHANDEN";
  messwerterfassung?: null | "FERNAUSLESBAR" | "MANUELL_AUSGELESENE";
  zaehlertypspezifikation?: null | "EDL40" | "EDL21" | "SONSTIGER_EHZ" | "MME_STANDARD" | "MME_MEDA";
  befestigungsart?: null | "STECKTECHNIK" | "DREIPUNKT" | "HUTSCHIENE" | "EINSTUTZEN" | "ZWEISTUTZEN";
  zaehlergroesse?:
    | null
    | "EINTARIF"
    | "ZWEITARIF"
    | "MEHRTARIF"
    | "GAS_G2P5"
    | "GAS_G4"
    | "GAS_G6"
    | "GAS_G10"
    | "GAS_G16"
    | "GAS_G25"
    | "GAS_G40"
    | "GAS_G65"
    | "GAS_G100"
    | "GAS_G160"
    | "GAS_G250"
    | "GAS_G400"
    | "GAS_G650"
    | "GAS_G1000"
    | "GAS_G1600"
    | "GAS_G2500"
    | "IMPULSGEBER_G4_G100"
    | "IMPULSGEBER_G100"
    | "MODEM_GSM"
    | "MODEM_GPRS"
    | "MODEM_FUNK"
    | "MODEM_GSM_O_LG"
    | "MODEM_GSM_M_LG"
    | "MODEM_FESTNETZ"
    | "MODEM_GPRS_M_LG"
    | "PLC_COM"
    | "ETHERNET_KOM"
    | "DSL_KOM"
    | "LTE_KOM"
    | "RUNDSTEUEREMPFAENGER"
    | "TARIFSCHALTGERAET"
    | "ZUSTANDS_MU"
    | "TEMPERATUR_MU"
    | "KOMPAKT_MU"
    | "SYSTEM_MU"
    | "UNBESTIMMT"
    | "WASSER_MWZW"
    | "WASSER_WZWW"
    | "WASSER_WZ01"
    | "WASSER_WZ02"
    | "WASSER_WZ03"
    | "WASSER_WZ04"
    | "WASSER_WZ05"
    | "WASSER_WZ06"
    | "WASSER_WZ07"
    | "WASSER_WZ08"
    | "WASSER_WZ09"
    | "WASSER_WZ10"
    | "WASSER_VWZ04"
    | "WASSER_VWZ05"
    | "WASSER_VWZ06"
    | "WASSER_VWZ07"
    | "WASSER_VWZ10"
    | "GAS_G350"
    | "GAS_G4000"
    | "GAS_G6500"
    | "GAS_G10000"
    | "GAS_G12500"
    | "GAS_G16000";
  geraete?: Geraet[] | null;
  [k: string]: unknown;
} | null;
export type MarktpartnerDetails = {
  rollencodenummer?: string | null;
  code?: string | null;
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
  timestamp?: string | null;
  guid?: string | null;
  weiterverpflichtet?: boolean | null;
  [k: string]: unknown;
} & MarktpartnerDetails1;
export type MarktpartnerDetails1 = {
  rollencodenummer?: string | null;
  code?: string | null;
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
  timestamp?: string | null;
  guid?: string | null;
  weiterverpflichtet?: boolean | null;
  [k: string]: unknown;
} | null;
export type Messprodukt = {
  timestamp?: string | null;
  guid?: string | null;
  messproduktId?: string | null;
  verwendungszwecke?: Verwendungszweck[] | null;
  verbrauchsart?: null | "KL" | "KLW" | "KLWS" | "W" | "WS";
  unterbrechbarkeit?: null | "UV" | "NUV";
  waermenutzung?: null | "SPEICHERHEIZUNG" | "WAERMEPUMPE" | "DIREKTHEIZUNG";
  zaehlzeiten?: Zaehlzeitregister;
  zweiteMessung?: boolean | null;
  werteuebermittlungAnNB?: boolean | null;
  emobilitaetsart?: null | "WALLBOX" | "E_MOBILITAETSLADESAEULE" | "LADEPARK";
  [k: string]: unknown;
} & Messprodukt1;
export type Messprodukt1 = {
  timestamp?: string | null;
  guid?: string | null;
  messproduktId?: string | null;
  verwendungszwecke?: Verwendungszweck[] | null;
  verbrauchsart?: null | "KL" | "KLW" | "KLWS" | "W" | "WS";
  unterbrechbarkeit?: null | "UV" | "NUV";
  waermenutzung?: null | "SPEICHERHEIZUNG" | "WAERMEPUMPE" | "DIREKTHEIZUNG";
  zaehlzeiten?: Zaehlzeitregister;
  zweiteMessung?: boolean | null;
  werteuebermittlungAnNB?: boolean | null;
  emobilitaetsart?: null | "WALLBOX" | "E_MOBILITAETSLADESAEULE" | "LADEPARK";
  [k: string]: unknown;
} | null;

export interface Messlokation {
  boTyp?: string | null;
  versionStruktur?: string | null;
  timestamp?: string | null;
  externeReferenzen?: ExterneReferenz[] | null;
  guid?: string | null;
  messlokationsId: string;
  sparte: "STROM" | "GAS" | "FERNWAERME" | "NAHWAERME" | "WASSER" | "ABWASSER";
  netzebeneMessung?:
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
  messgebietNr?: string | null;
  grundzustaendigerMSBCodeNr?: string | null;
  grundzustaendigerMSBIMCodeNr?: string | null;
  grundzustaendigerMDLCodeNr?: string | null;
  messadresse?: Adresse;
  geoadresse?: Geokoordinaten;
  katasterinformation?: Katasteradresse;
  geraete?: Hardware[] | null;
  messdienstleistung?: Dienstleistung[] | null;
  messlokationszaehler?: Zaehler[] | null;
  bilanzierungsmethode?: null | "RLM" | "SLP" | "TLP_GEMEINSAM" | "TLP_GETRENNT" | "PAUSCHAL" | "IMS";
  abrechnungmessstellenbetriebnna?: boolean | null;
  marktrollen?: MarktpartnerDetails[] | null;
  gasqualitaet?: null | "ZERO" | "H_GAS" | "HGAS" | "L_GAS" | "LGAS";
  verlustfaktor?: number | null;
  zaehlwerke?: Zaehlwerk[] | null;
  betriebszustand?: null | "GESPERRT_NICHT_ENTSPERREN" | "GESPERRT" | "REGELBETRIEB";
  messprodukte?: Messprodukt[] | null;
  lokationsbuendelObjektcode?: string | null;
  [k: string]: unknown;
}
