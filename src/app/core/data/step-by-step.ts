export const StepData: StepData[] = [
  {
    number: 1,
    title: 'LANDING_PAGE.space-step-by-step.step-one.title',
    description: 'LANDING_PAGE.space-step-by-step.step-one.content',
  },
  {
    number: 2,
    title: 'LANDING_PAGE.space-step-by-step.step-two.title',
    description: 'LANDING_PAGE.space-step-by-step.step-two.content',
  },
  {
    number: 3,
    title: 'LANDING_PAGE.space-step-by-step.step-three.title',
    description: 'LANDING_PAGE.space-step-by-step.step-three.content',
  },
  {
    number: 4,
    title: 'LANDING_PAGE.space-step-by-step.step-four.title',
    description: 'LANDING_PAGE.space-step-by-step.step-four.content',
  },
  {
    number: 5,
    title: 'LANDING_PAGE.space-step-by-step.step-five.title',
    description: 'LANDING_PAGE.space-step-by-step.step-five.content',
  },
  {
    number: 6,
    title: 'LANDING_PAGE.space-step-by-step.step-six.title',
    description: 'LANDING_PAGE.space-step-by-step.step-six.content',
  },
];

export const StepsNumber: { step: number }[] = [
  { step: 1 },
  { step: 2 },
  { step: 3 },
  { step: 4 },
  { step: 5 },
  { step: 6 },
];

export interface StepData {
  number: number;
  title: string;
  description: string;
}
