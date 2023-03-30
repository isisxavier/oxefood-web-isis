import React from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';

class FormProduto extends React.Component{

    render(){
        return(
            <div>

                <div style={{marginTop: '3%'}}>

                    <Container textAlign='justified' >

                        <h2> <span style={{color: 'darkgray'}}> Produto &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                        <Divider />

						<div style={{marginTop: '4%'}}>

							<Form>

								<Form.Group >

									<Form.Input
										required
										fluid
                                        width={14}
										label='Título'
										maxLength="100"
                                        placeholder="Informe o título do produto."
									/>

									<Form.Input
										required
                                        width={7}
										label='Código Do Produto'>
										<InputMask 
										placeholder="Informe o código do produto."/> 
									</Form.Input>

								</Form.Group>


                                <Form.Group >

                                    <Form.TextArea width='16' label='Descrição' placeholder='Informe a descrição do produto.' />

                                </Form.Group>
								
								<Form.Group>

									<Form.Input
										required
										label='Valor Unitário'
                                        width={6}
                                        type="number">
										
									</Form.Input>

									<Form.Input
										fluid
										label='Tempo de Entrega Mínima em Minutos'
                                        type="number"
                                        width={6}
										placeholder="30">
									</Form.Input>

                                    <Form.Input
                                        fluid
                                        label='Tempo de Entrega Máxima em Minutos'
                                        width={6}
                                        type="number"
                                        placeholder="40"
                                    >
                    
                                    </Form.Input>

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
										Listar
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

export default FormProduto;