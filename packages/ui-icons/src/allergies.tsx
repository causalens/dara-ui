import { faAllergies } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Allergies icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Allergies = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faAllergies} {...props} />;
};

export default Allergies;
