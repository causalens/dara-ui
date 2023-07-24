import { faTemperature1 } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Temperature1 icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Temperature1 = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTemperature1} {...props} />;
};

export default Temperature1;
