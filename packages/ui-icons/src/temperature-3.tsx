import { faTemperature3 } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Temperature3 icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Temperature3 = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTemperature3} {...props} />;
};

export default Temperature3;
