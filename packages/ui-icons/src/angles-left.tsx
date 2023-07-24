import { faAnglesLeft } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * AnglesLeft icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const AnglesLeft = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faAnglesLeft} {...props} />;
};

export default AnglesLeft;
