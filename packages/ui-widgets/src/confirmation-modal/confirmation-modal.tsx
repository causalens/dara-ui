import styled from '@darajs/styled-components';
import { Button, Modal } from '@darajs/ui-components';

import { ConfirmationModalProps } from './confirmation-modal-props';
import useConfirmationModal from './use-confirmation-modal';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 12px;
    width: 400px;
`;

const Footer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 12px;
`;

/**
 * The visual part of the CC Modal system, renders the message along with buttons to confirm or cancel the cancellation.
 *
 * @param props the component props
 */
function ConfirmationModal(props: ConfirmationModalProps): JSX.Element {
    return (
        <Modal onAttemptClose={props.onCancel} render={props.render} style={props.style}>
            <Wrapper>
                <h4>{props.title ?? 'Confirm Cancellation'}</h4>
                {props.message}
                <Footer>
                    <Button onClick={props.onCancel} styling="secondary">
                        Cancel
                    </Button>
                    <Button onClick={props.onConfirm} styling="error">
                        Confirm
                    </Button>
                </Footer>
            </Wrapper>
        </Modal>
    );
}

ConfirmationModal.useConfirmationModal = useConfirmationModal;

export default ConfirmationModal;
