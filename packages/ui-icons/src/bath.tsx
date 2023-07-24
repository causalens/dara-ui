import { faBath } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Bath icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Bath = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBath} {...props} />;
};

export default Bath;
