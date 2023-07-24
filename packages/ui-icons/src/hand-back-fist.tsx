import { faHandBackFist } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HandBackFist icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HandBackFist = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHandBackFist} {...props} />;
};

export default HandBackFist;
