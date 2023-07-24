import { faBoxOpen } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * BoxOpen icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const BoxOpen = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBoxOpen} {...props} />;
};

export default BoxOpen;
