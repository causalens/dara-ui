import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ChevronLeft icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ChevronLeft = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faChevronLeft} {...props} />;
};

export default ChevronLeft;
