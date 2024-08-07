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
export type Betrag = {
  wert: number;
  waehrung:
    | "AFN"
    | "ALL"
    | "AMD"
    | "ANG"
    | "AOA"
    | "ARS"
    | "AUD"
    | "AWG"
    | "AZN"
    | "BAM"
    | "BBD"
    | "BDT"
    | "BGN"
    | "BHD"
    | "BIF"
    | "BMD"
    | "BND"
    | "BOB"
    | "BOV"
    | "BRL"
    | "BSD"
    | "BTN"
    | "BWP"
    | "BYN"
    | "BYR"
    | "BZD"
    | "CAD"
    | "CDF"
    | "CHE"
    | "CHF"
    | "CHW"
    | "CLF"
    | "CLP"
    | "CNY"
    | "COP"
    | "COU"
    | "CRC"
    | "CUC"
    | "CUP"
    | "CVE"
    | "CZK"
    | "DJF"
    | "DKK"
    | "DOP"
    | "DZD"
    | "EGP"
    | "ERN"
    | "ETB"
    | "EUR"
    | "FJD"
    | "FKP"
    | "GBP"
    | "GEL"
    | "GHS"
    | "GIP"
    | "GMD"
    | "GNF"
    | "GTQ"
    | "GYD"
    | "HKD"
    | "HNL"
    | "HRK"
    | "HTG"
    | "HUF"
    | "IDR"
    | "ILS"
    | "INR"
    | "IQD"
    | "IRR"
    | "ISK"
    | "JMD"
    | "JOD"
    | "JPY"
    | "KES"
    | "KGS"
    | "KHR"
    | "KMF"
    | "KPW"
    | "KRW"
    | "KWD"
    | "KYD"
    | "KZT"
    | "LAK"
    | "LBP"
    | "LKR"
    | "LRD"
    | "LSL"
    | "LTL"
    | "LYD"
    | "MAD"
    | "MDL"
    | "MGA"
    | "MKD"
    | "MMK"
    | "MNT"
    | "MOP"
    | "MRO"
    | "MUR"
    | "MVR"
    | "MWK"
    | "MXN"
    | "MXV"
    | "MYR"
    | "MZN"
    | "NAD"
    | "NGN"
    | "NIO"
    | "NOK"
    | "NPR"
    | "NZD"
    | "OMR"
    | "PAB"
    | "PEN"
    | "PGK"
    | "PHP"
    | "PKR"
    | "PLN"
    | "PYG"
    | "QAR"
    | "RON"
    | "RSD"
    | "RUB"
    | "RUR"
    | "RWF"
    | "SAR"
    | "SBD"
    | "SCR"
    | "SDG"
    | "SEK"
    | "SGD"
    | "SHP"
    | "SLL"
    | "SOS"
    | "SRD"
    | "SSP"
    | "STD"
    | "SVC"
    | "SYP"
    | "SZL"
    | "THB"
    | "TJS"
    | "TMT"
    | "TND"
    | "TOP"
    | "TRY"
    | "TTD"
    | "TWD"
    | "TZS"
    | "UAH"
    | "UGX"
    | "USD"
    | "USN"
    | "USS"
    | "UYI"
    | "UYU"
    | "UZS"
    | "VEF"
    | "VND"
    | "VUV"
    | "WST"
    | "XAF"
    | "XAG"
    | "XAU"
    | "XBA"
    | "XBB"
    | "XBC"
    | "XBD"
    | "XCD"
    | "XDR"
    | "XOF"
    | "XPD"
    | "XPF"
    | "XPT"
    | "XSU"
    | "XTS"
    | "XUA"
    | "XXX"
    | "YER"
    | "ZAR"
    | "ZMW"
    | "ZWL";
  timestamp?: string | null;
  guid?: string | null;
  [k: string]: unknown;
} & Betrag1;
export type Betrag1 = {
  wert: number;
  waehrung:
    | "AFN"
    | "ALL"
    | "AMD"
    | "ANG"
    | "AOA"
    | "ARS"
    | "AUD"
    | "AWG"
    | "AZN"
    | "BAM"
    | "BBD"
    | "BDT"
    | "BGN"
    | "BHD"
    | "BIF"
    | "BMD"
    | "BND"
    | "BOB"
    | "BOV"
    | "BRL"
    | "BSD"
    | "BTN"
    | "BWP"
    | "BYN"
    | "BYR"
    | "BZD"
    | "CAD"
    | "CDF"
    | "CHE"
    | "CHF"
    | "CHW"
    | "CLF"
    | "CLP"
    | "CNY"
    | "COP"
    | "COU"
    | "CRC"
    | "CUC"
    | "CUP"
    | "CVE"
    | "CZK"
    | "DJF"
    | "DKK"
    | "DOP"
    | "DZD"
    | "EGP"
    | "ERN"
    | "ETB"
    | "EUR"
    | "FJD"
    | "FKP"
    | "GBP"
    | "GEL"
    | "GHS"
    | "GIP"
    | "GMD"
    | "GNF"
    | "GTQ"
    | "GYD"
    | "HKD"
    | "HNL"
    | "HRK"
    | "HTG"
    | "HUF"
    | "IDR"
    | "ILS"
    | "INR"
    | "IQD"
    | "IRR"
    | "ISK"
    | "JMD"
    | "JOD"
    | "JPY"
    | "KES"
    | "KGS"
    | "KHR"
    | "KMF"
    | "KPW"
    | "KRW"
    | "KWD"
    | "KYD"
    | "KZT"
    | "LAK"
    | "LBP"
    | "LKR"
    | "LRD"
    | "LSL"
    | "LTL"
    | "LYD"
    | "MAD"
    | "MDL"
    | "MGA"
    | "MKD"
    | "MMK"
    | "MNT"
    | "MOP"
    | "MRO"
    | "MUR"
    | "MVR"
    | "MWK"
    | "MXN"
    | "MXV"
    | "MYR"
    | "MZN"
    | "NAD"
    | "NGN"
    | "NIO"
    | "NOK"
    | "NPR"
    | "NZD"
    | "OMR"
    | "PAB"
    | "PEN"
    | "PGK"
    | "PHP"
    | "PKR"
    | "PLN"
    | "PYG"
    | "QAR"
    | "RON"
    | "RSD"
    | "RUB"
    | "RUR"
    | "RWF"
    | "SAR"
    | "SBD"
    | "SCR"
    | "SDG"
    | "SEK"
    | "SGD"
    | "SHP"
    | "SLL"
    | "SOS"
    | "SRD"
    | "SSP"
    | "STD"
    | "SVC"
    | "SYP"
    | "SZL"
    | "THB"
    | "TJS"
    | "TMT"
    | "TND"
    | "TOP"
    | "TRY"
    | "TTD"
    | "TWD"
    | "TZS"
    | "UAH"
    | "UGX"
    | "USD"
    | "USN"
    | "USS"
    | "UYI"
    | "UYU"
    | "UZS"
    | "VEF"
    | "VND"
    | "VUV"
    | "WST"
    | "XAF"
    | "XAG"
    | "XAU"
    | "XBA"
    | "XBB"
    | "XBC"
    | "XBD"
    | "XCD"
    | "XDR"
    | "XOF"
    | "XPD"
    | "XPF"
    | "XPT"
    | "XSU"
    | "XTS"
    | "XUA"
    | "XXX"
    | "YER"
    | "ZAR"
    | "ZMW"
    | "ZWL";
  timestamp?: string | null;
  guid?: string | null;
  [k: string]: unknown;
} | null;
export type Kostenblock = {
  kostenblockbezeichnung: string;
  summeKostenblock?: Betrag;
  kostenpositionen?: Kostenposition[] | null;
  timestamp?: string | null;
  guid?: string | null;
  [k: string]: unknown;
} & Kostenblock1 & {
    kostenblockbezeichnung: string;
    summeKostenblock?: Betrag;
    kostenpositionen?: Kostenposition[] | null;
    timestamp?: string | null;
    guid?: string | null;
    [k: string]: unknown;
  } & Kostenblock1;
