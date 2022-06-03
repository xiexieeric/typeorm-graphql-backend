import { Field, InputType } from 'type-graphql';

@InputType() // Used for graphql args
export class UsernamePasswordInput {
  @Field()
  username: string;
  @Field()
  email: string;
  @Field()
  password: string;
}
