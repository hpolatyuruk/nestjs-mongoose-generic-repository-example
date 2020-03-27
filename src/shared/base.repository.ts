import { BaseModel } from './base.model';
import { Model } from 'mongoose';
import { LoggerService } from './logger.service';

export class BaseRepository<T extends BaseModel> {
  constructor(
    private readonly model: Model<T>,
    private readonly logger: LoggerService,
  ) {}

  public async create(doc: object): Promise<any> {
    this.logger.debug('BaseRepo: Entity is being created...');
    const createdEntity = new this.model(doc);
    return await createdEntity.save();
  }

  public async findById(id: string): Promise<T> {
    this.logger.debug('BaseRepo: Entity is being found by id...');
    return this.model.findById(id);
  }

  public async FindAll(): Promise<T[]> {
    this.logger.debug('BaseRepo: Entities are being found...');
    return await this.model.find();
  }
}
