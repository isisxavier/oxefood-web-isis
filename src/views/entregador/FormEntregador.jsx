import axios from "axios";
import React from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon, Radio } from 'semantic-ui-react';

const options = [
	{ key: 'AC', value: 'AC', text: 'Acre' },
  	{ key: 'AL', value: 'AL', text: 'Alagoas' },
	{ key: 'AP', value: 'AP', text: 'Amapá' },
	{ key: 'AM', value: 'AM', text: 'Amazonas' },
	{ key: 'BA', value: 'BA', text: 'Bahia' },
	{ key: 'CE', value: 'CE', text: 'Ceará' },
	{ key: 'DF', value: 'DF', text: 'Distrito Federal' },
	{ key: 'ES', value: 'ES', text: 'Espírito Santo' },
	{ key: 'GO', value: 'GO', text: 'Goiás' },
	{ key: 'MA', value: 'MA', text: 'Maranhão' },
	{ key: 'MT', value: 'MT', text: 'Mato Grosso' },
	{ key: 'MS', value: 'MS', text: 'Mato Grosso do Sul' },
	{ key: 'MG', value: 'MG', text: 'Minas Gerais' },
	{ key: 'PA', value: 'PA', text: 'Pará' },
	{ key: 'PB', value: 'PB', text: 'Paraíba' },
	{ key: 'PR', value: 'PR', text: 'Paraná' },
	{ key: 'PE', value: 'PE', text: 'Pernambuco' },
	{ key: 'PI', value: 'PI', text: 'Piauí' },
	{ key: 'RJ', value: 'RJ', text: 'Rio de Janeiro' },
	{ key: 'RN', value: 'RN', text: 'Rio Grande do Norte' },
	{ key: 'RS', value: 'RS', text: 'Rio Grande do Sul' },
	{ key: 'RO', value: 'RO', text: 'Rondônia' },
	{ key: 'RR', value: 'RR', text: 'Roraima' },
	{ key: 'SC', value: 'SC', text: 'Santa' },
	{ key: 'SP', value: 'SP', text: 'São Paulo' },
	{ key: 'SE', value: 'SE', text: 'Sergipe' },
	{ key: 'TO', value: 'TO', text: 'Tocantins' },
  ]

  
class FormEntregador extends React.Component{
	state = {

		nome: null,
		cpf: null,
		rg: null,
		dataNascimento: null,
		foneCelular: null,
		foneFixo: null,
		qtdEntregasRealizadas: null,
		valorFrete: null,
		enderecoRua: null,
		enderecoNumero: null,
		enderecoBairro: null,
		enderecoCidade: null,
		enderecoCep: null,
		enderecoUf: null,
		enderecoComplemento: null,
		ativo: true,
	}

	salvar = () => {

		let entregadorRequest = {

			nome: this.state.nome,
			cpf: this.state.cpf,
			rg: this.state.rg,
			dataNascimento: this.state.dataNascimento,
			foneCelular: this.state.foneCelular,
			foneFixo: this.state.foneFixo,
			qtdEntregasRealizadas: this.state.qtdEntregasRealizadas,
			valorFrete: this.state.valorFrete,
			enderecoRua: this.state.enderecoRua,
			enderecoNumero: this.state.enderecoNumero,
			enderecoBairro: this.state.enderecoBairro,
			enderecoCidade: this.state.enderecoCidade,
			enderecoCep: this.state.enderecoCep,
			enderecoUf: this.state.enderecoUf,
			enderecoComplemento: this.state.enderecoComplemento,
			ativo: this.state.ativo,
		}

		console.log(entregadorRequest)
	
		axios.post("http://localhost:8082/api/entregador", entregadorRequest)
		.then((response) => {
			console.log('Entregador cadastrado com sucesso.')
		})
		.catch((error) => {
			console.log('Erro ao incluir entregador.')
		})
	}

