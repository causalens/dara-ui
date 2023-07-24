import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PlusSquare icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PlusSquare = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPlusSquare} {...props} />;
};

export default PlusSquare;
