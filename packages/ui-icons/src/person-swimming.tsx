import { faPersonSwimming } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PersonSwimming icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PersonSwimming = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPersonSwimming} {...props} />;
};

export default PersonSwimming;
