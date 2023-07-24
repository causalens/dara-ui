import { faSquarePollHorizontal } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * SquarePollHorizontal icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const SquarePollHorizontal = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSquarePollHorizontal} {...props} />;
};

export default SquarePollHorizontal;
