import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabasModule } from './databas/databas.module';
import { DatabaseModule } from './database/database.module';

@Module({
    imports: [DatabasModule, DatabaseModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
