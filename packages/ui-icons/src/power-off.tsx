import { faPowerOff } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PowerOff icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PowerOff = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPowerOff} {...props} />;
};

export default PowerOff;
