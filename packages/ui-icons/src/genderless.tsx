import { faGenderless } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Genderless icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Genderless = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faGenderless} {...props} />;
};

export default Genderless;
