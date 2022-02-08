import { Injectable } from '@nestjs/common';
import { CreateUpdateTransacaoDto } from '../dtos/create-update-transacao.dto';
import { Transacao } from '../entities/transacao.entity';
import { TransacaoRepository } from '../repositories/transacao.respository';

@Injectable()
export class TransacaoService {
  constructor(private transacaoRepository: TransacaoRepository) {}

  findAll(): Promise<Transacao[]> {
    return this.transacaoRepository.find();
  }

  findOne(id: string): Promise<Transacao> {
    return this.transacaoRepository.findOne(id);
  }

  create(createTransacaoDto: CreateUpdateTransacaoDto): Promise<Transacao> {
    return this.transacaoRepository.save(createTransacaoDto);
  }

  async update(
    id: string,
    updateTransacaoDto: CreateUpdateTransacaoDto,
  ): Promise<void> {
    await this.transacaoRepository.update(id, updateTransacaoDto);
  }

  async delete(id: string): Promise<void> {
    await this.transacaoRepository.delete(id);
  }
}
