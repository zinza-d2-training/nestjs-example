import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeormModule } from './typeorm/typeorm.module';

@Module({
  imports: [ConfigModule.forRoot(), TypeormModule.forRoot()],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
