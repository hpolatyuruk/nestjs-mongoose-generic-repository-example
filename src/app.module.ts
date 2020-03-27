import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EndpointModule } from './endpoint/endpoint.module';
import { MongooseModule } from '@nestjs/mongoose';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [
    EndpointModule,
    MongooseModule.forRoot('mongodb://localhost/nestjs-mongoose', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    SharedModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
