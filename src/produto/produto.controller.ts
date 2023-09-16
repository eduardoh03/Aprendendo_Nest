import {Body, Controller, Get, Post} from '@nestjs/common';

import {CriaProdutoDTO} from './dto/CriaProduto.dto';
import {ProdutoProviders} from './produto.providers';

@Controller('produtos')
export class ProdutoController {
    constructor(private readonly produtoRepository: ProdutoProviders) {}

    @Post()
    createNewProduct(@Body() dadosProduto: CriaProdutoDTO) {
        return this.produtoRepository.save(dadosProduto);
    }

    @Get()
    listAllProduct() {
        return this.produtoRepository.listAll();
    }
}
