import { Resolver, Query } from "@nestjs/graphql"

@Resolver()
export class HelloWorldResolver {
    @Query(() => String)
    async hello(): Promise<string> {
        return "Hello World"
    }
}