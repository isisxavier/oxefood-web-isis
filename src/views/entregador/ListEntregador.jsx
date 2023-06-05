import axios from 'axios';
import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Divider, Header, Icon, Modal, Table } from 'semantic-ui-react';

class ListEntregador extends React.Component{

   state = {

    openModal: false,
    idRemover: null,
    listaEntregadores: []
      
   }

   confirmaRemover = (id) => {

    this.setState({
        openModal: true,
        idRemover: id
         })  
    }

    setOpenModal = (val) => {

        this.setState({
            openModal: val
        })
   
    };

    remover = async () => {

        await axios.delete("http://localhost:8082/api/entregador/" + this.state.idRemover)
        .then((response) => {
   
            this.setState({ openModal: false })
            console.log('Entregador removido com sucesso.')
   
            axios.get("http://localhost:8082/api/entregador/")
            .then((response) => {
           
                this.setState({
                    listaEntregadores: response.data
                })
            })
        })
        .catch((error) => {
            this.setState({  openModal: false })
            console.log('Erro ao remover um entregador.')
        })
 };
 
    

   componentDidMount = () => {
      
       this.carregarLista();
      
   }
   carregarLista = () => {

    axios.get("http://localhost:8082/api/entregador/")
    .then((response) => {
       
        this.setState({
            listaEntregadores: response.data
        })
    })

};

formatarData = (dataParam) => {

     if (dataParam == null || dataParam == '') {
         return ''
     }
     
     let dia = dataParam.substr(8,2);
     let mes = dataParam.substr(5,2);
     let ano = dataParam.substr(0,4);
     let dataFormatada = dia + '/' + mes + '/' + ano;

     return dataFormatada
 };

 render(){
    return(
        <div>

            <div style={{marginTop: '3%'}}>

                <Container textAlign='justified' >

                    <h2> Entregador </h2>

                    <Divider />

                    <div style={{marginTop: '4%'}}>

                        <Button
                            inverted
                            circular
                            icon
                            labelPosition='left'
                            color='orange'
                            floated='right'
                        >
                            <Icon name='clipboard outline' />
                            <Link to={'/form-entregador'}>Novo</Link>
                        </Button>
 
                        <br/><br/><br/>
                      
                      <Table color='orange' sortable celled>

                          <Table.Header>
                              <Table.Row>
                                  <Table.HeaderCell>Nome</Table.HeaderCell>
                                  <Table.HeaderCell>CPF</Table.HeaderCell>
                                  <Table.HeaderCell>Nascimento</Table.HeaderCell>
                                  <Table.HeaderCell>Celular</Table.HeaderCell>
                                  <Table.HeaderCell>Fone Fixo</Table.HeaderCell>
                                  <Table.HeaderCell>QTDEntregas</Table.HeaderCell>
                                  <Table.HeaderCell textAlign='center' width={2}>Ações</Table.HeaderCell>
                              </Table.Row>
                          </Table.Header>
                     
                          <Table.Body>

                              { this.state.listaEntregadores.map(entregador => (

                                  <Table.Row>
                                      <Table.Cell>{entregador.nome}</Table.Cell>
                                      <Table.Cell>{entregador.cpf}</Table.Cell>
                                      <Table.Cell>{this.formatarData(entregador.dataNascimento)}</Table.Cell>
                                      <Table.Cell>{entregador.foneCelular}</Table.Cell>
                                      <Table.Cell>{entregador.foneFixo}</Table.Cell>
                                      <Table.Cell>{entregador.qtdEntregasRealizadas}</Table.Cell>
                                      <Table.Cell textAlign='center'>
                                         
                                      <Button
                                        inverted
                                        circular
                                        color='blue'
                                        title='Clique aqui para editar os dados deste entregador'
                                        icon>
                                            <Link to="/form-entregador" state={{id: entregador.id}} style={{color: 'blue'}}> <Icon name='edit' /> </Link>
                                    </Button> &nbsp;

                                    <Button
                                        inverted
                                        circular
                                        color='red'
                                        title='Clique aqui para remover este entregador'
                                        icon
                                        onClick={e => this.confirmaRemover(entregador.id)}>
                                        <Icon name='trash' />
                                        </Button>


                                           </Table.Cell>
                                       </Table.Row>
                                   ))}

                               </Table.Body>
                           </Table>
                       </div>
                   </Container>
               </div>
                        <Modal
                   			basic
                   			onClose={() => this.setOpenModal(false)}
                   			onOpen={() => this.setOpenModal(true)}
                   			open={this.state.openModal}
               			>
                   			<Header icon>
                       				<Icon name='trash' />
                       				<div style={{marginTop: '5%'}}> Tem certeza que deseja remover esse registro? </div>
                   			</Header>
                   			<Modal.Actions>
                       				<Button basic color='red' inverted onClick={() => this.setOpenModal(false)}>
                       					<Icon name='remove' /> Não
                       				</Button>
                       				<Button color='green' inverted onClick={() => this.remover()}>
                       					<Icon name='checkmark' /> Sim
                       				</Button>
                   			</Modal.Actions>
               			</Modal>

           </div>
       )
   }
}

export default ListEntregador;