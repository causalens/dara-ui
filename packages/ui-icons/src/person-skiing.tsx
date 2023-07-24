import { faPersonSkiing } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PersonSkiing icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PersonSkiing = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPersonSkiing} {...props} />;
};

export default PersonSkiing;
