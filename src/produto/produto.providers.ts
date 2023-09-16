import { Injectable } from '@nestjs/common';

@Injectable()
export class ProdutoProviders {
    private produtos = [];

    listAll() {
        return this.produtos;
    }

    save(dadosProduto) {
        this.produtos.push(dadosProduto);
        return dadosProduto;
    }
}
