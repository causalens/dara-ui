import { faSquarePollVertical } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * SquarePollVertical icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const SquarePollVertical = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSquarePollVertical} {...props} />;
};

export default SquarePollVertical;
