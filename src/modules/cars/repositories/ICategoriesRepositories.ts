import { Category } from "../model/category";

// DTO => Data Transfer object
interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  create({ name, description }: ICreateCategoryDTO): void;
  findByName(name: string);
  list(): Category[];
}
export { ICategoriesRepository, ICreateCategoryDTO };
