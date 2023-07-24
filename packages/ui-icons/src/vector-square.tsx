import { faVectorSquare } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * VectorSquare icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const VectorSquare = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faVectorSquare} {...props} />;
};

export default VectorSquare;
