import { faPenSquare } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PenSquare icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PenSquare = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPenSquare} {...props} />;
};

export default PenSquare;
