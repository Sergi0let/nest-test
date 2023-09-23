import { Module } from '@nestjs/common';

import { ConfigModule as NestConfigModule } from '@nestjs/config';

// дозволяє зчитувати файли .env
@Module({
  imports: [NestConfigModule.forRoot()],
})
export class ConfigModule {}
