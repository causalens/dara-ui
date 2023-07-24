import { faWon } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Won icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Won = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faWon} {...props} />;
};

export default Won;
