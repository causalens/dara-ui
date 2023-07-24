import { faShekel } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Shekel icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Shekel = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faShekel} {...props} />;
};

export default Shekel;
