export const root = {
  type: "folder",
  name: "root",
  children: [
    {
      type: "file",
      name: "README1.md",
    },
    {
      type: "folder",
      name: "example",
      children: [
        {
          type: "file",
          name: "README2.md",
        },
        {
          type: "folder",
          name: "two",
          children: [
            {
              type: "file",
              name: "README3.md",
            },
            {
              type: "file",
              name: "README4.md",
            },
            {
              type: "file",
              name: "README5.md",
            },
          ],
        },
      ],
    },
  ],
};
