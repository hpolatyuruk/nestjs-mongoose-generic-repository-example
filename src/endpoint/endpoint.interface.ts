import { BaseModel } from 'src/shared/base.model';

export interface Endpoint extends BaseModel {
  readonly _id: string;
  readonly computerName: string;
  readonly os: string;
}
