import { faHandFist } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HandFist icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HandFist = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHandFist} {...props} />;
};

export default HandFist;
