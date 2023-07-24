import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PenToSquare icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PenToSquare = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPenToSquare} {...props} />;
};

export default PenToSquare;
