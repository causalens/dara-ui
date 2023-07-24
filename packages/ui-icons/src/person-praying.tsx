import { faPersonPraying } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PersonPraying icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PersonPraying = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPersonPraying} {...props} />;
};

export default PersonPraying;
