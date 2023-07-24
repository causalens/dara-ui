import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ChevronRight icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ChevronRight = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faChevronRight} {...props} />;
};

export default ChevronRight;
