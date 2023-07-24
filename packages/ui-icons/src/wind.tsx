import { faWind } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Wind icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Wind = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faWind} {...props} />;
};

export default Wind;
