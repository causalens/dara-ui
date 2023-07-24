import { faCity } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * City icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const City = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCity} {...props} />;
};

export default City;
