import { Controller, Injectable, Get, Param } from '@nestjs/common';
import { Body, Post } from '@nestjs/common';
import { EndpointRepository } from './endpoint.repository';
import { Endpoint } from './endpoint.interface';
import { LoggerService } from 'src/shared/logger.service';

@Injectable()
@Controller('endpoints')
export class EndpointController {
  constructor(
    private readonly endpointRepository: EndpointRepository,
    private readonly logger: LoggerService,
  ) {}

  @Post('')
  async register(@Body() entity: Endpoint): Promise<Endpoint> {
    return await this.endpointRepository.create(entity);
  }

  @Get('/:id')
  async getById(@Param('id') id: string): Promise<Endpoint> {
    return await this.endpointRepository.findById(id);
  }

  @Get('')
  async getAll(): Promise<Endpoint[]> {
    return await this.endpointRepository.FindAll();
  }
}
