export type Subject = {
  slug: string;
  title: string;
  subtitle?: string;
  summary: string;
  categories: string[]
  dateCreated?: Date
  dateModified?: Date
}

export const subjects: Subject[] = [
  {
    slug: "sun-sch",
    title: "Sunday School",
    categories: ["church"],
    summary: "Jottings of sunday school service teachings"
  },
  {
    slug: "phil-sop",
    title: "Philosphia",
    categories: ["knowledge"],
    summary: "Summary of episodes of the Le philosophia podcast"
  },
]