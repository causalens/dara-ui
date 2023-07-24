import { faPersonSkiingNordic } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PersonSkiingNordic icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PersonSkiingNordic = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPersonSkiingNordic} {...props} />;
};

export default PersonSkiingNordic;
