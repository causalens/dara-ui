import { faCog } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Cog icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Cog = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCog} {...props} />;
};

export default Cog;