export type Kostenposition = {
  positionstitel: string;
  von?: string | null;
  bis?: string | null;
  artikelbezeichnung: string;
  artikeldetail?: string | null;
  menge?: Menge;
  zeitmenge?: Menge;
  einzelpreis: Preis;
  betragKostenposition: Betrag11;
  timestamp?: string | null;
  guid?: string | null;
  [k: string]: unknown;
} & Kostenposition1;
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
export type Kostenposition1 = {
  positionstitel: string;
  von?: string | null;
  bis?: string | null;
  artikelbezeichnung: string;
  artikeldetail?: string | null;
  menge?: Menge;
  zeitmenge?: Menge;
  einzelpreis: Preis;
  betragKostenposition: Betrag11;
  timestamp?: string | null;
  guid?: string | null;
  [k: string]: unknown;
} | null;
export type Kostenblock1 = {
  kostenblockbezeichnung: string;
  summeKostenblock?: Betrag;
  kostenpositionen?: Kostenposition[] | null;
  timestamp?: string | null;
  guid?: string | null;
  [k: string]: unknown;
} | null;

export interface Kosten {
  boTyp?: string | null;
  versionStruktur?: string | null;
  timestamp?: string | null;
  kostenklasse: "ZERO";
  externeReferenzen?: ExterneReferenz[] | null;
  gueltigkeit: Zeitraum;
  guid?: string | null;
  summeKosten?: Betrag[] | null;
  /**
   * @minItems 1
   */
  kostenbloecke: [Kostenblock, ...Kostenblock[]];
  kostenpositionen?: Kostenposition[] | null;
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
export interface Preis {
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
}
export interface Betrag11 {
  wert: number;
  waehrung:
    | "AFN"
    | "ALL"
    | "AMD"
    | "ANG"
    | "AOA"
    | "ARS"
    | "AUD"
    | "AWG"
    | "AZN"
    | "BAM"
    | "BBD"
    | "BDT"
    | "BGN"
    | "BHD"
    | "BIF"
    | "BMD"
    | "BND"
    | "BOB"
    | "BOV"
    | "BRL"
    | "BSD"
    | "BTN"
    | "BWP"
    | "BYN"
    | "BYR"
    | "BZD"
    | "CAD"
    | "CDF"
    | "CHE"
    | "CHF"
    | "CHW"
    | "CLF"
    | "CLP"
    | "CNY"
    | "COP"
    | "COU"
    | "CRC"
    | "CUC"
    | "CUP"
    | "CVE"
    | "CZK"
    | "DJF"
    | "DKK"
    | "DOP"
    | "DZD"
    | "EGP"
    | "ERN"
    | "ETB"
    | "EUR"
    | "FJD"
    | "FKP"
    | "GBP"
    | "GEL"
    | "GHS"
    | "GIP"
    | "GMD"
    | "GNF"
    | "GTQ"
    | "GYD"
    | "HKD"
    | "HNL"
    | "HRK"
    | "HTG"
    | "HUF"
    | "IDR"
    | "ILS"
    | "INR"
    | "IQD"
    | "IRR"
    | "ISK"
    | "JMD"
    | "JOD"
    | "JPY"
    | "KES"
    | "KGS"
    | "KHR"
    | "KMF"
    | "KPW"
    | "KRW"
    | "KWD"
    | "KYD"
    | "KZT"
    | "LAK"
    | "LBP"
    | "LKR"
    | "LRD"
    | "LSL"
    | "LTL"
    | "LYD"
    | "MAD"
    | "MDL"
    | "MGA"
    | "MKD"
    | "MMK"
    | "MNT"
    | "MOP"
    | "MRO"
    | "MUR"
    | "MVR"
    | "MWK"
    | "MXN"
    | "MXV"
    | "MYR"
    | "MZN"
    | "NAD"
    | "NGN"
    | "NIO"
    | "NOK"
    | "NPR"
    | "NZD"
    | "OMR"
    | "PAB"
    | "PEN"
    | "PGK"
    | "PHP"
    | "PKR"
    | "PLN"
    | "PYG"
    | "QAR"
    | "RON"
    | "RSD"
    | "RUB"
    | "RUR"
    | "RWF"
    | "SAR"
    | "SBD"
    | "SCR"
    | "SDG"
    | "SEK"
    | "SGD"
    | "SHP"
    | "SLL"
    | "SOS"
    | "SRD"
    | "SSP"
    | "STD"
    | "SVC"
    | "SYP"
    | "SZL"
    | "THB"
    | "TJS"
    | "TMT"
    | "TND"
    | "TOP"
    | "TRY"
    | "TTD"
    | "TWD"
    | "TZS"
    | "UAH"
    | "UGX"
    | "USD"
    | "USN"
    | "USS"
    | "UYI"
    | "UYU"
    | "UZS"
    | "VEF"
    | "VND"
    | "VUV"
    | "WST"
    | "XAF"
    | "XAG"
    | "XAU"
    | "XBA"
    | "XBB"
    | "XBC"
    | "XBD"
    | "XCD"
    | "XDR"
    | "XOF"
    | "XPD"
    | "XPF"
    | "XPT"
    | "XSU"
    | "XTS"
    | "XUA"
    | "XXX"
    | "YER"
    | "ZAR"
    | "ZMW"
    | "ZWL";
  timestamp?: string | null;
  guid?: string | null;
  [k: string]: unknown;
}
