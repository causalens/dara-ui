import { faAustralSign } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * AustralSign icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const AustralSign = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faAustralSign} {...props} />;
};

export default AustralSign;
