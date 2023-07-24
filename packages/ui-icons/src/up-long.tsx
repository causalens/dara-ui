import { faUpLong } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * UpLong icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const UpLong = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faUpLong} {...props} />;
};

export default UpLong;
