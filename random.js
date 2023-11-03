function getRandomName() {
  const firstName = ["Alice", "Bob", "Charlie", "David", "Emma", "Frank"];
  const lastName = ["Smith", "Johnson", "Williams", "Brown", "Davis", "Miller"];
  
  const randomFirstName = firstName[Math.floor(Math.random() * firstName.length)];
  const randomLastName = lastName[Math.floor(Math.random() * lastName.length)];
  
  return `${randomFirstName} ${randomLastName}`;
}