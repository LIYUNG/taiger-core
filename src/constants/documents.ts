export enum DocumentStatusType {
  Uploaded = 'uploaded',
  Missing = 'missing',
  Accepted = 'accepted',
  Rejected = 'rejected',
  NotNeeded = 'notneeded'
}

export enum ProfileNameType {
  High_School_Diploma = 'High_School_Diploma',
  High_School_Transcript = 'High_School_Transcript',
  University_Entrance_Examination_GSAT = 'University_Entrance_Examination_GSAT',
  Bachelor_Certificate = 'Bachelor_Certificate',
  Bachelor_Transcript = 'Bachelor_Transcript',
  Second_Degree_Certificate = 'Second_Degree_Certificate',
  Second_Degree_Transcript = 'Second_Degree_Transcript',
  Englisch_Certificate = 'Englisch_Certificate',
  German_Certificate = 'German_Certificate',
  GRE = 'GRE',
  GMAT = 'GMAT',
  ECTS_Conversion = 'ECTS_Conversion',
  Course_Description = 'Course_Description',
  Internship = 'Internship',
  Exchange_Student_Certificate = 'Exchange_Student_Certificate',
  Employment_Certificate = 'Employment_Certificate',
  Passport_Photo = 'Passport_Photo',
  Passport = 'Passport',
  Others = 'Others'
}

export const PROFILE_NAME = {
  [ProfileNameType.High_School_Diploma]: 'High School Diploma',
  [ProfileNameType.High_School_Transcript]: 'High School Transcript',
  [ProfileNameType.University_Entrance_Examination_GSAT]:
    'GSAT/SAT/TVE/IB Test',
  [ProfileNameType.Bachelor_Certificate]: 'Bachelor Certificate/Enrolment',
  [ProfileNameType.Bachelor_Transcript]: 'Bachelor Transcript',
  [ProfileNameType.Second_Degree_Certificate]:
    'Second Degree Certificate/Enrolment',
  [ProfileNameType.Second_Degree_Transcript]: 'Second Degree Transcript',
  [ProfileNameType.Englisch_Certificate]: 'TOEFL or IELTS',
  [ProfileNameType.German_Certificate]: 'TestDaF or Goethe B2/C1',
  [ProfileNameType.GRE]: 'GRE',
  [ProfileNameType.GMAT]: 'GMAT',
  [ProfileNameType.ECTS_Conversion]: 'ECTS Conversion',
  [ProfileNameType.Course_Description]: 'Course Description',
  [ProfileNameType.Internship]: 'Internship Certificate',
  [ProfileNameType.Exchange_Student_Certificate]:
    'Exchange Student Certificate',
  [ProfileNameType.Employment_Certificate]: 'Employment Certificate',
  [ProfileNameType.Passport_Photo]: 'Formal Profile Photo',
  [ProfileNameType.Passport]: 'Passport Copy',
  [ProfileNameType.Others]: 'Others'
};
