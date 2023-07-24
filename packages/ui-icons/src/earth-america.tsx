import { faEarthAmerica } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * EarthAmerica icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const EarthAmerica = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faEarthAmerica} {...props} />;
};

export default EarthAmerica;
