import {Body, Controller, Get, Post} from '@nestjs/common';

import {CriaProdutoDTO} from './dto/CriaProduto.dto';
import {ProdutoProviders} from './produto.providers';

@Controller('produtos')
export class ProdutoController {
    constructor(private readonly produtoRepository: ProdutoProviders) {}

    @Post()
    criaNovo(@Body() dadosProduto: CriaProdutoDTO) {
        return this.produtoRepository.salva(dadosProduto);
    }

    @Get()
    listaTodos() {
        return this.produtoRepository.listaTodos();
    }
}
