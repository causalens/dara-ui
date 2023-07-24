import { faSuitcase } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Suitcase icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Suitcase = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSuitcase} {...props} />;
};

export default Suitcase;
