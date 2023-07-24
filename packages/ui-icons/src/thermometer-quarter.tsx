import { faThermometerQuarter } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ThermometerQuarter icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ThermometerQuarter = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faThermometerQuarter} {...props} />;
};

export default ThermometerQuarter;
