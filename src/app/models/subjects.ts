export type Subject = {
  title: string;
  subtitle?: string;
  summary: string;
  categories: string[]
  dateCreated?: Date
  dateModified?: Date
}

export const subjects: Subject[] = [
  {
    title: "Sunday School",
    categories: ["church"],
    summary: "Jottings of sunday school service teachings"
  },
  {
    title: "Philosphia",
    categories: ["knowledge"],
    summary: "Summary of episodes of the Le philosophia podcast"
  },
]