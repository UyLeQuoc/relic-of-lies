import { Module } from "@nestjs/common"
import { HelloWorldResolver } from "./hello-world.resolver"

@Module({
    imports: [],
    providers: [HelloWorldResolver],
    exports: [HelloWorldResolver],
})
export class HelloWorldModule {}
