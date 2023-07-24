import { faShareSquare } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ShareSquare icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ShareSquare = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faShareSquare} {...props} />;
};

export default ShareSquare;
