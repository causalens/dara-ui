import { faFan } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Fan icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Fan = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFan} {...props} />;
};

export default Fan;
