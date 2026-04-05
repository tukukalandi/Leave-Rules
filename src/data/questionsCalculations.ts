import { Question } from "./questionsPart1";

export const questionsCalculations: Question[] = [
  {
    id: "CALC1",
    question: "Calculate the Earned Leave and Half Pay Leave at the credit of a Central Government Officer on 1-1-2022, from the following record of service: (i) Date of Birth: 15-08-1968 (ii) Date of Joining Service: 01-04-1992 (iii) Balance of leave at credit on 01-07-2019: EL 155, HPL 85. (iv) He was on leave for the following periods thereafter: Extraordinary Leave from 10-09-2019 to 24-09-2019 (15 days); Earned Leave for 25 days from 01-07-2020; Commuted Leave of 30 days from 01-02-2021 on medical certificate. (v) He was transferred on 01-11-2021 and availed 10 days joining time against admissible 15 days.",
    marks: "5 Marks",
    reference: "[Rules 26, 27, 29, 30 of CCS (Leave) Rules, 1972]",
    answerSections: [
      {
        title: "EARNED LEAVE ACCOUNT",
        content: [],
        table: {
          headers: ["Period / Particulars", "Earned (days)", "Availed (days)", "Balance (days)"],
          rows: [
            ["Credit as on 01-07-2019", "...", "...", "155"],
            ["01-01-2020: Credit", "15", "", ""],
            ["Less 1/10th of EoL of 15 days (10-09-19 to 24-09-19)", "1.5", "", ""],
            ["Net credit: 13.5 → 14", "14", "...", "169"],
            ["01-07-2020: Credit", "15", "", ""],
            ["01-07-2020 to 25-07-2020: EL availed (25 days)", "", "25", "159"],
            ["01-01-2021, 01-07-2021, 01-01-2022: Credits 3 × 15", "45", "...", "204"],
            ["01-02-2021 to 02-03-2021: Commuted Leave (no EL debit)", "...", "...", "204"],
            ["01-11-2021: *Credit of unavailed JT (15-10 = 5 days)", "5", "...", "209"],
            ["BALANCE AS ON 01-01-2022", "...", "...", "209"]
          ]
        }
      },
      {
        title: "HALF PAY LEAVE ACCOUNT",
        content: [],
        table: {
          headers: ["Period / Particulars", "Earned (days)", "Availed (days)", "Balance (days)"],
          rows: [
            ["Credit as on 01-07-2019", "...", "...", "85"],
            ["01-01-2020: Credit", "10", "...", "95"],
            ["01-07-2020, 01-01-2021, 01-07-2021: Credits 3 × 10", "30", "...", "125"],
            ["Commuted Leave 30 days → HPL debit = 30×2 = 60 days", "...", "60", "65"],
            ["01-01-2022: Credit", "10", "...", "75"],
            ["BALANCE AS ON 01-01-2022", "...", "...", "75"]
          ]
        }
      },
      {
        content: [
          "★ EL Balance = 209 days | HPL Balance = 75 days as on 01-01-2022",
          "★ EoL of 15 days → EL reduction = 15 ÷ 10 = 1.5, rounded to 2. Net credit = 15 - 1.5 = 13.5 → 14 days.",
          "★ Joining Time: Admissible 15 days, availed 10 days → Unavailed 5 days credited to EL (Rule 26(1)(a)(ii)).",
          "★ Commuted Leave: 30 days CL → 60 days debited from HPL (twice the amount)."
        ],
        isList: true
      }
    ]
  },
  {
    id: "CALC2",
    question: "Calculate EL and HPL at credit on 01-07-2023 for a Postal Superintendent from the following particulars: (i) Date of Birth: 05-11-1970 (ii) Date of Joining Service: 15-07-1995 (iii) Balance of leave at credit on 01-01-2021: EL 230, HPL 140. (iv) He availed the following leave thereafter: Earned Leave for 30 days from 10-03-2021; Extraordinary Leave from 01-09-2021 to 30-09-2021 (30 days); He was transferred on 01-12-2021; availed 12 days JT against admissible 15 days; 40 days of absence from 01-06-2022 treated as dies non; Earned Leave for 15 days from 01-02-2023.",
    marks: "5 Marks",
    reference: "[Rules 26, 27, 29 of CCS (Leave) Rules, 1972]",
    answerSections: [
      {
        title: "EARNED LEAVE ACCOUNT",
        content: [],
        table: {
          headers: ["Period / Particulars", "Earned (days)", "Availed (days)", "Balance (days)"],
          rows: [
            ["Credit as on 01-01-2021", "...", "...", "230"],
            ["01-01-2021 to 10-04-2021: EL availed (30 days)", "...", "30", "200"],
            ["01-07-2021: Credit", "15", "...", "215"],
            ["01-01-2022: Credit", "15", "", ""],
            ["Less 1/10th of EoL 30 days (01-09 to 30-09-21)", "3", "", ""],
            ["Net: 12", "12", "...", "227"],
            ["*Unavailed JT credit: 15-12 = 3 days (01-12-21)", "3", "...", "230"],
            ["01-07-2022: Credit", "15", "", ""],
            ["Less 1/10th of 40 days dies non (01-06 to 10-07-22)", "4", "", ""],
            ["Net: 11", "11", "...", "241"],
            ["01-01-2023: Credit", "15", "...", "256"],
            ["01-02-2023 to 15-02-2023: EL availed (15 days)", "...", "15", "241"],
            ["01-07-2023: Credit", "15", "...", "256"],
            ["BALANCE AS ON 01-07-2023", "...", "...", "256"]
          ]
        }
      },
      {
        title: "HALF PAY LEAVE ACCOUNT",
        content: [],
        table: {
          headers: ["Period / Particulars", "Earned (days)", "Availed (days)", "Balance (days)"],
          rows: [
            ["Credit as on 01-01-2021", "...", "...", "140"],
            ["01-07-2021, 01-01-2022, 01-07-2022: Credits 3 × 10", "30", "...", "170"],
            ["01-01-2023: Credit", "10", "", ""],
            ["Less 1/18th of 40 days dies non = 2.2 → 2", "2", "", ""],
            ["Net: 8", "8", "...", "178"],
            ["01-07-2023: Credit", "10", "...", "188"],
            ["BALANCE AS ON 01-07-2023", "...", "...", "188"]
          ]
        }
      },
      {
        content: [
          "★ EL Balance = 256 days | HPL Balance = 188 days as on 01-07-2023",
          "★ Dies non 40 days: EL reduction = 40÷10 = 4; HPL reduction = 40÷18 = 2.2 → 2 days.",
          "★ EoL 30 days: EL reduction = 30÷10 = 3 days from next half-year credit."
        ],
        isList: true
      }
    ]
  },
  {
    id: "CALC3",
    question: "Calculate EL and HPL at credit on 01-01-2024 for a Postal Assistant. He was under suspension for a period which was later regularized as Earned Leave. (i) Date of Birth: 12-06-1975 (ii) Date of Joining: 01-01-2000 (iii) Balance on 01-07-2021: EL 195, HPL 110. (iv) Subsequent events: Under suspension from 01-09-2021 to 30-11-2021 (91 days); regularized as EL; Earned Leave for 20 days from 01-03-2022; Commuted Leave for 45 days from 01-09-2022 on medical certificate; Extraordinary Leave for 20 days from 01-05-2023.",
    marks: "5 Marks",
    reference: "[Rules 26, 27, 29, 30 of CCS (Leave) Rules, 1972]",
    answerSections: [
      {
        title: "EARNED LEAVE ACCOUNT",
        content: [],
        table: {
          headers: ["Period / Particulars", "Earned (days)", "Availed (days)", "Balance (days)"],
          rows: [
            ["Credit as on 01-07-2021", "...", "...", "195"],
            ["01-01-2022: Credit", "15", "...", "210"],
            ["Suspension regularized as EL (91 days)", "...", "91", "119"],
            ["01-07-2022: Credit", "15", "...", "134"],
            ["01-03-2022 to 20-03-2022: EL availed (20 days)", "...", "20", "114"],
            ["01-01-2023: Credit", "15", "...", "129"],
            ["01-07-2023: Credit", "15", "", ""],
            ["Less 1/10th of EoL 20 days (01-05 to 20-05-23)", "2", "", ""],
            ["Net: 13", "13", "...", "142"],
            ["01-01-2024: Credit", "15", "...", "157"],
            ["BALANCE AS ON 01-01-2024", "...", "...", "157"]
          ]
        }
      },
      {
        title: "HALF PAY LEAVE ACCOUNT",
        content: [],
        table: {
          headers: ["Period / Particulars", "Earned (days)", "Availed (days)", "Balance (days)"],
          rows: [
            ["Credit as on 01-07-2021", "...", "...", "110"],
            ["01-01-2022, 01-07-2022, 01-01-2023: Credits 3 × 10", "30", "...", "140"],
            ["Commuted Leave 45 days → HPL debit = 45×2 = 90 days", "...", "90", "50"],
            ["01-07-2023, 01-01-2024: Credits 2 × 10", "20", "...", "70"],
            ["BALANCE AS ON 01-01-2024", "...", "...", "70"]
          ]
        }
      },
      {
        content: [
          "★ EL Balance = 157 days | HPL Balance = 70 days as on 01-01-2024",
          "★ Suspension regularized as EL is directly debited from EL account (91 days).",
          "★ Commuted Leave 45 days → 90 days debited from HPL (Rule 30(1)(d)).",
          "★ EoL 20 days → EL reduction = 20÷10 = 2 days from next half-year credit."
        ],
        isList: true
      }
    ]
  },
  {
    id: "CALC4",
    question: "A Government servant has EL balance of 292 days on 01-07-2022. Calculate his EL and HPL balances on 01-07-2023. During this period: (a) He availed EL for 10 days from 01-09-2022. (b) He had 25 days of unauthorized absence from 01-11-2022 treated as dies non. (c) HPL balance on 01-07-2022 was 120 days. No HPL was availed.",
    marks: "5 Marks",
    reference: "[Rules 26(1)(b) & 27(3), CCS (Leave) Rules, 1972]",
    answerSections: [
      {
        title: "EARNED LEAVE ACCOUNT",
        content: [],
        table: {
          headers: ["Period / Particulars", "Earned (days)", "Availed (days)", "Balance (days)"],
          rows: [
            ["Balance as on 01-07-2022", "...", "...", "292"],
            ["01-09-2022: EL availed (10 days)", "...", "10", "282"],
            ["01-01-2023: Credit", "15", "", ""],
            ["Less 1/10th of 25 days dies non = 2.5 → 3", "3", "", ""],
            ["Net: 12.5 → 13", "13", "...", "295"],
            ["01-07-2023: Credit (300 limit check)", "15", "...", "300*"],
            ["BALANCE AS ON 01-07-2023", "...", "...", "300"]
          ]
        }
      },
      {
        title: "HALF PAY LEAVE ACCOUNT",
        content: [],
        table: {
          headers: ["Period / Particulars", "Earned (days)", "Availed (days)", "Balance (days)"],
          rows: [
            ["Balance as on 01-07-2022", "...", "...", "120"],
            ["01-01-2023: Credit", "10", "", ""],
            ["Less 1/18th of 25 days dies non = 1.38 → 1", "1", "", ""],
            ["Net: 9", "9", "...", "129"],
            ["01-07-2023: Credit", "10", "...", "139"],
            ["BALANCE AS ON 01-07-2023", "...", "...", "139"]
          ]
        }
      },
      {
        content: [
          "★ EL Balance = 300 days | HPL Balance = 139 days as on 01-07-2023",
          "★ *EL Cap: 295 + 15 = 310. Since max limit is 300, only 5 days credited to reach 300.",
          "★ Dies non 25 days: EL reduction = 25÷10 = 2.5 → 3; HPL reduction = 25÷18 = 1.38 → 1 day."
        ],
        isList: true
      }
    ]
  },
  {
    id: "CALC5",
    question: "A Government Officer (Level-8) retires on superannuation on 31-05-2025. Calculate EL and HPL at credit on date of retirement and the cash equivalent of leave salary. Balance on 01-01-2023: EL = 220 days, HPL = 95 days. Basic Pay: Rs.74,300. DA: 50%. Events after 01-01-2023: EL availed for 20 days from 01-04-2023; Commuted Leave for 30 days from 01-10-2023 on medical certificate; No leave taken after 01-01-2024.",
    marks: "5 Marks",
    reference: "[Rules 26, 27, 29, 30, 39(2) of CCS (Leave) Rules, 1972]",
    answerSections: [
      {
        title: "LEAVE ACCOUNT AT RETIREMENT (31-05-2025)",
        content: [],
        table: {
          headers: ["Leave Type", "Balance 01-01-23", "Credits (23-24)", "Availed/Debit", "Prop. Credit 2025", "Final Balance"],
          rows: [
            ["Earned Leave", "220", "30 (2x15)", "20 (EL)", "13 (5m x 2.5)", "258"],
            ["Half Pay Leave", "95", "20 (2x10)", "60 (30x2 CL)", "8 (5m x 5/3)", "73"]
          ]
        }
      },
      {
        title: "CASH EQUIVALENT CALCULATION",
        content: [],
        table: {
          headers: ["Component", "Calculation", "Amount (Rs.)"],
          rows: [
            ["Basic Pay + DA", "74,300 + 37,150", "1,11,450"],
            ["EL Encashment", "(1,11,450 / 30) × 258 days", "9,58,470"],
            ["HPL Encashment*", "(1,11,450 / 2 / 30) × 42 days", "78,015"],
            ["TOTAL PAYABLE", "", "10,36,485"]
          ]
        }
      },
      {
        content: [
          "★ HPL Days: Total limit is 300. EL is 258, so HPL restricted to 300 - 258 = 42 days.",
          "★ HPL Cash: Half of (Pay+DA) is used for HPL encashment calculation.",
          "★ Superannuation: Rule 39(2) allows encashment up to 300 days (EL + HPL)."
        ],
        isList: true
      }
    ]
  },
  {
    id: "CALC6",
    question: "A Government servant avails EL encashment along with LTC. Show the effect on his leave account. Balance on 01-01-2023: EL = 185 days, HPL = 80 days. He availed LTC in June 2023 and encashed 10 days EL. He also availed EL for 12 days during LTC. Calculate balances on 01-07-2023.",
    marks: "5 Marks",
    reference: "[Rules 26, 38-A of CCS (Leave) Rules, 1972]",
    answerSections: [
      {
        title: "EARNED LEAVE ACCOUNT",
        content: [],
        table: {
          headers: ["Period / Particulars", "Earned (days)", "Availed (days)", "Balance (days)"],
          rows: [
            ["Balance on 01-01-2023", "...", "...", "185"],
            ["01-07-2023: Credit", "15", "...", "200"],
            ["LTC EL Encashment (Rule 38-A)", "...", "10", "190"],
            ["EL availed during LTC", "...", "12", "178"],
            ["BALANCE AS ON 01-07-2023", "...", "...", "178"]
          ]
        }
      },
      {
        title: "HALF PAY LEAVE ACCOUNT",
        content: [],
        table: {
          headers: ["Period / Particulars", "Earned (days)", "Availed (days)", "Balance (days)"],
          rows: [
            ["Balance on 01-01-2023", "...", "...", "80"],
            ["01-07-2023: Credit", "10", "...", "90"],
            ["BALANCE AS ON 01-07-2023", "...", "...", "90"]
          ]
        }
      },
      {
        content: [
          "★ Rule 38-A: Max 10 days EL encashment allowed with LTC.",
          "★ Condition: At least 30 days EL must remain at credit after encashment. (185 - 10 = 175 > 30. OK).",
          "★ LTC encashment is independent of the 300-day limit for retirement encashment."
        ],
        isList: true
      }
    ]
  },
  {
    id: "CALC7",
    question: "A Postal Superintendent (Level-7) dies in service on 15-08-2023. His EL balance on that date is 185 days and HPL balance is 145 days. Basic Pay: Rs.62,200. DA: 46%. Calculate cash equivalent payable to family.",
    marks: "5 Marks",
    reference: "[Rule 39-A, CCS (Leave) Rules, 1972]",
    answerSections: [
      {
        title: "LEAVE ENTITLEMENT FOR ENCASHMENT",
        content: [],
        table: {
          headers: ["Leave Type", "Balance at Death", "Restricted to 300 days", "Remarks"],
          rows: [
            ["Earned Leave", "185 days", "185 days", "Full EL is encashed first"],
            ["Half Pay Leave", "145 days", "115 days", "Restricted to 300 - 185 = 115"],
            ["TOTAL", "330 days", "300 days", "Max limit for encashment"]
          ]
        }
      },
      {
        title: "CASH EQUIVALENT CALCULATION",
        content: [],
        table: {
          headers: ["Component", "Formula", "Amount (Rs.)"],
          rows: [
            ["Basic Pay + DA", "62,200 + 28,612 (46%)", "90,812"],
            ["EL Cash", "(90,812 / 30) × 185", "5,60,007"],
            ["HPL Cash", "(90,812 / 2 / 30) × 115", "1,74,056"],
            ["TOTAL PAYABLE", "", "7,34,063"]
          ]
        }
      },
      {
        content: [
          "★ Rule 39-A: In case of death, family is paid cash equivalent of EL and HPL up to 300 days.",
          "★ No reduction in HPL salary (Half Pay + DA) for death encashment calculation."
        ],
        isList: true
      }
    ]
  },
  {
    id: "CALC8",
    question: "Prepare the Leave Account of Shri Rajan, ASPO (Level-8) from 01-01-2020 to date of superannuation (30-04-2022) and calculate cash equivalent. Balance on 01-01-2020: EL = 240 days, HPL = 130 days. Basic Pay on retirement: Rs.74,300. DA: 50%. Events: EL for 30 days from 01-03-2020; EoL from 01-07-2020 to 20-07-2020 (20 days); Under suspension 01-01-2021 to 31-03-2021 regularized as EL.",
    marks: "5 Marks",
    reference: "[Rules 26, 27, 29, 30, 39(2) of CCS (Leave) Rules, 1972]",
    answerSections: [
      {
        title: "LEAVE ACCOUNT AT RETIREMENT (30-04-2022)",
        content: [],
        table: {
          headers: ["Leave Type", "Balance 01-01-20", "Credits (20-21)", "Availed/Debit", "Prop. Credit 2022", "Final Balance"],
          rows: [
            ["Earned Leave", "240", "60 (4x15) - 2 (EoL)", "30 (EL) + 90 (Susp)", "10 (4m x 2.5)", "188"],
            ["Half Pay Leave", "130", "40 (4x10)", "0", "7 (4m x 5/3)", "177"]
          ]
        }
      },
      {
        title: "CASH EQUIVALENT CALCULATION",
        content: [],
        table: {
          headers: ["Component", "Calculation", "Amount (Rs.)"],
          rows: [
            ["Pay + DA", "74,300 + 37,150", "1,11,450"],
            ["EL Encashment", "(1,11,450 / 30) × 188", "6,98,420"],
            ["HPL Encashment", "(1,11,450 / 2 / 30) × 112*", "2,08,040"],
            ["TOTAL CASH", "", "9,06,460"]
          ]
        }
      },
      {
        content: [
          "★ HPL restricted to 300 - 188 = 112 days.",
          "★ Suspension regularized as EL is debited from the EL account.",
          "★ EoL of 20 days reduces EL credit by 2 days (20/10)."
        ],
        isList: true
      }
    ]
  },
  {
    id: "CALC9",
    question: "A Government servant in a Vacation Department (30 days vacation per year) has the following record. Calculate his EL and HPL on 01-01-2023. Balance on 01-01-2021: EL = 60 days, HPL = 45 days. In 2021: availed 20 days vacation out of 30. In 2022: availed full 30 days vacation. No other leave taken.",
    marks: "5 Marks",
    reference: "[Rules 28 & 29 of CCS (Leave) Rules, 1972]",
    answerSections: [
      {
        title: "EARNED LEAVE ACCOUNT (VACATION DEPT)",
        content: [],
        table: {
          headers: ["Period", "Basic Credit", "Addl. EL (Vacation not taken)", "Balance"],
          rows: [
            ["01-01-2021", "...", "...", "60"],
            ["Year 2021", "10 (5+5)", "7* (10/30 of 20)", "77"],
            ["Year 2022", "10 (5+5)", "0 (Full vacation taken)", "87"],
            ["01-01-2023", "5 (Half year)", "...", "92"],
            ["FINAL BALANCE", "...", "...", "92"]
          ]
        }
      },
      {
        title: "HALF PAY LEAVE ACCOUNT",
        content: [],
        table: {
          headers: ["Period", "Credit", "Balance"],
          rows: [
            ["01-01-2021", "...", "45"],
            ["Year 2021-2022", "40 (4 x 10)", "85"],
            ["01-01-2023", "...", "85"]
          ]
        }
      },
      {
        content: [
          "★ Rule 28: Basic EL is 10 days per year (5 per half-year).",
          "★ *Addl EL Formula: (Vacation not taken / Full Vacation) × 20. Here: (10/30) × 20 = 6.66 → 7 days.",
          "★ HPL is credited at 10 days per half-year, same as other employees."
        ],
        isList: true
      }
    ]
  },
  {
    id: "CALC10",
    question: "Comprehensive Problem: Prepare the complete Leave Account of Shri Venkat, IPO (Level-9), from 01-07-2019 to retirement (31-07-2024) and calculate full cash equivalent. Balance on 01-07-2019: EL = 175 days, HPL = 98 days. Basic Pay: Rs.82,600. DA: 46%. Events: EL for 15 days from 15-09-2019; EoL from 01-06-2020 to 20-06-2020 (20 days); 26 days unauthorized absence from 01-03-2021 treated as dies non; Commuted Leave 42 days from 01-09-2021; Transfer on 01-11-2022 availed 8 days JT against 15 days.",
    marks: "5 Marks",
    reference: "[Rules 26, 27, 29, 30, 39(2) of CCS (Leave) Rules, 1972]",
    answerSections: [
      {
        title: "LEAVE ACCOUNT AT RETIREMENT (31-07-2024)",
        content: [],
        table: {
          headers: ["Leave Type", "Balance 01-07-19", "Total Credits", "Total Debits", "Final Balance"],
          rows: [
            ["Earned Leave", "175", "150 (Credits) + 7 (JT) - 5 (Reductions)", "15 (EL)", "300*"],
            ["Half Pay Leave", "98", "100 (Credits) - 1 (Dies non)", "84 (42x2 CL)", "113"]
          ]
        }
      },
      {
        title: "CASH EQUIVALENT CALCULATION",
        content: [],
        table: {
          headers: ["Component", "Calculation", "Amount (Rs.)"],
          rows: [
            ["Basic Pay + DA", "82,600 + 37,996 (46%)", "1,20,596"],
            ["EL Encashment", "(1,20,596 / 30) × 300", "12,05,960"],
            ["HPL Encashment", "0 (EL already 300)", "0"],
            ["TOTAL PAYABLE", "", "12,05,960"]
          ]
        }
      },
      {
        content: [
          "★ EL capped at 300 days. Since EL is 300, HPL encashment is not admissible.",
          "★ Dies non 26 days: EL reduction 3 (2.6), HPL reduction 1 (1.4).",
          "★ EoL 20 days: EL reduction 2.",
          "★ Unavailed JT 7 days (15-8) credited to EL."
        ],
        isList: true
      }
    ]
  }
];
