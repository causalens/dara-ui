import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * EarthAmericas icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const EarthAmericas = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faEarthAmericas} {...props} />;
};

export default EarthAmericas;
