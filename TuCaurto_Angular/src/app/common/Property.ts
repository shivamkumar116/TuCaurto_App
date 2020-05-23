import { User } from './User';
import { Type } from './Type';
export class Property {
  id: number;
  name: string;
  address: string;
  description: string;
  price: number;
  isAvailable: boolean;
  imageUrl: string;
  city: string;
  user: User;
  type: Type;
}
