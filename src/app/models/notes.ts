export interface Note {
  userId?: string;
  subjectId: string;
  title: string;
  content: string;
  dateCreated?: string;
  dateModified?: string;
}

export const notes: Note[] = [
  {
    subjectId: '12',
    title: 'A new note',
    content: `
    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
    Eaque quasi a asperiores, ea voluptate cum ratione assumenda repudiandae non omnis quidem
    perferendis quod vero natus excepturi facilis, voluptates hic deleniti?
    `,
  },
  {
    subjectId: '12',
    title: 'An old note',
    content: `
    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
    Eaque quasi a asperiores, ea voluptate cum ratione assumenda repudiandae non omnis quidem
    perferendis quod vero natus excepturi facilis, voluptates hic deleniti?
    `,
  }
];
