import { faTemperatureLow } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * TemperatureLow icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const TemperatureLow = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTemperatureLow} {...props} />;
};

export default TemperatureLow;
