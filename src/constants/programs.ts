export const PROGRAM_SUBJECTS = {
  LING: {
    label: 'Linguistics',
    category: 'AH'
  },
  MUS: {
    label: 'Music',
    category: 'AH'
  },
  THEO: {
    label: 'Theology, Divinity and Religious Studies',
    category: 'AH'
  },
  ARCH: {
    label: 'Archaeology',
    category: 'AH'
  },
  'ARCH-BE': {
    label: 'Architecture and Built Environment',
    category: 'AH'
  },
  'ART-DES': {
    label: 'Art and Design',
    category: 'AH'
  },
  CLAH: {
    label: 'Classics and Ancient History',
    category: 'AH'
  },
  ELL: {
    label: 'English Language and Literature',
    category: 'AH'
  },
  HIST: {
    label: 'History',
    category: 'AH'
  },
  ARTH: {
    label: 'Art History',
    category: 'AH'
  },
  'MOD-LANG': {
    label: 'Modern Languages',
    category: 'AH'
  },
  'PERF-ART': {
    label: 'Performing Arts',
    category: 'AH'
  },
  PHIL: {
    label: 'Philosophy',
    category: 'AH'
  },
  'CHEM-ENG': {
    label: 'Engineering - Chemical',
    category: 'ET'
  },
  'CIV-STR-ENG': {
    label: 'Engineering - Civil and Structural',
    category: 'ET'
  },
  CSIS: {
    label: 'Computer Science and Information Systems',
    category: 'ET'
  },
  'DS-AI': {
    label: 'Data Science and Artificial Intelligence',
    category: 'ET'
  },
  'ELEC-ENG': {
    label: 'Engineering - Electrical and Electronic',
    category: 'ET'
  },
  'PETRO-ENG': {
    label: 'Engineering - Petroleum',
    category: 'ET'
  },
  'MECH-ENG': {
    label: 'Engineering - Mechanical',
    category: 'ET'
  },
  'MIN-MIN-ENG': {
    label: 'Engineering - Mineral and Mining',
    category: 'ET'
  },
  'AG-FOR': {
    label: 'Agriculture and Forestry',
    category: 'LSM'
  },
  'ANA-PHYS': {
    label: 'Anatomy and Physiology',
    category: 'LSM'
  },
  'BIO-SCI': {
    label: 'Biological Sciences',
    category: 'LSM'
  },
  DENT: {
    label: 'Dentistry',
    category: 'LSM'
  },
  MED: {
    label: 'Medicine',
    category: 'LSM'
  },
  NURS: {
    label: 'Nursing',
    category: 'LSM'
  },
  PHARM: {
    label: 'Pharmacy and Pharmacology',
    category: 'LSM'
  },
  PSYCH: {
    label: 'Psychology',
    category: 'LSM'
  },
  'VET-SCI': {
    label: 'Veterinary Science',
    category: 'LSM'
  },
  CHEM: {
    label: 'Chemistry',
    category: 'NS'
  },
  'EAR-MAR-SCI': {
    label: 'Earth and Marine Sciences',
    category: 'NS'
  },
  'ENV-SCI': {
    label: 'Environmental Sciences',
    category: 'NS'
  },
  GEO: {
    label: 'Geography',
    category: 'NS'
  },
  GEOL: {
    label: 'Geology',
    category: 'NS'
  },
  GEOPH: {
    label: 'Geophysics',
    category: 'NS'
  },
  'MAT-SCI': {
    label: 'Materials Sciences',
    category: 'NS'
  },
  MATH: {
    label: 'Mathematics',
    category: 'NS'
  },
  'PHYS-ASTRO': {
    label: 'Physics and Astronomy',
    category: 'NS'
  },
  'ACC-FIN': {
    label: 'Accounting and Finance',
    category: 'SSM'
  },
  ANTH: {
    label: 'Anthropology',
    category: 'SSM'
  },
  'BUS-MGMT': {
    label: 'Business and Management Studies',
    category: 'SSM'
  },
  'COMM-MEDIA': {
    label: 'Communication and Media Studies',
    category: 'SSM'
  },
  'DEV-STUD': {
    label: 'Development Studies',
    category: 'SSM'
  },
  ECON: {
    label: 'Economics and Econometrics',
    category: 'SSM'
  },
  'EDU-TRAIN': {
    label: 'Education and Training',
    category: 'SSM'
  },
  'HOSP-MGMT': {
    label: 'Hospitality and Leisure Management',
    category: 'SSM'
  },
  LAW: {
    label: 'Law and Legal Studies',
    category: 'SSM'
  },
  'LIB-INFO': {
    label: 'Library and Information Management',
    category: 'SSM'
  },
  MKT: {
    label: 'Marketing',
    category: 'SSM'
  },
  POL: {
    label: 'Politics',
    category: 'SSM'
  },
  'SOC-POL': {
    label: 'Social Policy and Administration',
    category: 'SSM'
  },
  SOC: {
    label: 'Sociology',
    category: 'SSM'
  },
  SPORT: {
    label: 'Sports-Related Subjects',
    category: 'SSM'
  },
  'STAT-OR': {
    label: 'Statistics and Operational Research',
    category: 'SSM'
  }
};

export enum SemesterType {
  SummerSemester = 'SS',
  WinterSemester = 'WS',
  Rolling = 'Rolling'
}

export enum SchoolType {
  University = 'University',
  University_of_Applied_Sciences = 'University_of_Applied_Sciences'
}

export const SCHOOL_TYPES: SchoolType[] = [
  SchoolType.University,
  SchoolType.University_of_Applied_Sciences
];

enum Category {
  TU9 = 'TU9',
  U15 = 'U15',
  EUROTECH = 'EUROTECH',
  GERMAN_ELITE = 'GERMAN_ELITE',
  TOP50 = 'TOP50',
  TIME = 'TIME',
  TOP100 = 'TOP100',
  TOP150 = 'TOP150',
  TOP250 = 'TOP250',
  TOP500 = 'TOP500'
}

export const SCHOOL_TAGS = {
  [Category.U15]: {
    label: 'U15',
    category: 'U15'
  },
  [Category.TU9]: {
    label: 'TU9 German Universities of Technology',
    category: 'TU9'
  },
  [Category.EUROTECH]: {
    label: 'EuroTech Universities Alliance',
    category: 'EUROTECH'
  },
  [Category.GERMAN_ELITE]: {
    label: 'German Excellence Initiative',
    category: 'GERMAN_ELITE'
  },
  [Category.TIME]: {
    label: 'Top International Managers in Engineering',
    category: 'TIME'
  },
  [Category.TOP50]: {
    label: 'QS Top 50 Universities',
    category: 'TOP50'
  },
  [Category.TOP100]: {
    label: 'QS Top 100 Universities',
    category: 'TOP100'
  },
  [Category.TOP150]: {
    label: 'QS Top 150 Universities',
    category: 'TOP150'
  },
  [Category.TOP250]: {
    label: 'QS Top 250 Universities',
    category: 'TOP150'
  },
  [Category.TOP500]: {
    label: 'QS Top 500 Universities',
    category: 'TOP500'
  }
};
