import { faEarthEurope } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * EarthEurope icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const EarthEurope = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faEarthEurope} {...props} />;
};

export default EarthEurope;
