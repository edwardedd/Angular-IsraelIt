export class Items
{
  id: string;
  name: string;
  description: string;
  createdAt: string;
  editedAt: string;


  constructor(id, name, description, createdAt, editedAt)
  {
    this.id = id;
    this.name = name;
    this.description = description;
    this.createdAt = createdAt;
    this.editedAt = editedAt;
  }
}
