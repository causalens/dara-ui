import { faFlorinSign } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FlorinSign icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FlorinSign = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFlorinSign} {...props} />;
};

export default FlorinSign;
