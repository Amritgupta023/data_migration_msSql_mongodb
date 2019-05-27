'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema
let CustomerConnectDataSchema = new Schema({
  fileId: {
    type: mongoose.Schema.Types.ObjectId
  },
  integrityIssueInData: {
    type: Boolean,
    index: true,
    default: false
  },
  SerialNumber: {
    type: String,
    default: "",
  },
  UniqueNumber: {
    type: String,
    default: "",
  },
  FieldWorkCountry: {
    type: String,
    default: "",
    index: true
  },
  FWMonth: {
    type: String,
    default: "",
  },
  MonthNumber: {
    type: String,
    default: "",
  },
  Year: {
    type: String,
    default: "",
  },
  StudyType: {
    type: String,
    default: "",
    index: true
  },
  FieldworkMode: {
    type: String,
    default: "",
  },
  CustomerType: {
    type: String,
    default: "",
  },
  VerbatimfortheBank: {
    type: String,
    default: "",
  },
  SegmentOfTheRespondent: {
    type: String,
    default: "",
  },
  AccountHoldingBranch: {
    type: String,
    default: "",
  },
  StudyName: {
    type: String,
    default: "",
  },
  NatureofStudy: {
    type: String,
    default: "",
  },
  Nationality: {
    type: String,
    default: "",
  },
  Gender: {
    type: String,
    default: "",
  },
  Scale_AssociateScale: {
    type: String,
    default: "",
  },
  Scale_TypeofScale: {
    type: String,
    default: "",
  },
  Scale_Scoring: {
    type: String,
    default: "",
  },
  Scale_ScoringSentiment: {
    type: String,
    default: "",
  },
  Scale_Verbatim: {
    type: String,
    default: "",
  },
  Scale_VerbatimSentiment: {
    type: String,
    default: "",
  },
  Scale_VerbatimLanguage: {
    type: String,
    default: "",
  },
  General_VerbatimThemes: {
    type: String,
    default: "",
    index: true
  },
  General_ServiceSatisfaction: {
    type: String,
    default: "",
  },
  General_Punctual: {
    type: String,
    default: "",
  },
  General_Consistentservice: {
    type: String,
    default: "",
  },
  General_Understandmyneed: {
    type: String,
    default: "",
  },
  General_GuidanceGreeting: {
    type: String,
    default: "",
  },
  General_Speedofservice: {
    type: String,
    default: "",
  },
  General_Others: {
    type: String,
    default: "",
  },
  Brand_VerbatimThemes: {
    type: String,
    default: "",
    index: true
  },
  Brand_Reputation: {
    type: String,
    default: "",
  },
  Brand_ActsInInterestofcustomer: {
    type: String,
    default: "",
  },
  Brand_SimpleHassleFree_EasyToDeal: {
    type: String,
    default: "",
  },
  Brand_Trustworthy: {
    type: String,
    default: "",
  },
  Brand_Size_WideNetwork: {
    type: String,
    default: "",
  },
  Brand_Reliable: {
    type: String,
    default: "",
  },
  Brand_Premium: {
    type: String,
    default: "",
  },
  Brand_Secure: {
    type: String,
    default: "",
  },
  Brand_International: {
    type: String,
    default: "",
  },
  Brand_Islamic: {
    type: String,
    default: "",
  },
  Brand_ComparisonToOtherbanks: {
    type: String,
    default: "",
  },
  Brand_TreatEqually: {
    type: String,
    default: "",
  },
  Brand_Helpscustomers: {
    type: String,
    default: "",
  },
  Brand_AdvertisingCommunication: {
    type: String,
    default: "",
  },
  Brand_Providespersonalizedservice: {
    type: String,
    default: "",
  },
  Brand_UnderstandMyNeeds: {
    type: String,
    default: "",
  },
  Brand_ProfessionalBank: {
    type: String,
    default: "",
  },
  Brand_widerangeofproduct: {
    type: String,
    default: "",
  },
  Brand_SpecialOffersAndPromotions: {
    type: String,
    default: "",
  },
  Brand_LocalBank: {
    type: String,
    default: "",
  },
  Brand_HasGoodRewardsProgram: {
    type: String,
    default: "",
  },
  Brand_ExperiencedBank: {
    type: String,
    default: "",
  },
  Brand_Others: {
    type: String,
    default: "",
  },
  Brand_GoodBank: {
    type: String,
    default: "",
  },
  Brand_OffersExcellentRates: {
    type: String,
    default: "",
  },
  Process_VerbatimThemes: {
    type: String,
    default: "",
    index: true
  },
  Process_Accountsecurity: {
    type: String,
    default: "",
  },
  Process_Securesystems: {
    type: String,
    default: "",
  },
  Process_Timelystatements: {
    type: String,
    default: "",
  },
  Process_accuratecommunications: {
    type: String,
    default: "",
  },
  Process_DocumentationProcedure: {
    type: String,
    default: "",
  },
  Process_ImprovementOfServices: {
    type: String,
    default: "",
  },
  Process_RulesAndRegulations: {
    type: String,
    default: "",
  },
  Process_ApprovalProcesss: {
    type: String,
    default: "",
  },
  Tp_Branch_VerbatimThemes: {
    type: String,
    default: "",
    index: true
  },
  Tp_Branch_General: {
    type: String,
    default: "",
  },
  Tp_Branch_Gen_Convenience: {
    type: String,
    default: "",
  },
  Tp_Branch_Gen_ProcessEfficiency: {
    type: String,
    default: "",
  },
  Tp_Branch_Gen_Numberofbranches: {
    type: String,
    default: "",
  },
  Tp_Branch_Gen_ParkingSpaceAvailability: {
    type: String,
    default: "",
  },
  Tp_Branch_Gen_Presentation: {
    type: String,
    default: "",
  },
  Tp_Branch_Gen_Hoursofoperation: {
    type: String,
    default: "",
  },
  Tp_Branch_Gen_OperationalFlexibility: {
    type: String,
    default: "",
  },
  Tp_Branch_Gen_MultiLingualStaff: {
    type: String,
    default: "",
  },
  Tp_Branch_Gen_MultiNationalityStaff: {
    type: String,
    default: "",
  },
  Tp_Branch_Gen_NumberofStaffs: {
    type: String,
    default: "",
  },
  Tp_Branch_Gen_System: {
    type: String,
    default: "",
  },
  Tp_Branch_Gen_SimpleHassleFree: {
    type: String,
    default: "",
  },
  Tp_Branch_Gen_Others: {
    type: String,
    default: "",
  },
  Tp_Branch_BranchStaff: {
    type: String,
    default: "",
  },
  Tp_Branch_Staff_WaitingTimeTeller: {
    type: String,
    default: "",
  },
  Tp_Branch_Staff_WaitingTimeCSR: {
    type: String,
    default: "",
  },
  Tp_Branch_Staff_Helpful: {
    type: String,
    default: "",
  },
  Tp_Branch_Staff_FriendlyPolite: {
    type: String,
    default: "",
  },
  Tp_Branch_Staff_WellGroomed: {
    type: String,
    default: "",
  },
  Tp_Branch_Staff_ProvidesSolution: {
    type: String,
    default: "",
  },
  Tp_Branch_Staff_EfficiencyofTransaction: {
    type: String,
    default: "",
  },
  Tp_Branch_Staff_NumberofCounters: {
    type: String,
    default: "",
  },
  Tp_Branch_Staff_Punctual: {
    type: String,
    default: "",
  },
  Tp_Branch_Staff_CompReasonableTime: {
    type: String,
    default: "",
  },
  Tp_Branch_Staff_PersonalizedSolutions: {
    type: String,
    default: "",
  },
  Tp_Branch_Staff_EasilyAccessible: {
    type: String,
    default: "",
  },
  Tp_Branch_Staff_Knowledgeable: {
    type: String,
    default: "",
  },
  Tp_Branch_Staff_ProperlyTrained: {
    type: String,
    default: "",
  },
  Tp_Branch_Staff_UnderstandMyNeeds: {
    type: String,
    default: "",
  },
  Tp_Branch_Staff_ProblemResolution: {
    type: String,
    default: "",
  },
  Tp_Branch_Staff_FollowupNotifications: {
    type: String,
    default: "",
  },
  Tp_Branch_Staff_TreatsWell: {
    type: String,
    default: "",
  },
  Tp_Branch_Staff_ConsistentService: {
    type: String,
    default: "",
  },
  Tp_Branch_Staff_Trained: {
    type: String,
    default: "",
  },
  Tp_Branch_Staff_Communication: {
    type: String,
    default: "",
  },
  Tp_Branch_Staff_Others: {
    type: String,
    default: "",
  },
  Tp_Branch_RM: {
    type: String,
    default: "",
  },
  Tp_Branch_RM_Friendliness: {
    type: String,
    default: "",
  },
  Tp_Branch_RM_HelpfulStaff: {
    type: String,
    default: "",
  },
  Tp_Branch_RM_Punctual: {
    type: String,
    default: "",
  },
  Tp_Branch_RM_WellGroomed: {
    type: String,
    default: "",
  },
  Tp_Branch_RM_CompReasonableTime: {
    type: String,
    default: "",
  },
  Tp_Branch_RM_ProvidesSolution: {
    type: String,
    default: "",
  },
  Tp_Branch_RM_WaitingTime: {
    type: String,
    default: "",
  },
  Tp_Branch_RM_EfficiencyofTransaction: {
    type: String,
    default: "",
  },
  Tp_Branch_RM_NumberofCounters: {
    type: String,
    default: "",
  },
  Tp_Branch_RM_PersonalizedSolutions: {
    type: String,
    default: "",
  },
  Tp_Branch_RM_EasilyAccessible: {
    type: String,
    default: "",
  },
  Tp_Branch_RM_Knowledgeable: {
    type: String,
    default: "",
  },
  Tp_Branch_RM_ProperlyTrained: {
    type: String,
    default: "",
  },
  Tp_Branch_RM_UnderstandMyNeeds: {
    type: String,
    default: "",
  },
  Tp_Branch_RM_ProblemResolution: {
    type: String,
    default: "",
  },
  Tp_Branch_RM_Followup: {
    type: String,
    default: "",
  },
  Tp_Branch_RM_TreatsWell: {
    type: String,
    default: "",
  },
  Tp_Branch_RM_ConsistentService: {
    type: String,
    default: "",
  },
  Tp_Branch_RM_Trained: {
    type: String,
    default: "",
  },
  Tp_Branch_RM_Communication: {
    type: String,
    default: "",
  },
  Tp_Branch_RM_Others: {
    type: String,
    default: "",
  },
  Tp_Online_VerbatimThemes: {
    type: String,
    default: "",
    index: true
  },
  Tp_Online_Site: {
    type: String,
    default: "",
  },
  Tp_Online_SiteLayout: {
    type: String,
    default: "",
  },
  Tp_Online_SpeedofSite: {
    type: String,
    default: "",
  },
  Tp_Online_Easy: {
    type: String,
    default: "",
  },
  Tp_Online_Security: {
    type: String,
    default: "",
  },
  Tp_Online_Sec_SecuirtyKey: {
    type: String,
    default: "",
  },
  Tp_Online_Sec_WebsiteSafety: {
    type: String,
    default: "",
  },
  Tp_Online_FeaturesOffered: {
    type: String,
    default: "",
  },
  Tp_Online_Fet_UtilityBillPayment: {
    type: String,
    default: "",
  },
  Tp_Online_Fet_GovernmentServices: {
    type: String,
    default: "",
  },
  Tp_Online_Fet_MoneyTransfer: {
    type: String,
    default: "",
  },
  Tp_Online_Fet_RemittanceServices: {
    type: String,
    default: "",
  },
  Tp_Online_Fet_CheckingBalance: {
    type: String,
    default: "",
  },
  Tp_Online_General: {
    type: String,
    default: "",
  },
  Tp_Online_Gen_Upgrade: {
    type: String,
    default: "",
  },
  Tp_Online_Gen_TransactionError: {
    type: String,
    default: "",
  },
  Tp_Online_Gen_Others: {
    type: String,
    default: "",
  },
  Tp_Mobile_VerbatimThemes: {
    type: String,
    default: "",
    index: true
  },
  Tp_Mobile_Site: {
    type: String,
    default: "",
  },
  Tp_Mobile_Site_AppLayout: {
    type: String,
    default: "",
  },
  Tp_Mobile_Site_SpeedofApp: {
    type: String,
    default: "",
  },
  Tp_Mobile_Site_Easy: {
    type: String,
    default: "",
  },
  Tp_Mobile_Security: {
    type: String,
    default: "",
  },
  Tp_Mobile_Sec_SecuirtyKey: {
    type: String,
    default: "",
  },
  Tp_Mobile_Sec_AppSafetyFeatures: {
    type: String,
    default: "",
  },
  Tp_Mobile_Sec_Fingerprint: {
    type: String,
    default: "",
  },
  Tp_Mobile_FeaturesOffered: {
    type: String,
    default: "",
  },
  Tp_Mobile_Fet_UtilityBillPayment: {
    type: String,
    default: "",
  },
  Tp_Mobile_Fet_GovernmentServicesPayment: {
    type: String,
    default: "",
  },
  Tp_Mobile_Fet_MoneyTransfer: {
    type: String,
    default: "",
  },
  Tp_Mobile_Fet_RemittanceServices: {
    type: String,
    default: "",
  },
  Tp_Mobile_Fet_CheckingBalance: {
    type: String,
    default: "",
  },
  Tp_Mobile_General: {
    type: String,
    default: "",
  },
  Tp_Mobile_Gen_Upgrade: {
    type: String,
    default: "",
  },
  Tp_Mobile_Gen_TransactionError: {
    type: String,
    default: "",
  },
  Tp_Mobile_Gen_others: {
    type: String,
    default: "",
  },
  Tp_ATM_VerbatimThemes: {
    type: String,
    default: "",
    index: true
  },
  Tp_ATM_General: {
    type: String,
    default: "",
  },
  Tp_ATM_Gen_Location: {
    type: String,
    default: "",
  },
  Tp_ATM_Gen_NumberofMachine: {
    type: String,
    default: "",
  },
  Tp_ATM_Gen_Acceptance: {
    type: String,
    default: "",
  },
  Tp_ATM_Gen_AvailabilityofATM: {
    type: String,
    default: "",
  },
  Tp_ATM_Gen_MenuOptions: {
    type: String,
    default: "",
  },
  Tp_ATM_Gen_Receipt: {
    type: String,
    default: "",
  },
  Tp_ATM_Gen_EaseofUse: {
    type: String,
    default: "",
  },
  Tp_ATM_Gen_TimeTaken: {
    type: String,
    default: "",
  },
  Tp_ATM_Gen_Crowd: {
    type: String,
    default: "",
  },
  Tp_ATM_Gen_Secure: {
    type: String,
    default: "",
  },
  Tp_ATM_Gen_Others: {
    type: String,
    default: "",
  },
  Tp_ATM_Limit: {
    type: String,
    default: "",
  },
  Tp_ATM_Lim_CashLimit: {
    type: String,
    default: "",
  },
  Tp_ATM_Lim_CashLimitWithdrawal: {
    type: String,
    default: "",
  },
  Tp_ATM_Lim_CashExhaustion: {
    type: String,
    default: "",
  },
  Tp_ATM_TechnicalSpecification: {
    type: String,
    default: "",
  },
  Tp_ATM_Tec_DisplayColour: {
    type: String,
    default: "",
  },
  Tp_ATM_Tec_TouchScreen: {
    type: String,
    default: "",
  },
  Tp_ATM_Tec_Buttons: {
    type: String,
    default: "",
  },
  Tp_ATM_Tec_FontSize: {
    type: String,
    default: "",
  },
  Tp_ATM_Tec_ConnectionSpeed: {
    type: String,
    default: "",
  },
  Tp_CallCentre_VerbatimThemes: {
    type: String,
    default: "",
    index: true
  },
  Tp_CallCentre_IVR: {
    type: String,
    default: "",
  },
  Tp_CallCentre_IVR_HoldingTime: {
    type: String,
    default: "",
  },
  Tp_CallCentre_IVR_Language: {
    type: String,
    default: "",
  },
  Tp_CallCentre_IVR_OptionsAvailable: {
    type: String,
    default: "",
  },
  Tp_CallCentre_IVR_EasyofNavigation_use: {
    type: String,
    default: "",
  },
  Tp_CallCentre_IVR_EaseToUnderstand: {
    type: String,
    default: "",
  },
  Tp_CallCentre_CallCentreAgent: {
    type: String,
    default: "",
  },
  Tp_CallCentre_Agent_Knowledge: {
    type: String,
    default: "",
  },
  Tp_CallCentre_Agent_PersonalizedSolution: {
    type: String,
    default: "",
  },
  Tp_CallCentre_Agent_Friendlyhelpful: {
    type: String,
    default: "",
  },
  Tp_CallCentre_Agent_Clear: {
    type: String,
    default: "",
  },
  Tp_CallCentre_Agent_AnswerQueries: {
    type: String,
    default: "",
  },
  Tp_CallCentre_Agent_CallTermination: {
    type: String,
    default: "",
  },
  Tp_CallCentre_Agent_DirectConnection: {
    type: String,
    default: "",
  },
  Tp_CallCentre_General: {
    type: String,
    default: "",
  },
  Tp_CallCentre_Gen_Verification: {
    type: String,
    default: "",
  },
  Tp_CallCentre_Gen_Others: {
    type: String,
    default: "",
  },
  Products_VerbatimThemes: {
    type: String,
    default: "",
    index: true
  },
  Products_CreditCard: {
    type: String,
    default: "",
  },
  Products_Cre_Activation: {
    type: String,
    default: "",
  },
  Products_Cre_Cancellation: {
    type: String,
    default: "",
  },
  Products_Cre_Upgrade: {
    type: String,
    default: "",
  },
  Products_Cre_Rewards: {
    type: String,
    default: "",
  },
  Products_Cre_EligibilityRequirements: {
    type: String,
    default: "",
  },
  Products_Cre_CompetitiveInterestRates: {
    type: String,
    default: "",
  },
  Products_Cre_CompetitiveFees: {
    type: String,
    default: "",
  },
  Products_Cre_ProductFeatures: {
    type: String,
    default: "",
  },
  Products_Cre_Sharia: {
    type: String,
    default: "",
  },
  Products_Cre_CreditLimits: {
    type: String,
    default: "",
  },
  Products_Cre_ApprovalTime: {
    type: String,
    default: "",
  },
  Products_Cre_WiderSelection: {
    type: String,
    default: "",
  },
  Products_Cre_CompetitiveInterest: {
    type: String,
    default: "",
  },
  Products_Cre_UsageOutsideCountry: {
    type: String,
    default: "",
  },
  Products_Loan: {
    type: String,
    default: "",
  },
  Products_Loan_Servicing: {
    type: String,
    default: "",
  },
  Products_Loan_ApplicationProcess: {
    type: String,
    default: "",
  },
  Products_Loan_ApprovalTime: {
    type: String,
    default: "",
  },
  Products_Loan_Rewards: {
    type: String,
    default: "",
  },
  Products_Loan_EligibilityRequirements: {
    type: String,
    default: "",
  },
  Products_Loan_CompetitiveInterestRates: {
    type: String,
    default: "",
  },
  Products_Loan_CompetitiveFees: {
    type: String,
    default: "",
  },
  Products_Loan_ProductFeatures: {
    type: String,
    default: "",
  },
  Products_Loan_Sharia: {
    type: String,
    default: "",
  },
  Products_Loan_LimitOffered: {
    type: String,
    default: "",
  },
  Products_Loan_DocumentationRequired: {
    type: String,
    default: "",
  },
  Products_Loan_Preclosure: {
    type: String,
    default: "",
  },
  Products_Loan_DueDate: {
    type: String,
    default: "",
  },
  Products_Loan_InsuranceAgainst: {
    type: String,
    default: "",
  },
  Products_Loan_LoanHoliday: {
    type: String,
    default: "",
  },
  Products_Insurance: {
    type: String,
    default: "",
  },
  Products_Ins_InterestRates: {
    type: String,
    default: "",
  },
  Products_Ins_ProductFeatures: {
    type: String,
    default: "",
  },
  Products_Ins_Sharia: {
    type: String,
    default: "",
  },
  Products_Ins_WiderSelection: {
    type: String,
    default: "",
  },
  Products_Ins_InnovativeProduct: {
    type: String,
    default: "",
  },
  Products_Ins_DocumentationRequired: {
    type: String,
    default: "",
  },
  Products_Ins_InsuranceTakaful: {
    type: String,
    default: "",
  },
  Products_Remittance: {
    type: String,
    default: "",
  },
  Products_Rem_ExchanageRate: {
    type: String,
    default: "",
  },
  Products_Rem_TransferCharges: {
    type: String,
    default: "",
  },
  Products_Rem_GlobalView: {
    type: String,
    default: "",
  },
  Products_Rem_TimeTaken: {
    type: String,
    default: "",
  },
  Products_Rem_RemittanceServicing: {
    type: String,
    default: "",
  },
  Products_Rem_Convenience: {
    type: String,
    default: "",
  },
  Products_Rem_Promotion: {
    type: String,
    default: "",
  },
  Products_Rem_Rewards: {
    type: String,
    default: "",
  },
  Products_Savings: {
    type: String,
    default: "",
  },
  Products_Sav_FixedDeposit: {
    type: String,
    default: "",
  },
  Products_Sav_Bonds: {
    type: String,
    default: "",
  },
  Products_Sav_InterestRates: {
    type: String,
    default: "",
  },
  Products_Sav_DocumentRequired: {
    type: String,
    default: "",
  },
  Products_Sav_LockInPeriod: {
    type: String,
    default: "",
  },
  Products_Sav_GeneralServicing: {
    type: String,
    default: "",
  },
  Products_Sav_CompetitiveFees: {
    type: String,
    default: "",
  },
  Products_Account: {
    type: String,
    default: "",
  },
  Products_Acc_ApplicationProcess: {
    type: String,
    default: "",
  },
  Products_Acc_CompetitiveFees: {
    type: String,
    default: "",
  },
  Products_Acc_EligibilityReq: {
    type: String,
    default: "",
  },
  Products_Acc_ProductFeatures: {
    type: String,
    default: "",
  },
  Products_Acc_DocumentRequired: {
    type: String,
    default: "",
  },
  Products_Acc_Closure: {
    type: String,
    default: "",
  },
  Products_General: {
    type: String,
    default: "",
  },
  Products_Gen_ChargeAndInterestRates: {
    type: String,
    default: "",
  },
  Products_Gen_RateOfReturn: {
    type: String,
    default: "",
  },
  Products_Gen_Sharia: {
    type: String,
    default: "",
  },
  Products_Gen_Others: {
    type: String,
    default: "",
  },
  Tp_CSU_VerbatimThemes: {
    type: String,
    default: "",
    index: true
  },
  Tp_CSU_General: {
    type: String,
    default: "",
  },
  Tp_CSU_Gen_Convenience: {
    type: String,
    default: "",
  },
  Tp_CSU_Gen_ProcessEfficiency: {
    type: String,
    default: "",
  },
  Tp_CSU_Gen_NumberofCSUes: {
    type: String,
    default: "",
  },
  Tp_CSU_Gen_ParkingSpaceAvailability: {
    type: String,
    default: "",
  },
  Tp_CSU_Gen_Presentation: {
    type: String,
    default: "",
  },
  Tp_CSU_Gen_Hoursofoperation: {
    type: String,
    default: "",
  },
  Tp_CSU_Gen_OperationalFlexibility: {
    type: String,
    default: "",
  },
  Tp_CSU_Gen_MultiLingualStaff: {
    type: String,
    default: "",
  },
  Tp_CSU_Gen_MultiNationalityStaff: {
    type: String,
    default: "",
  },
  Tp_CSU_Gen_NumberofStaffs: {
    type: String,
    default: "",
  },
  Tp_CSU_Gen_Others: {
    type: String,
    default: "",
  },
  Tp_CSU_Staff: {
    type: String,
    default: "",
  },
  Tp_CSU_Staff_FriendlinessPoliteStaff: {
    type: String,
    default: "",
  },
  Tp_CSU_Staff_HelpfulStaff: {
    type: String,
    default: "",
  },
  Tp_CSU_Staff_Punctual: {
    type: String,
    default: "",
  },
  Tp_CSU_Staff_WellGroomed: {
    type: String,
    default: "",
  },
  Tp_CSU_Staff_CompReasonableTime: {
    type: String,
    default: "",
  },
  Tp_CSU_Staff_ProvidesSolution: {
    type: String,
    default: "",
  },
  Tp_CSU_Staff_WaitingTime: {
    type: String,
    default: "",
  },
  Tp_CSU_Staff_EfficiencyofTransaction: {
    type: String,
    default: "",
  },
  Tp_CSU_Staff_NumberofCounters: {
    type: String,
    default: "",
  },
  Tp_CSU_Staff_PersonalizedSolutions: {
    type: String,
    default: "",
  },
  Tp_CSU_Staff_EasilyAccessible: {
    type: String,
    default: "",
  },
  Tp_CSU_Staff_Knowledgeable: {
    type: String,
    default: "",
  },
  Tp_CSU_Staff_ProperlyTrained: {
    type: String,
    default: "",
  },
  Tp_CSU_Staff_UnderstandMyNeeds: {
    type: String,
    default: "",
  },
  Tp_CSU_Staff_ProblemResolution: {
    type: String,
    default: "",
  },
  Tp_CSU_Staff_FollowupNotifications: {
    type: String,
    default: "",
  },
  Tp_CSU_Staff_TreatsWell: {
    type: String,
    default: "",
  },
  Tp_CSU_Staff_ConsistentService: {
    type: String,
    default: "",
  },
  Tp_CSU_Staff_Trained: {
    type: String,
    default: "",
  },
  Tp_CSU_Staff_Communication: {
    type: String,
    default: "",
  },
  Tp_CSU_Staff_Others: {
    type: String,
    default: "",
  }
});

var customer_connect_data_model = mongoose.model("customer-connect-data", CustomerConnectDataSchema);
module.exports=customer_connect_data_model;
