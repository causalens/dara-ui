import { faArrowsAlt } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ArrowsAlt icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ArrowsAlt = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faArrowsAlt} {...props} />;
};

export default ArrowsAlt;
