import { faEarthOceania } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * EarthOceania icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const EarthOceania = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faEarthOceania} {...props} />;
};

export default EarthOceania;
