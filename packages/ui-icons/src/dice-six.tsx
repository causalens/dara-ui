import { faDiceSix } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * DiceSix icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const DiceSix = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faDiceSix} {...props} />;
};

export default DiceSix;
