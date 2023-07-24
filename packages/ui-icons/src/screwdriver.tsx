import { faScrewdriver } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Screwdriver icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Screwdriver = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faScrewdriver} {...props} />;
};

export default Screwdriver;
