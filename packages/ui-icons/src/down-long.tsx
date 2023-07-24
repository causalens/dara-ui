import { faDownLong } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * DownLong icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const DownLong = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faDownLong} {...props} />;
};

export default DownLong;
