import * as mongoose from 'mongoose';
import { Endpoint } from './endpoint.interface';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { LoggerService } from 'src/shared/logger.service';
import { BaseRepository } from 'src/shared/base.repository';

@Injectable()
export class EndpointRepository extends BaseRepository<Endpoint> {
  constructor(
    @InjectModel('Endpoint')
    private readonly endpointModel: mongoose.Model<Endpoint>,
    private readonly log: LoggerService,
  ) {
    super(endpointModel, log);
  }
}
