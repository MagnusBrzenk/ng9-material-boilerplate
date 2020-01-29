import { simpleUuid } from '../utils/simple-uuid';

/**
 * Based around: https://jsonplaceholder.typicode.com/users/1
 */
export interface ITestUser {
  id: string;
  name: string;
  username: string;
  email: string;
  address?: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone?: string;
  website?: string;
  company?: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export class TestUser implements ITestUser {
  id: string;
  name: string;
  username: string;
  email: string;
  address?: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone?: string;
  website?: string;
  company?: {
    name: string;
    catchPhrase: string;
    bs: string;
  };

  constructor(input: Partial<ITestUser>) {
    this.id = (input.id || simpleUuid()) + '';
    this.name = input.name || '<NAME>';
    this.username = input.username || '<USERNAME>';
    this.email = input.email || '<EMAIL>';
    this.address = input.address || undefined;
    this.phone = input.phone || undefined;
    this.website = input.website || undefined;
    this.company = input.company || undefined;
  }
}
