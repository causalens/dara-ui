import { faHandPointDown } from '@fortawesome/free-regular-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HandPointDown icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HandPointDown = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHandPointDown} {...props} />;
};

export default HandPointDown;
