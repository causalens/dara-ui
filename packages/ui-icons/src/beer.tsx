import { faBeer } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Beer icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Beer = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBeer} {...props} />;
};

export default Beer;
