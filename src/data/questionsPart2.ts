import { Question } from "./questionsPart1";

export const questionsPart2: Question[] = [
  {
    id: "Q26",
    question: "Explain the Leave Salary admissible during various kinds of leave under Rule 40, CCS (Leave) Rules, 1972.",
    marks: "5 Marks",
    reference: "[Rule 40, CCS (Leave) Rules, 1972]",
    answerSections: [
      {
        content: [
          "• Earned Leave: Equal to PAY DRAWN immediately before (Full Pay).",
          "• Half Pay Leave / Leave Not Due: HALF the amount of EL salary.",
          "• Commuted Leave: EQUAL to EL salary (Full Pay).",
          "• Extraordinary Leave: NIL — No leave salary.",
          "• Study Leave: Full pay + DA + HRA.",
          "• Maternity/Paternity/Child Adoption: Full pay.",
          "• CCL: 100% for first 365 days; 80% for next 365 days.",
          "• Departmental Leave: 25% of EL salary + DA."
        ],
        isList: true
      },
      {
        content: ["★ Extraordinary Leave is the only kind with zero salary."]
      }
    ]
  },
  {
    id: "Q27",
    question: "Explain the provisions for Advance of Leave Salary under CCS (Leave) Rules, 1972.",
    marks: "5 Marks",
    reference: "[Rule 42, CCS (Leave) Rules, 1972]",
    answerSections: [
      {
        content: [
          "• Eligibility: Proceeding on leave for NOT LESS THAN 30 DAYS.",
          "• Amount: Up to ONE MONTH'S PAY AND ALLOWANCES.",
          "• Deductions: Income Tax, PF, House Rent, Recovery of Advances, etc.",
          "• Purpose: Financial support for longer spells.",
          "• Adjustment: Adjusted from leave salary payable during leave.",
          "★ Only applicable if leave is 30 days or more."
        ],
        isList: true
      }
    ]
  },
  {
    id: "Q28",
    question: "Write a short note on Maternity Leave under CCS (Leave) Rules, 1972.",
    marks: "5 Marks",
    reference: "[Rule 43, CCS (Leave) Rules, 1972]",
    answerSections: [
      {
        content: [
          "• Eligibility: Female (incl. apprentice) with < 2 surviving children.",
          "• Duration: 180 days.",
          "• Leave Salary: Full pay.",
          "• Debit: NOT debited against leave account.",
          "• Combination: Can be combined with any other leave (up to 2 years total).",
          "• Miscarriage/Abortion: Up to 45 days during entire service.",
          "• Surrogacy: Both surrogate and commissioning mother (< 2 children) entitled to 180 days."
        ],
        isList: true
      },
      {
        content: ["★ Maternity Leave cannot be refused to an eligible female Govt. servant."]
      }
    ]
  },
  {
    id: "Q29",
    question: "Write a short note on Paternity Leave under CCS (Leave) Rules, 1972. Also explain Paternity Leave for Child Adoption.",
    marks: "5 Marks",
    reference: "[Rules 43-A & 43-AA, CCS (Leave) Rules, 1972]",
    answerSections: [
      {
        title: "PATERNITY LEAVE — Rule 43-A:",
        content: [
          "• Eligibility: Male (incl. apprentice) with < 2 surviving children.",
          "• Duration: 15 days.",
          "• When: 15 days BEFORE or up to 6 MONTHS AFTER delivery.",
          "• Salary: Full pay. NOT debited to account.",
          "• Lapsing: Lapses if not availed within 6 months.",
          "• Surrogacy: Commissioning father entitled to 15 days."
        ],
        isList: true
      },
      {
        title: "FOR CHILD ADOPTION — Rule 43-AA:",
        content: ["• 15 days within 6 months of accepting child < 1 YEAR. Full pay. Not debited."]
      }
    ]
  },
  {
    id: "Q30",
    question: "Write a short note on Child Adoption Leave under CCS (Leave) Rules, 1972.",
    marks: "5 Marks",
    reference: "[Rule 43-B, CCS (Leave) Rules, 1972]",
    answerSections: [
      {
        content: [
          "• Eligibility: Female with < 2 surviving children.",
          "• Trigger: Accepting child in pre-adoption foster care or valid adoption < 1 YEAR.",
          "• Duration: 180 days.",
          "• Salary: Full pay. NOT debited.",
          "• Additional Leave: Up to (1 year minus age of child) may be granted.",
          "★ 'Child' includes ward taken under Guardians and Wards Act, 1890 with special will."
        ],
        isList: true
      }
    ]
  },
  {
    id: "Q31",
    question: "Write a short note on Child Care Leave (CCL) under CCS (Leave) Rules, 1972.",
    marks: "5 Marks",
    reference: "[Rule 43-C, CCS (Leave) Rules, 1972]",
    answerSections: [
      {
        content: [
          "• Who: Female and Single Male (unmarried/widower/divorcee).",
          "• Duration: 730 days during ENTIRE SERVICE for 2 eldest children.",
          "• Child: Below 18 years (no age limit for disabled offspring).",
          "• Salary: 100% for first 365 days; 80% for next 365 days.",
          "• Spells: Max 3 spells/year (6 for single female).",
          "• Minimum: 5 days at a time.",
          "• Surrogacy: Commissioning mother may be granted CCL."
        ],
        isList: true
      },
      {
        content: ["★ CCL is the ONLY special leave where leave salary reduces to 80% in the second year."]
      }
    ]
  },
  {
    id: "Q32",
    question: "Write a short note on Work Related Illness and Injury Leave (WRIIL) under CCS (Leave) Rules, 1972.",
    marks: "5 Marks",
    reference: "[Rule 44, CCS (Leave) Rules, 1972]",
    answerSections: [
      {
        title: "Definition:",
        content: ["Leave for illness/injury attributable to official duties."]
      },
      {
        title: "Salary (Non-military):",
        content: ["Full pay & allowances during hospitalization; Full pay for 6 months after; then Half Pay for 12 months (commutable)."]
      },
      {
        title: "Salary (CAPF):",
        content: ["Full pay for 6 months after hospitalization; then full pay only for next 24 months (Officers). Below rank: Full pay — NO LIMIT."]
      },
      {
        content: ["★ NO EL or HPL shall be CREDITED during the period of WRIIL."]
      }
    ]
  },
  {
    id: "Q33",
    question: "Write a short note on Special Leave connected to inquiry of Sexual Harassment under CCS (Leave) Rules, 1972.",
    marks: "5 Marks",
    reference: "[Rule 48, CCS (Leave) Rules, 1972]",
    answerSections: [
      {
        content: [
          "• Purpose: To protect aggrieved female during pendency of inquiry.",
          "• Duration: Up to 90 days.",
          "• Authority: On recommendation of Internal/Local Committee.",
          "• Debit: NOT debited against leave account.",
          "• Salary: Full pay.",
          "• Condition: Recommendation is a necessary precondition."
        ],
        isList: true
      }
    ]
  },
  {
    id: "Q34",
    question: "Write a short note on Seamen's Sick Leave under CCS (Leave) Rules, 1972.",
    marks: "5 Marks",
    reference: "[Rule 47, CCS (Leave) Rules, 1972]",
    answerSections: [
      {
        content: [
          "• Who: Officer/Warrant Officer/Petty Officer on Govt. vessel.",
          "• Duration: Max 6 WEEKS.",
          "• Salary: FULL PAY.",
          "• Proviso: Not if malingering, drunk, or own action.",
          "• Disabled in duty: Max 3 MONTHS on full pay (if vacancy not filled)."
        ],
        isList: true
      }
    ]
  },
  {
    id: "Q35",
    question: "Compare and contrast all four special leaves: Maternity, Paternity, Child Adoption and Child Care Leave.",
    marks: "5 Marks",
    reference: "[Rules 43, 43-A, 43-B, 43-C, CCS (Leave) Rules, 1972]",
    answerSections: [
      {
        content: [
          "• Maternity: 180 days; Female; < 2 children; Full Pay; No lapse.",
          "• Paternity: 15 days; Male; < 2 children; Full Pay; LAPSES after 6 months.",
          "• Adoption: 180 days; Female; < 2 children; Full Pay; No lapse.",
          "• Child Care: 730 days; Female/Single Male; 2 eldest; 100%/80% Pay; No lapse."
        ],
        isList: true
      },
      {
        content: [
          "★ KEY DIFFERENCE: Paternity Leave is the ONLY one that LAPSES.",
          "★ CCL is the ONLY one where salary reduces to 80% in year 2.",
          "★ ALL FOUR are NOT debited against leave account."
        ],
        isList: true
      }
    ]
  },
  {
    id: "Q36",
    question: "Write a short note on Departmental Leave applicable to Posts and Telegraphs Department.",
    marks: "5 Marks",
    reference: "[Rule 49, CCS (Leave) Rules, 1972]",
    answerSections: [
      {
        content: [
          "• Who: Seasonal staff in P&T whose duties are not continuous.",
          "• Condition: Services temporarily NOT REQUIRED.",
          "• Authority: Divisional Superintendent (recess); PMG/Director (extension).",
          "• Salary: 25% of EL salary + DA ONLY.",
          "• Schedule: Monthly for first 6 months; then on return.",
          "• Features: Not count as duty; Not debited; Can be granted when no leave due."
        ],
        isList: true
      }
    ]
  },
  {
    id: "Q37",
    question: "What are the conditions for grant of Study Leave under CCS (Leave) Rules, 1972?",
    marks: "5 Marks",
    reference: "[Rule 50, CCS (Leave) Rules, 1972]",
    answerSections: [
      {
        title: "Purposes:",
        content: ["Higher studies/training directly connected with sphere of duty; Definite advantage to public interest."]
      },
      {
        title: "Conditions:",
        content: [
          "• Not for academic/literary subjects (with exceptions).",
          "• Foreign exchange agreed (if outside).",
          "• Not granted if adequate facilities exist in India.",
          "• Minimum service: 5 years (incl. probation).",
          "• Retirement: Not within 3 years (5 for CHS).",
          "• Bond: 3 years after return (5 for CHS)."
        ],
        isList: true
      }
    ]
  },
  {
    id: "Q38",
    question: "Explain Maximum amount of Study Leave, Leave Salary during Study Leave, and Accounting of Study Leave.",
    marks: "5 Marks",
    reference: "[Rules 51, 54 & 56, CCS (Leave) Rules, 1972]",
    answerSections: [
      {
        title: "Maximum Amount (Rule 51):",
        content: ["General: 12 months at a time, 24 months total. CHS: 36 months total."]
      },
      {
        title: "Salary (Rule 56):",
        content: ["Full pay + DA + HRA. Adjusted against scholarship/stipend (not below HPL level)."]
      },
      {
        title: "Accounting (Rule 54):",
        content: ["NOT debited against leave account. Total absence max 28 months (36 for PhD)."]
      }
    ]
  },
  {
    id: "Q39",
    question: "Explain Bond provisions for Study Leave and consequences of resignation/non-completion of course of study.",
    marks: "5 Marks",
    reference: "[Rules 53 & 63, CCS (Leave) Rules, 1972]",
    answerSections: [
      {
        title: "Bond Provisions:",
        content: ["Permanent: Form 7/8 (Individual). Non-permanent: Form 9/10 (Two Sureties). Period: 3 years (5 for CHS)."]
      },
      {
        title: "Consequences (Rule 63):",
        content: ["If resigns/quits within bond period or fails course — must REFUND: Actual leave salary, fees, TA, and other expenses + INTEREST."]
      },
      {
        title: "Exceptions:",
        content: ["Medical grounds; Permanent absorption in PSU/Body in public interest."]
      }
    ]
  },
  {
    id: "Q40",
    question: "What are the provisions regarding HRA admissibility during various kinds of leave and during suspension?",
    marks: "5 Marks",
    reference: "[Rule 60 & FR provisions]",
    answerSections: [
      {
        content: [
          "• Up to 180 days: Admissible if accommodation retained.",
          "• Exceeding 180 days: NOT admissible unless certificate produced.",
          "• EoL: Generally NOT admissible.",
          "• Study Leave: Admissible for first 180 days.",
          "• Suspension: NOT payable as part of Subsistence Allowance. Admissible if regularized as leave or on duty."
        ],
        isList: true
      }
    ]
  },
  {
    id: "Q41",
    question: "Explain the provisions relating to Interpretation, Power to Relax, and Repeal and Saving under CCS (Leave) Rules, 1972.",
    marks: "5 Marks",
    reference: "[Rules 64, 65 & 66, CCS (Leave) Rules, 1972]",
    answerSections: [
      {
        content: [
          "• Interpretation: Referred to Ministry of Personnel for decision.",
          "• Power to Relax: Ministry can relax for undue hardship with concurrence of Ministry of Personnel.",
          "• Repeal & Saving: Old rules cease; actions under old rules deemed done under new rules; ensures continuity."
        ],
        isList: true
      }
    ]
  },
  {
    id: "Q42",
    question: "Who are the Authorities Competent to Grant Leave as per the First Schedule to CCS (Leave) Rules, 1972?",
    marks: "5 Marks",
    reference: "[First Schedule]",
    answerSections: [
      {
        content: [
          "• Main Authorities: Ministry/Department, Administrator, C&AG, Head of Department, Appointing Authority.",
          "• Foreign Service: Sanctioning authority or Foreign employer (EL max 120 days).",
          "• State Govt: State Govt or specified authority.",
          "★ Admissibility report must be obtained before sanctioning."
        ],
        isList: true
      }
    ]
  },
  {
    id: "Q43",
    question: "A Government servant applies for 45 days of Commuted Leave on medical certificate. His HPL balance is 60 days. How will this be processed? What will be the leave salary?",
    marks: "5 Marks",
    reference: "[Rule 30, CCS (Leave) Rules, 1972]",
    answerSections: [
      {
        content: [
          "1. Admissibility: Max Commuted Leave = 60 ÷ 2 = 30 days. Only 30 days can be sanctioned.",
          "2. Debit: 30 days Commuted = 60 days HPL debited. Balance = 0.",
          "3. Salary: Full Pay for 30 days; Half Pay for remaining 15 days (if taken as HPL)."
        ],
        isList: true
      }
    ]
  },
  {
    id: "Q44",
    question: "Explain the rules regarding leave for a Government servant under suspension — before and after regularization of the suspension period.",
    marks: "5 Marks",
    reference: "[Rules 9, 25, 26, 32]",
    answerSections: [
      {
        content: [
          "• During: NOT on leave; receives Subsistence Allowance; cannot apply for leave.",
          "• Regularized as On Duty: Full pay/allowances; EL accrues normally.",
          "• Regularized as Leave: Salary as per leave type; debited from account.",
          "• Regularized as EoL: No salary; EL credit for next half-year reduced."
        ],
        isList: true
      }
    ]
  },
  {
    id: "Q45",
    question: "What is the difference between Earned Leave credit for Vacation Department and Non-Vacation Department employees? Explain with a practical example.",
    marks: "5 Marks",
    reference: "[Rules 26, 27 & 28]",
    answerSections: [
      {
        content: [
          "• Non-Vacation: 30 days/year (15+15).",
          "• Vacation: 10 days/year (5+5) + proportionate for vacation not taken.",
          "• Example: If 30 days vacation allowed but none taken, EL = 10 + (30/30)*20 = 30 days (same as non-vacation)."
        ],
        isList: true
      }
    ]
  },
  {
    id: "Q46",
    question: "Explain the provisions for Leave on Medical Certificate including disability cases — Forms involved and key conditions.",
    marks: "5 Marks",
    reference: "[Rules 19 & 20]",
    answerSections: [
      {
        content: [
          "• Forms: Form 3 (Gazetted), Form 4 (Non-Gazetted), Form 3-A (Disability), Form 5 (Fitness).",
          "• Disability: If permanent/complete, leave NOT debited. If uncertain, max 12 months at a time.",
          "★ No reference from Head of Office required for disability certificate."
        ],
        isList: true
      }
    ]
  },
  {
    id: "Q47",
    question: "Distinguish between Earned Leave, Half Pay Leave, Commuted Leave, Leave Not Due and Extraordinary Leave — covering eligibility, salary and key differences.",
    marks: "5 Marks",
    reference: "[Rules 26-32]",
    answerSections: [
      {
        content: [
          "• EL: 30 days/yr; Full Pay; No MC.",
          "• HPL: 20 days/yr; Half Pay; MC/Private.",
          "• Commuted: Derived from HPL (2:1); Full Pay; MC.",
          "• Leave Not Due: Advance HPL; Half Pay; MC.",
          "• EoL: Unpaid; No salary; Special circumstances."
        ],
        isList: true
      }
    ]
  },
  {
    id: "Q48",
    question: "Explain the key provisions regarding GDS (Gramin Dak Sevaks) leave entitlements — how they differ from regular Govt. servants.",
    marks: "5 Marks",
    reference: "[GDS Rules 2011]",
    answerSections: [
      {
        content: [
          "• GDS governed by GDS Rules 2011, NOT CCS Leave Rules.",
          "• General Leave: 20 days/year (max 180 accumulation).",
          "• Maternity: 60 days (vs 180).",
          "• No EL/HPL/Commuted/LND structure."
        ],
        isList: true
      }
    ]
  },
  {
    id: "Q49",
    question: "Write short notes on: (a) Advance of Leave Salary (Rule 42) and (b) Leave Salary during Study Leave (Rule 56) — with formulae and conditions.",
    marks: "5 Marks",
    reference: "[Rules 42 & 56]",
    answerSections: [
      {
        content: [
          "(a) Advance: 30+ days leave; up to 1 month pay/allowances; adjusted from salary.",
          "(b) Study Salary: Full pay + DA + HRA; adjusted against scholarship (min HPL level)."
        ],
        isList: true
      }
    ]
  },
  {
    id: "Q50",
    question: "Write a comprehensive note covering all leave-related provisions applicable to female Government servants under CCS (Leave) Rules, 1972.",
    marks: "5 Marks",
    reference: "[Rules 43, 43-B, 43-C, 48]",
    answerSections: [
      {
        content: [
          "• Maternity: 180 days; Miscarriage: 45 days.",
          "• Adoption: 180 days.",
          "• CCL: 730 days (100%/80% salary).",
          "• Sexual Harassment: 90 days.",
          "★ All are non-debitable and can be combined."
        ],
        isList: true
      }
    ]
  }
];