    render(){
        return(
            <div>

                <div style={{marginTop: '3%'}}>

                    <Container textAlign='justified' >

                        <h2> <span style={{color: 'darkgray'}}> Entregador &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                        <Divider />

						<div style={{marginTop: '4%'}}>

							<Form>

								<Form.Group >

									<Form.Input
										required
										fluid
                                        width={11}
										label='Nome'
										maxLength="100"
										value={this.state.nome}
										onChange={e => this.setState({nome: e.target.value})}
									/>

									<Form.Input
                                        required
										fluid
                                        width={5}
										label='CPF'>
										<InputMask 
										mask="999.999.999-99"
										value={this.state.cpf}
										onChange={e => this.setState({cpf: e.target.value})}/> 
									</Form.Input>

                                    <Form.Input
										fluid
                                        width={5}
										label='RG'>
										<InputMask 
										mask="99.999.999-9"
										value={this.state.rg}
										onChange={e => this.setState({rg: e.target.value})}/> 
									</Form.Input>

								</Form.Group>
								
								<Form.Group>

                                    <Form.Input
                                        fluid
                                        label='DT Nascimento'
                                        width={5}
                                    >
                                        <InputMask 
                                            mask="99/99/9999" 
                                            maskChar={null}
                                            placeholder="Ex: 20/03/1985"
											value={this.state.dataNascimento}
											onChange={e => this.setState({dataNascimento: e.target.value})}
                                        /> 
                                    </Form.Input>

									<Form.Input
                                        required
										fluid
										label='Fone Celular'
                                        width={7}>
										<InputMask 
										mask="(99) 9999-9999" 
										value={this.state.foneCelular}
										onChange={e => this.setState({foneCelular: e.target.value})}/> 
									</Form.Input>

                                    <Form.Input
										fluid
										label='Fone Fixo'
                                        width={7}>
										<InputMask 
										mask="(99) 9999-9999" 
										value={this.state.foneFixo}
										onChange={e => this.setState({foneFixo: e.target.value})}/> 
									</Form.Input>

                                    <Form.Input
										fluid
										label='QTD Entregas Realizadas'
                                        width={5}
										value={this.state.qtdEntregasRealizadas}
										onChange={e => this.setState({qtdEntregasRealizadas: e.target.value})}>
									</Form.Input>

									<Form.Input
										fluid
										label='Valor Por Frete'
                                        width={5}
										value={this.state.valorFrete}
										onChange={e => this.setState({valorFrete: e.target.value})}> 
									</Form.Input>

								</Form.Group>

                                <Form.Group >

									<Form.Input
										fluid
                                        width={16}
										label='Rua'
										maxLength="190"
										value={this.state.enderecoRua}
										onChange={e => this.setState({enderecoRua: e.target.value})}
									/>

									<Form.Input
										fluid
										label='Número'
                                        width={4}
										value={this.state.enderecoNumero}
										onChange={e => this.setState({enderecoNumero: e.target.value})}> 
									</Form.Input>

								</Form.Group>

                                <Form.Group >

									<Form.Input
										fluid
                                        width={11}
										label='Bairro'
										maxLength="190"
										value={this.state.enderecoBairro}
										onChange={e => this.setState({enderecoBairro: e.target.value})}
									/>

                                    <Form.Input
										fluid
                                        width={11}
										label='Cidade'
										maxLength="190"
										value={this.state.enderecoCidade}
										onChange={e => this.setState({enderecoCidade: e.target.value})}
									/>

									<Form.Input
										fluid
										label='CEP'
                                        width={3}> 
                                        <InputMask 
										mask="99.999-999"
										value={this.state.enderecoCep}
										onChange={e => this.setState({enderecoCep: e.target.value})}/> 
									</Form.Input>

								</Form.Group>

								<Form.Group>
									
								<Form.Select
									fluid
									label='UF'
									width={16}
									options={options}
									placeholder='Selecione'
									value={this.state.enderecoUf}
									// onChange={e => this.setState({enderecoUf: e.target.value})}

									onChange={(e, {value}) => this.setState({enderecoUf: value})}
								/>
								</Form.Group>

								<Form.Group >

									<Form.Input
										fluid
                                        width={16}
										label='Complemento'
										maxLength="190"
										value={this.state.enderecoComplemento}
										onChange={e => this.setState({enderecoComplemento: e.target.value})}
									/>
								</Form.Group>


								<Form.Group inline>
									<label>Ativo:</label>
									<Form.Field
										control={Radio}
										label='Sim'
										checked={this.state.ativo}
										value={this.state.ativo}
										onChange={(e) => {this.setState({ ativo:true });
										}}
									/>
									<Form.Field
										control={Radio}
										label='Não'
										checked={!this.state.ativo}
										value={this.state.ativo}
										onChange={(e) => this.setState({ativo:false})}
									/>
									
									</Form.Group>
								

								<Form.Group widths='equal' style={{marginTop: '4%'}}  className='form--empresa-salvar'>

									<Button
										type="button"
										inverted
										circular
										icon
										labelPosition='left'
										color='orange'
										onClick={this.listar}
										>
										<Icon name='reply' />
										Voltar
									</Button>

									<Container textAlign='right'>
										
										<Button
											inverted
											circular
											icon
											labelPosition='left'
											color='blue'
											floated='right'
											onClick={this.salvar}
										>
											<Icon name='save' />
											Salvar
										</Button>
										
									</Container>

								</Form.Group>

							</Form>
						</div>
                    </Container>
                </div>
			</div>
		)
	}
}

export default FormEntregador;