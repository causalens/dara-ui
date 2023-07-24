import { faSmokingBan } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * SmokingBan icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const SmokingBan = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSmokingBan} {...props} />;
};

export default SmokingBan;
