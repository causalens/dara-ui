import { faCookieBite } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CookieBite icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CookieBite = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCookieBite} {...props} />;
};

export default CookieBite;
