import { Injectable } from '@nestjs/common';

@Injectable()
export class ProdutoProviders {
    private produtos = [];

    listaTodos() {
        return this.produtos;
    }

    salva(dadosProduto) {
        this.produtos.push(dadosProduto);
        return dadosProduto;
    }
}
