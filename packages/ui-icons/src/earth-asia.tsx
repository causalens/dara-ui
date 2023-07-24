import { faEarthAsia } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * EarthAsia icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const EarthAsia = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faEarthAsia} {...props} />;
};

export default EarthAsia;
