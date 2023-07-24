import { faTemperature2 } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Temperature2 icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Temperature2 = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTemperature2} {...props} />;
};

export default Temperature2;
