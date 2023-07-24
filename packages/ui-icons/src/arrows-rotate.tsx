import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ArrowsRotate icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ArrowsRotate = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faArrowsRotate} {...props} />;
};

export default ArrowsRotate;
