import { faUtensils } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Utensils icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Utensils = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faUtensils} {...props} />;
};

export default Utensils;
