import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Stroopwafel icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Stroopwafel = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faStroopwafel} {...props} />;
};

export default Stroopwafel;
