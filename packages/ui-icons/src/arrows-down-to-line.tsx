import { faArrowsDownToLine } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ArrowsDownToLine icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ArrowsDownToLine = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faArrowsDownToLine} {...props} />;
};

export default ArrowsDownToLine;
