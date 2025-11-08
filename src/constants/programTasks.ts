export const PROGRAM_TASK_LOCK_STATUSES = [
  'unlocked',
  'locked_country',
  'locked_stale',
  'pending_agent_confirmation'
] as const;

export type ProgramTaskLockStatus =
  (typeof PROGRAM_TASK_LOCK_STATUSES)[number];

export const PROGRAM_TASK_DEFINITIONS = [
  { key: 'ml', field: 'ml_required', label: 'Motivation Letter' },
  { key: 'sop', field: 'sop_required', label: 'Statement of Purpose' },
  {
    key: 'phs',
    field: 'phs_required',
    label: 'Personal History Statement'
  },
  { key: 'rl', field: 'rl_required', label: 'Recommendation Letter' },
  { key: 'essay', field: 'essay_required', label: 'Essay' },
  { key: 'portfolio', field: 'portfolio_required', label: 'Portfolio' },
  {
    key: 'supplementary_form',
    field: 'supplementary_form_required',
    label: 'Supplementary Form'
  },
  {
    key: 'curriculum_analysis',
    field: 'curriculum_analysis_required',
    label: 'Curriculum Analysis'
  },
  {
    key: 'scholarship_form',
    field: 'scholarship_form_required',
    label: 'Scholarship Form'
  }
] as const;

export type ProgramTaskDefinition =
  (typeof PROGRAM_TASK_DEFINITIONS)[number];

export type ProgramTaskKey = ProgramTaskDefinition['key'];

export const PROGRAM_TASK_KEYS: ProgramTaskKey[] =
  PROGRAM_TASK_DEFINITIONS.map((definition) => definition.key);

export const PROGRAM_TASK_DEFINITION_MAP: Record<
  ProgramTaskKey,
  ProgramTaskDefinition
> = PROGRAM_TASK_DEFINITIONS.reduce(
  (acc, definition) => {
    acc[definition.key] = definition;
    return acc;
  },
  {} as Record<ProgramTaskKey, ProgramTaskDefinition>
);

