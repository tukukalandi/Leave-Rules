export interface Rule {
  id: string;
  title: string;
  content: string[];
  explanation: string;
}

export const rules: Rule[] = [
  {
    id: "1",
    title: "Short Title and Commencement",
    content: [
      "These rules are called the Central Civil Services (Leave) Rules, 1972.",
      "They came into force on June 1, 1972."
    ],
    explanation: "This rule simply establishes the official name of the regulations and the date from which they became effective for all applicable government employees."
  },
  {
    id: "2",
    title: "Extent of Application",
    content: [
      "Applies to Government servants appointed to civil services and posts under the Union.",
      "Does NOT apply to: Railway servants, casual/daily-rated employees, members of All India Services, persons on contract (unless specified), etc."
    ],
    explanation: "This rule defines who is covered by these leave rules. It primarily targets central government civil employees while excluding specific categories like railway staff or those on temporary/casual contracts who have their own separate sets of rules."
  },
  {
    id: "3",
    title: "Definitions",
    content: [
      "Administrator: Head of a Union Territory.",
      "Audit Officer: The accounts officer in charge.",
      "Authority competent to grant leave: The designated official who can approve leave.",
      "Completed years of service: Continuous service including periods spent on duty and leave."
    ],
    explanation: "To avoid confusion, this rule provides clear definitions for technical terms used throughout the document. Understanding these is crucial for interpreting the subsequent rules correctly."
  },
  {
    id: "4",
    title: "Government Servants on Temporary Transfer or Foreign Service",
    content: [
      "Employees continue to be governed by these rules during temporary transfers to Railways or State Governments within India.",
      "For foreign service outside India, rules apply as per the terms of transfer."
    ],
    explanation: "If you are temporarily sent to work in another department or even a state government, your right to leave under the CCS rules remains protected."
  },
  {
    id: "5",
    title: "Transfer from Services Governed by Other Rules",
    content: [
      "Permanent employees transferred from other services remain subject to their original rules temporarily.",
      "Military officers electing civil pay rates are regulated by these rules."
    ],
    explanation: "This handles the transition period when an employee moves from a service with different leave rules (like the military) to one governed by the CCS rules."
  },
  {
    id: "6",
    title: "Transfer to Industrial Establishment",
    content: [
      "If transferred to an industrial unit governed by the Factories Act, the employee gets a cash equivalent for leave at credit (max 300 days).",
      "If they return to a CCS-governed post, previous encashments are adjusted against the 300-day limit."
    ],
    explanation: "Industrial workers have different leave systems. This rule ensures that when moving between these systems, your earned leave is either paid out or properly accounted for."
  },
  {
    id: "7",
    title: "Right to Leave",
    content: [
      "Leave cannot be claimed as a matter of right.",
      "Authority can refuse or revoke leave due to public service exigencies.",
      "Authority cannot change the kind of leave applied for without a written request from the employee."
    ],
    explanation: "This is a fundamental principle: you can't demand leave. The government can say 'no' if work requires you to be present. However, they can't force you to take a different type of leave (e.g., changing your Earned Leave to Half Pay Leave) without your consent."
  },
  {
    id: "8",
    title: "Regulation of Claim to Leave",
    content: [
      "Claims are regulated by the rules in force at the time the leave is applied for and granted."
    ],
    explanation: "If the rules change while you are in service, the rules that exist when you actually apply for leave are the ones that apply to you."
  },
  {
    id: "9",
    title: "Effect of Dismissal, Removal or Resignation",
    content: [
      "Leave at credit lapses upon dismissal, removal, or resignation.",
      "Exception: If resignation is to take up another government post through proper channels, leave is carried forward.",
      "Reinstated employees can count prior service for leave."
    ],
    explanation: "Generally, if you leave the government or are fired, you lose your accumulated leave. However, if you move to another government job correctly, your leave moves with you."
  },
  {
    id: "10",
    title: "Commutation of One Kind of Leave into Another",
    content: [
      "Employees can request to change the type of leave already taken (e.g., from EL to Commuted Leave).",
      "Request must be made within 30 days of joining duty after the leave.",
      "It is not a right; the authority must approve it."
    ],
    explanation: "Sometimes you take one type of leave but later realize another type was more appropriate (often for medical reasons). This rule allows you to retroactively change the leave type if requested promptly."
  },
  {
    id: "11",
    title: "Combination of Different Kinds of Leave",
    content: [
      "Any kind of leave under these rules can be combined with any other kind.",
      "Casual Leave (CL) cannot be combined with other types of leave."
    ],
    explanation: "You can take Earned Leave followed immediately by Half Pay Leave. However, Casual Leave is separate and cannot be 'tacked on' to these regular leave types."
  },
  {
    id: "12",
    title: "Maximum Amount of Continuous Leave",
    content: [
      "No employee shall be granted leave of any kind for a continuous period exceeding five years.",
      "Absence beyond five years (without specific Presidential approval) is deemed as resignation."
    ],
    explanation: "The government won't keep a job open for you indefinitely. Five years is the absolute limit for continuous absence, after which you are considered to have quit."
  },
  {
    id: "13",
    title: "Acceptance of Service or Employment While on Leave",
    content: [
      "Employees cannot take up other jobs or private practice while on leave without prior sanction.",
      "Sanction is required from the President (for jobs outside India) or the Appointing Authority (within India)."
    ],
    explanation: "Even while on leave, you are still a government servant and cannot work elsewhere without permission."
  },
  {
    id: "14",
    title: "Application for Leave",
    content: [
      "Applications must be made in Form 1.",
      "If disabled, family members or guardians can sign and submit the application."
    ],
    explanation: "There is a standard procedure and form for applying for leave to ensure proper record-keeping."
  },
  {
    id: "15",
    title: "Leave Account",
    content: [
      "A leave account must be maintained in Form 2 for every employee.",
      "Maintained by the Audit Officer (for Gazetted) or Head of Office (for non-Gazetted)."
    ],
    explanation: "The government keeps a formal 'bank account' of your leave days so everyone knows exactly how much you have left."
  },
  {
    id: "16",
    title: "Verification of Title to Leave",
    content: [
      "Leave is only granted after verifying its admissibility from the leave account.",
      "Provisional leave (up to 60 days) can be granted if the report is delayed."
    ],
    explanation: "Before you go on leave, the office checks your 'balance' to make sure you actually have the days you're asking for."
  },
  {
    id: "17",
    title: "Leave Not to be Granted in Certain Circumstances",
    content: [
      "Leave shall not be granted if the authority has decided to dismiss, remove, or compulsorily retire the employee."
    ],
    explanation: "If you are in the process of being fired, you can't take leave to avoid the disciplinary action."
  },
  {
    id: "19",
    title: "Grant of Leave on Medical Certificate",
    content: [
      "Must be accompanied by a Medical Certificate in Form 3 (Gazetted) or Form 4 (non-Gazetted).",
      "Certificate must be from a CGHS doctor or authorized medical attendant.",
      "Authority can seek a second medical opinion if needed."
    ],
    explanation: "If you're sick, you need a formal note from an approved doctor. The government has the right to double-check if they suspect the note isn't genuine."
  },
  {
    id: "20",
    title: "Leave to Servant Unlikely to be Fit to Return",
    content: [
      "If a medical authority reports no prospect of return to duty, leave can still be granted (if due).",
      "Conditions apply regarding the duration and type of leave granted in such cases."
    ],
    explanation: "This rule provides a compassionate way to handle employees who become permanently incapacitated, allowing them to use their remaining leave before leaving service."
  },
  {
    id: "21",
    title: "Commencement and Termination of Leave",
    content: [
      "Leave begins on the day charge is transferred and ends the day before charge is resumed."
    ],
    explanation: "This defines the exact start and end points of your leave for accounting purposes."
  },
  {
    id: "22",
    title: "Combination of Holidays with Leave",
    content: [
      "Holidays can be prefixed (added before) or suffixed (added after) to leave.",
      "Holidays falling within the leave period are treated as part of the leave."
    ],
    explanation: "If you take leave from Monday to Friday, and Saturday/Sunday are holidays, you can add those weekends to your time off without them counting against your leave balance, provided they are at the start or end."
  },
  {
    id: "23",
    title: "Recall to Duty Before Expiry of Leave",
    content: [
      "Employees can be recalled to duty if needed.",
      "Recall is treated as compulsory; employee is entitled to travel allowance and leave salary until they join."
    ],
    explanation: "If there's an emergency, the government can call you back. If they do, they pay for your travel back to work."
  },
  {
    id: "24",
    title: "Return from Leave",
    content: [
      "Cannot return before leave expiry without permission.",
      "Medical fitness certificate (Form 5) is required if leave was on medical grounds."
    ],
    explanation: "You can't just show up early if you were granted a longer leave. Also, if you were sick, you must prove you are now healthy enough to work."
  },
  {
    id: "25",
    title: "Absence After Expiry of Leave",
    content: [
      "Unauthorized absence after leave results in no salary.",
      "Period is debited as Half Pay Leave (if due) or Extraordinary Leave.",
      "Willful absence can lead to disciplinary action."
    ],
    explanation: "If you don't come back on time without a good reason, you won't get paid, and you might get in trouble."
  },
  {
    id: "26",
    title: "Earned Leave (Non-Vacation Departments)",
    content: [
      "Credit of 15 days on Jan 1st and July 1st every year (advance credit).",
      "Maximum accumulation limit is 300 days.",
      "Maximum at one time: 180 days (within India).",
      "EL for foreign travel (Class I/II): Up to 300 days if entire leave or portion is spent outside specified countries.",
      "Unavailed joining time can be credited as EL (max 15 days).",
      "IMPORTANT: If EL balance is between 285-300 days at end of half-year, advance credit is kept separately and adjusted against leave taken first."
    ],
    explanation: "This is your main leave. You get 30 days a year, added in two batches. You can save up to 300 days. If you are near the limit, the new credit is held in a 'buffer' so you don't lose it immediately if you take leave soon."
  },
  {
    id: "27",
    title: "Calculation of Earned Leave",
    content: [
      "Credited at 2.5 days for each completed calendar month of service.",
      "In year of retirement/resignation/death: 2.5 days per completed month up to that date.",
      "On dismissal/removal: 2.5 days per month up to end of preceding month.",
      "Reduced by 1/10th of any period of Extraordinary Leave or 'dies-non' (max 15 days reduction).",
      "Fractions are rounded to the nearest day."
    ],
    explanation: "This explains the math behind how your leave is calculated if you join or leave mid-year, or if you take unpaid leave. It ensures fair credit based on actual service time."
  },
  {
    id: "28",
    title: "Earned Leave (Vacation Departments)",
    content: [
      "Basic credit of 5 days on Jan 1st and July 1st.",
      "Additional EL proportionate to vacation not taken (up to 20 days additional).",
      "Total EL credited cannot exceed 30 days in a year.",
      "When no vacation is availed at all, EL is granted as per Rule 26 (30 days/year)."
    ],
    explanation: "Teachers and others who get long vacations get less 'Earned Leave' because they already have scheduled time off. If they are forced to work during their vacation, they get extra EL to compensate."
  },
  {
    id: "29",
    title: "Half Pay Leave",
    content: [
      "Credit of 10 days on Jan 1st and July 1st (advance credit).",
      "Calculated at 5/3 days per completed calendar month.",
      "Can be taken on medical certificate or for private affairs.",
      "Not applicable to Vacation Dept. employees (they get departmental leave instead).",
      "IMPORTANT: Staff eligible for Rule 49 get 20 days HPL on completion of 12 months duty."
    ],
    explanation: "This is leave where you get half your normal pay. It's often used when Earned Leave is exhausted, especially for sickness. It accumulates throughout your service."
  },
  {
    id: "30",
    title: "Commuted Leave",
    content: [
      "Granted on medical certificate by doubling the debit to Half Pay Leave account.",
      "Max 180 days during entire service for approved study courses (in public interest).",
      "Authority must be satisfied about reasonable prospect of return to duty.",
      "If resigning/retiring voluntarily without returning, difference in leave salary is recovered."
    ],
    explanation: "You can 'trade' two days of Half Pay Leave for one day of Full Pay Leave (Commuted Leave) if you are sick. If you quit right after taking it, you might have to pay back the extra money you received."
  },
  {
    id: "31",
    title: "Leave Not Due",
    content: [
      "Granted to permanent/quasi-permanent employees when no other leave is available.",
      "Limited to 360 days in entire service (on medical grounds).",
      "Temporary employees: Up to 360 days for specific chronic illnesses (TB, Cancer, etc.).",
      "Condition: Authority satisfied about prospect of return; limited to HPL likely to be earned later."
    ],
    explanation: "This is like a 'leave loan'. The government lets you take leave now, and you 'pay it back' with the leave you earn in the future. It's usually reserved for serious medical situations."
  },
  {
    id: "32",
    title: "Extraordinary Leave (EOL)",
    content: [
      "Granted when no other leave is admissible or when requested in writing.",
      "No leave salary is paid during EOL.",
      "Limits for non-permanent staff: 3 months (general), 6 months (medical), 18 months (chronic illness), 24 months (studies).",
      "Two spells of EoL intervened by other leave are treated as one continuous spell."
    ],
    explanation: "This is unpaid leave. It's used for long absences like higher studies or when you've used up all your paid leave. It doesn't count as 'service' for earning more leave."
  },
  {
    id: "33",
    title: "Leave to Probationers and Apprentices",
    content: [
      "Probationers are entitled to leave as if they were permanent, if post held substantively.",
      "Leave to probationer shall not extend beyond the date probationary period expires.",
      "Apprentices get leave on medical grounds (HPL) up to 1 month per year and EOL."
    ],
    explanation: "Even new employees on 'trial' (probation) get leave benefits, though there are limits to ensure they complete their training period."
  },
  {
    id: "34",
    title: "Persons Re-employed After Retirement",
    content: [
      "Treated as if they entered service for the first time for leave purposes."
    ],
    explanation: "If you retire and then get hired back, your leave 'clock' resets to zero."
  },
  {
    id: "38",
    title: "Leave Preparatory to Retirement",
    content: [
      "Can be taken up to 300 days (including EL and HPL) ending on the date of retirement.",
      "LPR shall NOT include Extraordinary Leave (EOL).",
      "LPR must extend up to and include the actual date of retirement."
    ],
    explanation: "You can use your saved-up leave to effectively stop working a few months before your official retirement date. It's a way to transition smoothly out of service."
  },
  {
    id: "38-A",
    title: "Encashment of EL with LTC",
    content: [
      "Up to 10 days of EL can be encashed while availing Leave Travel Concession (LTC).",
      "Total encashment during career cannot exceed 60 days.",
      "Balance of at least 30 days EL must remain after encashment + leave availed.",
      "Formula: (Pay + DA) / 30 × Number of days EL encashed (No HRA included).",
      "If LTC not availed in time, refund required with 2% interest."
    ],
    explanation: "When you go on a government-paid holiday (LTC), you can 'sell back' 10 days of your leave to get extra cash for your trip. It's a nice financial boost for your vacation."
  },
  {
    id: "39",
    title: "Leave/Cash Payment Beyond Retirement",
    content: [
      "Cash equivalent for unutilized EL and HPL is paid upon retirement (max 300 days).",
      "No leave shall be granted beyond the date of retirement or resignation.",
      "On resignation: Cash equivalent of EL only, up to 50% of credit (max 150 days).",
      "On death/invalidation: Cash equivalent of EL + HPL (max 300 days) paid to family/self."
    ],
    explanation: "When you retire, the government 'buys back' your unused leave. If you quit early, you get less. If you die in service, your family gets the full benefit."
  },
  {
    id: "39-A",
    title: "Cash Equivalent in Case of Death in Service",
    content: [
      "Family of the deceased employee receives cash equivalent for unused EL and HPL (max 300 days).",
      "Paid without any deductions for government dues (except specific cases)."
    ],
    explanation: "If an employee dies while working, their family gets the money for the leave the employee hadn't used."
  },
  {
    id: "39-B",
    title: "Cash Equivalent in Case of Invalidation",
    content: [
      "Employees retired due to medical invalidation get cash equivalent for unused leave (max 300 days)."
    ],
    explanation: "If you are forced to retire early because of a permanent disability, you get paid for your unused leave."
  },
  {
    id: "39-C",
    title: "Payment Order for Death Cases",
    content: [
      "Defines the hierarchy of family members entitled to receive the leave encashment (Widow/Husband, then children, then parents, etc.)."
    ],
    explanation: "This rule specifies exactly who gets the money if an employee dies, to avoid family disputes."
  },
  {
    id: "39-D",
    title: "Encashment on Permanent Absorption",
    content: [
      "Employees absorbed into PSUs or Autonomous Bodies get cash equivalent for leave at credit (max 300 days)."
    ],
    explanation: "If your government department becomes a private company or you move to a PSU permanently, your leave is settled with a cash payment."
  },
  {
    id: "40",
    title: "Leave Salary",
    content: [
      "Earned Leave: Equal to pay drawn immediately before leave (full pay).",
      "Half Pay Leave: Half the amount specified for EL (half pay).",
      "Leave Not Due: Half pay (same as HPL).",
      "Commuted Leave: Full pay (same as EL).",
      "Extraordinary Leave: NIL - No leave salary.",
      "Maternity/Paternity/Child Adoption Leave: Full pay.",
      "Child Care Leave: 100% salary for first 365 days, 80% for next 365 days.",
      "Study Leave: Full pay + DA + HRA.",
      "Departmental Leave: 25% of pay admissible during EL + DA only.",
      "WRIIL (hospitalization): Full pay and allowances."
    ],
    explanation: "This rule defines exactly how much money you get in your pocket while you are on different types of leave. It ensures you know your financial entitlements during various absences."
  },
  {
    id: "41",
    title: "Drawal of Leave Salary",
    content: [
      "Leave salary is drawn in Rupees in India."
    ],
    explanation: "A simple administrative rule about the currency and location of payment."
  },
  {
    id: "42",
    title: "Advance of Leave Salary",
    content: [
      "Employees going on leave for 30+ days can get an advance of one month's salary.",
      "Deductions for tax, rent, etc., are made from the advance."
    ],
    explanation: "If you're going on a long leave, you can get your salary in advance to help with expenses."
  },
  {
    id: "43",
    title: "Maternity Leave",
    content: [
      "Female employees (including apprentices) with < 2 children get 180 days leave.",
      "Full pay drawn immediately before leave.",
      "NOT debited against leave account; can be combined with other leave.",
      "Miscarriage/abortion: Up to 45 days during entire service on medical certificate.",
      "Surrogacy: Both surrogate and commissioning mother entitled to 180 days."
    ],
    explanation: "A vital benefit for mothers, providing 6 months of paid time off for childbirth or adoption. It doesn't reduce your other leave balances."
  },
  {
    id: "43-A",
    title: "Paternity Leave",
    content: [
      "Male employees (including apprentices) with < 2 children get 15 days leave.",
      "Can be taken 15 days before or up to 6 months after childbirth/delivery.",
      "Full pay; NOT debited against leave account; lapses if not taken in time.",
      "Surrogacy: Commissioning father entitled to 15 days within 6 months.",
      "Note: Normally shall NOT be refused under any circumstances."
    ],
    explanation: "Allows fathers to spend time with their newborn. It's a short but guaranteed paid leave that doesn't affect your regular leave balance."
  },
  {
    id: "43-AA",
    title: "Paternity Leave for Child Adoption",
    content: [
      "15 days leave for male employees with < 2 children adopting a child below 1 year.",
      "Within 6 months of pre-adoption foster care or valid adoption.",
      "If foster care doesn't lead to adoption, leave is debited from other kinds."
    ],
    explanation: "Extends paternity benefits to fathers who grow their families through adoption, ensuring they have time to bond with the new child."
  },
  {
    id: "43-B",
    title: "Child Adoption Leave",
    content: [
      "Female employees with < 2 children get 180 days leave on valid adoption (< 1 year).",
      "Full pay; NOT debited against leave account.",
      "Additional leave up to (1 year minus age of child) may be granted."
    ],
    explanation: "Ensures adoptive mothers get the same bonding time as biological mothers, with extra flexibility based on the child's age."
  },
  {
    id: "43-C",
    title: "Child Care Leave (CCL)",
    content: [
      "Female/Single Male employees get max 730 days for 2 eldest surviving children.",
      "Child definition: Below 18 years, or any age if disabled (min 40% disability).",
      "100% salary for first 365 days, 80% for next 365 days; NOT debited from account.",
      "Max 3 spells/year (6 for single female); Min 5 days at a time.",
      "Not ordinarily granted during probation; Single male = unmarried/widower/divorcee."
    ],
    explanation: "A flexible leave for parents to handle children's needs. It's a long-term benefit that can be used in small chunks over many years."
  },
  {
    id: "44",
    title: "Work Related Illness and Injury Leave (WRIIL)",
    content: [
      "For illness/injury attributable to performance of official duties.",
      "Full pay and allowances during entire period of hospitalization.",
      "Beyond hospitalization: Full pay for 6 months, then HPL for 12 months.",
      "CAPF: Full pay for 6 months after hospital, then Full Pay for next 24 months.",
      "No EL/HPL is credited during WRIIL period."
    ],
    explanation: "Special protection for employees who get hurt or sick because of their job. It ensures they are financially supported during recovery without using their own leave."
  },
  {
    id: "47",
    title: "Seamen’s Sick Leave",
    content: [
      "Officer/warrant officer/petty officer on Govt. vessel: Full pay up to 6 weeks.",
      "Seaman disabled in exercise of duty: Full pay up to 3 months (conditions apply).",
      "Not granted if medical officer certifies malingering or self-inflicted injury."
    ],
    explanation: "Tailored leave for those working at sea. It provides full pay for injuries or sickness occurring while on duty on a government ship."
  },
  {
    id: "48",
    title: "Special Leave for Sexual Harassment Inquiry",
    content: [
      "Aggrieved female employees get up to 90 days leave during inquiry pendency.",
      "Under Sexual Harassment of Women at Workplace Act, 2013.",
      "Granted on recommendation of Committee; NOT debited against leave account."
    ],
    explanation: "Provides safety and relief to victims of sexual harassment during the investigation process, ensuring they don't have to use their personal leave."
  },
  {
    id: "49",
    title: "Departmental Leave",
    content: [
      "For Class III seasonal staff (e.g., Survey of India, Posts & Telegraphs).",
      "Granted when services are temporarily not required; paid at 25% of salary.",
      "Paid at end of each month for first 6 months; thereafter on return to duty.",
      "Does NOT count as duty; NOT debited to leave account; can be combined."
    ],
    explanation: "Handles the 'off-season' for departments that don't work year-round. It provides a small retainer salary while the employee is waiting for the next season."
  },
  {
    id: "50",
    title: "Conditions for Grant of Study Leave",
    content: [
      "For higher studies or specialized training directly related to duties.",
      "Minimum 5 years regular continuous service including probation required.",
      "Not due to retire within 3 years (5 years for Central Health Service Officers).",
      "Must be of definite advantage from public interest point of view.",
      "Must execute Bond (Form 7/8 or 9/10) to serve for 3 years (5 years for CHS Officers)."
    ],
    explanation: "The government supports you in getting smarter, but only if it helps you do your job better. You must have served long enough and promise to stay for a few years after your studies."
  },
  {
    id: "51",
    title: "Maximum Amount of Study Leave",
    content: [
      "Ordinarily 12 months at a time.",
      "General Govt. servants: Max 24 months during entire service.",
      "Central Health Service Officers: Max 36 months for PG qualification."
    ],
    explanation: "There's a limit to how long you can be away for studies while keeping your job. Medical officers get a bit more time for their specializations."
  },
  {
    id: "52",
    title: "Applications for Study Leave",
    content: [
      "Must be submitted through proper channels with full details of the course."
    ],
    explanation: "Requires formal approval and planning before you start your studies."
  },
  {
    id: "53",
    title: "Sanction of Study Leave",
    content: [
      "Requires a report on admissibility from the Audit Officer.",
      "Employee must execute a bond (Form 7/8/9/10) to serve the government for a fixed period after return."
    ],
    explanation: "If the government pays for your studies, you must promise to work for them for a few years afterward."
  },
  {
    id: "54",
    title: "Accounting of Study Leave",
    content: [
      "Study leave shall NOT be debited against the regular leave account.",
      "Can be combined with other leave, but total absence shouldn't exceed 28 months (36 months for PhD)."
    ],
    explanation: "Study leave is a 'bonus' leave that doesn't use up your Earned Leave balance. However, there is a cap on how long you can be away in total."
  },
  {
    id: "55",
    title: "Regularity of Study Leave",
    content: [
      "If the course ends early, the employee must resume duty immediately."
    ],
    explanation: "You can't stay on 'vacation' if your classes are over."
  },
  {
    id: "56",
    title: "Leave Salary During Study Leave",
    content: [
      "Study Leave in India/Outside India: Full pay (pay drawn before leave) + DA + HRA.",
      "Any scholarship/stipend/remuneration received is adjusted against leave salary.",
      "Salary not to fall below Half Pay Leave (HPL) salary level."
    ],
    explanation: "You get your full pay while studying, but if you're getting a scholarship, the government might reduce your salary so you don't 'double dip', though you'll always get at least half pay."
  },
  {
    id: "60",
    title: "Admissibility of Allowances",
    content: [
      "HRA is paid for the first 180 days of study leave.",
      "No other allowances (except DA) are generally paid."
    ],
    explanation: "You keep your house rent allowance for the first 6 months, but other perks might stop."
  },
  {
    id: "61",
    title: "Travelling Allowance During Study Leave",
    content: [
      "Not ordinarily paid, but the President can sanction it in exceptional cases."
    ],
    explanation: "Usually, you pay for your own travel to the university."
  },
  {
    id: "62",
    title: "Cost of Fees for Study",
    content: [
      "Employee ordinarily pays the fees, but the government can sanction payment in special cases."
    ],
    explanation: "You usually pay for the course yourself unless the government specifically agrees to cover it."
  },
  {
    id: "63",
    title: "Resignation/Retirement After Study Leave",
    content: [
      "If you quit within 3 years of returning (5 years for some), you must refund leave salary, fees, TA and other expenses.",
      "Actual cost incurred by foreign Governments/Foundations/Trusts with interest must also be refunded.",
      "No refund if retirement is on medical grounds or after deputation for permanent absorption in Autonomous Body."
    ],
    explanation: "This is the 'penalty' for breaking your bond. If you leave early, you pay back what the government spent on you, unless it's for health reasons or a specific transfer."
  },
  {
    id: "64",
    title: "Interpretation",
    content: [
      "Doubts about interpretation are referred to the Government of India in the Ministry of Personnel, Public Grievances and Pensions for decision."
    ],
    explanation: "If there's an argument about what a rule means, the specific Ministry has the final say."
  },
  {
    id: "65",
    title: "Power to Relax",
    content: [
      "Ministry can relax rules in cases of undue hardship (reasons to be recorded in writing).",
      "IMPORTANT: Such relaxation requires concurrence of the Ministry of Personnel, Public Grievances and Pensions."
    ],
    explanation: "The government can make exceptions if a rule is causing someone extreme and unfair trouble, but it needs high-level approval."
  },
  {
    id: "66",
    title: "Repeal and Saving",
    content: [
      "On commencement of these rules, all previous rules on leave cease to operate.",
      "Anything done or leave earned under old rules is deemed to have been done under corresponding provisions of these rules."
    ],
    explanation: "This rule transitions from the old system to the 1972 system smoothly, ensuring previous credits are protected."
  }
];
