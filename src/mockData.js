const projects = [
  {
    id: "dfsdf0s9f",
    title: "Build the Website",
    details:
      "This project deals with all of the details in getting our website off the ground.",
    accentColor: "#fddd0eff",
  },
  {
    id: "ds08f0s890",
    title: "Find an office space",
    details: "Find a sutable office space tobuy or rent in the downtown area",
    accentColor: "#2fcc71ff",
  },
  {
    id: "f8gdf09g0",
    title: "Trip to Hawaii",
    details: "Planning of our getaway to Hawaii!",
    accentColor: "#e84c3dff",
  },
  {
    id: "asd9ad9",
    title: "Get the printer fixed/replaced",
    details: "This is a test project",
    accentColor: "#4b4bf9ff",
  },
];

const tasks = [
  {
    id: "shaksdja",
    title: "Get the domain name.",
    details:
      "Research an appropriate hosting provider for our domain and purchase domain.",
    status: "completed",
    projectId: "dfsdf0s9f",
    owner: "js8f8auc897",
    color: "#f00",
    duration: 5,
    precidents: [],
    messages: [
      {
        id: "jda9sd8a9sd8",
        content: "How is the search going?",
        user: "ds08f0d8",
      },
      {
        id: "d9-f0s9f",
        content: "So far so good.",
        user: "js8f8auc897",
      },
      {
        id: "as9d-a9sd-",
        content: "Should be completed soon.",
        user: "js8f8auc897",
      },
      {
        id: "=-dgf0f-=0fd",
        content: "Great!",
        user: "ds08f0d8",
      },
    ],
  },
  {
    id: "idsidsfi08",
    title: "Setup email addresses using our new domain",
    details:
      "Once the domain has been purchased create email addresses  for all the staff.",
    status: "active",
    projectId: "dfsdf0s9f",
    owner: "ds9f-ds9f-9d",
    color: "#444",
    duration: 5,
    precidents: [],
    messages: [],
  },
  {
    id: "8f0ds8f080s",
    title: "Find web hosting company",
    details:
      "This is the first task but wiat it is not This is the first task but wiat it is not This is the first task but wiat it is not This is the first task but wiat it is not",
    status: "active",
    projectId: "dfsdf0s9f",
    owner: "ds08f0d8",
    color: "#444",
    duration: 5,
    precidents: [],
    messages: [],
  },
  {
    id: "sd08s0f8",
    title: "Design our website",
    details:
      "This is the first task but wiat it is not This is the first task but wiat it is not This is the first task but wiat it is not This is the first task but wiat it is not",
    status: "active",
    projectId: "dfsdf0s9f",
    owner: "0d9s08f09s8g",
    color: "#444",
    duration: 5,
    precidents: [],
    messages: [
      {
        id: "sd98fs098f0",
        content: "Starting on this now.",
        user: "0d9s08f09s8g",
      },
    ],
  },
  {
    id: "ds8f0s89",
    title: "Build our website",
    details:
      "This is the first task but wiat it is not This is the first task but wiat it is not This is the first task but wiat it is not This is the first task but wiat it is not",
    status: "pending",
    projectId: "dfsdf0s9f",
    owner: null,
    color: "#444",
    duration: 5,
    precidents: [],
    messages: [],
  },
  {
    id: "a-s90a9d",
    title: "Add content to website",
    details:
      "This is the first task but wiat it is not This is the first task but wiat it is not This is the first task but wiat it is not This is the first task but wiat it is not",
    status: "pending",
    projectId: "dfsdf0s9f",
    owner: null,
    color: "#444",
    duration: 5,
    precidents: [],
    messages: [],
  },
  {
    id: "asf809d8",
    title: "Publish website.",
    details:
      "This is the first task but wiat it is not This is the first task but wiat it is not This is the first task but wiat it is not This is the first task but wiat it is not",
    status: "pending",
    projectId: "dfsdf0s9f",
    owner: null,
    color: "#444",
    duration: 5,
    precidents: [],
    messages: [],
  },
];

const people = [
  {
    id: "js8f8auc897",
    firstName: "John",
    lastName: "Smith",
    image: "js8f8auc897.png",
  },
  {
    id: "0d9s08f09s8g",
    firstName: "Nick",
    lastName: "Adams",
    image: "0d9s08f09s8g.png",
  },
  {
    id: "x09c0df9d8",
    firstName: "Jack",
    lastName: "Jones",
    image: "x09c0df9d8.png",
  },
  {
    id: "ds9f-ds9f-9d",
    firstName: "Sarah",
    lastName: "Parker",
    image: "ds9f-ds9f-9d.png",
  },
  {
    id: "ds08f0d8",
    firstName: "Jenny",
    lastName: "Fisher",
    image: "ds08f0d8.png",
  },
];

export { projects, tasks, people };
