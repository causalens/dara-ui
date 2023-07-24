import { faTemperature0 } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Temperature0 icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Temperature0 = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTemperature0} {...props} />;
};

export default Temperature0;
