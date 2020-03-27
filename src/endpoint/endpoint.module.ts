import { Module } from '@nestjs/common';
import { SharedModule } from '../shared/shared.module';
import { EndpointRepository } from './endpoint.repository';
import { EndpointController } from './endpoint.controller';
import { LoggerService } from 'src/shared/logger.service';
import { MongooseModule } from '@nestjs/mongoose';
import { EndpointSchema } from './endpoint.schema';

@Module({
  imports: [
    SharedModule,
    MongooseModule.forFeature([{ name: 'Endpoint', schema: EndpointSchema }]),
  ],
  controllers: [EndpointController],
  providers: [EndpointRepository, LoggerService],
})
export class EndpointModule {}
