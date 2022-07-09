export interface IPosts {
  id: string;
  fullname: string;
  username: string;
  post: string;
  body?: string;
}

export class PostService {
  postsData = [
    {
      id: '1232-4567-8854',
      fullname: 'Osman Maltiti',
      username: 'overhaul',
      post: 'Never falling why you making problems. Ima problem being rich is not my fault. You decide who you think you should reside with.',
    },
    {
      id: '2322-5367-8854',
      fullname: 'Monkey D Luffy',
      username: 'mugiwara',
      post: 'Id est magna deserunt non non duis exercitation irure esse eiusmod irure deserunt est. excepteurOfficia cupidatat aliquip amet non adipisicing nostrud velit laboris do et ut consectetur sit.',
    },
  ];
  posts: Array<IPosts> = this.postsData;
}
