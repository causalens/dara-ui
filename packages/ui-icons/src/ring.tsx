import { faRing } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Ring icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Ring = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faRing} {...props} />;
};

export default Ring;
