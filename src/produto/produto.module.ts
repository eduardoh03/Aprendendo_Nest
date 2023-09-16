import { Module } from '@nestjs/common';
import { UserModule } from '../user/user.module';
import { ProdutoController } from './produto.controller';
import { ProdutoProviders } from './produto.providers';

@Module({
    imports: [UserModule],
    controllers: [ProdutoController],
    providers: [ProdutoProviders],
})
export class ProdutoModule {}
