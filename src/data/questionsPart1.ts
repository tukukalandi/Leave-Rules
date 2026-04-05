export interface Question {
  id: string;
  question: string;
  marks: string;
  reference: string;
  answerSections: {
    title?: string;
    content: string[];
    isList?: boolean;
    table?: {
      headers: string[];
      rows: string[][];
    };
  }[];
}

export const questionsPart1: Question[] = [
  {
    id: "Q1",
    question: "Write a short note on Short Title, Commencement and Extent of Application of CCS (Leave) Rules, 1972.",
    marks: "5 Marks",
    reference: "[Rules 1 & 2, CCS (Leave) Rules, 1972]",
    answerSections: [
      {
        title: "SHORT TITLE & COMMENCEMENT (Rule 1):",
        content: [
          "These rules are called the Central Civil Services (Leave) Rules, 1972.",
          "They came into force on the 1st day of June, 1972."
        ],
        isList: true
      },
      {
        title: "EXTENT OF APPLICATION (Rule 2):",
        content: [
          "These rules apply to Government servants appointed to civil services and posts in connection with the affairs of the Union."
        ]
      },
      {
        title: "These rules do NOT apply to:",
        content: [
          "Railway servants",
          "Persons in casual, daily-rated or part-time employment",
          "Persons paid from contingencies",
          "Workmen in industrial establishments",
          "Persons in work-charged establishments",
          "Members of All India Services",
          "Persons locally recruited for service in Diplomatic/Consular establishments in foreign countries",
          "Persons employed on contract (unless contract provides otherwise)",
          "Persons governed by Fundamental Rules or Civil Service Regulations",
          "Persons on deputation from State Government for limited duration"
        ],
        isList: true
      },
      {
        content: ["★ The rules DO apply to Govt. servants appointed to civil services — including Department of Posts employees."]
      }
    ]
  },
  {
    id: "Q2",
    question: "Define the following terms as per CCS (Leave) Rules, 1972: (i) Completed years of service (ii) Date of Retirement (iii) Vacation Department (iv) Foreign Service (v) Authority competent to grant leave",
    marks: "5 Marks",
    reference: "[Rule 3, CCS (Leave) Rules, 1972]",
    answerSections: [
      {
        title: "(i) Completed years of service:",
        content: ["Continuous service of specified duration under the Central Government including period on duty as well as on leave including extraordinary leave."]
      },
      {
        title: "(ii) Date of Retirement:",
        content: ["Afternoon of the last day of the month in which the Govt. servant attains the age prescribed for retirement under the terms and conditions governing his services."]
      },
      {
        title: "(iii) Vacation Department:",
        content: ["A department or part of a department to which regular vacations are allowed, during which Govt. servants are permitted to be absent from duty."]
      },
      {
        title: "(iv) Foreign Service:",
        content: ["Service in which a Govt. servant receives his pay with the sanction of Government from any source other than the Consolidated Fund of India or the Consolidated Fund of any State or Union Territory."]
      },
      {
        title: "(v) Authority competent to grant leave:",
        content: ["The authority specified in Column (3) of the First Schedule to these rules, competent to grant the kind of leave specified in Column (2) of the said Schedule."]
      }
    ]
  },
  {
    id: "Q3",
    question: "What are the leave provisions applicable to Government servants on temporary transfer or on Foreign Service?",
    marks: "5 Marks",
    reference: "[Rule 4, CCS (Leave) Rules, 1972]",
    answerSections: [
      {
        content: [
          "A Govt. servant to whom CCS (Leave) Rules apply shall CONTINUE to be governed by these rules while:",
          "• On temporary transfer to the Indian Railways",
          "• On temporary transfer to a State Government",
          "• While on foreign service WITHIN INDIA"
        ]
      },
      {
        title: "For Foreign Service OUTSIDE India (Rule 4(2)):",
        content: [
          "Includes service with UN agencies within or outside India, or on temporary transfer to Armed Forces.",
          "These rules shall apply only to the EXTENT PROVIDED in the terms and conditions of foreign service or temporary transfer."
        ],
        isList: true
      },
      {
        content: ["★ Key Rule: For foreign service within India — CCS (Leave) Rules fully apply. For foreign service outside India — apply only to the extent provided in terms and conditions."]
      },
      {
        title: "Note on Foreign Employer's power to grant leave (First Schedule):",
        content: [
          "Foreign employer can grant EL not exceeding 120 days.",
          "For Leave Preparatory to Retirement — prior concurrence of the lending authority under Central Government is required."
        ],
        isList: true
      }
    ]
  },
  {
    id: "Q4",
    question: "What are the provisions regarding Transfer from Services governed by other Leave Rules and Transfer to Industrial Establishment?",
    marks: "5 Marks",
    reference: "[Rules 5 & 6, CCS (Leave) Rules, 1972]",
    answerSections: [
      {
        title: "TRANSFER FROM OTHER LEAVE RULES (Rule 5):",
        content: [
          "When temporarily transferred to a service governed by CCS (Leave) Rules: Govt. servant shall REMAIN SUBJECT to the leave rules applicable BEFORE such transfer.",
          "When appointed substantively to a permanent post governed by CCS (Leave) Rules: Shall become subject to these rules from date of such appointment.",
          "Leave at credit under previous rules shall be CARRIED FORWARD subject to maximum accumulation limits under Rule 26.",
          "The carried-forward leave shall be FIRST EXHAUSTED before leave earned under CCS (Leave) Rules is availed."
        ],
        isList: true
      },
      {
        title: "TRANSFER TO INDUSTRIAL ESTABLISHMENT (Rule 6):",
        content: [
          "If Govt. servant is appointed in an industrial establishment under the Factories Act, 1948:",
          "• Authority shall suo motu issue order granting CASH EQUIVALENT of leave salary for EL + HPL at credit — maximum 300 days.",
          "• If he RETURNS to CCS (Leave) Rules service — combined encashment (under Rule 6 + at retirement) shall not exceed 300 days."
        ]
      }
    ]
  },
  {
    id: "Q5",
    question: "Explain the fundamental principle regarding Right to Leave and Regulation of claim to leave.",
    marks: "5 Marks",
    reference: "[Rules 7 & 8, CCS (Leave) Rules, 1972]",
    answerSections: [
      {
        title: "RIGHT TO LEAVE (Rule 7):",
        content: [
          "★ Leave CANNOT be claimed as a matter of right.",
          "When the exigencies of public service so require, leave of any kind may be REFUSED or REVOKED by the authority competent to grant it.",
          "The authority shall NOT alter the KIND of leave due and applied for — except at the written request of the Govt. servant.",
          "Leave applied under Rule 20 (medical grounds / disability) shall NOT be refused or revoked without reference to the Medical Authority, whose advice shall be BINDING."
        ],
        isList: true
      },
      {
        title: "REGULATION OF CLAIM TO LEAVE (Rule 8):",
        content: [
          "A Govt. servant's claim to leave is regulated by the RULES IN FORCE AT THE TIME the leave is applied for and granted.",
          "This means amendments to leave rules apply from the date of amendment and govern all leaves applied for after that date.",
          "★ Even if leave was earned under old rules, the grant is governed by rules in force at the time of application."
        ],
        isList: true
      }
    ]
  },
  {
    id: "Q6",
    question: "What is the effect of Dismissal, Removal or Resignation on leave at credit? When does leave NOT lapse on resignation?",
    marks: "5 Marks",
    reference: "[Rule 9, CCS (Leave) Rules, 1972]",
    answerSections: [
      {
        content: ["Any claim to leave to the credit of a Govt. servant who is DISMISSED, REMOVED or RESIGNS from service ceases from the date of such dismissal, removal or resignation."]
      },
      {
        title: "EXCEPTIONS — Leave does NOT lapse:",
        content: [
          "(i) Resignation for another Govt. post through proper channel: If Govt. servant applies for another post under Govt. of India but OUTSIDE his parent office/department through proper channel AND is required to resign before taking up the new post — such resignation shall NOT result in lapse of leave credit.",
          "(ii) Reinstatement after dismissal/removal: If dismissed/removed and REINSTATED on appeal or revision — entitled to count for leave his service PRIOR TO DISMISSAL.",
          "(iii) Re-employment after retirement: If re-employed after retirement on compensation/invalid pension and allowed to count past service for pension — former service counts towards leave."
        ],
        isList: true
      },
      {
        content: ["★ Leave salary in respect of leave carried forward on re-appointment shall be borne by the Department/Government from which the Govt. servant proceeds on leave."]
      }
    ]
  },
  {
    id: "Q7",
    question: "Explain Commutation of one kind of Leave into another and Combination of different kinds of leave.",
    marks: "5 Marks",
    reference: "[Rules 10 & 11, CCS (Leave) Rules, 1972]",
    answerSections: [
      {
        title: "COMMUTATION OF LEAVE (Rule 10):",
        content: [
          "At the request of a Govt. servant, the authority which GRANTED leave may commute it retrospectively into leave of a DIFFERENT KIND — which was due and admissible at the time the leave was granted.",
          "The Govt. servant CANNOT claim such commutation as a matter of right.",
          "★ Request must be received within 30 DAYS of joining duty on expiry of the relevant spell of leave.",
          "Commutation is subject to adjustment of leave salary — excess paid shall be recovered, and arrears due shall be paid.",
          "NOTE: Extraordinary Leave may be commuted retrospectively into Leave Not Due, subject to Rule 31 provisions."
        ],
        isList: true
      },
      {
        title: "COMBINATION OF DIFFERENT KINDS OF LEAVE (Rule 11):",
        content: [
          "Except as otherwise provided, any kind of leave under these rules may be granted in COMBINATION with or in CONTINUATION of any other kind of leave.",
          "★ EXCEPTION: CASUAL LEAVE (not recognized under CCS Leave Rules) shall NOT be combined with any other kind of leave admissible under these rules."
        ],
        isList: true
      }
    ]
  },
  {
    id: "Q8",
    question: "Explain the provisions regarding Maximum Amount of Continuous Leave and Acceptance of Service or Employment while on Leave.",
    marks: "5 Marks",
    reference: "[Rules 12 & 13, CCS (Leave) Rules, 1972]",
    answerSections: [
      {
        title: "MAXIMUM CONTINUOUS LEAVE (Rule 12):",
        content: [
          "★ No Govt. servant shall be granted leave of any kind for a continuous period exceeding FIVE YEARS.",
          "A Govt. servant absent from duty continuously for more than 5 years (other than on foreign service), with or without leave, shall be DEEMED TO HAVE RESIGNED from Govt. service.",
          "Before invoking this provision — a reasonable opportunity to explain reasons for absence must be given.",
          "EXCEPTION: Rule does NOT apply where leave is applied on medical certificate in connection with a DISABILITY."
        ],
        isList: true
      },
      {
        title: "SERVICE WHILE ON LEAVE (Rule 13):",
        content: [
          "A Govt. servant on leave shall NOT take up any service or employment without prior sanction.",
          "• Prior sanction from THE PRESIDENT — if employment is OUTSIDE INDIA.",
          "• Prior sanction from AUTHORITY EMPOWERED TO APPOINT — if employment is in INDIA.",
          "While on Leave Preparatory to Retirement: CANNOT take up private employment. MAY take up employment with a PUBLIC SECTOR UNDERTAKING.",
          "★ A Govt. servant on leave shall ordinarily NOT be permitted to take up any other service or employment."
        ],
        isList: true
      }
    ]
  },
  {
    id: "Q9",
    question: "Explain the provisions for Application for Leave and Leave Account under CCS (Leave) Rules, 1972.",
    marks: "5 Marks",
    reference: "[Rules 14 & 15, CCS (Leave) Rules, 1972]",
    answerSections: [
      {
        title: "APPLICATION FOR LEAVE (Rule 14):",
        content: [
          "Any application for leave or for extension of leave shall be made in FORM 1 to the authority competent to grant leave.",
          "If Govt. servant is UNABLE to submit application due to disability, application may be submitted by: The SPOUSE, PARENTS (if unmarried), CHILD/BROTHER/SISTER (if major), or LIMITED GUARDIAN.",
          "★ Such application shall be deemed to have been made by the Govt. servant himself."
        ],
        isList: true
      },
      {
        title: "LEAVE ACCOUNT (Rule 15):",
        content: [
          "A Leave Account shall be maintained in FORM 2 for each Govt. servant.",
          "• For GAZETTED Govt. servants: maintained by the AUDIT OFFICER.",
          "• For NON-GAZETTED Govt. servants: maintained by the HEAD OF OFFICE or an officer authorized by him.",
          "• EXCEPTION: Where pay & allowances of Gazetted Govt. servants are drawn and disbursed by the Head of Office — leave account shall be maintained by that Head of Office."
        ],
        isList: true
      }
    ]
  },
  {
    id: "Q10",
    question: "Explain the provisions for Verification of Title to Leave, Leave not to be granted in certain circumstances, and Grant of Leave on Medical Certificate.",
    marks: "5 Marks",
    reference: "[Rules 16, 17 & 19, CCS (Leave) Rules, 1972]",
    answerSections: [
      {
        title: "VERIFICATION OF TITLE TO LEAVE (Rule 16):",
        content: [
          "No leave shall be granted until a report regarding its ADMISSIBILITY is obtained from the authority maintaining the leave account.",
          "Leave sanction order shall indicate the BALANCE of EL / HPL at the credit of the Govt. servant.",
          "If admissibility report is delayed: Provisional sanction for a period NOT EXCEEDING 60 DAYS may be issued."
        ],
        isList: true
      },
      {
        title: "LEAVE NOT TO BE GRANTED (Rule 17):",
        content: ["★ Leave shall NOT be granted to a Govt. servant whom a competent punishing authority has decided to DISMISS, REMOVE or COMPULSORILY RETIRE from Govt. service."]
      },
      {
        title: "LEAVE ON MEDICAL CERTIFICATE (Rule 19):",
        content: [
          "• Gazetted (CGHS): Doctor in CGHS Dispensary / AMA if away.",
          "• Gazetted (Non-CGHS): Govt Hospital / AMA.",
          "• Non-Gazetted (CGHS): CGHS Dispensary / AMA / RMP (if no AMA within 8 km).",
          "• Non-Gazetted (Non-CGHS): Govt Hospital / AMA.",
          "Medical certificate does NOT in itself confer right to leave — it must be forwarded to authority.",
          "Authority may WAIVE medical certificate for leave up to 3 days at a time."
        ],
        isList: true
      }
    ]
  },
  {
    id: "Q11",
    question: "Explain the provisions relating to Leave to a Government servant who is unlikely to be fit to return to duty.",
    marks: "5 Marks",
    reference: "[Rule 20, CCS (Leave) Rules, 1972]",
    answerSections: [
      {
        content: [
          "When a Medical Authority has reported that there is NO REASONABLE PROSPECT that the Govt. servant will ever be fit to return to duty — leave shall not NECESSARILY be refused.",
          "Leave may be granted (if due) by authority competent to grant leave under the following conditions:"
        ]
      },
      {
        title: "Case (i) — Uncertain about fitness:",
        content: [
          "If Medical Authority is UNABLE TO SAY WITH CERTAINTY that the Govt. servant will NEVER again be fit for service:",
          "• Leave NOT EXCEEDING 12 MONTHS at a time may be granted.",
          "• Such leave shall not be extended without FURTHER REFERENCE to a Medical Authority."
        ],
        isList: true
      },
      {
        title: "Case (ii) — Declared permanently incapacitated (Form 3-A):",
        content: [
          "If Govt. servant is declared by Medical Authority to have acquired disability which may PREVENT him from discharging further service:",
          "• Leave or extension of leave may be granted after certificate received in FORM 3-A.",
          "• Leave so granted shall NOT be debited to the leave account.",
          "★ Any leave debited for period granted under Case (i), after receipt of Form 3-A certificate, shall be REMITTED BACK into the leave account.",
          "The provisions of Section 20 of Rights of Persons with Disabilities Act, 2016 shall, suo motu, apply."
        ],
        isList: true
      }
    ]
  },
  {
    id: "Q12",
    question: "Explain the provisions for Commencement and Termination of Leave and Combination of Holidays with Leave.",
    marks: "5 Marks",
    reference: "[Rules 21 & 22, CCS (Leave) Rules, 1972]",
    answerSections: [
      {
        title: "COMMENCEMENT AND TERMINATION OF LEAVE (Rule 21):",
        content: [
          "Leave ordinarily BEGINS on the day on which the transfer of charge is EFFECTED.",
          "Leave ENDS on the day PRECEDING that on which the charge is RESUMED.",
          "★ This rule is subject to the exception in Rule 22 (Combination of Holidays)."
        ],
        isList: true
      },
      {
        title: "COMBINATION OF HOLIDAYS WITH LEAVE (Rule 22):",
        content: [
          "For Leave OTHER THAN on Medical Certificate: Holidays immediately BEFORE may be PREFIXED; holidays immediately AFTER may be SUFFIXED automatically.",
          "For Leave ON MEDICAL CERTIFICATE: When certified UNWELL, holidays preceding are PREFIXED; holidays succeeding are SUFFIXED. When certified FIT, holidays succeeding are SUFFIXED.",
          "★ A compensatory leave granted in lieu of duty performed on Sunday/holiday (full day) may be treated as a holiday for this purpose.",
          "If holidays are PREFIXED: Leave and pay rearrangement take effect from the day AFTER the holidays.",
          "If holidays are SUFFIXED: Leave is treated as having terminated from the day on which the leave would have ended if holidays had not been suffixed."
        ],
        isList: true
      }
    ]
  },
  {
    id: "Q13",
    question: "Explain the provisions for Recall to duty before expiry of leave and Return from leave.",
    marks: "5 Marks",
    reference: "[Rules 23 & 24, CCS (Leave) Rules, 1972]",
    answerSections: [
      {
        title: "RECALL TO DUTY BEFORE EXPIRY OF LEAVE (Rule 23):",
        content: [
          "★ Recall to duty before expiry of leave shall be treated as COMPULSORY in ALL CASES.",
          "If leave is in INDIA: Treated as ON DUTY from date he starts for station; TA for journey; Leave salary until joining.",
          "If leave is OUTSIDE INDIA: Time spent on voyage to India counted as DUTY; Leave salary during voyage; FREE PASSAGE to India; REFUND of passage from India (if < half leave completed); TA from landing to duty."
        ],
        isList: true
      },
      {
        title: "RETURN FROM LEAVE (Rule 24):",
        content: [
          "Govt. servant on leave shall NOT return before expiry unless permitted.",
          "After leave on medical certificate — must produce FITNESS CERTIFICATE in Form 5.",
          "Gazetted: Certificate from Medical Board if leave > 3 months.",
          "Non-Gazetted: Authority may accept certificate from RMP.",
          "★ A Govt. servant returning from leave is NOT entitled to resume the SAME POST as a matter of course — must report and await orders."
        ],
        isList: true
      }
    ]
  },
  {
    id: "Q14",
    question: "What are the consequences of absence after expiry of leave? What action can be taken for wilful absence?",
    marks: "5 Marks",
    reference: "[Rule 25, CCS (Leave) Rules, 1972]",
    answerSections: [
      {
        content: ["Unless the authority competent to grant leave EXTENDS the leave, a Govt. servant who remains absent after end of leave is entitled to NO LEAVE SALARY for the period of such absence."]
      },
      {
        title: "Treatment of the period of absence in leave account:",
        content: [
          "• The period shall be DEBITED as though it were HALF PAY LEAVE — to the extent HPL is due.",
          "• The period IN EXCESS of HPL due shall be treated as EXTRAORDINARY LEAVE.",
          "★ Wilful absence from duty after expiry of leave renders a Govt. servant LIABLE TO DISCIPLINARY ACTION."
        ],
        isList: true
      },
      {
        title: "Practical Example:",
        content: [
          "• HPL due > Period: Entire period debited as HPL — no leave salary.",
          "• HPL due < Period: HPL due debited as HPL; balance treated as EoL (nil salary).",
          "• HPL credit = NIL: Entire period treated as EoL."
        ],
        isList: true
      }
    ]
  },
  {
    id: "Q15",
    question: "Explain the provisions for Earned Leave for Government servants serving in departments other than Vacation Departments.",
    marks: "5 Marks",
    reference: "[Rules 26 & 27, CCS (Leave) Rules, 1972]",
    answerSections: [
      {
        content: [
          "• Credit (Advance): 15 days each on 1st Jan and 1st July — total 30 days/year.",
          "• Rate of Earning: 2½ days per completed calendar month of service.",
          "• Maximum Accumulation: 300 days.",
          "• Maximum at one time: 180 days (within India); 300 days if outside (Class I/II).",
          "• EoL / dies non reduction: 1/10th of period reduced from next half-year credit (max 15 days).",
          "• Joining time credit: Unavailed joining time (max 15 days) credited as EL."
        ],
        isList: true
      },
      {
        content: [
          "★ If EL balance is 285-300 days at end of half-year, the advance credit of 15 days is kept SEPARATELY and first adjusted against EL taken.",
          "• Foreign service period counts as duty if contribution paid.",
          "• EL for Vacation Dept (Rule 28): 5 days/half year + proportionate for vacation not taken."
        ],
        isList: true
      }
    ]
  },
  {
    id: "Q16",
    question: "Explain the provisions for Half Pay Leave under CCS (Leave) Rules, 1972.",
    marks: "5 Marks",
    reference: "[Rule 29, CCS (Leave) Rules, 1972]",
    answerSections: [
      {
        content: [
          "• Credit (Advance): 10 days each on 1st Jan and 1st July — total 20 days/year.",
          "• Rate of Earning: 5/3 days per completed calendar month.",
          "• Dies non reduction: 1/18th of dies non period reduced from next half-year HPL credit (max 10 days).",
          "• Grant basis: On Medical Certificate OR for Private Affairs.",
          "• Vacation Dept: Not entitled to HPL — they get Departmental Leave instead.",
          "• Departmental Leave employees: 20 days HPL on completion of 12 months duty."
        ],
        isList: true
      },
      {
        content: [
          "★ There is NO maximum accumulation limit for HPL. However, cash encashment at retirement is limited to 300 days combined (EL + HPL).",
          "• HPL salary = HALF of the pay drawn immediately before proceeding on EL."
        ],
        isList: true
      }
    ]
  },
  {
    id: "Q17",
    question: "Explain the provisions for Commuted Leave under CCS (Leave) Rules, 1972.",
    marks: "5 Marks",
    reference: "[Rule 30, CCS (Leave) Rules, 1972]",
    answerSections: [
      {
        title: "Definition:",
        content: ["Conversion of Half Pay Leave into full pay leave, granted on Medical Certificate."]
      },
      {
        title: "Conditions:",
        content: [
          "• Maximum: Not exceeding HALF of HPL due.",
          "• Leave Salary: Full pay (same as Earned Leave).",
          "• Authority must be satisfied about reasonable prospect of return.",
          "★ When Commuted Leave is granted — TWICE the amount shall be DEBITED against HPL due.",
          "• Commuted Leave may be granted even when EL is due."
        ],
        isList: true
      },
      {
        title: "Commutation without Medical Certificate (Rule 30-A):",
        content: ["★ HPL up to 180 DAYS may be commuted during ENTIRE SERVICE for an approved course of study certified in public interest."]
      },
      {
        title: "Recovery (Rule 30(2)):",
        content: ["If resigns/retires voluntarily without returning — treated as HPL; difference recovered. No recovery if due to ill-health or death."]
      }
    ]
  },
  {
    id: "Q18",
    question: "Explain Leave Not Due under CCS (Leave) Rules, 1972 — for both permanent and temporary Government servants.",
    marks: "5 Marks",
    reference: "[Rule 31, CCS (Leave) Rules, 1972]",
    answerSections: [
      {
        title: "Definition:",
        content: ["Leave granted in advance when no HPL is at credit — to be adjusted against HPL earned subsequently."]
      },
      {
        title: "Conditions (Permanent):",
        content: [
          "• Eligibility: Permanent / Quasi-permanent (NOT military).",
          "• Maximum: 360 days during ENTIRE SERVICE — on medical certificate.",
          "• Leave Salary: Half Pay (same as HPL).",
          "• LIMITED to the HPL the Govt. servant is likely to earn THEREAFTER."
        ],
        isList: true
      },
      {
        title: "For TEMPORARY Govt. servants (Rule 31-A):",
        content: [
          "• Allowed if suffering from: TB, Leprosy, Cancer, or Mental Illness.",
          "• Maximum: 360 days during entire service.",
          "• Must have minimum 1 YEAR OF SERVICE.",
          "• Post must be LIKELY TO LAST till return to duty."
        ],
        isList: true
      },
      {
        title: "Recovery:",
        content: ["If resigns without returning — Leave Not Due CANCELLED; salary recovered. No recovery on death or ill-health retirement."]
      }
    ]
  },
  {
    id: "Q19",
    question: "Explain Extraordinary Leave under CCS (Leave) Rules, 1972. What are the limits applicable to various categories of Govt. servants?",
    marks: "5 Marks",
    reference: "[Rule 32, CCS (Leave) Rules, 1972]",
    answerSections: [
      {
        content: [
          "• Leave Salary: NIL — No leave salary during Extraordinary Leave.",
          "• Grant conditions: When no other leave is admissible, OR when Govt. servant applies in writing."
        ],
        isList: true
      },
      {
        title: "Limits for Govt. servants NOT in permanent/quasi-permanent employ:",
        content: [
          "• General: 3 months.",
          "• 1 year service + MC: 6 months.",
          "• TB/Leprosy/Cancer/Mental Illness (1 yr service): 18 months.",
          "• Studies certified in public interest (3 years service): 24 months."
        ],
        isList: true
      },
      {
        content: [
          "★ Two spells of EoL, if intervened by any other kind of leave, shall be treated as ONE CONTINUOUS SPELL.",
          "• Authority may commute retrospectively periods of ABSENCE WITHOUT LEAVE into EoL.",
          "• For permanent: subject to 5-year maximum continuous leave rule."
        ],
        isList: true
      }
    ]
  },
  {
    id: "Q20",
    question: "Explain the leave provisions for Probationers, Persons on Probation, Apprentices, and Re-employed persons after retirement.",
    marks: "5 Marks",
    reference: "[Rules 33 & 34, CCS (Leave) Rules, 1972]",
    answerSections: [
      {
        title: "LEAVE TO PROBATIONER (Rule 33):",
        content: [
          "• Entitled to leave if held post substantively otherwise than on probation.",
          "• If terminated, leave shall not extend beyond expiry of probation or termination date.",
          "• Person on probation: entitled as temporary or permanent as per post."
        ],
        isList: true
      },
      {
        title: "LEAVE TO APPRENTICE (Rule 33(3)):",
        content: [
          "• On MC: Half Pay for not more than 1 MONTH in any year.",
          "• EoL under Rule 32.",
          "★ Apprentices are NOT entitled to EL or regular HPL."
        ],
        isList: true
      },
      {
        title: "PERSONS RE-EMPLOYED AFTER RETIREMENT (Rule 34):",
        content: [
          "• Provisions apply as if entered service for the FIRST TIME.",
          "• Previous credits do NOT carry forward.",
          "• On termination: Cash equivalent of EL + HPL (max 300 days combined)."
        ],
        isList: true
      }
    ]
  },
  {
    id: "Q21",
    question: "Explain Leave Preparatory to Retirement — eligibility, types of leave, and special provisions.",
    marks: "5 Marks",
    reference: "[Rule 38, CCS (Leave) Rules, 1972]",
    answerSections: [
      {
        title: "Definition:",
        content: ["Leave taken immediately before retirement, extending up to and including the date of retirement."]
      },
      {
        title: "Types of Leave in LPR:",
        content: [
          "• Earned Leave — not exceeding 300 days.",
          "• Half Pay Leave — as due.",
          "★ LPR shall NOT include Extraordinary Leave."
        ],
        isList: true
      },
      {
        title: "Key Conditions:",
        content: [
          "• Must be PERMITTED by authority.",
          "• Must EXTEND UP TO AND INCLUDE the date of retirement.",
          "• EL component limited to 300 days.",
          "• CANNOT take up private employment; MAY work in PSU.",
          "• Cannot return to duty without consent."
        ],
        isList: true
      }
    ]
  },
  {
    id: "Q22",
    question: "Explain the provisions for Encashment of Earned Leave along with Leave Travel Concession (LTC) while in service.",
    marks: "5 Marks",
    reference: "[Rule 38-A, CCS (Leave) Rules, 1972]",
    answerSections: [
      {
        content: [
          "• Purpose: To allow encashment of EL at the time of availing LTC.",
          "• Maximum per occasion: 10 days EL.",
          "• Maximum during career: 60 days in aggregate.",
          "• Condition: Balance of at least 30 DAYS of EL must remain at credit.",
          "• Formula: Cash Equivalent = (Pay + DA) ÷ 30 × Days (max 10).",
          "• NO HRA included.",
          "• Not deducted from quantum encashable at retirement."
        ],
        isList: true
      },
      {
        title: "PENALTY FOR NON-AVAILING OF LTC:",
        content: [
          "• Refund ENTIRE amount encashed.",
          "• Interest at 2% ABOVE PF rate.",
          "• Leave RE-CREDITED to account."
        ],
        isList: true
      }
    ]
  },
  {
    id: "Q23",
    question: "Explain Cash Equivalent of Leave Salary on normal superannuation and on premature retirement / voluntary retirement.",
    marks: "5 Marks",
    reference: "[Rules 39(2) & 39(5), CCS (Leave) Rules, 1972]",
    answerSections: [
      {
        title: "ON NORMAL SUPERANNUATION — Rule 39(2):",
        content: [
          "• Authority shall SUO MOTU issue order.",
          "• EL and HPL at credit — subject to COMBINED MAXIMUM OF 300 DAYS.",
          "• Formula for EL: (Pay + DA) ÷ 30 × EL days.",
          "• Formula for HPL: (HPL Salary + DA on HPL Salary) ÷ 30 × HPL days.",
          "★ Overall limit: 300 days combined. No HRA. Payable in LUMPSUM.",
          "• No commutation of HPL to make up EL shortfall."
        ],
        isList: true
      },
      {
        title: "ON PREMATURE/VOLUNTARY RETIREMENT — Rule 39(5):",
        content: ["• May be granted suo motu cash equivalent of EL + HPL at credit, subject to 300 days."]
      },
      {
        title: "WITHHOLDING (Rule 39(3)):",
        content: ["• If under SUSPENSION or disciplinary proceedings, authority may withhold whole or part."]
      }
    ]
  },
  {
    id: "Q24",
    question: "Explain Cash Equivalent of Leave Salary in case of Resignation, Termination of Service, and Death in Service.",
    marks: "5 Marks",
    reference: "[Rules 39(6) & 39-A, CCS (Leave) Rules, 1972]",
    answerSections: [
      {
        title: "ON RESIGNATION / QUITTING — Rule 39(6)(ii):",
        content: [
          "• Cash equivalent of EARNED LEAVE ONLY.",
          "★ Only 50% (HALF) of EL at credit is encashed — max 150 DAYS."
        ],
        isList: true
      },
      {
        title: "ON TERMINATION — Rule 39(6)(i):",
        content: ["• If terminated by notice/payment — cash equivalent of BOTH EL AND HPL (max 300 days)."]
      },
      {
        title: "ON DEATH IN SERVICE — Rule 39-A:",
        content: [
          "• Cash equivalent of BOTH EL AND HPL (max 300 DAYS).",
          "• Paid to FAMILY as per Rule 39-C.",
          "★ Family also entitled to Dearness Allowance as per separate orders."
        ],
        isList: true
      },
      {
        title: "ORDER OF PAYMENT (Rule 39-C):",
        content: ["1st: Widow/Husband; 2nd: Eldest son/adopted son; 3rd: Eldest unmarried daughter; 4th: Eldest widowed daughter; 5th: Father; 6th: Mother; 7th: Eldest married daughter; 8th: Eldest brother < 18."]
      }
    ]
  },
  {
    id: "Q25",
    question: "Explain Cash Equivalent on Invalidation from Service and on Permanent Absorption in PSU / Autonomous Body.",
    marks: "5 Marks",
    reference: "[Rules 39-B & 39-D, CCS (Leave) Rules, 1972]",
    answerSections: [
      {
        title: "ON INVALIDATION — Rule 39-B:",
        content: [
          "• Declared COMPLETELY AND PERMANENTLY INCAPACITATED.",
          "• Cash equivalent of BOTH EL AND HPL (max 300 DAYS).",
          "★ EXCEPTION: Not in permanent/quasi-permanent employ — NO HPL component."
        ],
        isList: true
      },
      {
        title: "ON PERMANENT ABSORPTION — Rule 39-D:",
        content: [
          "• Cash equivalent of EARNED LEAVE ONLY (max 300 DAYS).",
          "★ 'Permanent absorption' means appointment in PSU/Body applied through proper channel AND resigned from Govt. service."
        ],
        isList: true
      }
    ]
  }
];
