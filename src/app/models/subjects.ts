export interface Subject {
  userId?: string;
  title: string;
  subtitle?: string;
  summary: string;
  categories?: string[];
  dateCreated?: string;
  dateModified?: string;
}

export const subjects: Subject[] = [
  {
    title: 'Sunday School',
    categories: ['church'],
    summary: 'Jottings of sunday school service teachings'
  },
  {
    title: 'Philosphia',
    categories: ['knowledge'],
    summary: 'Summary of episodes of the Le philosophia podcast'
  },
  {
    title: 'Philosphia',
    categories: ['knowledge'],
    summary: 'Summary of episodes of the Le philosophia podcast'
  },
  {
    title: 'Philosphia',
    categories: ['knowledge'],
    summary: 'Summary of episodes of the Le philosophia podcast'
  },
  {
    title: 'Philosphia',
    categories: ['knowledge'],
    summary: 'Summary of episodes of the Le philosophia podcast'
  },
  {
    title: 'Philosphia',
    categories: ['knowledge'],
    summary: 'Summary of episodes of the Le philosophia podcast'
  },
  {
    title: 'Philosphia',
    categories: ['knowledge'],
    summary: 'Summary of episodes of the Le philosophia podcast'
  },
];
