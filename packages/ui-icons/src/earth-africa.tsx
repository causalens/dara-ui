import { faEarthAfrica } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * EarthAfrica icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const EarthAfrica = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faEarthAfrica} {...props} />;
};

export default EarthAfrica;
