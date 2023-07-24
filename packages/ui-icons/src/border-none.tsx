import { faBorderNone } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * BorderNone icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const BorderNone = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBorderNone} {...props} />;
};

export default BorderNone;
