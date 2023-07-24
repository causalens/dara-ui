import { faTemperature4 } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Temperature4 icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Temperature4 = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTemperature4} {...props} />;
};

export default Temperature4;
