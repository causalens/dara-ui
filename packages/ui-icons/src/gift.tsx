import { faGift } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Gift icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Gift = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faGift} {...props} />;
};

export default Gift;
