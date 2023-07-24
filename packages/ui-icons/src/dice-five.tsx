import { faDiceFive } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * DiceFive icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const DiceFive = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faDiceFive} {...props} />;
};

export default DiceFive;
