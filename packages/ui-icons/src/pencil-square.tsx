import { faPencilSquare } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PencilSquare icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PencilSquare = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPencilSquare} {...props} />;
};

export default PencilSquare;
