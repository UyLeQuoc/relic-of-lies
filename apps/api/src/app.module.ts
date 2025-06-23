import { ApolloServerPluginLandingPageLocalDefault } from "@apollo/server/plugin/landingPage/default"
import { Module } from "@nestjs/common"
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo"
import { GraphQLModule } from "@nestjs/graphql"
import { join } from "path"

import { EnvModule } from "./dynamic-modules"
import { PrismaModule } from "./prisma"
import { HelloWorldModule } from "./hello-world"
import { SuiModule } from "./sui"

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
        HelloWorldModule,
        SuiModule,
    ],
})
export class AppModule {}
