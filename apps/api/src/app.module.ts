import { ApolloServerPluginLandingPageLocalDefault } from "@apollo/server/plugin/landingPage/default"
import { Module } from "@nestjs/common"
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo"
import { GraphQLModule } from "@nestjs/graphql"
import { join } from "path"

import { EnvModule } from "./dynamic-modules"
import { PrismaModule } from "./prisma"

@Module({
    imports: [
        PrismaModule,
        EnvModule.forRoot(),
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: join(process.cwd(), "src/schema.gql"),
            csrfPrevention: false,
            playground: false,
            plugins: [
                ApolloServerPluginLandingPageLocalDefault({
                    embed: true,
                }),
            ],
            sortSchema: true,
        }),
    ],
})
export class AppModule {}
