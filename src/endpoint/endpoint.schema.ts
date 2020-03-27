import * as mongoose from 'mongoose';

export const EndpointSchema = new mongoose.Schema(
  {
    _id: String,
    computerName: {
      type: String,
      required: true,
    },
    os: {
      type: String,
      required: true,
      default: 'windows',
    },
  },
  { collection: 'endpoints' },
);

EndpointSchema.pre('save', function(next: Function) {
  console.log('saving...');
  next();
});
