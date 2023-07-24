import { faDiagramPredecessor } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * DiagramPredecessor icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const DiagramPredecessor = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faDiagramPredecessor} {...props} />;
};

export default DiagramPredecessor;
