import { faCar } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Car icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Car = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCar} {...props} />;
};

export default Car;
