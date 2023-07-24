import { faDiagramSuccessor } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * DiagramSuccessor icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const DiagramSuccessor = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faDiagramSuccessor} {...props} />;
};

export default DiagramSuccessor;
