import md5 from 'md5'
export const defaultState = {
  session:{
    authenticated: false
  },
  users: [
    {
      id: "U1",
      name: "DEV",
      passwordHash:md5("TUPLES")
    },
    {
      id: "U2",
      name: "lopper",
      passwordHash: md5("PROFITING")
    },
  ],
  groups: [
    {
      name: "to do",
      id: "g1",
      owner: "u1",
    },
    {
      name: "this is group2",
      id: "g2",
      owner: "U1",
    },
  ],
  tasks: [
    {
      name: "do g1 tasks",
      id: "T1",
      group: "g1",
      owner: "U1",
      isComplete: false,
    },
    {
      name: "do g2 tasks",
      id: "T2",
      group: "g2",
      owner: "U1",
      isComplete: false,
    },
  ],
  comments: [
    {
      owner: "U1",
      id: "C1",
      task: "T1",
      content: "greet work",
    },
  ],
};