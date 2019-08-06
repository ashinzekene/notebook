export interface Note {
  id: string;
  userId?: string;
  subjectId: string;
  title: string;
  content: string;
  dateCreated?: string;
  dateModified?: string;
  deleted?: boolean;
}

export const notes: Note[] = [
  {
    id: '23',
    subjectId: '12',
    title: 'A new note',
    content: `
    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
    Eaque quasi a asperiores, ea voluptate cum ratione assumenda repudiandae non omnis quidem
    perferendis quod vero natus excepturi facilis, voluptates hic deleniti?
    `,
  },
  {
    id: '13',
    subjectId: '12',
    title: 'An old note',
    content: `
    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
    Eaque quasi a asperiores, ea voluptate cum ratione assumenda repudiandae non omnis quidem
    perferendis quod vero natus excepturi facilis, voluptates hic deleniti?
    `,
  }
];
