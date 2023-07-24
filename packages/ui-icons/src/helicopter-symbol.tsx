import { faHelicopterSymbol } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HelicopterSymbol icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HelicopterSymbol = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHelicopterSymbol} {...props} />;
};

export default HelicopterSymbol;
