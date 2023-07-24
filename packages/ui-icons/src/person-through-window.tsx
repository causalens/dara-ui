import { faPersonThroughWindow } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PersonThroughWindow icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PersonThroughWindow = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPersonThroughWindow} {...props} />;
};

export default PersonThroughWindow;
