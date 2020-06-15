import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import {  Link } from 'react-router-dom'


const ModalExampleCloseIcon = () => (
  <Modal trigger={<Button color="teal">Commandez</Button>} closeIcon>
    <Header icon='info icon" icon' content='Archive Old Messages' />
    <Modal.Content>
      <p>
      vous devez avoir un compte pour accueillir vos commandes,si vous avez un compte alors connectez dabord sinon il faut que vous inscrivez 
      </p>
    </Modal.Content>
    <Modal.Actions>
      <Button color='red'>
        <Icon name='remove' /> Inscrivez-vous
      </Button>
      <Link to="/login">
      <Button color='green'>
        <Icon name='checkmark' /> Connectez
      </Button>
      </Link>
    </Modal.Actions>
  </Modal>
)

export default ModalExampleCloseIcon
