import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ArrowUp icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ArrowUp = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faArrowUp} {...props} />;
};

export default ArrowUp;
