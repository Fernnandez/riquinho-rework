import { Box } from '@mantine/core';
import { Card } from './components/Card';
import { MdAttachMoney } from 'react-icons/md';

import { TbCashBanknoteOff } from 'react-icons/tb';
import { HiOutlineCash } from 'react-icons/hi';

interface InfoCardsProps {
  isLoading: boolean;
  values: {
    receitas: number;
    despesas: number;
    receitasEfetivadas: number;
    despesasEfetivadas: number;
  } | null;
}

export function InfoCards({ isLoading, values }: InfoCardsProps) {
  return (
    <Box
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
      }}
    >
      <Card
        isLoading={isLoading}
        title="Recebido"
        value={
          values
            ? String(
                new Intl.NumberFormat('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(values.receitasEfetivadas)
              )
            : null
        }
        valuePrevisto={
          values
            ? String(
                new Intl.NumberFormat('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(values.receitas)
              )
            : null
        }
        icon={<MdAttachMoney size={25} color="green" />}
        color="green"
      />
      <Card
        isLoading={isLoading}
        title="Gasto"
        value={
          values
            ? String(
                new Intl.NumberFormat('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(values.despesasEfetivadas)
              )
            : null
        }
        valuePrevisto={
          values
            ? String(
                new Intl.NumberFormat('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(values.despesas)
              )
            : null
        }
        icon={<TbCashBanknoteOff size={25} color="red" />}
        color="red"
      />
      <Card
        isLoading={isLoading}
        title="Saldo"
        value={
          values
            ? String(
                new Intl.NumberFormat('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(values.receitasEfetivadas - values.despesasEfetivadas)
              )
            : null
        }
        valuePrevisto={
          values
            ? String(
                new Intl.NumberFormat('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(values.receitas - values.despesas)
              )
            : null
        }
        icon={<HiOutlineCash size={25} color="blue" />}
        color="blue"
      />
    </Box>
  );
}
