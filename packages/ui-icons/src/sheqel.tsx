import { faSheqel } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Sheqel icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Sheqel = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSheqel} {...props} />;
};

export default Sheqel;
