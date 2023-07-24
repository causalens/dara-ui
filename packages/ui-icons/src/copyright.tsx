import { faCopyright } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Copyright icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Copyright = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCopyright} {...props} />;
};

export default Copyright;
