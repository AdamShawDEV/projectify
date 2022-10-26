const projects = [
  {
    id: "dfsdf0s9f",
    title: "Test Project",
    details: "This is a test project",
    accentColor: "#fddd0eff",
  },
  {
    id: "ds08f0s890",
    title: "Test Project 2",
    details: "This is a test project",
    accentColor: "#2fcc71ff",
  },
  {
    id: "f8gdf09g0",
    title: "Test Project 3",
    details: "This is a test project",
    accentColor: "#e84c3dff",
  },
  {
    id: "asd9ad9",
    title: "Test Project 4",
    details: "This is a test project",
    accentColor: "#4b4bf9ff",
  },
];

const tasks = {
  dfsdf0s9f: [
    {
      id: "shaksdja",
      title: "task 1 this is the beginning of the work",
      details:
        "This is the first task This is the first task This is the first task",
      status: "completed",
      color: "#f00",
      duration: 5,
      precidents: [],
    },
    {
      id: "asdad4a5",
      title: "task 2",
      details:
        "This is the first task but wiat it is not This is the first task but wiat it is not This is the first task but wiat it is not This is the first task but wiat it is not",
      status: "pending",
      color: "#444",
      duration: 5,
      precidents: [],
    },
    {
      id: "5as4d5a4sd",
      title: "task 3",
      details: "This is the first task",
      status: "active",
      color: "#a54",
      duration: 5,
      precidents: [],
    },
    {
      id: "sa80d8a0s8",
      title: "task 3",
      details: "This is the first task but it will be by ar the longest",
      status: "active",
      color: "#a54",
      duration: 5,
      precidents: [],
    },
  ],
};

export { projects, tasks };
