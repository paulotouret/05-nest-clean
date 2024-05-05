import { Module } from '@nestjs/common'

import { HashComparer } from '@/domain/forum/application/cryptography/hash-comparer'
import { Encrypter } from '@/domain/forum/application/cryptography/encrypter'
import { HashGenerator } from '@/domain/forum/application/cryptography/hash-generator'

import { JwtEncrypter } from './jwt-encrypter'
import { BcryptHasher } from './bcrypt-hasher'

@Module({
  providers: [
    { provide: Encrypter, useClass: JwtEncrypter },
    { provide: HashComparer, useClass: BcryptHasher },
    { provide: HashGenerator, useClass: BcryptHasher },
  ],
  exports: [Encrypter, HashComparer, HashGenerator],
})
export class CryptographyModule {}
