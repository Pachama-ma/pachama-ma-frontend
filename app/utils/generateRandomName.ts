export function generateRandomName(): string {
  const names = [
    'Alice',
    'Bob',
    'Charlie',
    'David',
    'Eve',
    'Frank',
    'Grace',
    'Henry',
    'Ivy',
    'Jack',
    'Kate',
    'Liam',
    'Mia',
    'Noah',
    'Olivia',
    'Peter',
    'Quinn',
    'Ryan',
    'Sophia',
    'Thomas',
    'Uma',
    'Victor',
    'Wendy',
    'Xavier',
    'Yara',
    'Zoe',
  ];

  const randomIndex = Math.floor(Math.random() * names.length);
  return names[randomIndex];
}
