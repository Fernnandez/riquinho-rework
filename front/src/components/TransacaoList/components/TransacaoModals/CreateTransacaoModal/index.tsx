import {
  ActionIcon,
  Box,
  Button,
  Grid,
  Modal,
  NumberInput,
  Select,
  TextInput,
  Title,
} from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import { useForm } from '@mantine/form';
import { MdAttachMoney } from 'react-icons/md';
import { TbCashBanknoteOff } from 'react-icons/tb';

import { SelectItemIcon } from '../../../../../utils/customSelect';
import { CategoriaSelectItems, TipoSelectItems } from '../constants';
import { useStyles } from '../styles';

interface CreateTransacaoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CreateTransacaoModal({
  isOpen,
  onClose,
}: CreateTransacaoModalProps) {
  const { classes } = useStyles();

  const form = useForm({
    initialValues: {
      titulo: '',
      valor: '',
      data: new Date(),
      categoria: '',
      tipo: 'RECEITA',
      descricao: '',
    },
    validate: (values) => ({
      titulo: values.titulo === '' ? 'titulo é obrigatório' : null,
      valor: values.valor === '$ ' ? 'valor é obrigatório' : null,
      data: values.data === null ? 'data é obrigatório' : null,
      tipo: values.tipo === '' ? 'tipo é obrigatório' : null,
    }),
  });

  const handleSubmit = (data: typeof form.values) => {
    console.log(data);
  };

  const handleClose = () => {
    form.reset();
    onClose();
  };

  return (
    <Modal
      centered
      opened={isOpen}
      onClose={handleClose}
      padding="xl"
      size="lg"
      title={
        form.getInputProps('tipo').value === 'RECEITA' ? (
          <Box className={classes.formHeader}>
            <ActionIcon color="green" variant="outline" size={40}>
              <MdAttachMoney size={40} />
            </ActionIcon>
            <Title order={3}>Cadastro de receita</Title>
          </Box>
        ) : (
          <Box className={classes.formHeader}>
            <ActionIcon color="red" variant="outline" size={40}>
              <TbCashBanknoteOff size={40} />
            </ActionIcon>
            <Title order={3}>Cadastro de despesa</Title>
          </Box>
        )
      }
    >
      <form
        onSubmit={form.onSubmit((values) => {
          handleSubmit(values);
        })}
      >
        <Grid gutter="xl" mt=".5rem">
          <Grid.Col span={6}>
            <TextInput
              label="Titulo"
              placeholder="Titulo"
              size="md"
              mb="md"
              className={classes.textInput}
              {...form.getInputProps('titulo')}
            />
            <NumberInput
              className={classes.numberInput}
              size="md"
              label="Valor"
              mb="md"
              hideControls
              parser={(value) => value?.replace(/\$\s?|(,*)/g, '')}
              formatter={(value) =>
                !Number.isNaN(parseFloat(value || ''))
                  ? `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                  : '$'
              }
              {...form.getInputProps('valor')}
            />
            <Select
              className={classes.selectInput}
              size="md"
              mb="md"
              label="Tipo"
              placeholder="Tipo"
              itemComponent={SelectItemIcon}
              data={TipoSelectItems}
              {...form.getInputProps('tipo')}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <Select
              className={classes.selectInput}
              size="md"
              mb="md"
              label="Categoria"
              placeholder="Categoria"
              itemComponent={SelectItemIcon}
              data={CategoriaSelectItems}
              {...form.getInputProps('categoria')}
            />
            <DatePicker
              placeholder="Data"
              label="Data"
              size="md"
              mb="25px"
              className={classes.datePicker}
              {...form.getInputProps('data')}
            />
            <TextInput
              className={classes.textInput}
              label="Descrição"
              placeholder="Descrição"
              size="md"
              mb="md"
              {...form.getInputProps('descricao')}
            />
          </Grid.Col>
        </Grid>
        <Box className={classes.formButtonsCreate}>
          <Button
            onClick={handleClose}
            color="red"
            size="md"
            variant="subtle"
            radius={20}
            pl="xl"
            pr="xl"
          >
            Cancelar
          </Button>
          <Button
            type="submit"
            color="blue"
            size="md"
            radius={20}
            pl="xl"
            pr="xl"
          >
            Salvar
          </Button>
        </Box>
      </form>
    </Modal>
  );
}
