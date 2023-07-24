import { faDiceFour } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * DiceFour icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const DiceFour = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faDiceFour} {...props} />;
};

export default DiceFour;
