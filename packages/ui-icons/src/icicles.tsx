import { faIcicles } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Icicles icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Icicles = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faIcicles} {...props} />;
};

export default Icicles;
