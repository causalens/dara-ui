import { faPoop } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Poop icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Poop = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPoop} {...props} />;
};

export default Poop;
